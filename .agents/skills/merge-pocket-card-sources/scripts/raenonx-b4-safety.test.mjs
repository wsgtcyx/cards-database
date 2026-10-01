import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import crypto from 'node:crypto'
import fs from 'node:fs'
import os from 'node:os'
import test from 'node:test'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { normalizeRaenonxName } from './normalize-raenonx-name.mjs'
import { renderLocalizedTemplate } from './sync-raenonx-b4.mjs'

const root = path.resolve(fileURLToPath(new URL('../../../..', import.meta.url)))

test('binds unnumbered French count tokens to the remaining source number', () => {
	const rendered = renderLocalizedTemplate(
		'This attack does [Num:Int id="1"] damage to [Num:Int id="0"] of your opponent’s Benched Pokémon.',
		'This attack does 50 damage to 1 of your opponent’s Benched Pokémon.',
		'Cette attaque inflige [Num:Int id="1"] dégâts à [Gr:Count s="un"][Num:Int plural_only=""] des Pokémon de Banc de votre adversaire.',
		'fr', 'number binding', {},
	)
	assert.equal(rendered, 'Cette attaque inflige 50 dégâts à un des Pokémon de Banc de votre adversaire.')
})

test('keeps plural counts when French omits numeric token IDs', () => {
	const rendered = renderLocalizedTemplate(
		'Choose a Pokémon [Num:Int id="0"] times. Do [Num:Int id="1"] damage.',
		'Choose a Pokémon 3 times. Do 20 damage.',
		'Choisissez un Pokémon [Gr:Count s="une"][Num:Int plural_only=""] fois. Infligez [Num:Int id="1"] dégâts.',
		'fr', 'plural binding', {},
	)
	assert.equal(rendered, 'Choisissez un Pokémon 3 fois. Infligez 20 dégâts.')
})

test('reserves later explicit numeric references before binding an unnamed count', () => {
	assert.equal(renderLocalizedTemplate(
		'Deal [Num:Int id="0"] damage to [Num:Int id="1"] Pokémon.',
		'Deal 50 damage to 1 Pokémon.',
		'Choisissez [Gr:Count s="un "][Num:Int plural_only=" "]Pokémon puis infligez [Num:Int id="0"] dégâts.',
		'fr', 'reordered numeric references', {},
	), 'Choisissez un Pokémon puis infligez 50 dégâts.')
})

test('refuses ambiguous unnamed counts instead of guessing by source order', () => {
	assert.throws(() => renderLocalizedTemplate(
		'Deal [Num:Int id="0"] damage to [Num:Int id="1"] Pokémon.',
		'Deal 50 damage to 2 Pokémon.',
		'Choisissez [Num:Int] Pokémon puis infligez [Num:Int] dégâts.',
		'fr', 'ambiguous numeric references', {},
	), /Ambiguous unnamed Num:Int/)
})

test('accepts whitespace around attribute equals and literal CJK brackets', () => {
	assert.equal(renderLocalizedTemplate(
		'Discard [Gr:Count s="a " ref ="1"][Num:Int id="1" plural_only=" "]Energy.',
		'Discard a Energy.',
		'Défaussez [Gr:Count s="une" ref="1"][Num:Int id="1" plural_only=""] Énergie[Gr:Count p="s" ref="1"].',
		'fr', 'singular binding', {},
	), 'Défaussez une Énergie.')
	assert.equal(renderLocalizedTemplate('A reminder.', 'A reminder.', '[Ctrl:Italic][[提醒文字。]][/Ctrl:Italic]', 'zh', 'literal brackets', {}), '[[提醒文字。]]')
})

test('normalizes only missing separators in localized form names', () => {
	assert.equal(normalizeRaenonxName('en', 'Teal MaskOgerpon'), 'Teal Mask Ogerpon')
	assert.equal(normalizeRaenonxName('fr', "Goupixd'Alola"), "Goupix d'Alola")
	assert.equal(normalizeRaenonxName('es', 'Zigzagoonde Galar'), 'Zigzagoon de Galar')
	assert.equal(normalizeRaenonxName('pt', 'Ninetalesde Alola ex'), 'Ninetales de Alola ex')
	assert.equal(normalizeRaenonxName('zh', '阿羅拉六尾'), '阿羅拉六尾')
	assert.equal(normalizeRaenonxName('it', 'Mega Charizard[C:Nbsp ]Y-ex'), 'Mega Charizard Y-ex')
	assert.equal(normalizeRaenonxName('es', 'Fase[C:Nbsp ]2'), 'Fase 2')
})

