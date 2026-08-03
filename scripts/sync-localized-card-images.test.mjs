import test from 'node:test'
import assert from 'node:assert/strict'

import {
	assertExactR2Url,
	assertR2Key,
	assertSourceUrl,
	assertSelection,
	artifactDigest,
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
