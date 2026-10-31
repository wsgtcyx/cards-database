import assert from 'node:assert/strict'
import test from 'node:test'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'
import { renderReviewedSet } from './import-reviewed-pocket-set.mjs'

const bindAudit = (cards, setId = 'T1') => ({ setId, passed: true, reviewedCardsSha256: createHash('sha256').update(JSON.stringify(cards)).digest('hex') })

test('reviewed importer preserves dual types and reward-only pack membership, rejects incomplete inputs', () => {
	const config = { setId: 'T1', total: 1, setFile: 'Fixture', officialCount: 1, releaseDate: '2026-10-29', r2Origin: 'https://example.test', nameLocales: ['en'], ruleLocales: ['en'], setNames: { en: 'Fixture' }, boosters: [{ slug: 'one', names: { en: 'One' } }] }
	const card = { name: { en: 'Fixture ex' }, illustrator: 'Artist', rarity: 'Four Diamond', category: 'Pokemon', hp: 100, types: ['Water', 'Darkness'], stage: 'Basic', suffix: 'EX', attacks: [], boosters: [] }
	const audit = bindAudit({ 'T1-001': card })
	const files = renderReviewedSet(config, { 'T1-001': card }, audit)
	assert.match(files['Fixture/001.ts'], /"Water",\s+"Darkness"/)
	assert.match(files['Fixture/001.ts'], /boosters: \[\]/)
	assert.match(files['Fixture.ts'], /artwork_front:/)
	assert.throws(() => renderReviewedSet(config, { 'T1-001': card }, { ...audit, passed: false }), /must pass/)
	assert.throws(() => renderReviewedSet(config, {}, audit))
	assert.throws(() => renderReviewedSet(config, { 'T1-001': { ...card, types: [null] } }, audit), /invalid Pokémon type/)
	assert.throws(() => renderReviewedSet(config, { 'T1-001': { ...card, boosters: ['other'] } }, audit), /invalid pack/)
	assert.throws(() => renderReviewedSet(config, { 'T1-001': { ...card, abilities: [{ name: { en: 'Power' }, effect: { en: 'Draw a card.' } }] } }, audit), /missing ability type/)
})

test('name-only locales receive explicit English rules and official English booster images', () => {
	const config = { setId: 'T1', total: 1, setFile: 'Fixture', officialCount: 1, releaseDate: '2026-10-29', r2Origin: 'https://example.test', nameLocales: ['en', 'fr'], ruleLocales: ['en'], setNames: { en: 'Fixture', fr: '세트' }, boosters: [{ slug: 'one', names: { en: 'One', fr: '팩' } }] }
	const cards = { 'T1-001': { name: { en: 'Fixture', fr: '카드' }, illustrator: 'Artist', rarity: 'Two Diamond', category: 'Trainer', trainerType: 'Item', effect: { en: 'Draw a card.' }, boosters: ['one'] } }
	const audit = bindAudit(cards)
	const files = renderReviewedSet(config, cards, audit)
	assert.match(files['Fixture/001.ts'], /fr: "Draw a card\."/)
	assert.match(files['Fixture.ts'], /fr: "https:\/\/example.test\/en\/tcgp\/T1\/boosters\/one\/artwork_front.webp"/)
	assert.deepEqual(cards['T1-001'].effect, { en: 'Draw a card.' })
	const modified = structuredClone(cards)
	modified['T1-001'].effect.en = 'TODO'
	assert.throws(() => renderReviewedSet(config, modified, audit), /reviewed cards changed/)
})

test('reviewed importer rejects traversal and symlink destinations before creating files', () => {
	const config = { setId: 'T1', total: 1, setFile: 'Fixture', officialCount: 1, releaseDate: '2026-10-29', r2Origin: 'https://example.test', nameLocales: ['en'], ruleLocales: ['en'], setNames: { en: 'Fixture' }, boosters: [{ slug: 'one', names: { en: 'One' } }] }
	const cards = { 'T1-001': { name: { en: 'Fixture' }, illustrator: 'Artist', rarity: 'Two Diamond', category: 'Trainer', trainerType: 'Item', effect: { en: 'Draw a card.' }, boosters: ['one'] } }
	const audit = bindAudit(cards)
	for (const setFile of ['', '.', '..', '../escaped', 'nested/set', 'nested\\set']) assert.throws(() => renderReviewedSet({ ...config, setFile }, cards, audit), /single directory name/)
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'reviewed-set-path-'))
	try {
		const output = path.join(root, 'output'), outside = path.join(root, 'outside')
		fs.mkdirSync(output); fs.mkdirSync(outside)
		fs.symlinkSync(outside, path.join(output, 'Fixture'), 'dir')
		for (const [name, value] of Object.entries({ config, cards, audit })) fs.writeFileSync(path.join(root, `${name}.json`), JSON.stringify(value))
		const script = fileURLToPath(new URL('./import-reviewed-pocket-set.mjs', import.meta.url))
		const result = spawnSync(process.execPath, [script, '--config', path.join(root, 'config.json'), '--cards', path.join(root, 'cards.json'), '--audit', path.join(root, 'audit.json'), '--output', output], { encoding: 'utf8' })
		assert.notEqual(result.status, 0)
		assert.deepEqual(fs.readdirSync(outside), [])
		assert.equal(fs.existsSync(path.join(output, 'Fixture.ts')), false)
	} finally { fs.rmSync(root, { recursive: true, force: true }) }
})

