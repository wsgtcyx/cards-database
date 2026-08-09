import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import ts from 'typescript'
import { globSync } from 'glob'

const ROOT = path.resolve(import.meta.dirname, '..')
const DATA = path.join(ROOT, 'data/Pokémon TCG Pocket')
const LOCALES = ['en', 'de', 'es', 'fr', 'it', 'pt-br', 'zh-tw']
const INVISIBLE = /[\u200B-\u200D\uFEFF]/gu
const FORBIDDEN_MECHANIC_CHARACTER = /[\u0000-\u001F\u007F\u200B-\u200D\uFEFF]/u
const APOSTROPHE_VARIANT = /[\u02BC\u2018\u2019\uFF07]/gu

function propertyName(node) {
	return ts.isIdentifier(node) || ts.isStringLiteral(node) ? node.text : undefined
}

function property(object, name) {
	return object?.properties.find(item => ts.isPropertyAssignment(item) && propertyName(item.name) === name)
}

function objectValue(object, name) {
	const value = property(object, name)?.initializer
	return value && ts.isObjectLiteralExpression(value) ? value : undefined
}

function stringValue(object, name) {
	const value = property(object, name)?.initializer
	return value && (ts.isStringLiteral(value) || ts.isNoSubstitutionTemplateLiteral(value)) ? value.text : undefined
}

function localized(object) {
	return Object.fromEntries(LOCALES.map(locale => [locale, stringValue(object, locale)]))
}

function cardObject(sourceFile) {
	for (const statement of sourceFile.statements) {
		if (!ts.isVariableStatement(statement)) continue
		for (const declaration of statement.declarationList.declarations) {
			if (ts.isIdentifier(declaration.name) && declaration.name.text === 'card' && declaration.initializer && ts.isObjectLiteralExpression(declaration.initializer)) return declaration.initializer
		}
	}
}

function parse(file) {
	const text = fs.readFileSync(file, 'utf8')
	const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
	if (source.parseDiagnostics.length) throw new Error(`${file}: TypeScript parse error`)
	const card = cardObject(source)
	if (!card) throw new Error(`${file}: card object not found`)
	return { file, text, source, card, replacements: [] }
}

function normalized(value) {
	return String(value ?? '').normalize('NFKC').replace(INVISIBLE, '').trim().replace(/\s+/gu, ' ').toLocaleLowerCase('en')
}

function mechanicIdentity(value) {
	return normalized(value).replace(APOSTROPHE_VARIANT, "'")
}

function replaceString(parsed, object, locale, value, kind) {
	const node = property(object, locale)?.initializer
	if (!node || (!ts.isStringLiteral(node) && !ts.isNoSubstitutionTemplateLiteral(node))) throw new Error(`${parsed.file}: missing ${kind}.${locale}`)
	if (node.text === value) return 0
	parsed.replacements.push({ start: node.getStart(parsed.source), end: node.getEnd(), value: JSON.stringify(value) })
	return 1
}

function arrayObjects(object, name, file) {
	const value = property(object, name)?.initializer
	if (!value) return []
	if (!ts.isArrayLiteralExpression(value)) throw new Error(`${file}: ${name} must be an array literal`)
	if (value.elements.some(item => !ts.isObjectLiteralExpression(item))) {
		throw new Error(`${file}: every ${name} entry must be an object literal`)
	}
	return value.elements
}

const parsedCards = globSync(`${DATA}/*/*.ts`).sort().map(parse)
const names = new Map()
const mechanicNames = new Map()
for (const parsed of parsedCards) {
	const name = localized(objectValue(parsed.card, 'name'))
	if (!name.en) throw new Error(`${parsed.file}: name.en missing`)
	const key = normalized(name.en)
	const current = names.get(key) ?? []
	current.push(name)
	names.set(key, current)

	for (const collection of ['abilities', 'attacks']) {
		for (const item of arrayObjects(parsed.card, collection, parsed.file)) {
			const canonical = stringValue(objectValue(item, 'name'), 'en')
			if (!canonical) throw new Error(`${parsed.file}: missing ${collection}.name.en`)
			const identity = `${collection}:${mechanicIdentity(canonical)}`
			const variants = mechanicNames.get(identity) ?? new Set()
			variants.add(normalized(canonical))
			mechanicNames.set(identity, variants)
		}
	}
}

