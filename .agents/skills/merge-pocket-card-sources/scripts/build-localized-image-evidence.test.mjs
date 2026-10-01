import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import { execFile } from 'node:child_process'
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import test from 'node:test'

const exec = promisify(execFile)
const script = path.join(path.dirname(fileURLToPath(import.meta.url)), 'build-localized-image-evidence.mjs')

test('image evidence derives locales, OCR coverage, boosters, and object counts from set config', async () => {
	const root = await mkdtemp(path.join(os.tmpdir(), 'image-evidence-test-'))
	const sourceRoot = path.join(root, 'sources')
	const ocrRoot = path.join(root, 'ocr')
	const logoRoot = path.join(root, 'logos')
	await Promise.all([
		mkdir(path.join(sourceRoot, 'images-en'), { recursive: true }),
		mkdir(path.join(sourceRoot, 'images-fr'), { recursive: true }),
		mkdir(path.join(ocrRoot, 'en'), { recursive: true }),
		mkdir(logoRoot, { recursive: true }),
	])
	const englishImage = Buffer.from('english-card')
	await writeFile(path.join(sourceRoot, 'images-en', '001.png'), englishImage)
	await writeFile(path.join(sourceRoot, 'images-fr', '001.png'), Buffer.from('french-card'))
	await writeFile(path.join(logoRoot, 'en.webp'), Buffer.from('english-logo'))
	await writeFile(path.join(logoRoot, 'fr.webp'), Buffer.from('french-logo'))
	await writeFile(path.join(root, 'artwork.webp'), Buffer.from('neutral-artwork'))
	await writeFile(path.join(ocrRoot, 'en', '001.json'), JSON.stringify({
		cardId: 'T1-001',
		locale: 'en',
		sourceImageSha256: crypto.createHash('sha256').update(englishImage).digest('hex'),
	}))
	const object = key => ({ key, bytes: key.length, sha256: crypto.createHash('sha256').update(key).digest('hex') })
	const keys = ['en', 'fr'].flatMap(locale => [
		`${locale}/tcgp/T1/001/high.webp`,
		`${locale}/tcgp/T1/001/low.webp`,
		`${locale}/tcgp/T1/boosters/fresh-pack/logo.webp`,
		`${locale}/tcgp/T1/boosters/fresh-pack/artwork_front.webp`,
	])
	const manifest = path.join(root, 'manifest.json')
	await writeFile(manifest, JSON.stringify({ objects: keys.map(object) }))
	const config = path.join(root, 'config.json')
	await writeFile(config, JSON.stringify({
		setId: 'T1',
		total: 1,
		imageEvidence: {
			sourceSetId: 999,
			sourceCardUrlTemplate: 'https://images.example/{sourceSetId}/{number}_{sourceLocale}.png',
			locales: {
				en: { dir: 'images-en', sourceLocale: 'en' },
				fr: { dir: 'images-fr', sourceLocale: 'fr' },
			},
			ocrLocales: ['en'],
			sources: { fixture: { attribution: 'https://images.example/', license: 'fixture' } },
			boosters: [{
				slug: 'fresh-pack',
				logoRoot: 'logos',
				logoEvidenceUrl: 'https://images.example/set/999',
				artworkFile: 'artwork.webp',
				artworkEvidenceUrl: 'https://images.example/artwork/fresh-pack',
				artworkLanguageNeutral: true,
			}],
		},
	}))
	const output = path.join(root, 'evidence.json')
	await exec(process.execPath, [script, '--set-id', 'T1', '--total', '1', '--source-root', sourceRoot, '--ocr-root', ocrRoot, '--r2-manifest', manifest, '--config', config, '--output', output])
	const evidence = JSON.parse(await readFile(output, 'utf8'))
	assert.deepEqual(evidence.counts, { sourceCardImages: 2, mappedCardObjects: 4, ocrArtifacts: 1, boosterObjects: 4 })
	assert.equal(evidence.cards[0].source.url, 'https://images.example/999/1_en.png')
	assert.deepEqual([...new Set(evidence.boosters.map(item => item.slug))], ['fresh-pack'])
	assert.equal(JSON.stringify(evidence).includes('team-rockets-ambition'), false)
	const selected = JSON.parse(await readFile(config, 'utf8'))
	const hdKey = 'fr/tcgp/T1/001/hd-0123456789ab/high.webp'
	const hdBytes = Buffer.from('official native face')
	await writeFile(path.join(root, 'official.png'), hdBytes)
	const hdSource = { file: 'official.png', sourcePage: 'https://official.example/press', sha256: crypto.createHash('sha256').update(hdBytes).digest('hex'), bytes: hdBytes.length, width: 734, height: 1024 }
	selected.imageBaseOverrides = { 'T1-001': { fr: 'https://assets.example/fr/tcgp/T1/001/hd-0123456789ab' } }
	selected.imageEvidence.hdManifest = 'hd.json'
	await writeFile(path.join(root, 'hd.json'), JSON.stringify({ setId: 'T1', objects: [{ key: hdKey, sourceLocale: 'fr', source: hdSource }] }))
	await writeFile(config, JSON.stringify(selected))
	const hdKeys = keys.map(key => key.startsWith('fr/tcgp/T1/001/') ? key.replace('/001/', '/001/hd-0123456789ab/') : key)
	await writeFile(manifest, JSON.stringify({ objects: hdKeys.map(object) }))
	const args = [script, '--set-id', 'T1', '--total', '1', '--source-root', sourceRoot, '--ocr-root', ocrRoot, '--r2-manifest', manifest, '--config', config, '--hd-source-root', root, '--output', output]
	await exec(process.execPath, args)
	const upgraded = JSON.parse(await readFile(output, 'utf8'))
	assert.equal(upgraded.cards[1].source.sha256, hdSource.sha256)
	assert.equal(upgraded.cards[1].source.url, hdSource.sourcePage)
	assert.equal(upgraded.cards[1].outputs[0].key, hdKey)
	await writeFile(path.join(root, 'official.png'), Buffer.from('source changed after review'))
	await assert.rejects(exec(process.execPath, args), /HD source changed/)

})
