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
const scripts = path.dirname(fileURLToPath(import.meta.url))

test('persisted OCR drops provider identifiers and binds source image plus chosen values', async () => {
	const root = await mkdtemp(path.join(os.tmpdir(), 'ocr-evidence-test-'))
	const input = path.join(root, 'input')
	const output = path.join(root, 'output')
	const images = path.join(root, 'images')
	await Promise.all([mkdir(input), mkdir(output), mkdir(images)])
	const image = Buffer.from('source-image')
	await writeFile(path.join(images, '001.png'), image)
	await writeFile(path.join(input, '001.json'), JSON.stringify({
		jobId: 'provider-job-secret',
		ocrImageUrl: 'https://provider.example/job?token=secret',
		pages: [{ prunedResult: { rec_texts: ['Reviewed text'], rec_boxes: [[1, 2, 3, 4]], rec_scores: [0.99] } }],
	}))
	const chosen = path.join(root, 'chosen.json')
	await writeFile(chosen, JSON.stringify({ cards: { 'B4a-001': { locales: { de: { name: 'Volbeat' } } } } }))
	await exec(process.execPath, [path.join(scripts, 'persist-ocr-directory.mjs'), '--input', input, '--output', output, '--set-id', 'B4a', '--locale', 'de', '--source-images', images, '--chosen', chosen])
	const persisted = JSON.parse(await readFile(path.join(output, '001.json'), 'utf8'))
	assert.equal(persisted.cardId, 'B4a-001')
	assert.equal(persisted.locale, 'de')
	assert.equal(persisted.sourceImageSha256, crypto.createHash('sha256').update(image).digest('hex'))
	assert.deepEqual(persisted.chosen, { name: 'Volbeat' })
	assert.equal(persisted.jobId, undefined)
	assert.equal(persisted.ocrImageUrl, undefined)
})

test('PokeOS illustrator placeholders stay unresolved unless a reviewed card-image override exists', async () => {
	const root = await mkdtemp(path.join(os.tmpdir(), 'artist-review-test-'))
	const repo = path.join(root, 'repo')
	const data = path.join(repo, 'data', 'Pokémon TCG Pocket', 'fixture')
	const ocr = path.join(root, 'ocr')
	await Promise.all([mkdir(data, { recursive: true }), mkdir(ocr)])
	await writeFile(path.join(data, '001.ts'), 'const card = { illustrator: "Kazuki Minami" }\n')
	await writeFile(path.join(ocr, '001.json'), JSON.stringify({ pages: [{ prunedResult: { rec_texts: ['Kazuki Minami'] } }] }))
	const canonical = path.join(root, 'canonical.json')
	const artists = path.join(root, 'artists.json')
	const species = path.join(root, 'species.csv')
	const flavors = path.join(root, 'flavors.csv')
	await writeFile(canonical, JSON.stringify({ cards: [{ id: 'B4a-001', name: 'Fixture ex', category: 'Pokemon' }] }))
	await writeFile(artists, JSON.stringify([{ card_number: '001', artist: 'ILLUSTRATOR_242' }]))
	await writeFile(species, 'id,local_language_id,name\n')
	await writeFile(flavors, 'species_id,version_id,language_id,flavor_text\n')
	const run = async (suffix, overrides) => {
		const output = path.join(root, `review-${suffix}.json`)
		const report = path.join(root, `report-${suffix}.json`)
		const args = [path.join(scripts, 'build-ocr-review.mjs'), '--set-id', 'B4a', '--canonical', canonical, '--repo-root', repo, '--flavor-csv', flavors, '--species-csv', species, '--ocr-dir', ocr, '--artist-source', artists, '--output', output, '--report', report]
		if (overrides) args.push('--artist-overrides', overrides)
		await exec(process.execPath, args)
		return { review: JSON.parse(await readFile(output, 'utf8')), report: JSON.parse(await readFile(report, 'utf8')) }
	}
	const blocked = await run('blocked')
	assert.equal(blocked.report.artists.unresolved.length, 1)
	assert.equal(blocked.review.cards['B4a-001'].fields.illustrator, undefined)
	const overrides = path.join(root, 'overrides.json')
	await writeFile(overrides, JSON.stringify({ 'B4a-001': 'Kazuki Minami' }))
	const accepted = await run('accepted', overrides)
	assert.equal(accepted.report.artists.unresolved.length, 0)
	assert.equal(accepted.review.cards['B4a-001'].fields.illustrator.value, 'Kazuki Minami')
})

test('set audit accepts quoted metadata and validates configured HD image replacements', async () => {
	const root = await mkdtemp(path.join(os.tmpdir(), 'pocket-set-audit-'))
	const dir = path.join(root, 'fixture')
	await mkdir(dir)
	const base = 'https://images.example/en/tcgp/B9'
	const booster = `${base}/boosters/fixture`
	const manifest = path.join(root, 'manifest.json')
	await writeFile(manifest, JSON.stringify({ set: { id: 'B9', file: 'fixture', total: 1, official: 1, releaseDate: '2026-09-30', names: { en: 'Fixture' }, boosters: [{ id: 'fixture' }] }, images: { cardLanguages: { en: 'en' }, packLanguages: { en: 'en' } }, r2: { origin: 'https://images.example' } }))
	const config = path.join(root, 'config.json')
	await writeFile(config, JSON.stringify({ setId: 'B9', imageBaseOverrides: { 'B9-001': { en: `${base}/001/hd-0123456789ab` } }, imageEvidence: { boosters: [{ slug: 'fixture', assetUrls: { logo: { en: `${booster}/logo-hd-0123456789ab.webp` }, artwork_front: { en: `${booster}/artwork_front-hd-0123456789ab.webp` } } }] } }))
	const setFile = path.join(root, 'fixture.ts')
	await writeFile(setFile, 'const set = ' + JSON.stringify({ id: 'B9', name: { en: 'Fixture' }, cardCount: { official: 1 }, releaseDate: '2026-09-30', boosters: { fixture: { logo: { en: `${booster}/logo-hd-0123456789ab.webp` }, artwork_front: { en: `${booster}/artwork_front-hd-0123456789ab.webp` } } } }, null, 2))
	const cardFile = path.join(dir, '001.ts')
	await writeFile(cardFile, 'const card = {\n "set": Set,\n "name": { "en": "Fixture" },\n "image": { "en": "' + `${base}/001/hd-0123456789ab` + '" }\n}')
	const audit = path.resolve(scripts, '../../sync-pocket-set/scripts/audit-pocket-set.mjs')
	const args = [audit, '--manifest', manifest, '--set-dir', dir, '--name-languages', 'en', '--set-config', config]
	assert.match((await exec(process.execPath, args)).stdout, /cards=1.*status=ok/)
	await writeFile(cardFile, (await readFile(cardFile, 'utf8')).replace('/hd-0123456789ab', ''))
	await assert.rejects(exec(process.execPath, args), /missing https:\/\/images\.example\/en\/tcgp\/B9\/001\/hd-/)
	await writeFile(setFile, 'const set = { id: "B9", name: { en: "Fixture" }, cardCount: { official: 1 }, releaseDate: "2026-09-30", boosters: { fixture: { logo: { en: "' + `${booster}/logo.webp` + '" }, artwork_front: { en: "' + `${booster}/artwork_front.webp` + '" } } } }')
	await writeFile(cardFile, 'const card = {\n set: Set,\n name: { en: "Fixture" },\n image: { en: "' + `${base}/001` + '" }\n}')
	assert.match((await exec(process.execPath, args.slice(0, -2))).stdout, /cards=1.*status=ok/)
})
