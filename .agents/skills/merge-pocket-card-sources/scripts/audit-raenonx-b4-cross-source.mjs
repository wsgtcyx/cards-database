#!/usr/bin/env node

/**
 * Compare RaenonX's B4 stable mechanics against the pre-sync API baseline.
 *
 * The existing API baseline is the result of the project's prior multi-source
 * review (index/PokeOS, deckGym, PokemonMeta, and targeted adjudication). This
 * audit deliberately excludes localized strings and images, which RaenonX
 * owns for this sync, and checks the fields that must not drift silently.
 */

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import jscodeshift from 'jscodeshift'
import { normalizeRaenonxName } from './normalize-raenonx-name.mjs'

const j = jscodeshift.withParser('ts')

const TYPE_BY_ID = {
	1: 'Grass',
	2: 'Fire',
	3: 'Water',
	4: 'Lightning',
	5: 'Psychic',
	6: 'Fighting',
	7: 'Darkness',
	8: 'Metal',
	9: 'Dragon',
	10: 'Colorless',
}

const ENERGY_BY_ID = {
	1: 'Colorless',
	2: 'Grass',
	3: 'Fire',
	4: 'Water',
	5: 'Lightning',
	6: 'Psychic',
	7: 'Fighting',
	8: 'Darkness',
	9: 'Metal',
	10: 'Dragon',
}

const RARITY_BY_CODE = {
	C: 'One Diamond',
	U: 'Two Diamond',
	R: 'Three Diamond',
	RR: 'Four Diamond',
	AR: 'One Star',
	SR: 'Two Star',
	SAR: 'Two Star',
	IM: 'Three Star',
	S: 'One Shiny',
	SSR: 'Two Shiny',
	UR: 'Crown',
}

const STAGE_BY_ID = { 1: 'Basic', 2: 'Stage1', 3: 'Stage2' }
const API_ROOT = path.resolve('data/Pokémon TCG Pocket/Ruler of the Skies')
const DEFAULT_OVERLAY = 'meta/pocket-source-reviews/B4/raenonx.overlay.json'
const DEFAULT_AUDIT = 'meta/pocket-source-reviews/B4/B4.audit.json'
const DEFAULT_SOURCES = 'meta/pocket-source-reviews/B4.sources.json'
const DEFAULT_OUTPUT = 'meta/pocket-source-reviews/B4/raenonx.cross-source.json'

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

function astValue(node) {
	if (!node) return undefined
	if (['Literal', 'StringLiteral', 'NumericLiteral', 'BooleanLiteral'].includes(node.type)) return node.value
	if (node.type === 'NullLiteral') return null
	if (node.type === 'Identifier') return { __identifier: node.name }
	if (node.type === 'TSAsExpression' || node.type === 'TSTypeAssertion') return astValue(node.expression)
	if (node.type === 'ArrayExpression') return node.elements.map(astValue)
	if (node.type === 'ObjectExpression') {
		return Object.fromEntries(node.properties.map(property => [propertyName(property), astValue(property.value)]))
	}
	return { __node: node.type }
}

function parseApiCard(source) {
	const root = j(source)
	const object = root.find(j.VariableDeclarator, { id: { name: 'card' } }).find(j.ObjectExpression).nodes()[0]
	if (!object) throw new Error('Could not find API card object')
	return astValue(object)
}

function readApiSource(file, baseRef) {
	const relative = path.relative(process.cwd(), file).split(path.sep).join('/')
	if (baseRef) return execFileSync('git', ['show', `${baseRef}:${relative}`], { encoding: 'utf8' })
	return fs.readFileSync(file, 'utf8')
}

function sorted(value) {
	if (Array.isArray(value)) return value.map(sorted)
	if (!value || typeof value !== 'object') return value
	return Object.fromEntries(Object.keys(value).sort().map(key => [key, sorted(value[key])]))
}

function compare(actual, expected) {
	return JSON.stringify(sorted(actual)) === JSON.stringify(sorted(expected))
}

function addMismatch(mismatches, id, field, api, raenonx) {
	if (!compare(api, raenonx)) mismatches.push({ id, field, api, raenonx })
}

function rawCost(attack) {
	const cost = []
	for (const [typeId, count] of Object.entries(attack?.energy ?? {})) {
		const type = ENERGY_BY_ID[Number(typeId)] ?? `#${typeId}`
		for (let index = 0; index < Number(count); index++) cost.push(type)
	}
	return cost.sort()
}

function apiCost(attack) {
	return [...(attack?.cost ?? [])].sort()
}

function costMatches(apiAttack, rawAttack) {
	const actual = apiCost(apiAttack)
	const required = rawCost(rawAttack)
	const actualCounts = new Map()
	const requiredCounts = new Map()
	for (const value of actual) actualCounts.set(value, (actualCounts.get(value) ?? 0) + 1)
	for (const value of required) requiredCounts.set(value, (requiredCounts.get(value) ?? 0) + 1)
	for (const [value, count] of requiredCounts) {
		if ((actualCounts.get(value) ?? 0) < count) return false
	}
	return actual.length >= Number(rawAttack?.energyTotal ?? required.length)
}

function rawDamage(attack) {
	const value = attack?.damageMarking?.value ?? null
	return value === 0 ? null : value
}

function apiDamage(attack) {
	if (attack?.damage === undefined || attack?.damage === null) return null
	const match = String(attack.damage).match(/\d+/u)
	return match ? Number(match[0]) : null
}

