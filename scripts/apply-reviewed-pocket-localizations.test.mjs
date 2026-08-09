import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SCRIPT = path.join(ROOT, 'scripts/apply-reviewed-pocket-localizations.mjs')

function digest(value) {
	return crypto.createHash('sha256').update(value).digest('hex')
}

function git(cwd, args) {
	const result = spawnSync('git', args, { cwd, encoding: 'utf8' })
	assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`)
	return result.stdout.trim()
}

function createFixture() {
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'reviewed-pocket-localizations-'))
	const dataRoot = path.join(root, 'data/Pocket')
	const cardDirectory = path.join(dataRoot, 'Fixture Set')
	const evidenceDirectory = path.join(root, 'evidence')
	fs.mkdirSync(cardDirectory, { recursive: true })
	fs.mkdirSync(evidenceDirectory, { recursive: true })
	const seriesFile = path.join(root, 'data/Pocket.ts')
	const seriesSource = `const serie = {
    id: "tcgp",
    name: { en: "Pokémon TCG Pocket" }
}
export default serie
`
	fs.writeFileSync(seriesFile, seriesSource)
	const setFile = path.join(dataRoot, 'Fixture Set.ts')
	const setSource = `const set = {
    id: "T",
    name: { en: "Fixture Set" },
	boosters: {
		pikachu: { name: { en: "Pikachu" } },
		"ruler-of-the-skies": {
			logo: { en: "https://example.invalid/en/logo.webp" }
		}
	}
}
export default set
`
	fs.writeFileSync(setFile, setSource)
	const cardFile = path.join(cardDirectory, '001.ts')
	const cardSource = `const englishEffect = "Attach 1 {R} Energy."
const card = {
    id: "this-is-not-a-language",
    name: {
        en: "Leafling"
    },
    description: {
        en: "It lives in forests.",
        "pt-br": "Vive nas florestas.",
        "zh-tw": "它生活在森林裡。",
    },
    attacks: [{
        name: { en: "Ember" },
        effect: {
            en: englishEffect,
            fr: "Ancien texte {R}."
        }
    }]
}
export default card
`
	fs.writeFileSync(cardFile, cardSource)
	const evidenceFile = path.join(evidenceDirectory, 'source.json')
	const evidenceBytes = `${JSON.stringify({ card: 'T-001', reviewed: true })}\n`
	fs.writeFileSync(evidenceFile, evidenceBytes)
	git(root, ['init', '-q'])
	git(root, ['add', '.'])
	git(root, ['-c', 'user.name=Codex Test', '-c', 'user.email=codex@example.invalid', 'commit', '-qm', 'fixture'])
	const baseRef = git(root, ['rev-parse', 'HEAD'])
	const sourceHash = digest(evidenceBytes)
	return {
		root,
		dataRoot: 'data/Pocket',
		seriesFile,
		seriesSource,
		setFile,
		setSource,
		cardFile,
		cardSource,
		baseRef,
		sourceHash,
	}
}

function sourceRegistry(fixture) {
	return {
		fixture: {
			file: 'evidence/source.json',
			sha256: fixture.sourceHash,
			role: 'localized metadata review evidence',
			version: 'fixture-v1',
			license: 'test-only',
			url: 'https://example.invalid/pinned/fixture-v1',
		},
	}
}

function evidence(fixture, locator) {
	return [{ sourceId: 'fixture', sha256: fixture.sourceHash, locator }]
}

function fillDecision(fixture, overrides = {}) {
	return {
		entityKind: 'card',
		entityId: 'T-001',
		file: 'data/Pocket/Fixture Set/001.ts',
		path: 'description',
		locale: 'fr',
		mode: 'fill',
		expectedCurrent: null,
		expectedEnglish: 'It lives in forests.',
		value: 'Il vit dans les forêts.',
		evidence: evidence(fixture, 'card.T-001.description.fr'),
		...overrides,
	}
}

function correctionDecision(fixture, overrides = {}) {
	return {
		entityKind: 'card',
		entityId: 'T-001',
		file: 'data/Pocket/Fixture Set/001.ts',
		path: 'attacks[0].effect',
		locale: 'fr',
		mode: 'correction',
		expectedCurrent: 'Ancien texte {R}.',
		expectedEnglish: 'Attach 1 {R} Energy.',
		value: 'Attachez 1 Énergie {R}.',
		evidence: evidence(fixture, 'card.T-001.attacks.0.effect.fr'),
		...overrides,
	}
}

function seriesFillDecision(fixture, overrides = {}) {
	return {
		entityKind: 'series',
		entityId: 'tcgp',
		file: 'data/Pocket.ts',
		path: 'name',
		locale: 'zh-tw',
		mode: 'fill',
		expectedCurrent: null,
		expectedEnglish: 'Pokémon TCG Pocket',
		value: 'Pokémon TCG Pocket',
		evidence: evidence(fixture, 'series.tcgp.name.zh-tw'),
		...overrides,
	}
}

function setFillDecision(fixture, overrides = {}) {
	return {
		entityKind: 'set',
		entityId: 'T',
		file: 'data/Pocket/Fixture Set.ts',
		path: 'boosters.pikachu.name',
		locale: 'de',
		mode: 'fill',
		expectedCurrent: null,
		expectedEnglish: 'Pikachu',
		value: 'Pikachu',
		evidence: evidence(fixture, 'set.T.boosters.pikachu.name.de'),
		...overrides,
	}
}

function quotedSetKeyFillDecision(fixture, overrides = {}) {
	return {
		entityKind: 'set',
		entityId: 'T',
		file: 'data/Pocket/Fixture Set.ts',
		path: 'boosters["ruler-of-the-skies"].logo',
		locale: 'fr',
		mode: 'fill',
		expectedCurrent: null,
		expectedEnglish: 'https://example.invalid/en/logo.webp',
		value: 'https://example.invalid/fr/logo.webp',
		evidence: evidence(fixture, 'set.T.boosters.ruler-of-the-skies.logo.fr'),
		...overrides,
	}
}

function writeArtifact(fixture, decisions, options = {}) {
	const { filename = 'decisions.json', ...artifactOverrides } = options
	const artifact = {
		schemaVersion: 1,
		baseRef: fixture.baseRef,
		sources: sourceRegistry(fixture),
		decisions,
		...artifactOverrides,
	}
	const file = path.join(fixture.root, filename)
	fs.writeFileSync(file, `${JSON.stringify(artifact, null, 2)}\n`)
	return file
}

function predecessorReference(fixture, artifact) {
	return {
		file: path.relative(fixture.root, artifact).split(path.sep).join('/'),
		sha256: digest(fs.readFileSync(artifact)),
	}
}

function run(fixture, artifact, extra = []) {
	return spawnSync(process.execPath, [
		SCRIPT,
		'--repo-root', fixture.root,
		'--data-root', fixture.dataRoot,
		'--decisions', artifact,
		...extra,
	], { cwd: ROOT, encoding: 'utf8' })
}

test('reviewed writer dry-runs and atomically applies series, set, and card decisions', () => {
	const fixture = createFixture()
	try {
		const artifact = writeArtifact(fixture, [
			seriesFillDecision(fixture),
			setFillDecision(fixture),
			fillDecision(fixture),
			correctionDecision(fixture),
		])
		const dryRun = run(fixture, artifact)
		assert.equal(dryRun.status, 0, `${dryRun.stdout}\n${dryRun.stderr}`)
		const dryReport = JSON.parse(dryRun.stdout)
		assert.equal(dryReport.mode, 'dry-run')
		assert.equal(dryReport.summary.changedDecisions, 4)
		assert.equal(dryReport.summary.changedFiles, 3)
		assert.equal(fs.readFileSync(fixture.seriesFile, 'utf8'), fixture.seriesSource)
		assert.equal(fs.readFileSync(fixture.setFile, 'utf8'), fixture.setSource)
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)

		const missingBaseRef = run(fixture, artifact, ['--write'])
		assert.notEqual(missingBaseRef.status, 0)
		assert.match(missingBaseRef.stderr, /--write requires --base-ref/u)
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)

		const applied = run(fixture, artifact, ['--write', '--base-ref', fixture.baseRef])
		assert.equal(applied.status, 0, `${applied.stdout}\n${applied.stderr}`)
		const source = fs.readFileSync(fixture.cardFile, 'utf8')
		assert.match(source, /fr: "Il vit dans les forêts\."/u)
		assert.match(source, /fr: "Attachez 1 Énergie \{R\}\."/u)
		assert.match(source, /id: "this-is-not-a-language"/u)
		assert.ok(source.indexOf('fr: "Il vit dans les forêts."') < source.indexOf('"pt-br": "Vive nas florestas."'))
		assert.match(fs.readFileSync(fixture.seriesFile, 'utf8'), /"zh-tw": "Pokémon TCG Pocket"/u)
		assert.match(fs.readFileSync(fixture.setFile, 'utf8'), /de: "Pikachu"/u)

		const idempotent = run(fixture, artifact, ['--write', '--base-ref', fixture.baseRef])
		assert.equal(idempotent.status, 0, `${idempotent.stdout}\n${idempotent.stderr}`)
		const idempotentReport = JSON.parse(idempotent.stdout)
		assert.equal(idempotentReport.summary.changedFiles, 0)
		assert.equal(idempotentReport.summary.alreadyAppliedDecisions, 4)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer resolves a JSON-quoted object key in a field path', () => {
	const fixture = createFixture()
	try {
		const artifact = writeArtifact(fixture, [quotedSetKeyFillDecision(fixture)])
		const applied = run(fixture, artifact, ['--write', '--base-ref', fixture.baseRef])
		assert.equal(applied.status, 0, `${applied.stdout}\n${applied.stderr}`)
		assert.match(fs.readFileSync(fixture.setFile, 'utf8'), /fr: "https:\/\/example\.invalid\/fr\/logo\.webp"/u)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer preserves a trailing English line comment when appending a locale', () => {
	const fixture = createFixture()
	try {
		const commentedSource = fixture.setSource.replace(
			'name: { en: "Pikachu" }',
			`name: {
            en: "Pikachu" // reviewed source note
        }`,
		)
		fs.writeFileSync(fixture.setFile, commentedSource)
		git(fixture.root, ['add', 'data/Pocket/Fixture Set.ts'])
		git(fixture.root, ['-c', 'user.name=Codex Test', '-c', 'user.email=codex@example.invalid', 'commit', '-qm', 'comment fixture'])
		fixture.baseRef = git(fixture.root, ['rev-parse', 'HEAD'])
		fixture.setSource = commentedSource

		const artifact = writeArtifact(fixture, [setFillDecision(fixture)])
		const applied = run(fixture, artifact, ['--write', '--base-ref', fixture.baseRef])
		assert.equal(applied.status, 0, `${applied.stdout}\n${applied.stderr}`)
		const source = fs.readFileSync(fixture.setFile, 'utf8')
		assert.match(source, /en: "Pikachu", \/\/ reviewed source note\n\s+de: "Pikachu"/u)

		const idempotent = run(fixture, artifact, ['--write', '--base-ref', fixture.baseRef])
		assert.equal(idempotent.status, 0, `${idempotent.stdout}\n${idempotent.stderr}`)
		assert.equal(JSON.parse(idempotent.stdout).summary.alreadyAppliedDecisions, 1)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer validates every decision before writing any file', () => {
	const fixture = createFixture()
	try {
		const artifact = writeArtifact(fixture, [
			seriesFillDecision(fixture),
			setFillDecision(fixture),
			fillDecision(fixture),
			correctionDecision(fixture, { expectedCurrent: 'Wrong reviewed baseline' }),
		])
		const result = run(fixture, artifact, ['--write', '--base-ref', fixture.baseRef])
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, /correction CAS failed/u)
		assert.equal(fs.readFileSync(fixture.seriesFile, 'utf8'), fixture.seriesSource)
		assert.equal(fs.readFileSync(fixture.setFile, 'utf8'), fixture.setSource)
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer rejects source hash drift before evaluating entity changes', () => {
	const fixture = createFixture()
	try {
		const artifact = writeArtifact(fixture, [fillDecision(fixture)])
		fs.appendFileSync(path.join(fixture.root, 'evidence/source.json'), '{"tampered":true}\n')
		const result = run(fixture, artifact)
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, /SHA-256 mismatch/u)
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer fails closed on energy-token loss and unresolved source tags', () => {
	const fixture = createFixture()
	try {
		const lostTokenArtifact = writeArtifact(fixture, [correctionDecision(fixture, {
			value: 'Attachez une Énergie.',
		})])
		const lostToken = run(fixture, lostTokenArtifact)
		assert.notEqual(lostToken.status, 0)
		assert.match(lostToken.stderr, /energy token mismatch/u)

		const placeholderArtifact = writeArtifact(fixture, [correctionDecision(fixture, {
			value: 'Attachez 1 Énergie {R}.[Text:Unbound v="x"]',
		})])
		const placeholder = run(fixture, placeholderArtifact)
		assert.notEqual(placeholder.status, 0)
		assert.match(placeholder.stderr, /unresolved source placeholder/u)
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer binds every entityId to its exact series, set, or card file', () => {
	const fixture = createFixture()
	try {
		const mismatches = [
			[fillDecision(fixture, { entityId: 'T-002' }), /does not match file identity T-001/u],
			[setFillDecision(fixture, { entityId: 'WRONG' }), /does not match file identity T/u],
			[seriesFillDecision(fixture, { entityId: 'wrong-series' }), /does not match file identity tcgp/u],
		]
		for (const [decision, expected] of mismatches) {
			const artifact = writeArtifact(fixture, [decision])
			const result = run(fixture, artifact)
			assert.notEqual(result.status, 0)
			assert.match(result.stderr, expected)
		}
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer refuses to overwrite unrelated worktree drift from baseRef', () => {
	const fixture = createFixture()
	try {
		const artifact = writeArtifact(fixture, [fillDecision(fixture)])
		fs.appendFileSync(fixture.cardFile, '// user worktree edit\n')
		const result = run(fixture, artifact)
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, /worktree differs from/u)
		const current = fs.readFileSync(fixture.cardFile, 'utf8')
		assert.match(current, /\/\/ user worktree edit/u)
		assert.doesNotMatch(current, /Il vit dans les forêts/u)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer rejects duplicate decisions for one field and locale', () => {
	const fixture = createFixture()
	try {
		const decision = fillDecision(fixture)
		const artifact = writeArtifact(fixture, [decision, { ...decision }])
		const result = run(fixture, artifact)
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, /Duplicate localization decision/u)
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer requires explicit entityKind and entityId', () => {
	const fixture = createFixture()
	try {
		const decision = fillDecision(fixture)
		const { entityKind: _entityKind, ...withoutKind } = decision
		const missingKind = run(fixture, writeArtifact(fixture, [withoutKind]))
		assert.notEqual(missingKind.status, 0)
		assert.match(missingKind.stderr, /entityKind must be one of/u)

		const { entityId: _entityId, ...withoutId } = decision
		const missingId = run(fixture, writeArtifact(fixture, [withoutId]))
		assert.notEqual(missingId.status, 0)
		assert.match(missingId.stderr, /entityId must be a non-empty string/u)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer replays a pinned predecessor before applying a correction to the same field', () => {
	const fixture = createFixture()
	try {
		const predecessor = writeArtifact(fixture, [fillDecision(fixture)], { filename: 'predecessor.json' })
		const reference = predecessorReference(fixture, predecessor)
		const predecessorApply = run(fixture, predecessor, ['--write', '--base-ref', fixture.baseRef])
		assert.equal(predecessorApply.status, 0, `${predecessorApply.stdout}\n${predecessorApply.stderr}`)

		const correction = fillDecision(fixture, {
			mode: 'correction',
			expectedCurrent: 'Il vit dans les forêts.',
			value: 'Il habite dans les forêts.',
			evidence: evidence(fixture, 'card.T-001.description.fr.correction'),
		})
		const artifact = writeArtifact(fixture, [correction], { predecessors: [reference] })
		const dryRun = run(fixture, artifact)
		assert.equal(dryRun.status, 0, `${dryRun.stdout}\n${dryRun.stderr}`)
		const dryReport = JSON.parse(dryRun.stdout)
		assert.deepEqual(dryReport.predecessors, [reference])
		assert.equal(dryReport.summary.corrections, 1)
		assert.equal(dryReport.summary.changedFiles, 1)

		const applied = run(fixture, artifact, ['--write', '--base-ref', fixture.baseRef])
		assert.equal(applied.status, 0, `${applied.stdout}\n${applied.stderr}`)
		assert.match(fs.readFileSync(fixture.cardFile, 'utf8'), /fr: "Il habite dans les forêts\."/u)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer rejects a predecessor whose pinned artifact hash does not match', () => {
	const fixture = createFixture()
	try {
		const predecessor = writeArtifact(fixture, [fillDecision(fixture)], { filename: 'predecessor.json' })
		const reference = predecessorReference(fixture, predecessor)
		const artifact = writeArtifact(fixture, [correctionDecision(fixture)], {
			predecessors: [{ ...reference, sha256: '0'.repeat(64) }],
		})
		const result = run(fixture, artifact)
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, /predecessors\[0\].*SHA-256 mismatch/u)
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer rejects a predecessor with a different baseRef', () => {
	const fixture = createFixture()
	try {
		const predecessor = writeArtifact(fixture, [fillDecision(fixture)], {
			filename: 'predecessor.json',
			baseRef: 'f'.repeat(40),
		})
		const artifact = writeArtifact(fixture, [correctionDecision(fixture)], {
			predecessors: [predecessorReference(fixture, predecessor)],
		})
		const result = run(fixture, artifact)
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, /predecessor baseRef .* does not match decision artifact baseRef/u)
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer rejects nested predecessor chains even when the nested list is empty', () => {
	const fixture = createFixture()
	try {
		const predecessor = writeArtifact(fixture, [fillDecision(fixture)], {
			filename: 'predecessor.json',
			predecessors: [],
		})
		const artifact = writeArtifact(fixture, [correctionDecision(fixture)], {
			predecessors: [predecessorReference(fixture, predecessor)],
		})
		const result = run(fixture, artifact)
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, /must not declare nested predecessors/u)
		assert.equal(fs.readFileSync(fixture.cardFile, 'utf8'), fixture.cardSource)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})

test('reviewed writer rejects extra worktree drift beyond the predecessor-derived baseline', () => {
	const fixture = createFixture()
	try {
		const predecessor = writeArtifact(fixture, [fillDecision(fixture)], { filename: 'predecessor.json' })
		const reference = predecessorReference(fixture, predecessor)
		const predecessorApply = run(fixture, predecessor, ['--write', '--base-ref', fixture.baseRef])
		assert.equal(predecessorApply.status, 0, `${predecessorApply.stdout}\n${predecessorApply.stderr}`)
		fs.appendFileSync(fixture.cardFile, '// unrelated user drift\n')

		const correction = fillDecision(fixture, {
			mode: 'correction',
			expectedCurrent: 'Il vit dans les forêts.',
			value: 'Il habite dans les forêts.',
		})
		const artifact = writeArtifact(fixture, [correction], { predecessors: [reference] })
		const result = run(fixture, artifact, ['--write', '--base-ref', fixture.baseRef])
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, /worktree differs from the baseline derived from .* declared predecessors/u)
		const current = fs.readFileSync(fixture.cardFile, 'utf8')
		assert.match(current, /\/\/ unrelated user drift/u)
		assert.doesNotMatch(current, /Il habite dans les forêts/u)
	} finally {
		fs.rmSync(fixture.root, { recursive: true, force: true })
	}
})
