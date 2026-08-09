#!/usr/bin/env node

/**
 * Audit the six product locales across explicit Serie, Set, Booster, Card,
 * Item, Attack, and Ability schema paths. It never infers locales from every
 * object key, so structural keys such as `id` cannot become false languages.
 */

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

import {
	TARGET_LOCALES,
	arrayProperty,
	findProperty,
	findVariableObject,
	objectProperty,
	parseTypeScript,
	propertyInitializer,
	propertyName,
	relativePosix,
	staticString,
	stringProperty,
} from './utils/pocket-localization-ast.mjs'

const SCRIPT_ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))

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

function increment(object, key) {
	object[key] = (object[key] ?? 0) + 1
}

function normalizedField(pathValue) {
	return pathValue.replace(/\[\d+\]/gu, '[]')
}

function auditLocalizedObject(state, object, context, fieldPath) {
	state.localizedObjects += 1
	const englishProperty = findProperty(object, 'en')
	const english = staticString(propertyInitializer(englishProperty), context.sourceFile)
	if (english === undefined) {
		state.errors.push({
			scope: context.scope,
			entityId: context.entityId,
			file: context.file,
			path: fieldPath,
			message: 'Localized object must contain a literal English value',
		})
		return
	}
	for (const locale of TARGET_LOCALES) {
		const property = findProperty(object, locale)
		const initializer = propertyInitializer(property)
		const current = staticString(initializer, context.sourceFile)
		let kind
		if (!property) kind = 'missing'
		else if (current === undefined) kind = 'non-string'
		else if (current.trim().length === 0) kind = 'empty'
		else continue
		state.issues.push({
			scope: context.scope,
			entityId: context.entityId,
			...(context.setId ? { setId: context.setId } : {}),
			file: context.file,
			fileSha256: context.fileSha256,
			path: fieldPath,
			field: normalizedField(fieldPath),
			locale,
			kind,
			expectedCurrent: kind === 'missing' ? null : current,
			expectedEnglish: english,
		})
	}
}

function requiredLocalizedProperty(state, owner, name, context, fieldPath = name) {
	const property = findProperty(owner, name)
	const object = objectProperty(owner, name)
	if (!property || !object) {
		state.errors.push({
			scope: context.scope,
			entityId: context.entityId,
			file: context.file,
			path: fieldPath,
			message: `Required localized field ${fieldPath} is not an object literal`,
		})
		return
	}
	auditLocalizedObject(state, object, context, fieldPath)
}

function optionalLocalizedProperty(state, owner, name, context, fieldPath = name) {
	const property = findProperty(owner, name)
	if (!property) return
	const object = objectProperty(owner, name)
	if (!object) {
		state.errors.push({
			scope: context.scope,
			entityId: context.entityId,
			file: context.file,
			path: fieldPath,
			message: `Localized field ${fieldPath} is not an object literal`,
		})
		return
	}
	auditLocalizedObject(state, object, context, fieldPath)
}

function auditSeries(state, series, context) {
	requiredLocalizedProperty(state, series, 'name', context)
}

function auditSet(state, set, context) {
	requiredLocalizedProperty(state, set, 'name', context)
	const releaseDate = propertyInitializer(findProperty(set, 'releaseDate'))
	if (releaseDate && ts.isObjectLiteralExpression(releaseDate)) auditLocalizedObject(state, releaseDate, context, 'releaseDate')
	const boostersProperty = findProperty(set, 'boosters')
	const boosters = objectProperty(set, 'boosters')
	if (boostersProperty && !boosters) {
		state.errors.push({
			scope: context.scope,
			entityId: context.entityId,
			file: context.file,
			path: 'boosters',
			message: 'boosters must be an object literal to audit localized fields',
		})
		return
	}
	if (!boosters) return
	for (const boosterProperty of boosters.properties) {
		const boosterId = propertyName(boosterProperty)
		const booster = propertyInitializer(boosterProperty)
		if (!boosterId || !booster || !ts.isObjectLiteralExpression(booster)) {
			state.errors.push({
				scope: context.scope,
				entityId: context.entityId,
				file: context.file,
				path: 'boosters',
				message: 'Every booster must be a statically named object literal',
			})
			continue
		}
		requiredLocalizedProperty(state, booster, 'name', context, `boosters.${boosterId}.name`)
		for (const field of ['logo', 'artwork_front', 'artwork_back']) {
			optionalLocalizedProperty(state, booster, field, context, `boosters.${boosterId}.${field}`)
		}
	}
}

