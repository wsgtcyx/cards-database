import test from 'node:test'
import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

import {
	assertDownstreamApplyBaseline,
	assertExactR2Url,
	assertMetadataApplyBaseline,
	assertPokebaseSourceUrl,
	assertPokeosSourceUrl,
	assertR2Key,
	assertSourceUrl,
	assertSelection,
	artifactDigest,
	flibustierArchiveMember,
	inspectRemoteObject,
	patchImageBlock,
	resolveInside,
	withArtifactDigest,
} from './sync-localized-card-images.mjs'

test('resolveInside keeps artifact paths inside their work root', () => {
	const root = '/tmp/pocket-sync-test'
	assert.equal(resolveInside(root, 'source/fr/tcgp/A3b/001.png'), `${root}/source/fr/tcgp/A3b/001.png`)
	assert.throws(() => resolveInside(root, '../../etc/passwd'), /escapes its root/)
	assert.throws(() => resolveInside(root, '/etc/passwd'), /Absolute path/)
})

test('R2 URL and key validators reject lookalike or traversal values', () => {
	assert.equal(assertExactR2Url('https://game.pokemontcgpocket.app/fr/tcgp/A3b/001', 'fr', 'A3b', '001'), 'https://game.pokemontcgpocket.app/fr/tcgp/A3b/001')
	assert.throws(() => assertExactR2Url('https://evil.example/fr/tcgp/A3b/001', 'fr', 'A3b', '001'), /Unexpected R2 URL/)
	assert.throws(() => assertExactR2Url('https://game.pokemontcgpocket.app/fr/tcgp/A3b/001?next=https://evil.example', 'fr', 'A3b', '001'), /Unexpected R2 URL/)
	assert.equal(assertR2Key('fr/tcgp/A3b/001/high.webp', 'fr', 'A3b', '001', 'high'), 'fr/tcgp/A3b/001/high.webp')
	assert.throws(() => assertR2Key('fr/tcgp/../../secret.webp', 'fr', 'A3b', '001', 'high'), /Unexpected R2 key/)
})

test('source URL validation is limited to the expected RaenonX image query', () => {
	const source = 'https://cdn.raenonx.cc/api/image/ptcgp?format=png&url=/images/game/card/full/zh/PK_10_007970_00.png'
	assert.equal(assertSourceUrl(source, 'zh', 'PK_10_007970_00'), source)
	assert.throws(() => assertSourceUrl(`${source}&redirect=https://evil.example`, 'zh', 'PK_10_007970_00'), /Unexpected source URL query/)
})

test('PokeOS source URL validation binds set, card number, and locale', () => {
	const source = 'https://s3.pokeos.com/pokeos-uploads/tcg/pocket/583/src/145_de.png'
	assert.equal(assertPokeosSourceUrl(source, 583, 145, 'de'), source)
	assert.throws(() => assertPokeosSourceUrl(source, 583, 146, 'de'), /Unexpected PokeOS source URL/)
	assert.throws(() => assertPokeosSourceUrl(`${source}?token=secret`, 583, 145, 'de'), /Unexpected PokeOS source URL/)
	assert.throws(() => assertPokeosSourceUrl(source.replace('s3.pokeos.com', 'evil.example'), 583, 145, 'de'), /Unexpected PokeOS source URL/)
})

test('PokéBase source URL validation binds the exact filename and CDN locale', () => {
	const filename = 'PokeCardArt_cPK_90_015460_00_PAOJIANex_RR_de_DE-1.png'
	const source = `https://i.pokebase.app/pokemon-tcg-pocket/${filename}`
	assert.equal(assertPokebaseSourceUrl(source, 'de_DE', filename), source)
	assert.throws(() => assertPokebaseSourceUrl(source, 'it_IT', filename), /filename/)
	assert.throws(() => assertPokebaseSourceUrl(`${source}?download=1`, 'de_DE', filename), /Unexpected PokéBase source URL/)
	assert.throws(() => assertPokebaseSourceUrl(source.replace('i.pokebase.app', 'evil.example'), 'de_DE', filename), /Unexpected PokéBase source URL/)
})

test('flibustier members use the release path and map project promo IDs', () => {
	assert.equal(flibustierArchiveMember('A4b', '377'), 'dist/images/cards-by-set/A4b/377.webp')
	assert.equal(flibustierArchiveMember('P-B', '080'), 'dist/images/cards-by-set/PROMO-B/80.webp')
	assert.throws(() => flibustierArchiveMember('../P-B', '080'), /Invalid flibustier archive member/)
})