test('reprint provenance binds the frozen source rather than the current checkout', t => {
	const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'reprint-frozen-source-'))
	t.after(() => fs.rmSync(fixture, { recursive: true, force: true }))
	const input = path.join(fixture, 'input'), repo = path.join(fixture, 'repo')
	fs.mkdirSync(input)
	fs.mkdirSync(repo)
	const digest = bytes => crypto.createHash('sha256').update(bytes).digest('hex')
	const frozenHash = digest('original card module')
	const dictionary = { Game: { Master: {
		Card: { Name: { 1: 'Test Tool' }, Illustrator: { 1: 'Test Artist' } },
		Attack: { Name: {} }, Ability: { Name: {} }, EnergyType: {},
		Trainer: { Description: { 1: 'Draw [Num:Int id="0"] cards.' } },
	} } }
	const sources = {
		'index.json': [{ number: 1, set: 'T1', rarity: 'C', name: 'Test Tool', image: 'cTR_20_000001_00_en.png' }],
		'master.json': { cardEntryMap: { card: {
			cardId: 'TR_20_000001_00', rarity: 'C', cardType: 'trainer', illustratorI18nId: [1],
			collectionNums: [{ num: 1, expansion: { id: 'T1' } }],
			play: { characterI18nId: 1, descriptionI18nId: 1 },
		} } },
		'deckgym.json': [{ Trainer: { id: 'T1 001', trainer_card_type: 'Item', effect: 'Draw 2 cards.' } }],
		'existing-cards.json': [{ id: 'S1-001', entity: { entityId: 1 }, file: 'old.ts', card: {
			name: { en: 'Test Tool' }, category: 'Trainer', trainerType: 'Item', effect: { en: 'Draw 2 cards.' },
		} }],
		'reuse-review.json': [{ id: 'T1-001', sourceId: 'S1-001', diff: {} }],
		'pokeos.json': [{ card_number: 1 }],
		'dictionary.en.json': dictionary,
		'dictionary.fr.json': { Game: { Master: { ...dictionary.Game.Master, Card: { ...dictionary.Game.Master.Card, Name: { 1: 'Outil test' } }, Trainer: { Description: { 1: 'Piochez [Num:Int id="0"] cartes.' } } } } },
		'source-file-hashes.json': { setId: 'T1', files: { 'old.ts': frozenHash } },
	}
	const hashes = {}
	for (const [name, data] of Object.entries(sources)) {
		const bytes = JSON.stringify(data)
		fs.writeFileSync(path.join(input, name), bytes)
		hashes[name] = digest(bytes)
	}
	const config = path.join(fixture, 'config.json')
	fs.writeFileSync(config, JSON.stringify({
		setId: 'T1', total: 1, sourceId: 1, nameLocales: ['en', 'fr'], ruleLocales: ['en', 'fr'],
		dictionaryLocales: { en: 'en', fr: 'fr' }, r2Origin: 'https://example.test', sourceHashes: hashes,
		sourceFiles: { index: 'index.json', master: 'master.json', deckgym: 'deckgym.json',
			pokeos: 'pokeos.json', dictionaries: 'dictionary.{locale}.json', sourceFileHashes: 'source-file-hashes.json' },
	}))
	const run = (output, extra = []) => spawnSync(process.execPath, [
		'.agents/skills/merge-pocket-card-sources/scripts/build-pocket-reprints.mjs',
		'--set-config', config, '--input-root', input, '--repo-root', repo, '--output-root', output, ...extra,
	], { cwd: root, encoding: 'utf8' })
	fs.writeFileSync(path.join(repo, 'old.ts'), 'changed after freezing')
	const first = path.join(fixture, 'first'), second = path.join(fixture, 'second')
	const result = run(first)
	assert.equal(result.status, 0, result.stderr)
	assert.equal(JSON.parse(fs.readFileSync(path.join(first, 'T1.provenance.json'))).cards[0].sourceFileSha256, frozenHash)
	fs.writeFileSync(path.join(repo, 'old.ts'), 'another unrelated checkout change')
	assert.equal(run(second).status, 0)
	assert.equal(fs.readFileSync(path.join(first, 'T1.provenance.json'), 'utf8'), fs.readFileSync(path.join(second, 'T1.provenance.json'), 'utf8'))
	const nativeFile = path.join(fixture, 'native.json')
	const native = { setId: 'T1', records: [{ cardId: 'T1-001', path: ['effect', 'fr'], previous: 'Piochez 2 cartes.', chosen: 'Piochez 2 cartes de votre deck.', evidence: { reviewed: true, sourceImageSha256: digest('native face'), sourceUrl: 'https://example.test/fr.png' } }] }
	const nativeBytes = JSON.stringify(native)
	fs.writeFileSync(nativeFile, nativeBytes)
	const configValue = JSON.parse(fs.readFileSync(config))
	configValue.nativeReviewSha256 = digest(nativeBytes)
	configValue.imageBaseOverrides = { 'T1-001': { fr: 'https://example.test/fr/tcgp/T1/001/hd-0123456789ab' } }
	fs.writeFileSync(config, JSON.stringify(configValue))
	const nativeOutput = path.join(fixture, 'native-output')
	const applied = run(nativeOutput, ['--native-review', nativeFile])
	assert.equal(applied.status, 0, applied.stderr)
	const nativeRaw = JSON.parse(fs.readFileSync(path.join(nativeOutput, 'T1.raw.json')))
	assert.equal(nativeRaw['T1-001'].effect.fr, native.records[0].chosen)
	assert.equal(nativeRaw['T1-001'].effect.en, 'Draw 2 cards.')
	assert.equal(nativeRaw['T1-001'].image.fr, configValue.imageBaseOverrides['T1-001'].fr)
	assert.equal(JSON.parse(fs.readFileSync(path.join(nativeOutput, 'T1.localizations.json'))).cards['T1-001'].locales.fr.effect, native.records[0].chosen)
	fs.writeFileSync(nativeFile, nativeBytes + ' ')
	const nativeRejected = path.join(fixture, 'native-rejected')
	assert.match(run(nativeRejected, ['--native-review', nativeFile]).stderr, /Reviewed native input changed/)
	assert.equal(fs.existsSync(nativeRejected), false)
	fs.writeFileSync(nativeFile, nativeBytes)
	fs.writeFileSync(path.join(input, 'source-file-hashes.json'), JSON.stringify({ setId: 'T1', files: { 'old.ts': digest('tampered') } }))
	const rejectedOutput = path.join(fixture, 'rejected')
	const rejected = run(rejectedOutput)
	assert.notEqual(rejected.status, 0)
	assert.match(rejected.stderr, /Pinned input changed: source-file-hashes.json/)
	assert.equal(fs.existsSync(rejectedOutput), false)
})

