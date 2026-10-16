import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import jscodeshift from 'jscodeshift'
import { apiDamage, rawDamage } from './pocket-attack-damage.mjs'

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const j = jscodeshift.withParser('ts')
const key = property => property?.key?.name ?? property?.key?.value
const property = (node, name) => node?.properties?.find(p => key(p) === name)?.value
const variable = (source, name) => j(source).find(j.VariableDeclarator, { id: { name } }).nodes()[0]?.init

test('compares damage amounts and modifiers without discarding mechanics', () => {
	assert.equal(apiDamage({ damage: 40 }), apiDamage({ damage: '40' }))
	assert.notEqual(apiDamage({ damage: 40 }), apiDamage({ damage: '40+' }))
	assert.notEqual(apiDamage({ damage: '40+' }), apiDamage({ damage: '40×' }))
	assert.notEqual(apiDamage({ damage: 120 }), apiDamage({ damage: '120-' }))
	assert.equal(apiDamage({ damage: '50x' }), apiDamage({ damage: '50×' }))
	assert.equal(apiDamage({ damage: '120−' }), apiDamage({ damage: '120-' }))
	assert.equal(apiDamage({}), null)
	assert.equal(rawDamage({ damageMarking: { value: 0, symbol: '' } }), null)
	assert.equal(rawDamage({ damageMarking: { value: 50, symbol: 'x' } }), '50×')
	assert.equal(rawDamage({ damageMarking: { value: 80, symbol: '+' } }), '80+')
	assert.throws(() => apiDamage({ damage: '40?' }), /Invalid attack damage/u)
	assert.throws(() => rawDamage({ damageMarking: { value: 40, symbol: '?' } }), /Invalid attack damage/u)
})

test('all reviewed card damage markings match the frozen game-data snapshot', () => {
	const source = JSON.parse(fs.readFileSync(path.join(root, 'meta/pocket-source-reviews/attack-damage/2026-10-16.source.json'), 'utf8'))
	const dataRoot = path.join(root, 'data/Pokémon TCG Pocket')
	const checked = new Set()
	const mismatches = []
	for (const folder of fs.readdirSync(dataRoot, { withFileTypes: true }).filter(entry => entry.isDirectory())) {
		const setFile = path.join(dataRoot, `${folder.name}.ts`)
		if (!fs.existsSync(setFile)) continue
		const setId = property(variable(fs.readFileSync(setFile, 'utf8'), 'set'), 'id').value
		for (const file of fs.readdirSync(path.join(dataRoot, folder.name)).filter(name => /^\d{3}\.ts$/u.test(name))) {
			const id = `${setId}-${file.slice(0, -3)}`
			const reviewed = source.cards[id]
			// Later sets need their own reviewed evidence, not this historical snapshot.
			if (!reviewed) continue
			assert.ok(!checked.has(id), `duplicate card ${id}`)
			checked.add(id)
			const card = variable(fs.readFileSync(path.join(dataRoot, folder.name, file), 'utf8'), 'card')
			const attacks = property(card, 'attacks')?.elements ?? []
			assert.equal(attacks.length, reviewed.attacks.length, `${id} attack count`)
			for (const [index, attack] of attacks.entries()) {
				const actual = apiDamage({ damage: property(attack, 'damage')?.value })
				const expected = rawDamage(reviewed.attacks[index])
				if (actual !== expected) mismatches.push({ id, index, actual, expected })
			}
		}
	}
	assert.equal(checked.size, Object.keys(source.cards).length, 'all reviewed cards must still exist')
	assert.deepEqual(mismatches, [])
})

test('source merge preserves every modifier and refuses conflicting explicit modifiers', t => {
	const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-damage-merge-'))
	t.after(() => fs.rmSync(dir, { recursive: true, force: true }))
	const write = (name, value) => fs.writeFileSync(path.join(dir, `${name}.json`), JSON.stringify(value))
	fs.mkdirSync(path.join(dir, 'images'))
	fs.writeFileSync(path.join(dir, 'images/1.png'), 'fixture-image')
	write('index', [{ set: 'T1', number: 1, name: 'Fixture ex', rarity: 'C' }])
	write('review', { schemaVersion: 1, setId: 'T1', cards: { 'T1-001': { fields: { illustrator: { value: 'Fixture', evidence: ['fixture'] } } } } })
	write('sources', { index: {}, deckGym: {}, pokemonMeta: {} })
	for (const [left, right, expected] of [[50, '50+', '50+'], [50, '50x', '50×'], [120, '120-', '120-'], ['50+', '50×', undefined], [50.9, '50-', 'reject-invalid'], [50, '50.9-', 'reject-invalid']]) {
		write('deckgym', [{ Pokemon: { id: 'T1 001', name: 'Fixture ex', hp: 60, energy_type: 'Colorless', stage: 0, rarity: '◊', retreat_cost: [], attacks: [{ title: 'Test Attack', fixed_damage: left, energy_required: ['Colorless'] }] } }])
		write('pokemon-meta', [{ pokemonId: 'T1-001', name: 'Fixture ex', cardType: 'Pokemon', hp: '60', energyType: ['Colorless'], subType: 'Basic', rarity: 'd-1', retreat: 0, moves: [{ name: 'Test Attack', hp: right, energyCost: ['Colorless'] }] }])
		const args = ['--set-id', 'T1', '--total', '1', '--images', path.join(dir, 'images'), '--output', dir]
		for (const name of ['index', 'deckgym', 'pokemon-meta', 'review', 'sources']) args.push(`--${name}`, path.join(dir, `${name}.json`))
		const result = spawnSync(process.execPath, [path.join(root, '.agents/skills/merge-pocket-card-sources/scripts/merge-pocket-card-sources.mjs'), ...args], { encoding: 'utf8' })
		if (expected === 'reject-invalid') {
			assert.notEqual(result.status, 0, `${left} vs ${right} must reject malformed damage`)
			assert.match(result.stderr, /Invalid attack damage/u)
			continue
		}
		assert.ok([0, 2].includes(result.status), result.stderr)
		const canonical = JSON.parse(fs.readFileSync(path.join(dir, 'T1.canonical.json'), 'utf8'))
		const provenance = JSON.parse(fs.readFileSync(path.join(dir, 'T1.provenance.json'), 'utf8'))
		if (expected === undefined) assert.equal(provenance.cards[0].fields.attacks.status, 'unresolved')
		else assert.equal(apiDamage(canonical.cards[0].attacks[0]), expected, `${left} vs ${right}`)
	}
})
