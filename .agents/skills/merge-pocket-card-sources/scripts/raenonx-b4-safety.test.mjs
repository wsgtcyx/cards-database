import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import test from 'node:test'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { normalizeRaenonxName } from './normalize-raenonx-name.mjs'

const root = path.resolve(fileURLToPath(new URL('../../../..', import.meta.url)))

test('normalizes only missing separators in localized form names', () => {
	assert.equal(normalizeRaenonxName('en', 'Teal MaskOgerpon'), 'Teal Mask Ogerpon')
	assert.equal(normalizeRaenonxName('fr', "Goupixd'Alola"), "Goupix d'Alola")
	assert.equal(normalizeRaenonxName('es', 'Zigzagoonde Galar'), 'Zigzagoon de Galar')
	assert.equal(normalizeRaenonxName('pt', 'Ninetalesde Alola ex'), 'Ninetales de Alola ex')
	assert.equal(normalizeRaenonxName('zh', '阿羅拉六尾'), '阿羅拉六尾')
	assert.equal(normalizeRaenonxName('it', 'Mega Charizard[C:Nbsp ]Y-ex'), 'Mega Charizard Y-ex')
	assert.equal(normalizeRaenonxName('es', 'Fase[C:Nbsp ]2'), 'Fase 2')
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
