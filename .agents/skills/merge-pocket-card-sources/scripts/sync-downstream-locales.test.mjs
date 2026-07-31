import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const script = fileURLToPath(new URL('./sync-downstream-locales.mjs', import.meta.url))
const locales = ['en-US', 'fr-FR', 'es-ES', 'it-IT', 'de-DE', 'pt-BR', 'zh-TW']
const files = ['en.json', 'fr.json', 'es.json', 'it.json', 'de.json', 'pt.json', 'zh-TW.json']

function run(command, args, cwd) {
	const result = spawnSync(command, args, { cwd, encoding: 'utf8' })
	assert.equal(result.status, 0, result.stderr)
	return result
}

test('replace is idempotent, preserves mixed promo rarity, and refuses worktree drift', () => {
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-downstream-sync-'))
	try {
		const source = path.join(root, 'source')
		const downstream = path.join(root, 'downstream')
		for (const locale of locales) {
			const directory = path.join(source, 'metadata/cards', locale)
			fs.mkdirSync(directory, { recursive: true })
			fs.writeFileSync(path.join(directory, 'cards.extra.json'), `${JSON.stringify([
				{ set: 'P-Z', number: 1, name: `${locale} one`, rarity: 'C' },
				{ set: 'P-Z', number: 2, name: `${locale} two`, rarity: 'None' },
			])}\n`)
		}
		fs.mkdirSync(path.join(downstream, 'locales/card'), { recursive: true })
		for (const file of files) {
			fs.writeFileSync(path.join(downstream, 'locales/card', file), `{
  "001": {
    "id": "001"
  },
  "100": {
    "id": "100"
  },
  "OLD-001": {
    "id": "OLD-001"
  },
  "P-Z-001": {
    "id": "P-Z-001",
    "name": "stale"
  }
}
`)
		}
		fs.mkdirSync(path.join(downstream, 'lib/config'), { recursive: true })
		fs.writeFileSync(path.join(downstream, 'lib/config/cardRarity.additions.json'), `${JSON.stringify({
			'OLD-001': 'd1',
			'P-Z-001': 'pr',
		}, null, 2)}\n`)
		run('git', ['init', '-q'], downstream)
		run('git', ['config', 'user.email', 'test@example.invalid'], downstream)
		run('git', ['config', 'user.name', 'Pocket sync test'], downstream)
		run('git', ['add', '.'], downstream)
		run('git', ['commit', '-qm', 'fixture'], downstream)

		const args = [
			script,
			'--source-root', source,
			'--downstream', downstream,
			'--set-id', 'P-Z',
			'--set-name', 'Promo fixture',
			'--expected-count', '2',
			'--image-languages', 'en=en,fr=fr,es=es,it=it,de=de,pt=pt-br,zh-TW=zh-tw',
			'--base-ref', 'HEAD',
			'--write',
		]
		run(process.execPath, args, root)
		const englishText = fs.readFileSync(path.join(downstream, 'locales/card/en.json'), 'utf8')
		assert.equal((englishText.match(/^  "P-Z-001":/gmu) ?? []).length, 1)
		assert.ok(englishText.indexOf('  "001":') < englishText.indexOf('  "100":'))
		assert.deepEqual(JSON.parse(englishText)['P-Z-001'].name, 'en-US one')
		const french = JSON.parse(fs.readFileSync(path.join(downstream, 'locales/card/fr.json'), 'utf8'))
		assert.match(french['P-Z-001'].image, /\/fr\/tcgp\/P-Z\/001$/u)
		const rarity = JSON.parse(fs.readFileSync(path.join(downstream, 'lib/config/cardRarity.additions.json'), 'utf8'))
		assert.equal(rarity['P-Z-001'], 'd1')
		assert.equal(rarity['P-Z-002'], 'pr')

		fs.appendFileSync(path.join(downstream, 'locales/card/fr.json'), '\n')
		const rejected = spawnSync(process.execPath, args, { cwd: root, encoding: 'utf8' })
		assert.notEqual(rejected.status, 0)
		assert.match(rejected.stderr, /refusing to overwrite user changes/u)
	} finally {
		fs.rmSync(root, { recursive: true, force: true })
	}
})
