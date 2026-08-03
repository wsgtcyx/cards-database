import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import test from 'node:test'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SCRIPT = path.join(ROOT, 'scripts/apply-pocket-card-integrity-fixes.mjs')

test('apply rejects incomplete reports before resolving any card path', () => {
	const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-integrity-'))
	const report = path.join(tempRoot, 'report.json')
	fs.writeFileSync(report, JSON.stringify({ cards: [] }))

	try {
		const result = spawnSync(process.execPath, [SCRIPT, '--report', report], {
			cwd: ROOT,
			encoding: 'utf8',
		})
		assert.notEqual(result.status, 0)
		assert.match(`${result.stdout}\n${result.stderr}`, /schemaVersion 1/u)
	} finally {
		fs.rmSync(tempRoot, { recursive: true, force: true })
	}
})

test('apply rejects report paths outside the Pocket data root before writing', () => {
	const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-integrity-'))
	const target = path.join(tempRoot, 'target.ts')
	const report = path.join(tempRoot, 'report.json')
	fs.writeFileSync(target, 'const card = { name: { en: "Original" } }\n')
		fs.writeFileSync(report, JSON.stringify({
			schemaVersion: 1,
			summary: { cards: 1, generatedCards: 1, raenonxJoin: 1, missing: [] },
			cards: [{
			id: 'A1-001',
			sourceFile: path.relative(ROOT, target).split(path.sep).join('/'),
			expectedNames: { en: 'Injected' },
		}],
	}))

	try {
		const result = spawnSync(process.execPath, [SCRIPT, '--report', report], {
			cwd: ROOT,
			encoding: 'utf8',
		})
		assert.notEqual(result.status, 0)
		assert.match(`${result.stdout}\n${result.stderr}`, /Invalid card source path|escapes the Pocket data root/u)
		assert.equal(fs.readFileSync(target, 'utf8'), 'const card = { name: { en: "Original" } }\n')
	} finally {
		fs.rmSync(tempRoot, { recursive: true, force: true })
	}
})

test('apply rejects a report id that points at a different card file', () => {
	const tempFolder = fs.mkdtempSync(path.join(ROOT, 'data/Pokémon TCG Pocket/.integrity-test-'))
	const folder = path.basename(tempFolder)
	const setFile = path.join(ROOT, 'data/Pokémon TCG Pocket', `${folder}.ts`)
	const cardFile = path.join(tempFolder, '001.ts')
	const report = path.join(tempFolder, 'report.json')
	fs.writeFileSync(setFile, 'const set = { id: "TEST" }\n')
	fs.writeFileSync(cardFile, 'const card = { name: { en: "Original" } }\n')
		fs.writeFileSync(report, JSON.stringify({
			schemaVersion: 1,
			summary: { cards: 1, generatedCards: 1, raenonxJoin: 1, missing: [] },
			cards: [{
			id: 'TEST-002',
			sourceFile: path.relative(ROOT, cardFile).split(path.sep).join('/'),
			expectedNames: { en: 'Injected' },
		}],
	}))

	try {
		const result = spawnSync(process.execPath, [SCRIPT, '--report', report], {
			cwd: ROOT,
			encoding: 'utf8',
		})
		assert.notEqual(result.status, 0)
		assert.match(`${result.stdout}\n${result.stderr}`, /does not match/u)
		assert.equal(fs.readFileSync(cardFile, 'utf8'), 'const card = { name: { en: "Original" } }\n')
	} finally {
		fs.rmSync(setFile, { force: true })
		fs.rmSync(tempFolder, { recursive: true, force: true })
	}
})