function auditObjectArray(state, card, property, context, fields) {
	const rawProperty = findProperty(card, property)
	if (!rawProperty) return
	const values = arrayProperty(card, property)
	if (!values) {
		state.errors.push({
			scope: context.scope,
			entityId: context.entityId,
			file: context.file,
			path: property,
			message: `${property} must be an array literal to audit localized fields`,
		})
		return
	}
	for (let index = 0; index < values.elements.length; index++) {
		const value = values.elements[index]
		if (!ts.isObjectLiteralExpression(value)) {
			state.errors.push({
				scope: context.scope,
				entityId: context.entityId,
				file: context.file,
				path: `${property}[${index}]`,
				message: `${property}[${index}] must be an object literal`,
			})
			continue
		}
		for (const [field, required] of fields) {
			const fieldPath = `${property}[${index}].${field}`
			if (required) requiredLocalizedProperty(state, value, field, context, fieldPath)
			else optionalLocalizedProperty(state, value, field, context, fieldPath)
		}
	}
}

function auditCard(state, card, context) {
	requiredLocalizedProperty(state, card, 'name', context)
	for (const field of ['image', 'evolveFrom', 'description', 'effect']) {
		optionalLocalizedProperty(state, card, field, context)
	}
	const itemProperty = findProperty(card, 'item')
	const item = objectProperty(card, 'item')
	if (item) {
		requiredLocalizedProperty(state, item, 'name', context, 'item.name')
		requiredLocalizedProperty(state, item, 'effect', context, 'item.effect')
	} else if (itemProperty) {
		state.errors.push({
			scope: context.scope,
			entityId: context.entityId,
			file: context.file,
			path: 'item',
			message: 'item must be an object literal to audit localized fields',
		})
	}
	auditObjectArray(state, card, 'attacks', context, [['name', true], ['effect', false]])
	auditObjectArray(state, card, 'abilities', context, [['name', true], ['effect', true]])
}

function parseEntityFile(state, repoRoot, file, variableName, scope, fallbackId) {
	const relativeFile = relativePosix(repoRoot, file)
	let source
	try {
		const stat = fs.lstatSync(file)
		if (!stat.isFile() || stat.isSymbolicLink()) throw new Error('Entity file must be a regular, non-symbolic file')
		source = fs.readFileSync(file, 'utf8')
		const sourceFile = parseTypeScript(source, relativeFile)
		const object = findVariableObject(sourceFile, variableName)
		if (!object) throw new Error(`Could not find const ${variableName} object`)
		return { object, source, sourceFile, relativeFile, fileSha256: sha256(source) }
	} catch (error) {
		state.errors.push({
			scope,
			entityId: fallbackId,
			file: relativeFile,
			path: '',
			message: error instanceof Error ? error.message : String(error),
		})
		return undefined
	}
}

function sortedCountObject(object) {
	return Object.fromEntries(Object.entries(object).sort(([left], [right]) => left.localeCompare(right)))
}

function reportSummary(state, entities) {
	const byScope = { series: 0, set: 0, card: 0 }
	const byLocale = Object.fromEntries(TARGET_LOCALES.map(locale => [locale, 0]))
	const byField = {}
	const byKind = {}
	for (const issue of state.issues) {
		increment(byScope, issue.scope)
		increment(byLocale, issue.locale)
		increment(byField, issue.field)
		increment(byKind, issue.kind)
	}
	return {
		entities,
		localizedObjects: state.localizedObjects,
		missingValues: state.issues.length,
		structuralErrors: state.errors.length,
		byScope,
		byLocale,
		byField: sortedCountObject(byField),
		byKind: sortedCountObject(byKind),
	}
}