test('CLI stages the complete set and remains retryable after a write failure', () => {
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'reviewed-set-io-'))
	try {
		const config = { setId: 'T1', total: 1, setFile: 'Fixture', officialCount: 1, releaseDate: '2026-10-29', r2Origin: 'https://example.test', nameLocales: ['en'], ruleLocales: ['en'], setNames: { en: 'Fixture' }, boosters: [{ slug: 'one', names: { en: 'One' } }] }
		const cards = { 'T1-001': { name: { en: 'Fixture' }, illustrator: 'Artist', rarity: 'Two Diamond', category: 'Trainer', trainerType: 'Item', effect: { en: 'Draw a card.' }, boosters: ['one'] } }
		const output = path.join(root, 'output')
		fs.mkdirSync(output)
		for (const [name, value] of Object.entries({ config, cards, audit: bindAudit(cards) })) fs.writeFileSync(path.join(root, `${name}.json`), JSON.stringify(value))
		const script = fileURLToPath(new URL('./import-reviewed-pocket-set.mjs', import.meta.url))
		const args = [script, '--config', path.join(root, 'config.json'), '--cards', path.join(root, 'cards.json'), '--audit', path.join(root, 'audit.json'), '--output', output]
		const preload = path.join(root, 'failure.mjs')
		fs.writeFileSync(preload, `import fs from 'node:fs'; const write = fs.writeFileSync; let count = 0; fs.writeFileSync = (...args) => { if (String(args[0]).includes('.pocket-import-') && ++count === 2) throw Object.assign(new Error('injected write failure'), { code: 'ENOSPC' }); return write(...args) };`)
		const failed = spawnSync(process.execPath, ['--import', preload, ...args], { encoding: 'utf8' })
		assert.notEqual(failed.status, 0)
		assert.match(failed.stderr, /ENOSPC/)
		assert.deepEqual(fs.readdirSync(output), [])
		const retry = spawnSync(process.execPath, args, { encoding: 'utf8' })
		assert.equal(retry.status, 0, retry.stderr)
		assert.equal(fs.existsSync(path.join(output, 'Fixture/001.ts')), true)
		assert.equal(fs.existsSync(path.join(output, 'Fixture.ts')), true)
	} finally { fs.rmSync(root, { recursive: true, force: true }) }
})


test('localization audit rejects reviewed raw that differs from the audited locale values', () => {
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'reviewed-set-audit-'))
	try {
		const evidence = new URL('../meta/pocket-source-reviews/C1/', import.meta.url)
		const cards = JSON.parse(fs.readFileSync(new URL('C1.reviewed-raw.json', evidence), 'utf8'))
		cards['C1-001'].description.de = 'TODO'
		const changed = path.join(root, 'changed.json'), output = path.join(root, 'audit.json')
		fs.writeFileSync(changed, JSON.stringify(cards))
		const script = fileURLToPath(new URL('../.agents/skills/merge-pocket-card-sources/scripts/audit-pocket-localizations.mjs', import.meta.url))
		const result = spawnSync(process.execPath, [script, '--canonical', fileURLToPath(new URL('C1.canonical.json', evidence)), '--localizations', fileURLToPath(new URL('C1.localizations.json', evidence)), '--config', fileURLToPath(new URL('C1.source-config.json', evidence)), '--reviewed-cards', changed, '--output', output], { encoding: 'utf8' })
		assert.notEqual(result.status, 0)
		const audit = JSON.parse(fs.readFileSync(output, 'utf8'))
		assert.equal(audit.passed, false)
		assert(audit.findings.some(finding => finding.cardId === 'C1-001' && finding.locale === 'de' && finding.kind === 'reviewed-localization-mismatch'))
	} finally { fs.rmSync(root, { recursive: true, force: true }) }
})

const japaneseConfig = { setId: 'T1', total: 1, setFile: 'Fixture', officialCount: 1, releaseDate: '2026-10-29', r2Origin: 'https://game.pokemontcgpocket.app', nameLocales: ['en', 'ja'], ruleLocales: ['en', 'ja'], setNames: { en: 'Fixture', ja: 'セット' }, boosters: [{ slug: 'one', names: { en: 'One', ja: 'パック' } }] }
const japaneseCards = { 'T1-001': { name: { en: 'Fixture', ja: 'カード' }, illustrator: 'Artist', rarity: 'Two Diamond', category: 'Trainer', trainerType: 'Item', effect: { en: 'Draw a card.', ja: '自分の山札を1枚引く。' }, boosters: ['one'] } }