test('B4 writers refuse write mode without a reviewed base ref', () => {
	const apply = spawnSync(process.execPath, [
		'.agents/skills/merge-pocket-card-sources/scripts/apply-raenonx-b4-api.mjs',
		'--write',
	], { cwd: root, encoding: 'utf8' })
	assert.equal(apply.status, 1)
	assert.match(apply.stderr, /--write requires --base-ref/u)

	const downstream = spawnSync(process.execPath, [
		'.agents/skills/merge-pocket-card-sources/scripts/sync-raenonx-b4-downstream.mjs',
		'--downstream', '../tcgp',
		'--write',
	], { cwd: root, encoding: 'utf8' })
	assert.equal(downstream.status, 1)
	assert.match(downstream.stderr, /--write requires --base-ref/u)
})

test('localization audit accepts printed x2 multipliers but rejects merged prose and numbers', () => {
	const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-multiplier-audit-'))
	const canonical = path.join(temp, 'canonical.json'), localizations = path.join(temp, 'localizations.json'), config = path.join(temp, 'config.json'), output = path.join(temp, 'audit.json')
	fs.writeFileSync(canonical, JSON.stringify({ setId: 'B9', cards: [{ id: 'B9-001', name: 'Fixture', effect: 'x2.' }] }))
	const data = { cards: { 'B9-001': { locales: Object.fromEntries(['en', 'fr', 'es', 'it', 'de', 'pt-br', 'zh-tw'].map(locale => [locale, { name: locale === 'zh-tw' ? '測試' : 'Fixture', effect: 'x2.' }])) } } }
	fs.writeFileSync(localizations, JSON.stringify(data));fs.writeFileSync(config, '{}')
	const args = [path.join(root, '.agents/skills/merge-pocket-card-sources/scripts/audit-pocket-localizations.mjs'), '--canonical', canonical, '--localizations', localizations, '--config', config, '--output', output]
	const valid = spawnSync(process.execPath, args, { encoding: 'utf8' });assert.equal(valid.status, 0, valid.stderr);assert.equal(JSON.parse(fs.readFileSync(output)).passed, true)
	data.cards['B9-001'].locales.it.effect = 'danni20';fs.writeFileSync(localizations, JSON.stringify(data))
	const invalid = spawnSync(process.execPath, args, { encoding: 'utf8' });assert.notEqual(invalid.status, 0);assert(JSON.parse(fs.readFileSync(output)).findings.some(f => f.locale === 'it' && f.kind === 'letter-number-join'))
})
