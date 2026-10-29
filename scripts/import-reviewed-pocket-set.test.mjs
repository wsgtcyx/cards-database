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
	const config = { setId: 'T1', total: 1, setFile: 'Fixture', officialCount: 1, releaseDate: '2026-10-29', r2Origin: 'https://example.test', nameLocales: ['en', 'ja'], ruleLocales: ['en'], setNames: { en: 'Fixture', ja: 'セット' }, boosters: [{ slug: 'one', names: { en: 'One', ja: 'パック' } }] }
	const cards = { 'T1-001': { name: { en: 'Fixture', ja: 'カード' }, illustrator: 'Artist', rarity: 'Two Diamond', category: 'Trainer', trainerType: 'Item', effect: { en: 'Draw a card.' }, boosters: ['one'] } }
	const audit = bindAudit(cards)
	const files = renderReviewedSet(config, cards, audit)
	assert.match(files['Fixture/001.ts'], /ja: "Draw a card\."/)
	assert.match(files['Fixture.ts'], /ja: "https:\/\/example.test\/en\/tcgp\/T1\/boosters\/one\/artwork_front.webp"/)
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
