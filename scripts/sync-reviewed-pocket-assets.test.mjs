import assert from 'node:assert/strict'
import test from 'node:test'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { loadSharp } from './utils/load-sharp.mjs'

import {
	assertBoosterAssetKey,
	assertPokebaseAssetUrl,
	boosterAssetKey,
	probePreflightRemote,
} from './sync-reviewed-pocket-assets.mjs'

test('asset preparation finds the downstream Sharp package through its public entry', { skip: Boolean(process.env.SHARP_ENTRY) }, async t => {
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-sharp-'))
	t.after(() => fs.rmSync(root, { recursive: true, force: true }))
	const downstream = path.join(root, 'tcgp')
	const pkg = path.join(downstream, 'node_modules', 'sharp')
	fs.mkdirSync(pkg, { recursive: true })
	fs.writeFileSync(path.join(pkg, 'package.json'), JSON.stringify({ exports: './entry.cjs' }))
	fs.writeFileSync(path.join(pkg, 'entry.cjs'), "module.exports = 'downstream sharp'")
	assert.equal(await loadSharp(path.join(root, 'api'), downstream), 'downstream sharp')
})

test('booster asset keys are exact and locale-scoped', () => {
	assert.equal(boosterAssetKey('fr', 'logo'), 'fr/tcgp/B4/boosters/ruler-of-the-skies/logo.webp')
	assert.equal(boosterAssetKey('pt-br', 'artwork_front'), 'pt-br/tcgp/B4/boosters/ruler-of-the-skies/artwork_front.webp')
	assert.equal(assertBoosterAssetKey('zh-tw/tcgp/B4/boosters/ruler-of-the-skies/logo.webp', 'zh-tw', 'logo'), 'zh-tw/tcgp/B4/boosters/ruler-of-the-skies/logo.webp')
	assert.throws(() => boosterAssetKey('en', 'logo'), /Unsupported booster asset locale/)
	assert.throws(() => boosterAssetKey('fr', '../logo'), /Unsupported booster asset field/)
	assert.throws(() => assertBoosterAssetKey('fr/tcgp/B4/boosters/other/logo.webp', 'fr', 'logo'), /Unexpected booster R2 key/)
})

test('PokéBase asset URL validation rejects capability and lookalike URLs', () => {
	const valid = 'https://i.pokebase.app/pokemon-tcg-pocket/ExpansionLogo_LOGO_expansion_B4_fr_FR-1.png'
	assert.equal(assertPokebaseAssetUrl(valid), valid)
	assert.throws(() => assertPokebaseAssetUrl('https://evil.example/pokemon-tcg-pocket/file.png'), /Unexpected PokéBase asset URL/)
	assert.throws(() => assertPokebaseAssetUrl(`${valid}?token=secret`), /Unexpected PokéBase asset URL/)
	assert.throws(() => assertPokebaseAssetUrl('https://i.pokebase.app/pokemon-tcg-pocket/../secret.png'), /Unexpected PokéBase asset URL/)
})

test('preflight uses HEAD and never primes a missing bare URL with GET', async () => {
	const url = 'https://game.pokemontcgpocket.app/fr/tcgp/B4/boosters/ruler-of-the-skies/logo.webp'
	const object = { sha256: 'a'.repeat(64), bytes: 123 }
	const calls = []
	const result = await probePreflightRemote(url, object, {
		headFingerprint: async value => {
			calls.push(['HEAD', value])
			return { status: 404, sha256: null, bytes: null, matchesHeaders: false, method: 'HEAD' }
		},
		bodyFingerprint: async value => {
			calls.push(['GET', value])
			return { status: 404, sha256: null, bytes: 0, matchesHeaders: false }
		},
	})

	assert.equal(result.status, 'new')
	assert.deepEqual(calls, [
		['HEAD', url],
		['GET', `${url}?preflight=${'a'.repeat(16)}`],
	])
})
