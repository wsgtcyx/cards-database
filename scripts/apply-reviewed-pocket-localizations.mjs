#!/usr/bin/env node

/**
 * Apply a field-level reviewed localization artifact without importing code.
 *
 * Artifact schema (version 1):
 * {
 *   baseRef: "<full commit>",
 *   predecessors: [{ file: "<repository-relative JSON>", sha256: "<digest>" }],
 *   sources: { id: { file, sha256, role, version, license, url } },
 *   decisions: [{
 *     entityKind, entityId, file, path, locale, mode, expectedCurrent, expectedEnglish,
 *     value, evidence: [{ sourceId, sha256, locator }]
 *   }]
 * }
 *
 * Dry-run is the default. Write mode also requires a matching --base-ref and
 * emits a machine-readable receipt on stdout after an all-or-nothing apply.
 */

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

import {
	TARGET_LOCALES,
	findProperty,
	findVariableObject,
	parseFieldPath,
	parseTypeScript,
	propertyInitializer,
	propertyName,
	relativePosix,
	resolveFieldPath,
	resolveInside,
	staticString,
	stringProperty,
} from './utils/pocket-localization-ast.mjs'

const SCRIPT_ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const SHA256_PATTERN = /^[a-f0-9]{64}$/u
const FULL_GIT_HASH_PATTERN = /^(?:[a-f0-9]{40}|[a-f0-9]{64})$/u
const CARD_FILENAME_PATTERN = /^\d{3}\.ts$/u
const ENTITY_VARIABLES = Object.freeze({
	series: 'serie',
	set: 'set',
	card: 'card',
})
const ENERGY_TOKEN_PATTERN = /\{([^{}]+)\}/gu
const ENERGY_TOKENS = new Set(['C', 'G', 'R', 'W', 'L', 'P', 'F', 'D', 'M'])
const SOURCE_PLACEHOLDER_PATTERN = /\[\/?(?:Text|Img|Num|Ctrl|Gr):|\{\{[^{}]+\}\}|__[A-Z0-9_]+__|\$\{[^{}]+\}/u
const SENSITIVE_URL_PATTERN = /(?:authorization|bearer|cookie|credential|secret|signature|token)=/iu

function cliValue(name, fallback) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) {
		const value = process.argv[exact + 1]
		if (!value || value.startsWith('--')) throw new Error(`--${name} requires a value`)
		return value
	}
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback
}

function sha256(value) {
	return crypto.createHash('sha256').update(value).digest('hex')
}