test('selection binding rejects a pilot artifact reused for another card', () => {
	assert.doesNotThrow(() => assertSelection(['A3b-001'], { cards: ['A3b-001'] }, 'test'))
	assert.doesNotThrow(() => assertSelection(null, { cards: [] }, 'test'))
	assert.throws(() => assertSelection(['A3b-001'], { cards: ['A3b-002'] }, 'test'), /selection mismatch/)
})

test('artifact digest detects mutation', () => {
	const artifact = withArtifactDigest({ schemaVersion: 1, value: 'ok' })
	assert.equal(artifact.artifactSha256, artifactDigest(artifact))
	artifact.value = 'tampered'
	assert.notEqual(artifact.artifactSha256, artifactDigest(artifact))
})

test('patchImageBlock preserves a comma when replacing a middle locale', () => {
	const source = `({\n  image: {\n    en: "en",\n    fr: "old",\n    es: "es"\n  }\n})`
	const patched = patchImageBlock(source, 'fr', 'https://game.pokemontcgpocket.app/fr/tcgp/A3b/001')
	assert.match(patched, /fr: "https:\/\/game\.pokemontcgpocket\.app\/fr\/tcgp\/A3b\/001",\n\s+es:/)
	assert.equal(Function(`"use strict"; return ${patched}`)().image.fr, 'https://game.pokemontcgpocket.app/fr/tcgp/A3b/001')
})

test('apply rejects metadata and downstream image drift but permits an idempotent target', () => {
	const desiredImage = 'https://game.pokemontcgpocket.app/en/tcgp/P-B/080'
	const baseline = `({\n  image: {\n    en: "https://assets.tcgdex.net/en/tcgp/P-B/080"\n  }\n})`
	const target = {
		id: 'P-B-080',
		key: 'P-B-080',
		locale: 'en',
		currentImage: 'https://assets.tcgdex.net/en/tcgp/P-B/080',
		desiredImage,
		metadataSha256: '0'.repeat(64),
	}
	assert.throws(() => assertMetadataApplyBaseline(target, baseline), /Metadata changed after audit/)
	assert.doesNotThrow(() => assertMetadataApplyBaseline(target, patchImageBlock(baseline, 'en', desiredImage)))
	assert.throws(() => assertDownstreamApplyBaseline(target, { image: 'https://example.com/changed' }), /Downstream image changed after audit/)
	assert.doesNotThrow(() => assertDownstreamApplyBaseline(target, { image: desiredImage }))
	assert.throws(() => assertDownstreamApplyBaseline(target, undefined), /Downstream card missing/)
})

test('upload remote inspection distinguishes an exact reusable object from a collision', async () => {
	const bytes = Buffer.from('RIFF0000WEBP')
	const object = { key: 'en/tcgp/P-B/080/high.webp', sha256: crypto.createHash('sha256').update(bytes).digest('hex') }
	const originalFetch = globalThis.fetch
	try {
		globalThis.fetch = async () => new Response(bytes, { headers: { 'content-type': 'image/webp', 'cache-control': 'public, max-age=31536000, immutable' } })
		assert.deepEqual(await inspectRemoteObject(object), { status: 200, matches: true })
		assert.deepEqual(await inspectRemoteObject({ ...object, sha256: '0'.repeat(64) }), { status: 200, matches: false })
		globalThis.fetch = async () => new Response(null, { status: 404 })
		assert.deepEqual(await inspectRemoteObject(object), { status: 404, matches: false })
	} finally {
		globalThis.fetch = originalFetch
	}
})

test('every Pocket card has an English R2 image', () => {
	const root = path.resolve('data/Pokémon TCG Pocket')
	const setFolders = fs.readdirSync(root, { withFileTypes: true }).filter((entry) => entry.isDirectory())
	const files = setFolders.flatMap((entry) => fs.readdirSync(path.join(root, entry.name)).filter((name) => name.endsWith('.ts')).map((name) => path.join(root, entry.name, name)))
	assert.equal(files.length, 3761)
	for (const file of files) {
		const source = fs.readFileSync(file, 'utf8')
		const folder = path.basename(path.dirname(file))
		const setSource = fs.readFileSync(path.join(root, `${folder}.ts`), 'utf8')
		const setId = setSource.match(/\bid:\s*["']([^"']+)["']/)?.[1]
		const localId = path.basename(file, '.ts')
		const expected = `https://game.pokemontcgpocket.app/en/tcgp/${setId}/${localId}`
		assert.match(source, new RegExp(`\\ben\\s*:\\s*["']${expected.replaceAll('-', '\\-')}["']`), path.relative(root, file))
		assert.doesNotMatch(source, /assets\.tcgdex\.net/, path.relative(root, file))
	}
})