for (const [identity, variants] of mechanicNames) {
	if (variants.size > 1) throw new Error(`${identity}: punctuation-confusable canonical names: ${[...variants].join(', ')}`)
}

const uniqueNames = new Map()
for (const [key, entries] of names) {
	const values = {}
	for (const locale of LOCALES) {
		const options = [...new Set(entries.map(entry => entry[locale]).filter(Boolean))]
		if (options.length !== 1) throw new Error(`${entries[0].en}: expected one ${locale} name, found ${options.length}`)
		values[locale] = options[0]
	}
	uniqueNames.set(key, values)
}

let mechanicChanges = 0
let evolveFromChanges = 0
let evolvesFromCards = 0
for (const parsed of parsedCards) {
	for (const collection of ['abilities', 'attacks']) {
		for (const item of arrayObjects(parsed.card, collection, parsed.file)) {
			for (const field of ['name', 'effect']) {
				const translations = objectValue(item, field)
				const required = field === 'name' || collection === 'abilities'
				if (!translations) {
					if (required) throw new Error(`${parsed.file}: missing ${collection}.${field}`)
					continue
				}
				for (const locale of LOCALES) {
					const entry = property(translations, locale)?.initializer
					if (!entry) throw new Error(`${parsed.file}: missing ${collection}.${field}.${locale}`)
					if (!ts.isStringLiteral(entry) && !ts.isNoSubstitutionTemplateLiteral(entry)) {
						throw new Error(`${parsed.file}: ${collection}.${field}.${locale} must be a string literal`)
					}
					const value = entry.text
					const clean = value.replace(INVISIBLE, '').replace(/[\u0000-\u001F\u007F]+/gu, ' ').trim().replace(/\s+/gu, ' ')
					if (!clean) throw new Error(`${parsed.file}: empty ${collection}.${field}.${locale}`)
					if (FORBIDDEN_MECHANIC_CHARACTER.test(clean)) throw new Error(`${parsed.file}: forbidden character in ${collection}.${field}.${locale}`)
					mechanicChanges += replaceString(parsed, translations, locale, clean, `${collection}.${field}`)
				}
			}
		}
	}

	const evolvesFrom = objectValue(parsed.card, 'evolveFrom')
	if (!evolvesFrom) continue
	evolvesFromCards += 1
	const canonical = stringValue(evolvesFrom, 'en')
	const target = uniqueNames.get(normalized(canonical))
	if (!canonical || !target) throw new Error(`${parsed.file}: unresolved evolveFrom.en ${canonical ?? ''}`)
	for (const locale of LOCALES) evolveFromChanges += replaceString(parsed, evolvesFrom, locale, target[locale], 'evolveFrom')
}

if (process.argv.includes('--write')) {
	for (const parsed of parsedCards) {
		if (!parsed.replacements.length) continue
		let text = parsed.text
		for (const replacement of parsed.replacements.sort((left, right) => right.start - left.start)) {
			text = `${text.slice(0, replacement.start)}${replacement.value}${text.slice(replacement.end)}`
		}
		fs.writeFileSync(parsed.file, text)
	}
}

process.stdout.write(`${JSON.stringify({
	operation: process.argv.includes('--write') ? 'write' : 'check',
	cards: parsedCards.length,
	evolvesFromCards,
	mechanicIdentityCollisions: 0,
	mechanicChanges,
	evolveFromChanges,
	totalChanges: mechanicChanges + evolveFromChanges,
}, null, 2)}\n`)

if (!process.argv.includes('--write') && mechanicChanges + evolveFromChanges > 0) process.exitCode = 2
