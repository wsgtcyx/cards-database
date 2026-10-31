import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SCRIPT = path.join(ROOT, 'scripts/audit-pocket-localization-metadata.mjs')
const TARGET_LOCALES = ['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw']

function localizedObject(english, missing = []) {
	const values = Object.fromEntries([
		['en', english],
		...TARGET_LOCALES.filter(locale => !missing.includes(locale)).map(locale => [locale, `${english}-${locale}`]),
	])
	return JSON.stringify(values, null, 4)
}

function localizedObjectWithEnglishExpression(english, expression, missing = []) {
	return localizedObject(english, missing).replace(`"en": ${JSON.stringify(english)}`, `"en": ${expression}`)
}

function createFixture({ complete = false } = {}) {
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'audit-pocket-localizations-'))
	const dataRoot = path.join(root, 'data/Pocket')
	const cardDirectory = path.join(dataRoot, 'Fixture Set')
	fs.mkdirSync(cardDirectory, { recursive: true })
	fs.writeFileSync(`${dataRoot}.ts`, `const serie = {
    id: "pocket",
    name: ${localizedObject('Pocket', complete ? [] : ['zh-tw'])}
}
export default serie
`)
	fs.writeFileSync(path.join(dataRoot, 'Fixture Set.ts'), `const set = {
    id: "T",
    name: ${localizedObject('Fixture Set')},
    boosters: {
        alpha: {
            id: "booster-id-is-not-a-language",
            name: ${localizedObject('Alpha', complete ? [] : ['de'])},
            logo: ${localizedObject('https://example.invalid/logo', complete ? [] : TARGET_LOCALES)}
        }
    }
}
export default set
`)
	fs.writeFileSync(path.join(cardDirectory, '001.ts'), `const englishEffect = "Attach 1 {R} Energy."
const card = {
    id: "card-id-is-not-a-language",
    name: ${localizedObject('Leafling', complete ? [] : ['fr'])},
    image: ${localizedObject('https://example.invalid/card')},
    attacks: [{
        id: "attack-id-is-not-a-language",
        name: ${localizedObject('Ember')},
        effect: ${localizedObjectWithEnglishExpression('Attach 1 {R} Energy.', 'englishEffect', complete ? [] : ['it'])}
    }]
}
export default card
`)
	return { root, dataRoot: 'data/Pocket' }
}

function run(fixture, extra = []) {
	return spawnSync(process.execPath, [
		SCRIPT,
		'--repo-root', fixture.root,
		'--data-root', fixture.dataRoot,
		...extra,
	], { cwd: ROOT, encoding: 'utf8' })
}