export function auditPocketLocalizationMetadata({ repoRoot, dataRoot }) {
	const resolvedRepoRoot = fs.realpathSync(path.resolve(repoRoot))
	const resolvedDataRoot = fs.realpathSync(path.resolve(resolvedRepoRoot, dataRoot))
	relativePosix(resolvedRepoRoot, resolvedDataRoot)
	const state = { localizedObjects: 0, issues: [], errors: [] }
	const entries = fs.readdirSync(resolvedDataRoot, { withFileTypes: true })
	const setEntries = entries.filter(entry => entry.isFile() && entry.name.endsWith('.ts')).sort((left, right) => left.name.localeCompare(right.name))
	const cardDirectories = entries.filter(entry => entry.isDirectory()).sort((left, right) => left.name.localeCompare(right.name))
	const entities = { series: 0, sets: setEntries.length, cards: 0 }

	const seriesFile = `${resolvedDataRoot}.ts`
	const parsedSeries = parseEntityFile(state, resolvedRepoRoot, seriesFile, 'serie', 'series', 'unknown-series')
	if (parsedSeries) {
		entities.series = 1
		const entityId = stringProperty(parsedSeries.object, 'id') ?? 'unknown-series'
		auditSeries(state, parsedSeries.object, {
			scope: 'series',
			entityId,
			file: parsedSeries.relativeFile,
			fileSha256: parsedSeries.fileSha256,
			sourceFile: parsedSeries.sourceFile,
		})
	}

	const setsByFolder = new Map()
	for (const entry of setEntries) {
		const file = path.join(resolvedDataRoot, entry.name)
		const folder = entry.name.slice(0, -3)
		const parsedSet = parseEntityFile(state, resolvedRepoRoot, file, 'set', 'set', folder)
		if (!parsedSet) continue
		const setId = stringProperty(parsedSet.object, 'id')
		if (!setId) {
			state.errors.push({
				scope: 'set',
				entityId: folder,
				file: parsedSet.relativeFile,
				path: 'id',
				message: 'Set must contain a literal string id',
			})
			continue
		}
		setsByFolder.set(folder, setId)
		auditSet(state, parsedSet.object, {
			scope: 'set',
			entityId: setId,
			setId,
			file: parsedSet.relativeFile,
			fileSha256: parsedSet.fileSha256,
			sourceFile: parsedSet.sourceFile,
		})
	}

	for (const entry of cardDirectories) {
		const directory = path.join(resolvedDataRoot, entry.name)
		const files = fs.readdirSync(directory, { withFileTypes: true })
			.filter(value => value.isFile() && value.name.endsWith('.ts'))
			.sort((left, right) => left.name.localeCompare(right.name))
		entities.cards += files.length
		const setId = setsByFolder.get(entry.name)
		if (!setId) {
			state.errors.push({
				scope: 'set',
				entityId: entry.name,
				file: relativePosix(resolvedRepoRoot, directory),
				path: '',
				message: 'Card directory has no auditable sibling set file',
			})
			continue
		}
		for (const fileEntry of files) {
			const file = path.join(directory, fileEntry.name)
			const localId = fileEntry.name.slice(0, -3)
			const cardId = `${setId}-${localId}`
			const parsedCard = parseEntityFile(state, resolvedRepoRoot, file, 'card', 'card', cardId)
			if (!parsedCard) continue
			auditCard(state, parsedCard.object, {
				scope: 'card',
				entityId: cardId,
				setId,
				file: parsedCard.relativeFile,
				fileSha256: parsedCard.fileSha256,
				sourceFile: parsedCard.sourceFile,
			})
		}
	}

	state.issues.sort((left, right) => left.file.localeCompare(right.file)
		|| left.path.localeCompare(right.path)
		|| TARGET_LOCALES.indexOf(left.locale) - TARGET_LOCALES.indexOf(right.locale))
	state.errors.sort((left, right) => left.file.localeCompare(right.file) || left.path.localeCompare(right.path))
	const report = {
		schemaVersion: 1,
		operation: 'audit-pocket-localization-metadata',
		generatedAt: new Date().toISOString(),
		targetLocales: [...TARGET_LOCALES],
		passed: state.issues.length === 0 && state.errors.length === 0,
		summary: reportSummary(state, entities),
		issues: state.issues,
		errors: state.errors,
	}
	return report
}

function main() {
	const repoRoot = path.resolve(cliValue('repo-root', SCRIPT_ROOT))
	const dataRoot = cliValue('data-root', 'data/Pokémon TCG Pocket')
	const report = auditPocketLocalizationMetadata({ repoRoot, dataRoot })
	const json = `${JSON.stringify(report, null, 2)}\n`
	const output = cliValue('output')
	if (output) fs.writeFileSync(path.resolve(output), json)
	process.stdout.write(json)
	if (!report.passed && !process.argv.includes('--allow-incomplete')) process.exitCode = 2
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	try {
		main()
	} catch (error) {
		process.stdout.write(`${JSON.stringify({
			schemaVersion: 1,
			operation: 'audit-pocket-localization-metadata',
			passed: false,
			fatal: { message: error instanceof Error ? error.message : String(error) },
		}, null, 2)}\n`)
		process.exitCode = 1
	}
}
