#!/usr/bin/env node

/**
 * Apply the reviewed, source-backed integrity corrections produced by
 * audit-pocket-card-integrity.mjs. The transform is intentionally AST based
 * so unrelated prose, ordering, and user edits in each card file survive.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import jscodeshift from 'jscodeshift'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const DATA_ROOT = path.join(ROOT, 'data', 'Pokémon TCG Pocket')
const DEFAULT_REPORT = '/private/tmp/pocket-card-integrity-expected-v3.json'
const j = jscodeshift.withParser('ts')

const LOCALE_KEYS = ['en', 'fr', 'es', 'de', 'it', 'pt-br', 'zh-tw']
const SET_ID_CACHE = new Map()
const ENERGY_TYPES = new Set(['Colorless', 'Grass', 'Fire', 'Water', 'Lightning', 'Psychic', 'Fighting', 'Darkness', 'Metal', 'Dragon'])
const RARITIES = new Set(['None', 'One Diamond', 'Two Diamond', 'Three Diamond', 'Four Diamond', 'One Star', 'Two Star', 'Three Star', 'One Shiny', 'Two Shiny', 'Crown'])

// The localized upstream payload omitted the regional-form marker for these
// cards.  The English card identity and the localized card artwork both show
// Galarian forms, so these names must stay distinct from their base forms for
// the downstream “same name” grouping to remain exact.
const REVIEWED_NAME_OVERRIDES = {
	'A4a-034': { de: 'Galar-Corasonn', it: 'Corsola di Galar' },
	'A4a-035': { de: 'Galar-Gorgasonn', it: 'Cursola di Galar' },
	'B2-030': { de: 'Galar-Pantimos', it: 'Mr. Mime di Galar' },
	'B2-031': { de: 'Galar-Pantifrost', it: 'Mr. Rime di Galar' },
	'B2-058': { de: 'Galar-Ponita', it: 'Ponyta di Galar' },
	'B2-059': { de: 'Galar-Gallopa', it: 'Rapidash di Galar' },
	'B2-098': { de: 'Galar-Zigzachs', it: 'Zigzagoon di Galar' },
	'B2-099': { de: 'Galar-Geradaks', it: 'Linoone di Galar' },
	'B2-100': { de: 'Galar-Barrikadax', it: 'Obstagoon di Galar' },
	'B2-110': { de: 'Galar-Mauzi', it: 'Meowth di Galar' },
	'B2-111': { de: 'Galar-Mauzinger', it: 'Perrserker di Galar' },
	'B2-117': { de: 'Galar-Flunschlik', it: 'Stunfisk di Galar' },
	'B2-167': { de: 'Galar-Ponita', it: 'Ponyta di Galar' },
	'B2-176': { de: 'Galar-Barrikadax', it: 'Obstagoon di Galar' },
	'B2-177': { de: 'Galar-Mauzinger', it: 'Perrserker di Galar' },
	'B4-230': { it: 'Zoroark-ex' },
}

const ZAPDOS_EX_ATTACKS = [
	{
		cost: ['Lightning'],
		name: {
			en: 'Peck',
			fr: 'Picpic',
			es: 'Picotazo',
			it: 'Beccata',
			de: 'Picken',
			'pt-br': 'Bicada',
			'zh-tw': '啄',
		},
		damage: '20',
	},
	{
		cost: ['Lightning', 'Lightning', 'Lightning'],
		name: {
			en: 'Thundering Hurricane',
			fr: "Rafale d'Éclairs",
			es: 'Huracán Atronador',
			it: 'Uragano Tonante',
			de: 'Donnernder Orkan',
			'pt-br': 'Furacão Trovejante',
			'zh-tw': '颶風雷電',
		},
		effect: {
			en: 'Flip 4 coins. This attack does 50 damage for each heads.',
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: 'Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.',
			it: 'Lancia 4 monete. Questa mossa infligge 50 danni per ogni testa.',
			de: 'Wirf 4 Münzen. Diese Attacke fügt für jede Kopfseite 50 Schadenspunkte zu.',
			'pt-br': 'Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.',
			'zh-tw': '擲4次硬幣，造成正面出現的次數×50點傷害。',
		},
		damage: '50×',
	},
]

function arg(name, fallback) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback
}

function readJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function propertyName(property) {
	return property?.key?.name ?? property?.key?.value
}

function findProperty(object, name) {
	return object?.properties?.find(property => propertyName(property) === name)
}

function keyNode(name) {
	return /^[A-Za-z_$][\w$]*$/u.test(name) ? j.identifier(name) : j.literal(name)
}

function toAst(value) {
	if (Array.isArray(value)) return j.arrayExpression(value.map(toAst))
	if (value && typeof value === 'object') {
		return j.objectExpression(Object.entries(value).map(([name, child]) => j.objectProperty(keyNode(name), toAst(child))))
	}
	if (typeof value === 'string') return j.literal(value)
	if (typeof value === 'number') return j.literal(value)
	if (typeof value === 'boolean') return j.literal(value)
	if (value === null) return j.nullLiteral()
	throw new TypeError(`Unsupported AST value: ${String(value)}`)
}

function fromAst(node) {
	if (!node) return undefined
	if (['Literal', 'StringLiteral', 'NumericLiteral', 'BooleanLiteral'].includes(node.type)) return node.value
	if (node.type === 'NullLiteral') return null
	if (node.type === 'ArrayExpression') return node.elements.map(fromAst)
	if (node.type === 'ObjectExpression') return Object.fromEntries(node.properties.map(property => [propertyName(property), fromAst(property.value)]))
	return undefined
}

function sortedValue(value) {
	if (Array.isArray(value)) return value.map(sortedValue)
	if (!value || typeof value !== 'object') return value
	return Object.fromEntries(Object.keys(value).sort().map(key => [key, sortedValue(value[key])]))
}

function valuesEqual(left, right, { sortArray = false } = {}) {
	const normalize = value => sortArray && Array.isArray(value) ? [...value].sort() : value
	return JSON.stringify(sortedValue(normalize(left))) === JSON.stringify(sortedValue(normalize(right)))
}

function stableValuesEqual(field, left, right) {
	if (field.endsWith('.damage')) {
		const numeric = value => value === null || value === undefined ? null : Number(value)
		return numeric(left) === numeric(right)
	}
	return valuesEqual(left, right, { sortArray: field.endsWith('.cost') })
}

function stableFieldValue(cardObject, field) {
	if (field === 'weaknesses.invalid') {
		const weaknesses = fromAst(findProperty(cardObject, 'weaknesses')?.value) ?? []
		return weaknesses.filter(value => value?.type === 'Colorless' || value?.type === 'UNSPECIFIED')
	}
	const attackMatch = field.match(/^attacks\[(\d+)\]\.(cost|damage)$/u)
	if (attackMatch) {
		const attacks = fromAst(findProperty(cardObject, 'attacks')?.value) ?? []
		return attacks[Number(attackMatch[1])]?.[attackMatch[2]]
	}
	if (field === 'attacks.length' || field === 'abilities.length') {
		return (fromAst(findProperty(cardObject, field.split('.')[0])?.value) ?? []).length
	}
	return fromAst(findProperty(cardObject, field)?.value)
}

function validateStableMismatch(reportCard, mismatch) {
	if (!mismatch || typeof mismatch !== 'object' || typeof mismatch.field !== 'string') {
		throw new Error(`Invalid stable mismatch in report for ${String(reportCard?.id)}`)
	}
	const { field, expected } = mismatch
	const nonNegativeInteger = value => Number.isInteger(value) && value >= 0 && value <= 1000
	if (field === 'weaknesses.invalid') {
		if (!Array.isArray(expected) || expected.length !== 0) throw new Error(`${reportCard.id}.${field} must expect an empty array`)
		return
	}
	if (field === 'rarity') {
		if (typeof expected !== 'string' || !RARITIES.has(expected)) throw new Error(`${reportCard.id}.${field} has invalid expected value`)
		return
	}
	if (field === 'hp' || field === 'retreat' || field === 'attacks.length' || field === 'abilities.length') {
		if (!nonNegativeInteger(expected)) throw new Error(`${reportCard.id}.${field} has invalid expected value`)
		return
	}
	const attackMatch = field.match(/^attacks\[(\d+)\]\.(cost|damage)$/u)
	if (attackMatch) {
		if (!nonNegativeInteger(Number(attackMatch[1]))) throw new Error(`${reportCard.id}.${field} has invalid attack index`)
		if (attackMatch[2] === 'cost') {
			if (!Array.isArray(expected) || expected.length > 10 || expected.some(value => !ENERGY_TYPES.has(value))) throw new Error(`${reportCard.id}.${field} has invalid expected value`)
		} else if (expected !== null && (!Number.isFinite(expected) || expected < 0 || expected > 1000)) {
			throw new Error(`${reportCard.id}.${field} has invalid expected value`)
		}
		return
	}
	throw new Error(`${reportCard.id}.${field} is not an allowed stable correction`)
}

function validateReport(report) {
	if (!report || typeof report !== 'object' || report.schemaVersion !== 1) throw new Error('Integrity report must use schemaVersion 1')
	if (!Array.isArray(report.cards) || report.cards.length === 0) throw new Error('Integrity report must contain a non-empty cards array')
	const summary = report.summary
	const count = report.cards.length
	if (!summary || typeof summary !== 'object' || summary.cards !== count || summary.generatedCards !== count || summary.raenonxJoin !== count || !Array.isArray(summary.missing) || summary.missing.length !== 0) {
		throw new Error('Integrity report summary does not cover the complete, joined card set')
	}
	for (const reportCard of report.cards) {
		if (!reportCard || typeof reportCard !== 'object' || typeof reportCard.id !== 'string' || typeof reportCard.sourceFile !== 'string') throw new Error('Integrity report contains an invalid card entry')
		if (reportCard.stable !== undefined && !Array.isArray(reportCard.stable)) throw new Error(`${reportCard.id}.stable must be an array`)
		for (const mismatch of reportCard.stable ?? []) validateStableMismatch(reportCard, mismatch)
		for (const locale of LOCALE_KEYS) {
			const decision = reportCard.names?.[locale]
			if (decision?.status === 'reviewed' && (typeof decision.actual !== 'string' || typeof decision.expected !== 'string' || decision.expected.length === 0)) {
				throw new Error(`${reportCard.id}.${locale} reviewed name requires actual and expected strings`)
			}
		}
	}
}

function setProperty(object, name, value) {
	const property = findProperty(object, name)
	if (property) property.value = toAst(value)
	else object.properties.push(j.objectProperty(keyNode(name), toAst(value)))
}

function removeProperty(object, name) {
	if (!object?.properties) return false
	const before = object.properties.length
	object.properties = object.properties.filter(property => propertyName(property) !== name)
	return object.properties.length !== before
}

function objectVariable(root, name) {
	return root.find(j.VariableDeclarator, { id: { name } }).nodes()[0]?.init
}

function setIdForCard(file) {
	const folder = path.basename(path.dirname(file))
	if (SET_ID_CACHE.has(folder)) return SET_ID_CACHE.get(folder)
	const setFile = path.join(DATA_ROOT, `${folder}.ts`)
	const setRoot = j(fs.readFileSync(setFile, 'utf8'))
	const setObject = objectVariable(setRoot, 'set')
	const setId = findProperty(setObject, 'id')?.value?.value
	if (typeof setId !== 'string' || setId.length === 0) throw new Error(`Cannot determine set id for ${file}`)
	SET_ID_CACHE.set(folder, setId)
	return setId
}

function cardPath(reportCard) {
	const sourceFile = reportCard?.sourceFile
	if (typeof sourceFile !== 'string' || !/^data\/Pokémon TCG Pocket\/[^/]+\/\d{3}\.ts$/u.test(sourceFile)) {
		throw new Error(`Invalid card source path in report: ${String(sourceFile)}`)
	}

	const target = path.resolve(ROOT, sourceFile)
	const relativeToData = path.relative(DATA_ROOT, target)
	if (!relativeToData || relativeToData.startsWith(`..${path.sep}`) || path.isAbsolute(relativeToData)) {
		throw new Error(`Card source path escapes the Pocket data root: ${sourceFile}`)
	}

	const stat = fs.lstatSync(target)
	if (stat.isSymbolicLink()) {
		throw new Error(`Card source path must not be a symbolic link: ${sourceFile}`)
	}

	const realDataRoot = fs.realpathSync(DATA_ROOT)
	const realTarget = fs.realpathSync(target)
	const realRelative = path.relative(realDataRoot, realTarget)
	if (!realRelative || realRelative.startsWith(`..${path.sep}`) || path.isAbsolute(realRelative)) {
		throw new Error(`Card source path resolves outside the Pocket data root: ${sourceFile}`)
	}

	const localId = path.basename(realTarget, '.ts')
	const expectedId = `${setIdForCard(realTarget)}-${localId}`
	if (reportCard?.id !== expectedId) {
		throw new Error(`Report card id ${String(reportCard?.id)} does not match ${sourceFile} (${expectedId})`)
	}
	return realTarget
}

function currentCardIds() {
	const ids = new Set()
	for (const entry of fs.readdirSync(DATA_ROOT, { withFileTypes: true }).filter(value => value.isDirectory())) {
		for (const file of fs.readdirSync(path.join(DATA_ROOT, entry.name)).filter(value => /^\d{3}\.ts$/u.test(value))) {
			const target = path.join(DATA_ROOT, entry.name, file)
			ids.add(`${setIdForCard(target)}-${file.slice(0, -3)}`)
		}
	}
	return ids
}

function applyNames(cardObject, reportCard) {
	const nameObject = findProperty(cardObject, 'name')?.value
	if (!nameObject || nameObject.type !== 'ObjectExpression') return 0
	let changed = 0
	for (const locale of LOCALE_KEYS) {
		const decision = reportCard.names?.[locale]
		const override = REVIEWED_NAME_OVERRIDES[reportCard.id]?.[locale]
		const expected = override ?? (decision?.status === 'reviewed' ? decision.expected : undefined)
		if (typeof expected !== 'string' || expected.length === 0) continue
		const current = findProperty(nameObject, locale)?.value?.value
		if (current === expected) continue
		if (!decision || typeof decision.actual !== 'string') throw new Error(`${reportCard.id}.${locale} lacks a reviewed current name`)
		if (current !== decision.actual) throw new Error(`${reportCard.id}.${locale} no longer matches the reviewed current name`)
		setProperty(nameObject, locale, expected)
		changed++
	}
	return changed
}

function applyStable(cardObject, reportCard) {
	let changed = 0
	const stable = reportCard.stable ?? []
	const attacks = findProperty(cardObject, 'attacks')?.value
	const handled = new Set()

	for (const mismatch of stable) {
		validateStableMismatch(reportCard, mismatch)
		const current = stableFieldValue(cardObject, mismatch.field)
		const currentMatchesExpected = stableValuesEqual(mismatch.field, current, mismatch.expected)
		if (mismatch.actual !== undefined && !currentMatchesExpected && !stableValuesEqual(mismatch.field, current, mismatch.actual)) {
			throw new Error(`${reportCard.id}.${mismatch.field} no longer matches the reviewed current value`)
		}
		if (mismatch.field === 'weaknesses.invalid') {
			if (!currentMatchesExpected) {
				const weaknesses = fromAst(findProperty(cardObject, 'weaknesses')?.value) ?? []
				const validWeaknesses = weaknesses.filter(value => value?.type !== 'Colorless' && value?.type !== 'UNSPECIFIED')
				if (validWeaknesses.length > 0) setProperty(cardObject, 'weaknesses', validWeaknesses)
				else removeProperty(cardObject, 'weaknesses')
				changed++
			}
			handled.add(mismatch.field)
			continue
		}
		if (mismatch.field === 'attacks.length') continue
		if (mismatch.field === 'category' || mismatch.field === 'types' || mismatch.field === 'stage' || mismatch.field === 'abilities.length') continue
		if (mismatch.field === 'rarity' || mismatch.field === 'hp' || mismatch.field === 'retreat') {
			if (!currentMatchesExpected || !findProperty(cardObject, mismatch.field)) {
				setProperty(cardObject, mismatch.field, mismatch.expected)
				changed++
			}
			handled.add(mismatch.field)
			continue
		}
		const attackMatch = mismatch.field.match(/^attacks\[(\d+)\]\.(cost|damage)$/u)
		if (!attackMatch || attacks?.type !== 'ArrayExpression') continue
		const attack = attacks.elements[Number(attackMatch[1])]
		if (!attack || attack.type !== 'ObjectExpression') continue
		const field = attackMatch[2]
		if (field === 'cost') {
			if (!currentMatchesExpected) {
				setProperty(attack, 'cost', mismatch.expected)
				changed++
			}
		} else if (mismatch.expected === null) {
			if (!currentMatchesExpected) changed += removeProperty(attack, 'damage') ? 1 : 0
		} else {
			if (!currentMatchesExpected) {
				setProperty(attack, 'damage', String(mismatch.expected))
				changed++
			}
		}
		handled.add(mismatch.field)
	}

	const reviewedCostFixes = {
		'A1-055': ['Water', 'Water', 'Colorless'],
		'A1-071': ['Water', 'Water', 'Water'],
		'B2a-081': ['Colorless'],
		'B4-022': ['Fire', 'Fire'],
		'B4-220': ['Colorless'],
	}
	const specialCost = reviewedCostFixes[reportCard.id]
	if (specialCost) {
		const field = 'attacks[0].cost'
		const mismatch = stable.find(value => value.field === field)
		const current = stableFieldValue(cardObject, field)
		if (!valuesEqual(current, specialCost, { sortArray: true })) {
			if (!mismatch || !valuesEqual(mismatch.expected, specialCost, { sortArray: true })) throw new Error(`${reportCard.id}.${field} lacks reviewed special-fix evidence`)
			const attack = attacks?.elements?.[0]
			if (!attack || attack.type !== 'ObjectExpression') throw new Error(`${reportCard.id}.${field} has no attack target`)
			setProperty(attack, 'cost', specialCost)
			changed++
		}
		handled.add(field)
	}

	if (reportCard.id === 'A1-260') {
		const required = ['attacks.length', 'attacks[0].cost', 'attacks[0].damage']
		for (const field of required) {
			const mismatch = stable.find(value => value.field === field)
			if (!mismatch) throw new Error(`${reportCard.id}.${field} lacks reviewed Zapdos ex evidence`)
		}
		const current = stableFieldValue(cardObject, 'attacks.length')
		if (!valuesEqual(current, 2) || !valuesEqual(fromAst(attacks), ZAPDOS_EX_ATTACKS)) {
			setProperty(cardObject, 'attacks', ZAPDOS_EX_ATTACKS)
			changed++
		}
		handled.add('attacks.length')
	}

	for (const mismatch of stable) {
		if (!handled.has(mismatch.field)) throw new Error(`${reportCard.id}.${mismatch.field} is not covered by the apply transform`)
	}
	return changed
}

const reportFile = arg('report', DEFAULT_REPORT)
const report = readJson(reportFile)
validateReport(report)
const checkOnly = process.argv.includes('--check') || process.argv.includes('--dry-run')
let filesChanged = 0
let nameChanges = 0
let stableChanges = 0

const plans = []
const seenFiles = new Set()
const seenIds = new Set()
for (const reportCard of report.cards ?? []) {
	const file = cardPath(reportCard)
	if (seenFiles.has(file)) throw new Error(`Duplicate card source path in report: ${file}`)
	if (seenIds.has(reportCard.id)) throw new Error(`Duplicate card id in report: ${String(reportCard.id)}`)
	seenFiles.add(file)
	seenIds.add(reportCard.id)
	const source = fs.readFileSync(file, 'utf8')
	const root = j(source)
	const cardObject = objectVariable(root, 'card')
	if (!cardObject || cardObject.type !== 'ObjectExpression') throw new Error(`Cannot find card object: ${file}`)
	plans.push({ reportCard, file, source, root, cardObject })
}

const actualIds = currentCardIds()
const missingIds = [...actualIds].filter(id => !seenIds.has(id))
const extraIds = [...seenIds].filter(id => !actualIds.has(id))
if (missingIds.length > 0 || extraIds.length > 0) {
	throw new Error(`Integrity report card coverage mismatch (missing ${missingIds.length}, extra ${extraIds.length})`)
}

for (const { reportCard, file, source, root, cardObject } of plans) {
	const names = applyNames(cardObject, reportCard)
	const stable = applyStable(cardObject, reportCard)
	if (names === 0 && stable === 0) continue
	const output = root.toSource()
	if (output !== source) {
		if (!checkOnly) fs.writeFileSync(file, output)
		filesChanged++
	}
	nameChanges += names
	stableChanges += stable
}

console.log(JSON.stringify({ report: path.resolve(reportFile), checkOnly, filesChanged, nameChanges, stableChanges }, null, 2))