test('metadata audit covers series, set, booster assets, and exact card fields', () => {
	const fixture = createFixture()
	try {
		const result = run(fixture)
		assert.equal(result.status, 2, `${result.stdout}\n${result.stderr}`)
		const report = JSON.parse(result.stdout)
		assert.equal(report.passed, false)
		assert.deepEqual(report.targetLocales, TARGET_LOCALES)
		assert.deepEqual(report.summary.entities, { series: 1, sets: 1, cards: 1 })
		assert.equal(report.summary.localizedObjects, 8)
		assert.equal(report.summary.missingValues, 10)
		assert.deepEqual(report.summary.byScope, { series: 1, set: 7, card: 2 })
		assert.equal(report.summary.byLocale.fr, 2)
		assert.equal(report.summary.byLocale.it, 2)
		assert.equal(report.summary.byLocale.de, 2)
		assert.equal(report.summary.byLocale['zh-tw'], 2)
		assert.ok(report.issues.some(issue => issue.scope === 'series' && issue.path === 'name' && issue.locale === 'zh-tw'))
		assert.ok(report.issues.some(issue => issue.scope === 'set' && issue.path === 'boosters.alpha.logo' && issue.locale === 'fr'))
		assert.ok(report.issues.some(issue => issue.scope === 'card' && issue.entityId === 'T-001' && issue.path === 'attacks[0].effect' && issue.locale === 'it'))
		assert.ok(report.issues.every(issue => issue.path !== 'id' && !issue.path.endsWith('.id')))
		assert.ok(report.issues.every(issue => /^[a-f0-9]{64}$/u.test(issue.fileSha256)))
		assert.deepEqual(report.errors, [])
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('metadata audit emits JSON and can explicitly allow an incomplete inventory', () => {
	const fixture = createFixture()
	try {
		const result = run(fixture, ['--allow-incomplete'])
		assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`)
		const report = JSON.parse(result.stdout)
		assert.equal(report.passed, false)
		assert.equal(report.summary.missingValues, 10)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('metadata audit passes complete six-locale metadata and ignores every id field', () => {
	const fixture = createFixture({ complete: true })
	try {
		const result = run(fixture)
		assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`)
		const report = JSON.parse(result.stdout)
		assert.equal(report.passed, true)
		assert.equal(report.summary.missingValues, 0)
		assert.equal(report.summary.structuralErrors, 0)
		assert.deepEqual(report.issues, [])
		assert.deepEqual(report.errors, [])
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('metadata audit reports structural TypeScript failures as machine JSON', () => {
	const fixture = createFixture({ complete: true })
	try {
		fs.writeFileSync(path.join(fixture.root, 'data/Pocket/Fixture Set/001.ts'), 'const card = { name: { en: "broken" }\n')
		const result = run(fixture)
		assert.equal(result.status, 2, `${result.stdout}\n${result.stderr}`)
		const report = JSON.parse(result.stdout)
		assert.equal(report.passed, false)
		assert.equal(report.summary.structuralErrors, 1)
		assert.match(report.errors[0].message, /TypeScript parse error/u)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('Japanese inventory is explicit and does not silently pass an unsupported locale', () => {
 const fixture = createFixture({ complete: true })
 try {
  const result = run(fixture, ['--locales', 'ja'])
  const report = JSON.parse(result.stdout)
  assert.equal(result.status, 2)
  assert.deepEqual(report.targetLocales, ['ja'])
  assert.equal(report.summary.missingValues, 8)
  assert.ok(report.issues.every(issue => issue.locale === 'ja'))
  assert.equal(run(fixture, ['--locales', 'jp']).status, 1)
  assert.equal(run(fixture, ['--locales', 'ja,ja']).status, 1)
 } finally { fs.rmSync(fixture.root, { recursive: true, force: true }) }
})

test('Japanese audit rejects English rules and unresolved game tags', () => {
 const fixture = createFixture({ complete: true })
 try {
  const file = path.join(fixture.root, 'data/Pocket/Fixture Set/001.ts')
  fs.writeFileSync(file, `const card = {
    name: { en: "Bulbasaur", ja: "フシギダネ" },
    image: { en: "https://example.invalid/en/001", ja: "https://example.invalid/en/001" },
    attacks: [{ name: { en: "Tackle", ja: "たいあたり" }, effect: { en: "Draw 1 card.", ja: "Draw 1 card." } }],
    description: { en: "Seed Pokemon", ja: '[Text:CardName id="0"]' }
  }; export default card`)
  const report = JSON.parse(run(fixture, ['--locales', 'ja']).stdout)
  assert.ok(report.issues.some(issue => issue.path === 'attacks[0].effect' && issue.kind === 'english-fallback'))
  assert.ok(report.issues.some(issue => issue.path === 'description' && issue.kind === 'unresolved-markup'))
  assert.ok(report.issues.some(issue => issue.path === 'image' && issue.kind === 'image-fallback'))
  assert.ok(!report.issues.some(issue => issue.scope === 'card' && issue.path === 'name'))
 } finally { fs.rmSync(fixture.root, { recursive: true, force: true }) }
})

test('metadata audit checks an optional set logo without requiring an absent logo', () => {
 const fixture = createFixture({ complete: true })
 const file = path.join(fixture.root, 'data/Pocket/Fixture Set.ts')
 const original = fs.readFileSync(file, 'utf8')
 try {
  assert.equal(run(fixture).status, 0)
  fs.writeFileSync(file, original.replace('    boosters:', '    logo: { en: "https://example.invalid/en/logo" },\n    boosters:'))
  let report = JSON.parse(run(fixture, ['--locales', 'ja']).stdout)
  assert.ok(report.issues.some(issue => issue.scope === 'set' && issue.path === 'logo' && issue.kind === 'missing'))
  fs.writeFileSync(file, original.replace('    boosters:', '    logo: { en: "https://example.invalid/en/logo", ja: "https://example.invalid/en/logo" },\n    boosters:'))
  report = JSON.parse(run(fixture, ['--locales', 'ja']).stdout)
  assert.ok(report.issues.some(issue => issue.scope === 'set' && issue.path === 'logo' && issue.kind === 'image-fallback'))
  fs.writeFileSync(file, original.replace('    boosters:', '    logo: "https://example.invalid/logo",\n    boosters:'))
  report = JSON.parse(run(fixture).stdout)
  assert.ok(report.errors.some(error => error.scope === 'set' && error.path === 'logo'))
 } finally { fs.rmSync(fixture.root, { recursive: true, force: true }) }
})

test('Japanese audit rejects every game-template namespace and missing count units', () => {
 const fixture = createFixture({ complete: true })
 const file = path.join(fixture.root, 'data/Pocket/Fixture Set/001.ts')
 try {
  for (const value of ['[Mst:SeriesName v="SERIES_NAME_2"]', '[/Ctrl:Bold]', '自分の山札を枚引く。', 'エネルギーをランダムに個トラッシュ。']) {
   fs.writeFileSync(file, `const card = { name: { en: "Bulbasaur", ja: "フシギダネ" }, attacks: [{ name: { en: "Draw", ja: "ひく" }, effect: { en: "Draw a card.", ja: ${JSON.stringify(value)} } }] }; export default card`)
   const result = run(fixture, ['--locales', 'ja'])
   const report = JSON.parse(result.stdout)
   assert.equal(result.status, 2, value)
   assert.ok(report.issues.some(issue => issue.scope === 'card' && issue.path === 'attacks[0].effect' && ['unresolved-markup', 'missing-numeric-count'].includes(issue.kind)), value)
   assert.ok(report.summary.invalidValues > 0)
  }
  fs.writeFileSync(file, 'const card = { name: { en: "Bulbasaur", ja: "フシギダネ" }, attacks: [{ name: { en: "Draw", ja: "ひく" }, effect: { en: "Draw a card.", ja: "自分の山札を1枚引く。" } }] }; export default card')
  assert.ok(!JSON.parse(run(fixture, ['--locales', 'ja']).stdout).issues.some(issue => issue.scope === 'card'))
 } finally { fs.rmSync(fixture.root, { recursive: true, force: true }) }
})


test('Japanese audit rejects an English-only series display while allowing native Latin identifiers', () => {
 const fixture = createFixture({ complete: true })
 try {
  const series = path.join(fixture.root, 'data/Pocket.ts')
  fs.writeFileSync(series, 'const serie = { id: "tcgp", name: { en: "Pokémon TCG Pocket", ja: "Pokémon Trading Card Game Pocket" } }; export default serie')
  assert.ok(JSON.parse(run(fixture, ['--locales', 'ja']).stdout).issues.some(x => x.scope === 'series' && x.kind === 'english-fallback'))
  fs.writeFileSync(series, 'const serie = { id: "tcgp", name: { en: "Pokémon TCG Pocket", ja: "Pokémon Trading Card Game Pocket（ポケポケ）" } }; export default serie')
  assert.ok(!JSON.parse(run(fixture, ['--locales', 'ja']).stdout).issues.some(x => x.scope === 'series'))
 } finally { fs.rmSync(fixture.root, { recursive: true, force: true }) }
})