function assertPlainObject(value, label) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} must be an object`)
	return value
}

function assertNonEmptyString(value, label) {
	if (typeof value !== 'string' || value.trim().length === 0) throw new Error(`${label} must be a non-empty string`)
	return value
}

function assertRegularRepositoryFile(repoRoot, relativeFile, label) {
	const target = resolveInside(repoRoot, relativeFile, label)
	const stat = fs.lstatSync(target)
	if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`${label} must be a regular, non-symbolic file: ${relativeFile}`)
	const realRoot = fs.realpathSync(repoRoot)
	const realTarget = fs.realpathSync(target)
	const relative = path.relative(realRoot, realTarget)
	if (!relative || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
		throw new Error(`${label} resolves outside repository root: ${relativeFile}`)
	}
	return realTarget
}

function validateSourceRegistry(repoRoot, sources) {
	assertPlainObject(sources, 'sources')
	const entries = Object.entries(sources)
	if (entries.length === 0) throw new Error('sources must contain at least one pinned source')
	const verified = new Map()
	for (const [sourceId, rawSource] of entries) {
		if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(sourceId)) throw new Error(`Invalid source id: ${sourceId}`)
		const source = assertPlainObject(rawSource, `sources.${sourceId}`)
		const relativeFile = assertNonEmptyString(source.file, `sources.${sourceId}.file`)
		const expectedHash = assertNonEmptyString(source.sha256, `sources.${sourceId}.sha256`).toLowerCase()
		if (!SHA256_PATTERN.test(expectedHash)) throw new Error(`sources.${sourceId}.sha256 must be a lowercase SHA-256 digest`)
		assertNonEmptyString(source.role, `sources.${sourceId}.role`)
		assertNonEmptyString(source.version, `sources.${sourceId}.version`)
		assertNonEmptyString(source.license, `sources.${sourceId}.license`)
		const urlText = assertNonEmptyString(source.url, `sources.${sourceId}.url`)
		let url
		try {
			url = new URL(urlText)
		} catch {
			throw new Error(`sources.${sourceId}.url must be an absolute URL`)
		}
		if (url.protocol !== 'https:') throw new Error(`sources.${sourceId}.url must use HTTPS`)
		if (SENSITIVE_URL_PATTERN.test(url.href)) throw new Error(`sources.${sourceId}.url appears to contain a secret capability`)
		const target = assertRegularRepositoryFile(repoRoot, relativeFile, `sources.${sourceId}.file`)
		const actualHash = sha256(fs.readFileSync(target))
		if (actualHash !== expectedHash) {
			throw new Error(`sources.${sourceId}: SHA-256 mismatch (expected ${expectedHash}, got ${actualHash})`)
		}
		verified.set(sourceId, {
			file: relativePosix(repoRoot, target),
			sha256: expectedHash,
		})
	}
	return verified
}

function validateDecision(rawDecision, index, sources) {
	const label = `decisions[${index}]`
	const decision = assertPlainObject(rawDecision, label)
	if (!Object.hasOwn(ENTITY_VARIABLES, decision.entityKind)) {
		throw new Error(`${label}.entityKind must be one of ${Object.keys(ENTITY_VARIABLES).join(', ')}`)
	}
	assertNonEmptyString(decision.entityId, `${label}.entityId`)
	assertNonEmptyString(decision.file, `${label}.file`)
	if (decision.file.includes('\\')) throw new Error(`${label}.file must use repository-relative POSIX separators`)
	assertNonEmptyString(decision.path, `${label}.path`)
	parseFieldPath(decision.path)
	if (!TARGET_LOCALES.includes(decision.locale)) throw new Error(`${label}.locale must be one of ${TARGET_LOCALES.join(', ')}`)
	if (decision.mode !== 'fill' && decision.mode !== 'correction') throw new Error(`${label}.mode must be fill or correction`)
	if (!Object.hasOwn(decision, 'expectedCurrent')) throw new Error(`${label}.expectedCurrent is required`)
	if (decision.mode === 'fill' && decision.expectedCurrent !== null) throw new Error(`${label}: fill requires expectedCurrent: null`)
	if (decision.mode === 'correction' && typeof decision.expectedCurrent !== 'string') {
		throw new Error(`${label}: correction requires an exact string expectedCurrent`)
	}
	assertNonEmptyString(decision.expectedEnglish, `${label}.expectedEnglish`)
	assertNonEmptyString(decision.value, `${label}.value`)
	if (decision.value === decision.expectedCurrent) throw new Error(`${label}.value must differ from expectedCurrent`)
	if (!Array.isArray(decision.evidence) || decision.evidence.length === 0) throw new Error(`${label}.evidence must be a non-empty array`)
	for (let evidenceIndex = 0; evidenceIndex < decision.evidence.length; evidenceIndex++) {
		const evidenceLabel = `${label}.evidence[${evidenceIndex}]`
		const evidence = assertPlainObject(decision.evidence[evidenceIndex], evidenceLabel)
		const sourceId = assertNonEmptyString(evidence.sourceId, `${evidenceLabel}.sourceId`)
		const source = sources.get(sourceId)
		if (!source) throw new Error(`${evidenceLabel}.sourceId references unknown source ${sourceId}`)
		const evidenceHash = assertNonEmptyString(evidence.sha256, `${evidenceLabel}.sha256`).toLowerCase()
		if (evidenceHash !== source.sha256) throw new Error(`${evidenceLabel}.sha256 does not match sources.${sourceId}.sha256`)
		assertNonEmptyString(evidence.locator, `${evidenceLabel}.locator`)
	}
	return decision
}

function validateArtifactContents(repoRoot, artifact, label) {
	if (artifact.schemaVersion !== 1) throw new Error(`${label} must use schemaVersion 1`)
	const artifactBaseRef = assertNonEmptyString(artifact.baseRef, `${label}.baseRef`).toLowerCase()
	const sources = validateSourceRegistry(repoRoot, artifact.sources)
	if (!Array.isArray(artifact.decisions) || artifact.decisions.length === 0) {
		throw new Error(`${label}.decisions must be a non-empty array`)
	}
	const decisions = artifact.decisions.map((decision, index) => ({
		decision: validateDecision(decision, index, sources),
		index,
	}))
	const duplicates = new Set()
	for (const { decision } of decisions) {
		const key = `${decision.file}\u0000${decision.path}\u0000${decision.locale}`
		if (duplicates.has(key)) throw new Error(`Duplicate localization decision: ${decision.file} ${decision.path} ${decision.locale}`)
		duplicates.add(key)
	}
	const localeOrder = new Map(TARGET_LOCALES.map((locale, index) => [locale, index]))
	decisions.sort((left, right) => left.decision.file.localeCompare(right.decision.file)
		|| left.decision.path.localeCompare(right.decision.path)
		|| localeOrder.get(left.decision.locale) - localeOrder.get(right.decision.locale))
	return { artifactBaseRef, sources, decisions }
}

function loadPredecessors(repoRoot, rawPredecessors, baseRef) {
	if (rawPredecessors === undefined) return []
	if (!Array.isArray(rawPredecessors)) throw new Error('Decision artifact.predecessors must be an array')
	const seenFiles = new Set()
	return rawPredecessors.map((rawPredecessor, index) => {
		const label = `Decision artifact.predecessors[${index}]`
		const predecessor = assertPlainObject(rawPredecessor, label)
		const relativeFile = assertNonEmptyString(predecessor.file, `${label}.file`)
		if (relativeFile.includes('\\')) throw new Error(`${label}.file must use repository-relative POSIX separators`)
		if (!relativeFile.endsWith('.json')) throw new Error(`${label}.file must reference a JSON file`)
		const expectedHash = assertNonEmptyString(predecessor.sha256, `${label}.sha256`).toLowerCase()
		if (!SHA256_PATTERN.test(expectedHash)) throw new Error(`${label}.sha256 must be a lowercase SHA-256 digest`)
		const file = assertRegularRepositoryFile(repoRoot, relativeFile, `${label}.file`)
		const canonicalFile = relativePosix(repoRoot, file)
		if (seenFiles.has(canonicalFile)) throw new Error(`Duplicate predecessor artifact: ${canonicalFile}`)
		seenFiles.add(canonicalFile)
		const bytes = fs.readFileSync(file)
		const actualHash = sha256(bytes)
		if (actualHash !== expectedHash) {
			throw new Error(`${label}: SHA-256 mismatch (expected ${expectedHash}, got ${actualHash})`)
		}
		let artifact
		try {
			artifact = assertPlainObject(JSON.parse(bytes.toString('utf8')), `Predecessor artifact ${canonicalFile}`)
		} catch (error) {
			throw new Error(`${label}: invalid predecessor JSON: ${error instanceof Error ? error.message : String(error)}`)
		}
		if (Object.hasOwn(artifact, 'predecessors')) {
			throw new Error(`${label}: predecessor artifacts must not declare nested predecessors`)
		}
		let validated
		try {
			validated = validateArtifactContents(repoRoot, artifact, `Predecessor artifact ${canonicalFile}`)
		} catch (error) {
			throw new Error(`${label}: ${error instanceof Error ? error.message : String(error)}`)
		}
		if (validated.artifactBaseRef !== baseRef) {
			throw new Error(`${label}: predecessor baseRef ${validated.artifactBaseRef} does not match decision artifact baseRef ${baseRef}`)
		}
		return {
			file: canonicalFile,
			sha256: expectedHash,
			decisions: validated.decisions,
		}
	})
}

function energyTokens(value, label) {
	if (SOURCE_PLACEHOLDER_PATTERN.test(value)) throw new Error(`${label} contains an unresolved source placeholder`)
	const tokens = []
	let match
	while ((match = ENERGY_TOKEN_PATTERN.exec(value)) !== null) {
		if (ENERGY_TOKENS.has(match[1])) tokens.push(match[1])
		else if (match[1] !== 'ex') throw new Error(`${label} contains unknown token ${match[0]}`)
	}
	ENERGY_TOKEN_PATTERN.lastIndex = 0
	const withoutRecognizedBraces = value.replace(ENERGY_TOKEN_PATTERN, '')
	ENERGY_TOKEN_PATTERN.lastIndex = 0
	if (/[{}]/u.test(withoutRecognizedBraces)) throw new Error(`${label} contains an unmatched token brace`)
	return tokens.sort()
}

function assertTokenBinding(expectedEnglish, localized, label) {
	const englishTokens = energyTokens(expectedEnglish, `${label}.expectedEnglish`)
	const localizedTokens = energyTokens(localized, `${label}.value`)
	if (JSON.stringify(englishTokens) !== JSON.stringify(localizedTokens)) {
		throw new Error(`${label}: energy token mismatch (${englishTokens.join(',') || 'none'} != ${localizedTokens.join(',') || 'none'})`)
	}
}

function lineIndent(source, position) {
	const start = source.lastIndexOf('\n', position - 1) + 1
	const prefix = source.slice(start, position)
	return /^[\t ]*$/u.test(prefix) ? prefix : undefined
}

function insertLocale(source, sourceFile, languageObject, locale, value) {
	const renderedKey = /^[A-Za-z_$][\w$]*$/u.test(locale) ? locale : JSON.stringify(locale)
	const renderedValue = JSON.stringify(value)
	const closeBrace = languageObject.getEnd() - 1
	const objectText = source.slice(languageObject.getStart(sourceFile), languageObject.getEnd())
	const lastProperty = languageObject.properties.at(-1)
	if (!lastProperty) throw new Error('Localized object must contain an English property before a locale can be added')
	const localeOrder = ['en', ...TARGET_LOCALES]
	const targetRank = localeOrder.indexOf(locale)
	const nextPropertyIndex = languageObject.properties.findIndex(property => {
		const rank = localeOrder.indexOf(propertyName(property))
		return rank === -1 || rank > targetRank
	})
	if (nextPropertyIndex >= 0) {
		const nextProperty = languageObject.properties[nextPropertyIndex]
		const previousProperty = languageObject.properties[nextPropertyIndex - 1]
		const triviaStart = previousProperty?.getEnd() ?? languageObject.getStart(sourceFile) + 1
		if (/\/\*|\/\//u.test(source.slice(triviaStart, nextProperty.getStart(sourceFile)))) {
			throw new Error('Localized object has a comment at the insertion point; refusing an ambiguous insertion')
		}
		const position = nextProperty.getStart(sourceFile)
		let insertion
		if (!/[\r\n]/u.test(objectText)) {
			insertion = `${renderedKey}: ${renderedValue}, `
		} else {
			const newline = source.includes('\r\n') ? '\r\n' : '\n'
			const indent = lineIndent(source, position)
			if (indent === undefined) throw new Error('Could not determine localized property indentation')
			insertion = `${renderedKey}: ${renderedValue},${newline}${indent}`
		}
		return `${source.slice(0, position)}${insertion}${source.slice(position)}`
	}
	const betweenLastAndClose = source.slice(lastProperty.getEnd(), closeBrace)
	const trailingLineComment = betweenLastAndClose.match(/^([\t ]*\/\/[^\r\n]*)(\r?\n)([\t ]*)$/u)
	if (trailingLineComment) {
		const [, comment, newline, closeIndent] = trailingLineComment
		const firstIndent = lineIndent(source, languageObject.properties[0].getStart(sourceFile))
		const objectIndent = lineIndent(source, languageObject.getStart(sourceFile)) ?? ''
		const indent = firstIndent ?? `${objectIndent}${source.includes('\t') ? '\t' : '    '}`
		const insertion = `,${comment}${newline}${indent}${renderedKey}: ${renderedValue}${newline}${closeIndent}`
		return `${source.slice(0, lastProperty.getEnd())}${insertion}${source.slice(closeBrace)}`
	}
	if (/\/\*|\/\//u.test(betweenLastAndClose)) {
		throw new Error('Localized object has a trailing comment; refusing an ambiguous insertion')
	}
	let insertion
	if (!/[\r\n]/u.test(objectText)) {
		insertion = `, ${renderedKey}: ${renderedValue}`
	} else {
		const newline = source.includes('\r\n') ? '\r\n' : '\n'
		const firstIndent = lineIndent(source, languageObject.properties[0].getStart(sourceFile))
		const objectIndent = lineIndent(source, languageObject.getStart(sourceFile)) ?? ''
		const indent = firstIndent ?? `${objectIndent}${source.includes('\t') ? '\t' : '    '}`
		insertion = `,${newline}${indent}${renderedKey}: ${renderedValue}`
	}
	return `${source.slice(0, lastProperty.getEnd())}${insertion}${source.slice(lastProperty.getEnd())}`
}

function patchDecision(source, filename, decision, index) {
	const label = `decisions[${index}] ${decision.entityKind}:${decision.entityId}.${decision.path}.${decision.locale}`
	const sourceFile = parseTypeScript(source, filename)
	const variableName = ENTITY_VARIABLES[decision.entityKind]
	const entity = findVariableObject(sourceFile, variableName)
	if (!entity) throw new Error(`${label}: could not find const ${variableName} object`)
	const target = resolveFieldPath(entity, parseFieldPath(decision.path), `${label}.path`)
	if (!ts.isObjectLiteralExpression(target)) throw new Error(`${label}: target path is not a localized object literal`)
	const english = staticString(propertyInitializer(findProperty(target, 'en')), sourceFile)
	if (english === undefined) throw new Error(`${label}: target path has no literal English value`)
	if (english !== decision.expectedEnglish) throw new Error(`${label}: English CAS mismatch`)
	assertTokenBinding(english, decision.value, label)
	const localeProperty = findProperty(target, decision.locale)
	const localeInitializer = propertyInitializer(localeProperty)
	const current = staticString(localeInitializer, sourceFile)
	if (localeProperty && current === undefined) throw new Error(`${label}: current locale value is not a string literal`)
	if (current === decision.value) return { source, status: 'already-applied' }
	if (decision.mode === 'fill') {
		if (localeProperty) throw new Error(`${label}: fill CAS failed; locale already exists`)
		return { source: insertLocale(source, sourceFile, target, decision.locale, decision.value), status: 'changed' }
	}
	if (!localeProperty || current !== decision.expectedCurrent) {
		throw new Error(`${label}: correction CAS failed; current value does not equal expectedCurrent`)
	}
	const start = localeInitializer.getStart(sourceFile)
	const end = localeInitializer.getEnd()
	return {
		source: `${source.slice(0, start)}${JSON.stringify(decision.value)}${source.slice(end)}`,
		status: 'changed',
	}
}

function resolveEntityFile(repoRoot, dataRoot, decision, setIdCache, readIdentitySource = file => fs.readFileSync(file, 'utf8')) {
	const target = assertRegularRepositoryFile(repoRoot, decision.file, `File for ${decision.entityKind}:${decision.entityId}`)
	if (decision.entityKind === 'series') {
		const expected = `${dataRoot}.ts`
		if (target !== expected) throw new Error(`${decision.file}: series file must be exactly ${relativePosix(repoRoot, expected)}`)
		const source = readIdentitySource(target)
		const series = findVariableObject(parseTypeScript(source, target), 'serie')
		const seriesId = series && stringProperty(series, 'id')
		if (!seriesId) throw new Error(`${decision.file}: could not determine literal series id`)
		if (decision.entityId !== seriesId) {
			throw new Error(`${decision.file}: entityId ${decision.entityId} does not match file identity ${seriesId}`)
		}
		return target
	}
	const relativeToData = path.relative(dataRoot, target)
	const parts = relativeToData.split(path.sep)
	if (decision.entityKind === 'set') {
		if (parts.length !== 1 || parts[0].length === 0 || parts[0] === '..' || !parts[0].endsWith('.ts')) {
			throw new Error(`${decision.file}: set file must be a direct .ts child of the Pocket data root`)
		}
		const source = readIdentitySource(target)
		const set = findVariableObject(parseTypeScript(source, target), 'set')
		const setId = set && stringProperty(set, 'id')
		if (!setId) throw new Error(`${decision.file}: could not determine literal set id`)
		if (decision.entityId !== setId) {
			throw new Error(`${decision.file}: entityId ${decision.entityId} does not match file identity ${setId}`)
		}
		return target
	}
	if (parts.length !== 2 || parts.some(part => part.length === 0 || part === '..') || !CARD_FILENAME_PATTERN.test(parts[1])) {
		throw new Error(`${decision.file}: card file must be a direct NNN.ts child of the Pocket data root`)
	}
	const folder = parts[0]
	let setId = setIdCache.get(folder)
	if (!setId) {
		const setFile = path.join(dataRoot, `${folder}.ts`)
		const setRelative = relativePosix(repoRoot, setFile)
		const verifiedSetFile = assertRegularRepositoryFile(repoRoot, setRelative, `Set file for ${decision.entityId}`)
		const setSource = readIdentitySource(verifiedSetFile)
		const setObject = findVariableObject(parseTypeScript(setSource, verifiedSetFile), 'set')
		setId = setObject && stringProperty(setObject, 'id')
		if (!setId) throw new Error(`${setRelative}: could not determine literal set id`)
		setIdCache.set(folder, setId)
	}
	const localId = path.basename(target, '.ts')
	const expectedCardId = `${setId}-${localId}`
	if (decision.entityId !== expectedCardId) {
		throw new Error(`${decision.file}: entityId ${decision.entityId} does not match file identity ${expectedCardId}`)
	}
	return target
}

function resolveArtifactDecisions(repoRoot, dataRoot, decisions, setIdCache, readIdentitySource) {
	const resolved = decisions.map(({ decision, index }) => ({
		decision,
		index,
		file: resolveEntityFile(repoRoot, dataRoot, decision, setIdCache, readIdentitySource),
	}))
	const duplicates = new Set()
	for (const { decision, file } of resolved) {
		const canonicalFile = relativePosix(repoRoot, file)
		const key = `${canonicalFile}\u0000${decision.path}\u0000${decision.locale}`
		if (duplicates.has(key)) throw new Error(`Duplicate localization decision: ${canonicalFile} ${decision.path} ${decision.locale}`)
		duplicates.add(key)
	}
	return resolved
}

function resolveBaseCommit(repoRoot, baseRef) {
	if (!FULL_GIT_HASH_PATTERN.test(baseRef)) throw new Error('baseRef must be a full 40- or 64-character Git commit hash')
	const resolved = execFileSync('git', ['-C', repoRoot, 'rev-parse', '--verify', `${baseRef}^{commit}`], { encoding: 'utf8' }).trim().toLowerCase()
	if (resolved !== baseRef.toLowerCase()) throw new Error(`baseRef must be the full resolved commit hash (${resolved})`)
	return resolved
}

function readReviewedBaseline(repoRoot, baseRef, file) {
	const relative = relativePosix(repoRoot, file)
	try {
		return execFileSync('git', ['-C', repoRoot, 'show', `${baseRef}:${relative}`], {
			maxBuffer: 16 * 1024 * 1024,
		})
	} catch {
		throw new Error(`${relative}: file does not exist at reviewed baseRef ${baseRef}`)
	}
}

function assertWorktreeBaseline(repoRoot, baseRef, file, current, baseline = readReviewedBaseline(repoRoot, baseRef, file)) {
	const relative = relativePosix(repoRoot, file)
	if (!current.equals(baseline)) throw new Error(`${relative}: worktree differs from ${baseRef}; refusing to overwrite user changes`)
}

function writeAtomicBatch(changes) {
	const prepared = []
	try {
		for (const change of changes) {
			const temporary = `${change.file}.reviewed-localization-${process.pid}-${prepared.length}.tmp`
			const mode = fs.statSync(change.file).mode
			fs.writeFileSync(temporary, change.next, { flag: 'wx', mode })
			prepared.push({ ...change, temporary })
		}
		for (const change of prepared) fs.renameSync(change.temporary, change.file)
	} finally {
		for (const change of prepared) {
			if (fs.existsSync(change.temporary)) fs.rmSync(change.temporary)
		}
	}
}

export function runReviewedLocalizationApply({
	repoRoot,
	dataRoot,
	decisionPath,
	write = false,
	baseRefArgument,
}) {
	const resolvedRepoRoot = fs.realpathSync(path.resolve(repoRoot))
	const resolvedDataRoot = fs.realpathSync(path.resolve(resolvedRepoRoot, dataRoot))
	relativePosix(resolvedRepoRoot, resolvedDataRoot)
	const resolvedDecisionPath = path.resolve(decisionPath)
	let decisionArtifactFile
	if (write) {
		decisionArtifactFile = relativePosix(resolvedRepoRoot, fs.realpathSync(resolvedDecisionPath))
		assertRegularRepositoryFile(resolvedRepoRoot, decisionArtifactFile, 'Decision artifact')
	} else {
		const stat = fs.lstatSync(resolvedDecisionPath)
		if (!stat.isFile() || stat.isSymbolicLink()) throw new Error('Decision artifact must be a regular, non-symbolic file')
		try {
			decisionArtifactFile = relativePosix(resolvedRepoRoot, fs.realpathSync(resolvedDecisionPath))
		} catch {
			decisionArtifactFile = path.basename(resolvedDecisionPath)
		}
	}
	const decisionBytes = fs.readFileSync(resolvedDecisionPath)
	const artifact = assertPlainObject(JSON.parse(decisionBytes.toString('utf8')), 'Decision artifact')
	const validatedArtifact = validateArtifactContents(resolvedRepoRoot, artifact, 'Decision artifact')
	const { artifactBaseRef, sources, decisions } = validatedArtifact
	if (write && !baseRefArgument) throw new Error('--write requires --base-ref <full-reviewed-commit>')
	if (baseRefArgument && baseRefArgument.toLowerCase() !== artifactBaseRef) {
		throw new Error(`--base-ref does not match decision artifact baseRef ${artifactBaseRef}`)
	}
	const baseRef = resolveBaseCommit(resolvedRepoRoot, artifactBaseRef)
	const predecessors = loadPredecessors(resolvedRepoRoot, artifact.predecessors, baseRef)
	const baseBytes = new Map()
	const readBaseSource = file => {
		let bytes = baseBytes.get(file)
		if (bytes === undefined) {
			bytes = readReviewedBaseline(resolvedRepoRoot, baseRef, file)
			baseBytes.set(file, bytes)
		}
		return bytes.toString('utf8')
	}
	const derived = new Map()
	const setIdCache = new Map()
	for (const predecessor of predecessors) {
		const predecessorDecisions = resolveArtifactDecisions(
			resolvedRepoRoot,
			resolvedDataRoot,
			predecessor.decisions,
			setIdCache,
			readBaseSource,
		)
		for (const { decision, index, file } of predecessorDecisions) {
			let entry = derived.get(file)
			if (!entry) {
				entry = { file, next: readBaseSource(file) }
				derived.set(file, entry)
			}
			entry.next = patchDecision(entry.next, file, decision, index).source
		}
	}
	const resolvedDecisions = resolveArtifactDecisions(
		resolvedRepoRoot,
		resolvedDataRoot,
		decisions,
		setIdCache,
		readBaseSource,
	)
	if (predecessors.length > 0) {
		for (const { file } of resolvedDecisions) {
			if (!derived.has(file)) derived.set(file, { file, next: readBaseSource(file) })
		}
		for (const entry of derived.values()) {
			const current = fs.readFileSync(entry.file)
			if (!current.equals(Buffer.from(entry.next, 'utf8'))) {
				const relative = relativePosix(resolvedRepoRoot, entry.file)
				throw new Error(`${relative}: worktree differs from the baseline derived from ${baseRef} and declared predecessors; refusing to overwrite user changes`)
			}
		}
	}
	const staged = new Map()
	const results = []
	for (const { decision, index, file } of resolvedDecisions) {
		let entry = staged.get(file)
		if (!entry) {
			const originalBytes = fs.readFileSync(file)
			const original = originalBytes.toString('utf8')
			entry = { file, original, originalBytes, next: original }
			staged.set(file, entry)
		}
		const patched = patchDecision(entry.next, file, decision, index)
		entry.next = patched.source
		results.push({
			entityKind: decision.entityKind,
			entityId: decision.entityId,
			file: relativePosix(resolvedRepoRoot, file),
			path: decision.path,
			locale: decision.locale,
			mode: decision.mode,
			status: patched.status,
		})
	}
	const changed = [...staged.values()].filter(entry => entry.original !== entry.next)
	if (predecessors.length === 0) {
		for (const entry of changed) {
			let baseline = baseBytes.get(entry.file)
			if (baseline === undefined) {
				baseline = readReviewedBaseline(resolvedRepoRoot, baseRef, entry.file)
				baseBytes.set(entry.file, baseline)
			}
			assertWorktreeBaseline(resolvedRepoRoot, baseRef, entry.file, entry.originalBytes, baseline)
		}
	}
	if (write) {
		writeAtomicBatch(changed)
	}
	return {
		schemaVersion: 1,
		operation: 'apply-reviewed-pocket-localizations',
		mode: write ? 'write' : 'dry-run',
		baseRef,
		decisionArtifactFile,
		decisionArtifactSha256: sha256(decisionBytes),
		predecessors: predecessors.map(predecessor => ({ file: predecessor.file, sha256: predecessor.sha256 })),
		sources: [...sources.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([id, source]) => ({ id, ...source })),
		summary: {
			decisions: results.length,
			files: staged.size,
			changedDecisions: results.filter(result => result.status === 'changed').length,
			alreadyAppliedDecisions: results.filter(result => result.status === 'already-applied').length,
			changedFiles: changed.length,
			fills: results.filter(result => result.mode === 'fill').length,
			corrections: results.filter(result => result.mode === 'correction').length,
		},
		results,
	}
}

function main() {
	const decisionPath = cliValue('decisions')
	if (!decisionPath) throw new Error('Usage: node scripts/apply-reviewed-pocket-localizations.mjs --decisions <artifact.json> [--write --base-ref <full-commit>]')
	const repoRoot = path.resolve(cliValue('repo-root', SCRIPT_ROOT))
	const dataRoot = cliValue('data-root', 'data/Pokémon TCG Pocket')
	const report = runReviewedLocalizationApply({
		repoRoot,
		dataRoot,
		decisionPath: path.resolve(decisionPath),
		write: process.argv.includes('--write'),
		baseRefArgument: cliValue('base-ref'),
	})
	process.stdout.write(`${JSON.stringify(report, null, 2)}\n`)
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	try {
		main()
	} catch (error) {
		process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
		process.exitCode = 1
	}
}
