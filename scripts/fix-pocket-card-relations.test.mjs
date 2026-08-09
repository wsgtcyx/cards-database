import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const locales = ['en', 'de', 'es', 'fr', 'it', 'pt-br', 'zh-tw']

function localized(value) {
	return `{ ${locales.map(locale => `${JSON.stringify(locale)}: ${value}`).join(', ')} }`
}

function runFixture(mechanic, abilities) {
	const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-relations-audit-'))
	const data = path.join(temporaryRoot, 'data')
	const set = path.join(data, 'Test Set')
	fs.mkdirSync(set, { recursive: true })
	fs.writeFileSync(path.join(set, '001.ts'), `const dynamicEffect = 'Effect'\nconst ability = { name: ${localized("'Test Ability'")}, effect: ${localized("'Effect'")} }\nconst card = { name: ${localized("'Testmon'")}, abilities: ${abilities ?? `[{ name: ${localized("'Test Ability'")}, ${mechanic} }]`} }\nexport default card\n`)
	const source = fs.readFileSync(path.join(root, 'scripts/fix-pocket-card-relations.mjs'), 'utf8')
		.replace("const ROOT = path.resolve(import.meta.dirname, '..')", 'const ROOT = process.cwd()')
		.replace("const DATA = path.join(ROOT, 'data/Pokémon TCG Pocket')", 'const DATA = process.env.RELATION_FIXTURE_DATA')
	const result = spawnSync(process.execPath, ['--input-type=module', '--eval', source], {
		cwd: root,
		encoding: 'utf8',
		env: { ...process.env, RELATION_FIXTURE_DATA: data },
	})
	fs.rmSync(temporaryRoot, { recursive: true, force: true })
	return result
}

test('Pocket card relation metadata is clean and the fixer is idempotent', () => {
	const result = spawnSync(process.execPath, ['scripts/fix-pocket-card-relations.mjs'], { cwd: root, encoding: 'utf8' })
	assert.equal(result.status, 0, result.stderr || result.stdout)
	const report = JSON.parse(result.stdout)
	assert.equal(report.mechanicIdentityCollisions, 0)
	assert.equal(report.mechanicChanges, 0)
	assert.equal(report.evolveFromChanges, 0)
	assert.equal(report.totalChanges, 0)
})

test('Pocket mechanic audit fails closed on missing and non-literal Ability effects', () => {
	for (const [mechanic, expected] of [
		['', /missing abilities\.effect/u],
		[`effect: { en: dynamicEffect, ${locales.slice(1).map(locale => `${JSON.stringify(locale)}: 'Effect'`).join(', ')} }`, /abilities\.effect\.en must be a string literal/u],
	]) {
		const result = runFixture(mechanic)
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, expected)
	}
	const indirect = runFixture('', '[ability]')
	assert.notEqual(indirect.status, 0)
	assert.match(indirect.stderr, /every abilities entry must be an object literal/u)
})
