#!/usr/bin/env node

/**
 * Read-only Pocket card integrity audit.
 *
 * This pass deliberately compares structured sources only. It is the fast
 * candidate generator; image identity and unresolved localized text are
 * adjudicated by the follow-up review manifest.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import jscodeshift from 'jscodeshift'
import { normalizeRaenonxName } from '../.agents/skills/merge-pocket-card-sources/scripts/normalize-raenonx-name.mjs'

const j = jscodeshift.withParser('ts')
const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const DATA_ROOT = path.join(ROOT, 'data', 'Pokémon TCG Pocket')
const DEFAULT_ASSETS = '/private/tmp/pocket-set.0J6F59/ptcgp-assets'
const DEFAULT_RAENONX = path.join(ROOT, 'meta/pocket-source-reviews/localized-images/2026-08-03/source-snapshot/raenonx-global-master.json')
const DEFAULT_OUTPUT = '/private/tmp/pocket-card-integrity-structure.json'

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

function stripEx(value) {
	return String(value ?? '').replace(/\s*-?ex$/iu, '').trim()
}

function formRule(base, ex = false) {
	return {
		base: ex ? `${base} ex` : base,
		fr: value => `${stripEx(value)} d'Alola${ex ? '-ex' : ''}`,
		es: value => `${stripEx(value)} de Alola${ex ? ' ex' : ''}`,
		it: value => `${stripEx(value)} di Alola${ex ? '-ex' : ''}`,
		de: value => `Alola-${value}`,
		'pt-br': value => `${stripEx(value)} de Alola${ex ? ' ex' : ''}`,
		'zh-tw': value => `阿羅拉的${value}`,
	}
}

const FORM_RULES = Object.fromEntries([
	...['Diglett', 'Dugtrio', 'Exeggutor', 'Geodude', 'Graveler', 'Golem', 'Grimer', 'Muk', 'Marowak', 'Meowth', 'Persian', 'Ninetales', 'Raichu', 'Rattata', 'Raticate', 'Sandshrew', 'Sandslash', 'Vulpix'].map(name => [`Alolan ${name}`, formRule(name)]),
	...['Dugtrio', 'Muk', 'Ninetales', 'Raichu'].map(name => [`Alolan ${name} ex`, formRule(name, true)]),
	...['Lilligant', 'Sliggoo', 'Goodra', 'Zorua'].map(name => [`Hisuian ${name}`, {
		base: name,
		fr: value => `${stripEx(value)} de Hisui`, es: value => `${stripEx(value)} de Hisui`, it: value => `${stripEx(value)} di Hisui`, de: value => `Hisui-${value}`, 'pt-br': value => `${stripEx(value)} de Hisui`, 'zh-tw': value => `洗翠的${value}`,
	}]),
	...['Zoroark'].map(name => [`Hisuian ${name} ex`, {
		base: `${name} ex`,
		fr: value => `${stripEx(value)} de Hisui-ex`, es: value => `${stripEx(value)} de Hisui ex`, it: value => `${stripEx(value)} di Hisui-ex`, de: value => `Hisui-${value}`, 'pt-br': value => `${stripEx(value)} de Hisui ex`, 'zh-tw': value => `洗翠的${value}`,
	}]),
	...['Tauros', 'Wooper', 'Clodsire'].map(name => [`Paldean ${name}`, {
		base: name,
		fr: value => `${stripEx(value)} de Paldea`, es: value => `${stripEx(value)} de Paldea`, it: value => `${stripEx(value)} di Paldea`, de: value => `Paldea-${value}`, 'pt-br': value => `${stripEx(value)} de Paldea`, 'zh-tw': value => `帕底亞的${value}`,
	}]),
	['Paldean Clodsire ex', {
		base: 'Clodsire ex', fr: value => `${stripEx(value)} de Paldea-ex`, es: value => `${stripEx(value)} de Paldea ex`, it: value => `${stripEx(value)} di Paldea-ex`, de: value => `Paldea-${value}`, 'pt-br': value => `${stripEx(value)} de Paldea ex`, 'zh-tw': value => `帕底亞的${value}`,
	}],
])

const FORM_NAME_OVERRIDES = {
	'Castform Sunny Form': { fr: 'Morphéo Forme Solaire', es: 'Castform Forma Sol', it: 'Castform Forma Sole', de: 'Formeo Sonnenform', 'pt-br': 'Castform Forma Ensolarada', 'zh-tw': '飄浮泡泡 太陽的樣子' },
	'Castform Rainy Form': { fr: 'Morphéo Forme Eau de Pluie', es: 'Castform Forma Lluvia', it: 'Castform Forma Pioggia', de: 'Formeo Regenform', 'pt-br': 'Castform Forma Chuvosa', 'zh-tw': '飄浮泡泡 雨水的樣子' },
	'Castform Snowy Form': { fr: 'Morphéo Forme Blizzard', es: 'Castform Forma Nieve', it: 'Castform Forma Neve', de: 'Formeo Schneeform', 'pt-br': 'Castform Forma Nevada', 'zh-tw': '飄浮泡泡 雪雲的樣子' },
	'Rapid Strike Urshifu': { fr: 'Shifours Mille Poings', es: 'Urshifu Estilo Fluido', it: 'Urshifu Stile Pluricolpo', de: 'Wulaosu Fließender Stil', 'pt-br': 'Urshifu Estilo Golpe Fluido', 'zh-tw': '武道熊師 連擊流' },
	'Single Strike Urshifu': { fr: 'Shifours Poing Final', es: 'Urshifu Estilo Brusco', it: 'Urshifu Stile Singolcolpo', de: 'Wulaosu Fokussierter Stil', 'pt-br': 'Urshifu Estilo Golpe Decisivo', 'zh-tw': '武道熊師 一擊流' },
}

const DE_IT_AMBIGUOUS_NAMES = new Set([
	'B2-017', 'B2-027', 'B2-048', 'B2-093', 'B2-180', 'B2-194',
	'P-A-078', 'P-A-079',
])

// Reviewed regional-form names whose localized upstream payload omitted the
// form marker.  Keep these in the audit's expected-name model so the same
// correction is checked on every future run.
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

function canonicalNameFor(item, source, pageData, assetNames) {
	const sourceName = pageData
		? normalizeRaenonxName('en', lookup(pageData.messages.en.Game.Master, ['Card', 'Name'], source.play?.characterI18nId))
		: assetNames.en.get(item.id)?.name
	return sourceName || assetNames.en.get(item.id)?.name
}

function expectedLocalizedName(item, source, locale, pageData, assetNames) {
	const canonical = canonicalNameFor(item, source, pageData, assetNames)
	const assetRaw = assetNames[locale].get(item.id)?.name
	const asset = normalizeRaenonxName(locale === 'pt-br' ? 'pt' : locale, assetRaw)
	if (!canonical || !asset) return undefined
	if (REVIEWED_NAME_OVERRIDES[item.id]?.[locale]) return REVIEWED_NAME_OVERRIDES[item.id][locale]
	const pageLocale = { en: 'en', fr: 'fr', es: 'es', 'pt-br': 'pt', 'zh-tw': 'zh' }[locale]
	if (pageData && pageLocale) {
		const pageName = normalizeRaenonxName(pageLocale, lookup(pageData.messages[pageLocale].Game.Master, ['Card', 'Name'], source.play?.characterI18nId))
		if (pageName) return pageName
	}
	if (FORM_NAME_OVERRIDES[canonical]?.[locale]) return FORM_NAME_OVERRIDES[canonical][locale]
	if (locale === 'de' && /^Origin Forme /u.test(canonical)) return `Ur-${asset}`
	if (locale === 'it' && /^Origin Forme /u.test(canonical)) return `${asset} Forma Originale`
	const rule = FORM_RULES[canonical]
	if (rule?.[locale]) {
		if (locale === 'zh-tw' && /(?:阿羅拉|帕底亞|洗翠|伽勒爾)/u.test(asset)) return asset
		return rule[locale](asset)
	}
	return asset
}

function arg(name, fallback) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback
}

function readJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function decodeFlightFrames(html) {
	const re = /self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)<\/script>/gu
	return [...html.matchAll(re)].map(match => JSON.parse(`"${match[1]}"`))
}

function extractJsonObject(text, start) {
	const open = text.indexOf('{', start)
	if (open < 0) return undefined
	let depth = 0
	let quoted = false
	let escaped = false
	for (let index = open; index < text.length; index++) {
		const char = text[index]
		if (quoted) {
			if (escaped) escaped = false
			else if (char === '\\') escaped = true
			else if (char === '"') quoted = false
			continue
		}
		if (char === '"') quoted = true
		else if (char === '{') depth++
		else if (char === '}') {
			depth--
			if (depth === 0) return JSON.parse(text.slice(open, index + 1))
		}
	}
	throw new Error('Unterminated JSON object in RaenonX payload')
}

function extractMessages(html, locale) {
	for (const frame of decodeFlightFrames(html)) {
		const marker = '"messages":'
		const markerIndex = frame.indexOf(marker)
		if (markerIndex < 0) continue
		const messages = extractJsonObject(frame, markerIndex + marker.length)
		if (messages?.Game?.Master) return messages
	}
	throw new Error(`RaenonX ${locale} page did not contain messages.Game.Master`)
}

function lookup(master, pathParts, id) {
	let value = master
	for (const part of pathParts) value = value?.[part]
	return value?.[String(id)]
}

async function fetchRaenonxMessages(masterIndex) {
	const sample = [...masterIndex.values()].find(value => value?.cardId)
	if (!sample) throw new Error('RaenonX master has no card page sample')
	const locales = ['en', 'fr', 'es', 'pt', 'zh']
	const messages = {}
	const pages = {}
	for (const locale of locales) {
		const url = `https://ptcgp.raenonx.cc/${locale}/card/${sample.cardId}`
		const response = await fetch(url, { signal: AbortSignal.timeout(60_000) })
		if (!response.ok) throw new Error(`RaenonX ${locale}: ${response.status}`)
		const body = await response.text()
		messages[locale] = extractMessages(body, locale)
		pages[locale] = { url, status: response.status, bytes: Buffer.byteLength(body) }
	}
	return { messages, pages }
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

function objectForVariable(source, variableName) {
	const root = j(source)
	const object = root.find(j.VariableDeclarator, { id: { name: variableName } }).find(j.ObjectExpression).nodes()[0]
	if (!object) throw new Error(`Could not find ${variableName} object`)
	return astValue(object)
}

function readSetIndex() {
	const result = new Map()
	for (const file of fs.readdirSync(DATA_ROOT).filter(name => name.endsWith('.ts'))) {
		const set = objectForVariable(fs.readFileSync(path.join(DATA_ROOT, file), 'utf8'), 'set')
		result.set(file.slice(0, -3), { id: set.id, name: set.name?.en ?? file.slice(0, -3) })
	}
	return result
}

function readCards(setIndex) {
	const cards = []
	for (const folder of fs.readdirSync(DATA_ROOT, { withFileTypes: true }).filter(entry => entry.isDirectory())) {
		const set = setIndex.get(folder.name)
		if (!set) throw new Error(`Missing set index for ${folder.name}`)
		for (const file of fs.readdirSync(path.join(DATA_ROOT, folder.name)).filter(name => /^\d{3}\.ts$/u.test(name))) {
			const sourceFile = path.join(DATA_ROOT, folder.name, file)
			const card = objectForVariable(fs.readFileSync(sourceFile, 'utf8'), 'card')
			cards.push({
				id: `${set.id}-${file.slice(0, -3)}`,
				setId: set.id,
				setName: set.name,
				localId: file.slice(0, -3),
				sourceFile: path.relative(ROOT, sourceFile).split(path.sep).join('/'),
				card,
			})
		}
	}
	return cards.sort((left, right) => left.id.localeCompare(right.id, undefined, { numeric: true }))
}

function normalizeSetId(setId) {
	return setId === 'PROMO-A' ? 'P-A' : setId === 'PROMO-B' ? 'P-B' : setId
}

function indexRaenonx(master) {
	const index = new Map()
	for (const value of Object.values(master.cardEntryMap ?? {})) {
		for (const collection of value.collectionNums ?? []) {
			const key = `${normalizeSetId(collection.expansion.id)}-${String(collection.num).padStart(3, '0')}`
			if (index.has(key)) throw new Error(`Ambiguous RaenonX join: ${key}`)
			index.set(key, value)
		}
	}
	return index
}

function sorted(value) {
	if (Array.isArray(value)) return value.map(sorted)
	if (!value || typeof value !== 'object') return value
	return Object.fromEntries(Object.keys(value).sort().map(key => [key, sorted(value[key])]))
}

function equal(left, right) {
	return JSON.stringify(sorted(left)) === JSON.stringify(sorted(right))
}

function normalizedWeakness(card) {
	return (card.weaknesses ?? []).filter(value => value?.type !== 'Colorless' && value?.type !== 'UNSPECIFIED')
}

function invalidWeaknesses(card) {
	return (card.weaknesses ?? []).filter(value => value?.type === 'Colorless' || value?.type === 'UNSPECIFIED')
}

function rawWeakness(play) {
	if (!play?.weakness || play.weakness.id === undefined) return []
	const type = TYPE_BY_ID[play.weakness.id]
	return type === 'Colorless' ? [] : [{ type, value: `+${play.weakness.bonus}` }]
}

function rawCost(attack) {
	const cost = []
	for (const [typeId, count] of Object.entries(attack?.energy ?? {})) {
		for (let index = 0; index < Number(count); index++) cost.push(ENERGY_BY_ID[Number(typeId)] ?? `#${typeId}`)
	}
	return cost.sort()
}

function apiCost(attack) {
	return [...(attack?.cost ?? [])].sort()
}

function apiDamage(attack) {
	if (attack?.damage === undefined || attack?.damage === null) return null
	const match = String(attack.damage).match(/\d+/u)
	return match ? Number(match[0]) : null
}

function rawDamage(attack) {
	const value = attack?.damageMarking?.value ?? null
	return value === 0 ? null : value
}

function compareStable(card, source) {
	const raw = source?.play ?? {}
	const pokemon = source?.cardType === 'pokemon'
	const mismatches = []
	const check = (field, actual, expected, policy = 'source-exact') => {
		if (!equal(actual, expected)) mismatches.push({ field, actual, expected, policy })
	}

	check('category', card.category, pokemon ? 'Pokemon' : 'Trainer')
	// Promo cards intentionally use None in this API; do not classify that
	// representation difference as a card-face error.
	if (!(['P-A', 'P-B'].includes(card.__setId) && card.rarity === 'None')) {
		check('rarity', card.rarity, RARITY_BY_CODE[source.rarity] ?? source.rarity, 'semantic-review')
	}
	if (!pokemon) {
		return mismatches
	}
	check('hp', card.hp, raw.hp)
	check('types', card.types, (raw.types ?? []).map(value => TYPE_BY_ID[value] ?? `#${value}`))
	check('stage', card.stage, STAGE_BY_ID[raw.evolution?.stage] ?? `#${raw.evolution?.stage}`)
	check('retreat', card.retreat, raw.retreat)
	check('weaknesses', normalizedWeakness(card), rawWeakness(raw))
	check('attacks.length', (card.attacks ?? []).length, (raw.attacks ?? []).length)
	check('abilities.length', (card.abilities ?? []).length, (raw.abilities ?? []).length)
	for (let index = 0; index < Math.min((card.attacks ?? []).length, (raw.attacks ?? []).length); index++) {
		check(`attacks[${index}].cost`, apiCost(card.attacks[index]), rawCost(raw.attacks[index]))
		check(`attacks[${index}].damage`, apiDamage(card.attacks[index]), rawDamage(raw.attacks[index]))
	}
	return mismatches
}

function localeNameCandidates(cards, assetsRoot, locale) {
	const fileMap = {
		en: 'en-US', fr: 'fr-FR', es: 'es-ES', de: 'de-DE', it: 'it-IT',
		'pt-br': 'pt-BR', 'zh-tw': 'zh-TW',
	}
	const source = readJson(path.join(assetsRoot, 'metadata/cards', fileMap[locale], 'cards.extra.json'))
	return new Map(source.map(card => [`${normalizeSetId(card.set)}-${String(card.number).padStart(3, '0')}`, card]))
}

function buildReport(cards, generated, raenonx, assetsRoot, pageData = null) {
	const apiById = new Map(generated.map(card => [card.id, card]))
	const raenonxById = indexRaenonx(raenonx)
	const reports = []
	const summary = { cards: cards.length, generatedCards: generated.length, raenonxJoin: 0, missing: [], fields: {}, names: {} }
	const locales = ['en', 'fr', 'es', 'de', 'it', 'pt-br', 'zh-tw']
	const raenonxLocales = { en: 'en', fr: 'fr', es: 'es', 'pt-br': 'pt', 'zh-tw': 'zh' }
	const assetNames = Object.fromEntries(locales.map(locale => [locale, localeNameCandidates(cards, assetsRoot, locale)]))

	for (const item of cards) {
		const apiCard = apiById.get(item.id)
		if (!apiCard) {
			summary.missing.push({ id: item.id, reason: 'generated-api-card-missing' })
			continue
		}
		const source = raenonxById.get(item.id)
		if (!source) {
			summary.missing.push({ id: item.id, reason: 'raenonx-join-missing' })
			continue
		}
		summary.raenonxJoin++
		const stable = compareStable({ ...item.card, __setId: item.setId }, source)
		if (invalidWeaknesses(item.card).length > 0) {
			stable.push({ field: 'weaknesses.invalid', actual: invalidWeaknesses(item.card), expected: [], policy: 'remove-invalid-source-semantic' })
		}
		for (const mismatch of stable) summary.fields[mismatch.field] = (summary.fields[mismatch.field] ?? 0) + 1
		const names = {}
		for (const locale of locales) {
			const asset = assetNames[locale].get(item.id)
			const apiLocale = locale === 'pt-br' ? 'pt-br' : locale
			if (!asset) {
				names[locale] = { status: 'source-missing' }
				continue
			}
			const actual = item.card.name?.[apiLocale]
			const expected = expectedLocalizedName(item, source, locale, pageData, assetNames)
			// MemoryDatabase names omit some regional-form suffixes. These remain
			// candidates until RaenonX/native visual review, never auto-fixes.
			if ((locale === 'de' || locale === 'it') && DE_IT_AMBIGUOUS_NAMES.has(item.id)) {
				names[locale] = { status: 'manual-review', actual, expected, source: 'no-source-exact-localized-text' }
				continue
			}
			if (actual !== expected) {
				names[locale] = { status: 'candidate', actual, expected, source: 'MemoryDatabase' }
				summary.names[locale] = (summary.names[locale] ?? 0) + 1
			} else names[locale] = { status: 'match', actual }
		}
		const raenonx = {}
		if (pageData) {
			for (const [apiLocale, pageLocale] of Object.entries(raenonxLocales)) {
				const master = pageData.messages[pageLocale]?.Game?.Master
				const expected = normalizeRaenonxName(pageLocale, lookup(master, ['Card', 'Name'], source.play?.characterI18nId))
				const actual = item.card.name?.[apiLocale]
				if (expected !== actual) {
					raenonx[apiLocale] = { status: 'mismatch', actual, expected, source: 'RaenonX' }
					summary.names[`raenonx:${apiLocale}`] = (summary.names[`raenonx:${apiLocale}`] ?? 0) + 1
				} else raenonx[apiLocale] = { status: 'match', actual }
			}
		}
		const expectedNames = Object.fromEntries(locales.map(locale => [locale, expectedLocalizedName(item, source, locale, pageData, assetNames)]))
		reports.push({ id: item.id, sourceFile: item.sourceFile, stable, names, expectedNames, raenonx })
	}
	return { schemaVersion: 1, generatedAt: new Date().toISOString(), sources: {
		raenonx: 'meta/pocket-source-reviews/localized-images/2026-08-03/source-snapshot/raenonx-global-master.json',
		memoryDatabase: 'ptcgp-assets/metadata/cards/<locale>/cards.extra.json',
		assetsRoot,
	}, raenonxPages: pageData?.pages ?? null, summary, cards: reports }
}

const assetsRoot = path.resolve(arg('assets-root', DEFAULT_ASSETS))
const raenonxFile = path.resolve(arg('raenonx', DEFAULT_RAENONX))
const output = path.resolve(arg('output', DEFAULT_OUTPUT))
const setIndex = readSetIndex()
const cards = readCards(setIndex)
const generated = readJson(path.join(ROOT, 'server/generated/en/cards.json'))
const master = readJson(raenonxFile)
const masterIndex = indexRaenonx(master)
const pageData = process.argv.includes('--fetch-raenonx-pages')
	? await fetchRaenonxMessages(masterIndex)
	: null
const report = buildReport(cards, generated, master, assetsRoot, pageData)
fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify({ output, summary: report.summary }, null, 2))