test('Japanese imports require full native rules and reject invalid input before any CLI writes', () => {
	assert.throws(() => renderReviewedSet({ ...japaneseConfig, ruleLocales: ['en'] }, japaneseCards, bindAudit(japaneseCards)), /Japanese.*ruleLocales/)
	assert.throws(() => renderReviewedSet({ ...japaneseConfig, nameLocales: ['en'] }, japaneseCards, bindAudit(japaneseCards)), /Japanese.*nameLocales/)
	for (const value of [undefined, '', ' ', 'Draw a card.', 'カード [Mst:Name]', 'カード [Gr:Count]', '山札を枚引く。']) {
		const cards = structuredClone(japaneseCards)
		cards['T1-001'].effect.ja = value
		assert.throws(() => renderReviewedSet(japaneseConfig, cards, bindAudit(cards)), /Japanese|ja/)
	}
	for (const field of ['name', 'evolveFrom', 'description']) {
		const cards = structuredClone(japaneseCards)
		cards['T1-001'][field] = { en: 'English fallback', ja: 'English fallback' }
		assert.throws(() => renderReviewedSet(japaneseConfig, cards, bindAudit(cards)), /Japanese|ja/)
	}
	for (const group of ['attacks', 'abilities']) for (const field of ['name', 'effect']) {
		const cards = structuredClone(japaneseCards)
		cards['T1-001'][group] = [{ type: 'Ability', name: { en: 'Draw', ja: 'ドロー' }, effect: { en: 'Draw a card.', ja: '自分の山札を1枚引く。' } }]
		cards['T1-001'][group][0][field].ja = 'English fallback'
		assert.throws(() => renderReviewedSet(japaneseConfig, cards, bindAudit(cards)), /Japanese|ja/)
	}
	for (const field of ['name', 'effect']) {
		const cards = structuredClone(japaneseCards)
		cards['T1-001'].item = { name: { en: 'Item', ja: 'どうぐ' }, effect: { en: 'Draw a card.', ja: '自分の山札を1枚引く。' } }
		delete cards['T1-001'].item[field].ja
		assert.throws(() => renderReviewedSet(japaneseConfig, cards, bindAudit(cards)), /Japanese|ja/)
	}
	assert.throws(() => renderReviewedSet({ ...japaneseConfig, setNames: { en: 'Fixture' } }, japaneseCards, bindAudit(japaneseCards)), /Japanese/)
	assert.throws(() => renderReviewedSet({ ...japaneseConfig, boosters: [{ slug: 'one', names: { en: 'One' } }] }, japaneseCards, bindAudit(japaneseCards)), /Japanese/)
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'reviewed-set-ja-closed-'))
	try {
		const output = path.join(root, 'output')
		fs.mkdirSync(output)
		for (const [name, value] of Object.entries({ config: { ...japaneseConfig, ruleLocales: ['en'] }, cards: japaneseCards, audit: bindAudit(japaneseCards) })) fs.writeFileSync(path.join(root, `${name}.json`), JSON.stringify(value))
		const script = fileURLToPath(new URL('./import-reviewed-pocket-set.mjs', import.meta.url))
		const result = spawnSync(process.execPath, [script, '--config', path.join(root, 'config.json'), '--cards', path.join(root, 'cards.json'), '--audit', path.join(root, 'audit.json'), '--output', output], { encoding: 'utf8' })
		assert.notEqual(result.status, 0)
		assert.deepEqual(fs.readdirSync(output), [])
	} finally { fs.rmSync(root, { recursive: true, force: true }) }
})