function checkCard(id, overlayCard, apiCard) {
	const mismatches = []
	const raw = overlayCard.raw ?? {}
	const play = raw.play ?? {}
	const isPokemon = raw.cardType === 'pokemon'

	addMismatch(mismatches, id, 'category', apiCard.category, isPokemon ? 'Pokemon' : 'Trainer')
	addMismatch(mismatches, id, 'rarity', apiCard.rarity, RARITY_BY_CODE[raw.rarity] ?? `#${raw.rarity}`)

	if (!isPokemon) return mismatches

	addMismatch(mismatches, id, 'hp', apiCard.hp, play.hp)
	addMismatch(mismatches, id, 'types', apiCard.types, (play.types ?? []).map(value => TYPE_BY_ID[value] ?? `#${value}`))
	addMismatch(mismatches, id, 'stage', apiCard.stage, STAGE_BY_ID[play.evolution?.stage] ?? `#${play.evolution?.stage}`)
	addMismatch(mismatches, id, 'retreat', apiCard.retreat, play.retreat)
	addMismatch(
		mismatches,
		id,
		'weakness',
		apiCard.weaknesses ?? [],
		play.weakness ? [{ type: TYPE_BY_ID[play.weakness.id] ?? `#${play.weakness.id}`, value: `+${play.weakness.bonus}` }] : [],
	)

	const apiAttacks = apiCard.attacks ?? []
	const rawAttacks = play.attacks ?? []
	addMismatch(mismatches, id, 'attacks.length', apiAttacks.length, rawAttacks.length)
	for (let index = 0; index < Math.min(apiAttacks.length, rawAttacks.length); index++) {
		const apiAttack = apiAttacks[index]
		const rawAttack = rawAttacks[index]
		if (!costMatches(apiAttack, rawAttack)) {
			mismatches.push({ id, field: `attacks[${index}].cost`, api: apiCost(apiAttack), raenonx: rawCost(rawAttack), raenonxEnergyTotal: rawAttack.energyTotal })
		}
		addMismatch(mismatches, id, `attacks[${index}].damage.base`, apiDamage(apiAttack), rawDamage(rawAttack))
	}
	addMismatch(mismatches, id, 'abilities.length', (apiCard.abilities ?? []).length, (play.abilities ?? []).length)
	return mismatches
}

const overlayPath = arg('overlay', DEFAULT_OVERLAY)
const auditPath = arg('audit', DEFAULT_AUDIT)
const sourcesPath = arg('sources', DEFAULT_SOURCES)
const outputPath = arg('output', DEFAULT_OUTPUT)
const baseRef = arg('base-ref', 'HEAD')
const overlay = readJson(overlayPath)
const priorAudit = readJson(auditPath)
const sourceRegistry = readJson(sourcesPath)
const entries = Object.entries(overlay.cards ?? {}).sort(([, left], [, right]) => left.number - right.number)
if (entries.length !== 233) throw new Error(`Expected 233 overlay cards, got ${entries.length}`)

const mismatches = []
for (const [id, overlayCard] of entries) {
	const filename = path.join(API_ROOT, `${String(overlayCard.number).padStart(3, '0')}.ts`)
	if (!fs.existsSync(filename)) throw new Error(`${id}: missing API card ${filename}`)
	const apiCard = parseApiCard(readApiSource(filename, baseRef))
	mismatches.push(...checkCard(id, overlayCard, apiCard))
	for (const [locale, localized] of Object.entries(overlayCard.locales ?? {})) {
		const normalized = normalizeRaenonxName(locale, localized.name)
		if (normalized !== localized.name) {
			mismatches.push({
				id,
				field: `locales.${locale}.name.spacing`,
				api: normalized,
				raenonx: localized.name,
				reason: 'localized form separator is missing',
			})
		}
	}
}

const report = {
	schemaVersion: 1,
	setId: 'B4',
	status: mismatches.length ? 'review' : 'passed',
	checkedCards: entries.length,
	baseRef,
	policy: {
		stableFields: 'RaenonX raw mechanics are compared against the pre-sync API baseline.',
		localizedFields: 'RaenonX owns en/fr/es/pt/zh names and rules for this sync.',
		images: 'RaenonX owns the four newly added localized image variants; existing English R2 objects are preserved.',
	},
	priorMultiSourceAudit: {
		file: auditPath,
		passed: priorAudit.passed,
		confidence: priorAudit.confidence,
		counts: priorAudit.counts,
		resolvedConflicts: priorAudit.resolvedConflicts?.length ?? 0,
		unresolvedConflicts: priorAudit.unresolvedConflicts?.length ?? 0,
	},
	independentSources: Object.fromEntries(Object.entries(sourceRegistry).map(([name, value]) => [name, {
		role: value.role,
		url: value.url ?? value.repo,
		limitation: value.limitation,
	}])),
	raenonx: {
		credit: overlay.source?.credit,
		masterUrl: overlay.source?.masterUrl,
		pageUrlTemplate: overlay.source?.pageUrlTemplate,
		accessedAt: overlay.source?.accessedAt,
	},
	mismatchCount: mismatches.length,
	mismatches,
}

fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true })
fs.writeFileSync(path.resolve(outputPath), `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify({ setId: 'B4', checkedCards: entries.length, mismatchCount: mismatches.length, status: report.status, output: outputPath }, null, 2))
if (mismatches.length) process.exitCode = 1
