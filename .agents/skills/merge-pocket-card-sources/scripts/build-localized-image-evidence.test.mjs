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
})