test('a complete Japanese import compiles with native card, set and booster images', () => {
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'reviewed-set-ja-compile-'))
	try {
		const cards = structuredClone(japaneseCards)
		cards['T1-001'].image = { en: 'https://example.test/custom', ja: 'https://example.test/english-fallback' }
		const files = renderReviewedSet(japaneseConfig, cards, bindAudit(cards))
		const dataRoot = path.join(root, 'data', 'Pokémon TCG Pocket')
		for (const [file, text] of Object.entries(files)) {
			fs.mkdirSync(path.dirname(path.join(dataRoot, file)), { recursive: true })
			fs.writeFileSync(path.join(dataRoot, file), text)
		}
		fs.writeFileSync(`${dataRoot}.ts`, `export default { id: 'tcgp', name: { en: 'Pokémon TCG Pocket', ja: 'ポケポケ' } }`)
		fs.mkdirSync(path.join(root, 'server'))
		const serverRoot = fileURLToPath(new URL('../server/', import.meta.url))
		const code = `const assert = require('node:assert/strict'); const { getSetPictures } = require('./compiler/utils/setUtil'); const { cardToCardSingle } = require('./compiler/utils/cardUtil'); process.chdir(${JSON.stringify(path.join(root, 'server'))}); const source = require(${JSON.stringify(path.join(dataRoot, 'Fixture/001.ts'))}).default; Promise.all([getSetPictures(source.set, 'ja'), cardToCardSingle('001', source, 'ja')]).then(([pictures, card]) => { assert.equal(pictures[0], 'https://game.pokemontcgpocket.app/ja/tcgp/T1/boosters/one/logo'); assert.equal(card.image, 'https://game.pokemontcgpocket.app/ja/tcgp/T1/001'); assert.equal(card.name, 'カード'); assert.equal(card.effect, '自分の山札を1枚引く。'); assert.equal(card.set.cardCount.total, 1); assert.equal(source.set.boosters.one.logo.ja, 'https://game.pokemontcgpocket.app/ja/tcgp/T1/boosters/one/logo.webp'); assert.equal(source.set.boosters.one.artwork_front.en, 'https://game.pokemontcgpocket.app/en/tcgp/T1/boosters/one/artwork_front.webp'); console.log('Japanese importer compiler proof passed'); }).catch(error => { console.error(error); process.exitCode = 1; });`
		const result = spawnSync(process.execPath, ['-r', 'ts-node/register/transpile-only', '-e', code], { cwd: serverRoot, env: { ...process.env, TS_NODE_COMPILER_OPTIONS: JSON.stringify({ module: 'CommonJS', moduleResolution: 'node' }) }, encoding: 'utf8' })
		assert.equal(result.status, 0, result.stderr || result.stdout)
		assert.match(result.stdout, /Japanese importer compiler proof passed/)
	} finally { fs.rmSync(root, { recursive: true, force: true }) }
})


test('Korean imports require full native rules and native asset paths', () => {
 const config = { ...japaneseConfig, nameLocales: ['en', 'ko'], ruleLocales: ['en', 'ko'], setNames: { en: 'Fixture', ko: '세트' }, boosters: [{ slug: 'one', names: { en: 'One', ko: '팩' } }] }
 const cards = { 'T1-001': { ...japaneseCards['T1-001'], name: { en: 'Fixture', ko: '카드' }, effect: { en: 'Draw a card.', ko: '덱에서 1장 뽑는다.' } } }
 assert.throws(() => renderReviewedSet({ ...config, ruleLocales: ['en'] }, cards, bindAudit(cards)), /Korean.*ruleLocales/)
 assert.throws(() => renderReviewedSet({ ...config, nameLocales: ['en'] }, cards, bindAudit(cards)), /Korean.*nameLocales/)
 for (const value of [undefined, '', 'Draw a card.', '포켓몬[Gr:Patchim v="이/가"]']) {
  const invalid = structuredClone(cards)
  invalid['T1-001'].effect.ko = value
  assert.throws(() => renderReviewedSet(config, invalid, bindAudit(invalid)), /Korean/)
 }
 const files = renderReviewedSet(config, cards, bindAudit(cards))
 assert.match(files['Fixture/001.ts'], /ko: "https:\/\/game.pokemontcgpocket.app\/ko\/tcgp\/T1\/001"/)
 assert.match(files['Fixture.ts'], /ko: "https:\/\/game.pokemontcgpocket.app\/ko\/tcgp\/T1\/boosters\/one\/artwork_front.webp"/)
})

test('official Latin Promo set labels are accepted only for the matching set identity', () => {
 const config = { setId: 'P-A', total: 1, setFile: 'Promo Fixture', officialCount: 0, releaseDate: '2026-10-31', r2Origin: 'https://example.test', nameLocales: ['en','ko'], ruleLocales: ['en','ko'], setNames: { en:'PROMO-A',ko:'PROMO-A' }, boosters: [{slug:'vol1',names:{en:'Promo Pack',ko:'프로모 카드 팩'}}] }
 const cards = {'P-A-001':{name:{en:'Potion',ko:'상처약'},illustrator:'Artist',rarity:'None',category:'Trainer',trainerType:'Item',effect:{en:'Draw 2 cards.',ko:'자신의 덱을 2장 뽑는다.'},boosters:['vol1']}}
 const audit = bindAudit(cards,'P-A')
 assert.match(renderReviewedSet(config,cards,audit)['Promo Fixture.ts'],/ko: "PROMO-A"/)
 assert.throws(()=>renderReviewedSet({...config,setNames:{en:'PROMO-A',ko:'PROMO-B'}},cards,audit),/native Korean/)
 assert.throws(()=>renderReviewedSet({...config,setNames:{en:'PROMO-A',ko:'English fallback'}},cards,audit),/native Korean/)
})
