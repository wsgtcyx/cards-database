#!/usr/bin/env node

/**
 * Fetch the RaenonX Pokémon TCG Pocket master/page payloads and turn the
 * source-exact B4 localization surface into a reviewable overlay.
 *
 * The page payload is intentionally pinned by response hash. RaenonX does
 * not publish a formal repository licence for this data, so every generated
 * artifact carries the source URL, access time, response hashes, and credit.
 */

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { normalizeRaenonxName } from './normalize-raenonx-name.mjs'

const SOURCE = {
	name: 'RaenonX Pokémon TCG Pocket Wiki',
	credit: 'https://ptcgp.raenonx.cc',
	masterUrl: 'https://ptcgp.raenonx.cc/api/data/global-master',
	pageUrlTemplate: 'https://ptcgp.raenonx.cc/{locale}/card/{cardId}',
	imageUrlTemplate: 'https://cdn.raenonx.cc/api/image/ptcgp?format=png&url=/images/game/card/full/{locale}/{cardId}.png',
}

const LOCALES = ['en', 'fr', 'es', 'pt', 'zh']
const DEFAULT_CARD_ID = 'PK_10_019620_00'
const IMAGE_SOURCE_LOCALES = {
	en: 'en',
	fr: 'fr',
	es: 'es',
	pt: 'pt',
	zh: 'zh',
}

// The card-description renderer resolves Text:SpecialCondition through the
// game client rather than a messages.Game.Master string. These terms are
// taken from the same localized RaenonX payload's CauseSpecialCondition_* UI
// messages and are kept explicit so a renderer change cannot silently fall
// back to English.
const CONDITION_TRANSLATIONS = {
	en: { Asleep: 'Asleep', Burned: 'Burned', Confused: 'Confused', Paralyzed: 'Paralyzed', Poisoned: 'Poisoned' },
	fr: { Asleep: 'Endormi', Burned: 'Brûlé', Confused: 'Confus', Paralyzed: 'Paralysé', Poisoned: 'Empoisonné' },
	es: { Asleep: 'Dormido', Burned: 'Quemado', Confused: 'Confundido', Paralyzed: 'Paralizado', Poisoned: 'Envenenado' },
	pt: { Asleep: 'Adormecido', Burned: 'Queimado', Confused: 'Confuso', Paralyzed: 'Paralisado', Poisoned: 'Envenenado' },
	zh: { Asleep: '睡眠', Burned: '灼傷', Confused: '混亂', Paralyzed: '麻痺', Poisoned: '中毒' },
}
const ENERGY_MARKERS = {
	C: '1', G: '2', R: '3', W: '4', L: '5', P: '6', F: '7', D: '8', M: '9',
}

function arg(name, fallback) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function writeJson(file, value) {
	fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true })
	fs.writeFileSync(path.resolve(file), `${JSON.stringify(value, null, 2)}\n`)
}

function sha256(value) {
	return crypto.createHash('sha256').update(value).digest('hex')
}

function normalize(value) {
	return String(value ?? '')
		.normalize('NFKC')
		.replaceAll('\u00a0', ' ')
		.replace(/\s+/gu, ' ')
		.trim()
}

function parseAttrs(text) {
	const attrs = {}
	for (const match of text.matchAll(/([A-Za-z_][\w-]*)=(?:"([^"]*)"|'([^']*)')/gu)) {
		attrs[match[1]] = match[2] ?? match[3] ?? ''
	}
	return attrs
}

function parseTemplate(template) {
	const nodes = []
	const re = /\[([^\]]+)\]/gu
	let cursor = 0
	for (const match of String(template ?? '').matchAll(re)) {
		if (match.index > cursor) nodes.push({ type: 'literal', value: template.slice(cursor, match.index) })
		const raw = match[1]
		if (raw.startsWith('/')) {
			nodes.push({ type: 'close', name: raw.slice(1).trim() })
		} else {
			const firstSpace = raw.search(/\s/u)
			const name = firstSpace < 0 ? raw : raw.slice(0, firstSpace)
			nodes.push({ type: 'tag', name, attrs: parseAttrs(firstSpace < 0 ? '' : raw.slice(firstSpace)) })
		}
		cursor = match.index + match[0].length
	}
	if (cursor < template.length) nodes.push({ type: 'literal', value: template.slice(cursor) })
	return nodes
}

function isDynamic(node) {
	return node.type === 'tag' && (
		node.name === 'Num:Int'
		|| node.name === 'Img:Element'
		|| node.name === 'Img:ex'
		|| node.name === 'Gr:Count'
		|| node.name === 'Text:CardName'
		|| node.name === 'Text:AttackName'
		|| node.name === 'Text:SpecialCondition'
		|| node.name === 'Text:EvolutionPokemon'
	)
}

function isFormatting(node) {
	return node.type === 'close' && node.name.startsWith('Ctrl:')
		|| node.type === 'tag' && (node.name.startsWith('Ctrl:') || node.name === 'C:Nbsp' || node.name === 'C:Nbh')
}

function dynamicNodes(template) {
	return parseTemplate(template).filter(isDynamic)
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
	throw new Error('Unterminated JSON object in Next flight payload')
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

async function fetchText(url, label) {
	const response = await fetch(url, { signal: AbortSignal.timeout(60_000) })
	if (!response.ok) throw new Error(`${label}: ${response.status} ${response.statusText}`)
	const body = await response.text()
	if (!body) throw new Error(`${label}: empty response`)
	const safeHeaders = Object.fromEntries([...response.headers.entries()].filter(([name]) => !['authorization', 'cookie', 'set-cookie'].includes(name.toLowerCase())))
	return { body, headers: safeHeaders, status: response.status }
}

function b4Entries(master) {
	const entries = []
	for (const entry of Object.values(master.cardEntryMap ?? {})) {
		for (const collection of entry.collectionNums ?? []) {
			if (collection.expansion?.id === 'B4') entries.push({ number: collection.num, entry })
		}
	}
	entries.sort((left, right) => left.number - right.number)
	if (entries.length !== 233) throw new Error(`RaenonX B4 entry count is ${entries.length}, expected 233`)
	for (let index = 0; index < entries.length; index++) {
		if (entries[index].number !== index + 1) throw new Error(`RaenonX B4 numbering gap at ${index + 1}`)
	}
	return entries
}

function lookup(master, pathParts, id) {
	let value = master
	for (const part of pathParts) value = value?.[part]
	return value?.[String(id)]
}

function walkParallel(left, right, englishValue, out = []) {
	if (typeof left === 'string') {
		if (left === englishValue && typeof right === 'string') out.push(right)
		return out
	}
	if (!left || typeof left !== 'object' || !right || typeof right !== 'object') return out
	for (const [key, value] of Object.entries(left)) walkParallel(value, right[key], englishValue, out)
	return out
}

function buildTranslatedValueMap(englishMessages, targetMessages) {
	const map = new Map()
	function visit(left, right) {
		if (typeof left === 'string') {
			if (typeof right !== 'string') return
			const values = map.get(left) ?? []
			if (!values.includes(right)) values.push(right)
			map.set(left, values)
			return
		}
		if (!left || typeof left !== 'object' || !right || typeof right !== 'object') return
		for (const [key, value] of Object.entries(left)) visit(value, right[key])
	}
	visit(englishMessages, targetMessages)
	return map
}

function chooseTranslatedString(englishValue, translatedMap, locale, context) {
	const candidates = translatedMap.get(englishValue) ?? []
	if (candidates.length === 1) return candidates[0]
	const normalized = candidates.filter(value => normalize(value) !== normalize(englishValue))
	if (normalized.length === 1) return normalized[0]
	if (CONDITION_TRANSLATIONS[locale]?.[englishValue]) return CONDITION_TRANSLATIONS[locale][englishValue]
	throw new Error(`Cannot resolve ${locale} translation for ${context}: ${JSON.stringify(englishValue)}; candidates=${JSON.stringify(candidates)}`)
}

function allNames(master, pathParts) {
	return new Map(Object.entries(master).map(([id, value]) => [normalize(value), { id, value }]))
}

function findNameIdByEnglish(value, map, context) {
	const candidates = map.get(normalize(value)) ?? []
	if (candidates.length !== 1) {
		throw new Error(`Cannot bind ${context} ${JSON.stringify(value)} to one RaenonX i18n id: ${candidates.length}`)
	}
	return candidates[0]
}

function indexNames(master, pathParts) {
	const result = new Map()
	for (const [id, value] of Object.entries(master)) {
		const key = normalize(value)
		const list = result.get(key) ?? []
		list.push({ id, value })
		result.set(key, list)
	}
	return result
}

function attrValue(node, name) {
	return node.attrs?.[name]
}

function parseNumber(value) {
	const match = String(value ?? '').match(/(?:^|[^\d])(\d+)(?:[^\d]|$)/u)
	return match ? Number(match[1]) : undefined
}

function candidateText(value) {
	return String(value ?? '')
		.normalize('NFKC')
		.replaceAll('\u00a0', ' ')
		.replace(/[ \t]+/gu, ' ')
		.trim()
}

function dynamicCandidates(node, span, maps) {
	switch (node.name) {
		case 'Num:Int': {
			const numbers = [...String(span).matchAll(/\d+/gu)].map(match => match[0])
			return [
				...new Set(numbers),
			].map(number => ({ value: number, output: number })).concat({ value: '', output: '' })
		}
		case 'Img:Element': {
			const named = attrValue(node, 'name')
			if (named) return [{ value: `{${named}}`, output: `{${named}}` }]
			const markers = [...new Set(String(span).match(/\{[A-Z]\}/gu) ?? [])]
			const names = [...maps.energyEnglishNames.keys()]
			return [...new Set([...markers, ...names])].map(value => ({ value, output: value }))
		}
		case 'Img:ex':
			return [{ value: 'ex', output: 'ex' }, { value: 'EX', output: 'EX' }]
		case 'Gr:Count':
			return Object.entries(node.attrs ?? {})
				.filter(([key]) => ['s', 'p', 'one', 'two'].includes(key))
				.map(([branch, output]) => ({ value: output, output, branch }))
				.concat({ value: '', output: '', branch: '__empty' })
		case 'Text:CardName':
			return [...maps.cardEnglishNames.keys()].map(value => ({ value, output: value }))
		case 'Text:AttackName':
			return [...maps.attackEnglishNames.keys()].map(value => ({ value, output: value }))
		case 'Text:SpecialCondition':
			return ['Asleep', 'Burned', 'Confused', 'Paralyzed', 'Poisoned']
				.map(value => ({ value, output: value }))
		case 'Text:EvolutionPokemon':
			return ['Basic Pokémon', 'Evolution Pokémon', 'Stage 1 Pokémon', 'Stage 2 Pokémon']
				.map(value => ({ value, output: value }))
		default:
			throw new Error(`Unsupported dynamic RaenonX tag ${node.name}`)
	}
}

function matchDynamicGroup(nodes, span, context, maps) {
	const target = candidateText(span)
	function visit(index, cursor, captures) {
		if (index === nodes.length) return target.slice(cursor).trim() === '' ? captures : undefined
		while (/\s/u.test(target[cursor] ?? '')) cursor++
		const candidates = dynamicCandidates(nodes[index], target, maps)
			.sort((left, right) => right.output.length - left.output.length)
		for (const candidate of candidates) {
			const output = candidateText(candidate.output)
			if (output && !target.startsWith(output, cursor)) continue
			const next = output ? cursor + output.length : cursor
			const result = visit(index + 1, next, [...captures, candidate.value])
			if (result) return result
		}
		return undefined
	}
	const result = visit(0, 0, [])
	if (!result) throw new Error(`Cannot bind dynamic tokens for ${context}: span=${JSON.stringify(span)} tokens=${JSON.stringify(nodes)}`)
	return result
}

function choosePlural(node, captured, numericById) {
	const attrs = node.attrs ?? {}
	const candidates = Object.entries(attrs).filter(([key]) => ['s', 'p', 'one', 'two'].includes(key))
	if (!candidates.length) throw new Error(`Gr:Count has no branches: ${JSON.stringify(node)}`)
	const target = normalize(captured)
	const matching = candidates.filter(([, value]) => normalize(value) === target)
	if (matching.length === 1) return matching[0][0]
	const ref = attrValue(node, 'ref')
	const number = ref === undefined ? undefined : numericById.get(ref)
	if (number !== undefined) {
		if (number === 1 && attrs.one !== undefined) return 'one'
		if (number === 2 && attrs.two !== undefined) return 'two'
		if (number === 1 && attrs.s !== undefined) return 's'
		if (attrs.p !== undefined) return 'p'
		if (attrs.s !== undefined) return 's'
	}
	if (target === '') return '__empty'
	throw new Error(`Cannot bind Gr:Count branch for ${JSON.stringify(captured)}: ${JSON.stringify(node)}`)
}

function inferCountFromBranch(branch) {
	if (branch === 'one' || branch === 's') return 1
	if (branch === 'two') return 2
	if (branch === 'p') return 2
	return undefined
}

function tokenSkeleton(template) {
	const nodes = parseTemplate(template)
	let skeleton = ''
	const dynamic = []
	for (const node of nodes) {
		if (node.type === 'literal') skeleton += node.value
		else if (isDynamic(node)) {
			const marker = `\uE000${dynamic.length}\uE001`
			skeleton += marker
			dynamic.push(node)
		} else if (isFormatting(node)) {
			// Formatting and no-break tags are presentation-only for this API.
		} else {
			throw new Error(`Unsupported RaenonX tag in source template: ${JSON.stringify(node)}`)
		}
	}
	return { skeleton, dynamic }
}

function normalizedIndexOf(haystack, needle, from) {
	const exact = haystack.indexOf(needle, from)
	if (exact >= 0) return exact
	const compact = normalize(needle)
	if (!compact) return from
	return normalize(haystack.slice(from)).indexOf(compact) < 0
		? -1
		: from + normalize(haystack.slice(from)).indexOf(compact)
}

function captureDynamicValues(rawTemplate, canonicalEnglish, context, maps) {
	const { skeleton, dynamic } = tokenSkeleton(rawTemplate)
	// The reviewed canonical JSON contains a small number of paragraph joins
	// without a space (the checked-in TypeScript text has the intended space).
	// Restore only punctuation-to-uppercase joins for template binding; the
	// generated localized output still comes from RaenonX's target template.
	const canonical = normalize(canonicalEnglish)
		.replace(/\[([A-Z])\]/gu, '{$1}')
		.replace(/-(?=\d)/gu, '−')
		.replace(/([.!?])(?=\(?[A-ZÀ-ÖØ-Þ])/gu, '$1 ')
	const parts = skeleton.split(/\uE000\d+\uE001/gu)
	const values = []
	let cursor = 0
	const firstLiteral = normalize(parts[0])
	if (firstLiteral) {
		const found = normalizedIndexOf(canonical, firstLiteral, cursor)
		if (found < 0) throw new Error(`English template mismatch for ${context}: missing leading literal ${JSON.stringify(firstLiteral)}`)
		cursor = found + firstLiteral.length
	}
	let group = []
	for (let index = 0; index < dynamic.length; index++) {
		group.push(dynamic[index])
		const nextLiteral = normalize(parts[index + 1])
		if (!nextLiteral) continue
		const found = normalizedIndexOf(canonical, nextLiteral, cursor)
		if (found < 0) {
			throw new Error(`English template mismatch for ${context}: could not find ${JSON.stringify(nextLiteral)} after ${JSON.stringify(canonical.slice(cursor))}; raw=${JSON.stringify(rawTemplate)}`)
		}
		values.push(...matchDynamicGroup(group, canonical.slice(cursor, found), context, maps))
		group = []
		cursor = found + nextLiteral.length
	}
	if (group.length) values.push(...matchDynamicGroup(group, canonical.slice(cursor), context, maps))
	if (values.length !== dynamic.length) throw new Error(`Dynamic binding count mismatch for ${context}`)
	return { values, dynamic, skeleton, canonical }
}

function splitConsecutiveDynamicValues(rawTemplate, binding) {
	const { values, dynamic } = binding
	const numericById = new Map()
	const numericTokens = []
	const byId = new Map()
	const byName = new Map()
	const grByRef = new Map()
	const occurrenceByName = new Map()
	for (let index = 0; index < dynamic.length; index++) {
		const node = dynamic[index]
		const value = values[index]
		const nameOccurrence = occurrenceByName.get(node.name) ?? 0
		occurrenceByName.set(node.name, nameOccurrence + 1)
		if (node.name === 'Num:Int') {
			const number = parseNumber(value)
			if (number !== undefined) numericTokens.push({ index, number })
			if (attrValue(node, 'id') !== undefined) {
				if (number !== undefined) numericById.set(attrValue(node, 'id'), number)
				byId.set(`${node.name}:id:${attrValue(node, 'id')}`, value)
			} else if (attrValue(node, 'id') === undefined) {
				byName.set(`${node.name}:occ:${nameOccurrence}`, value)
			}
		} else if (node.name === 'Gr:Count') {
			const ref = attrValue(node, 'ref') ?? 'none'
			const entries = grByRef.get(ref) ?? []
			const branch = choosePlural(node, value, numericById)
			entries.push({ value, branch, index })
			grByRef.set(ref, entries)
		} else if (attrValue(node, 'id') !== undefined) {
			byId.set(`${node.name}:id:${attrValue(node, 'id')}`, value)
		} else if (attrValue(node, 'name') !== undefined) {
			byId.set(`${node.name}:name:${attrValue(node, 'name')}`, value)
		} else {
			byName.set(`${node.name}:occ:${nameOccurrence}`, value)
		}
	}
	const numericByRef = new Map()
	for (const [ref, entries] of grByRef) {
		const direct = numericById.get(ref)
		if (direct !== undefined) {
			numericByRef.set(ref, direct)
			continue
		}
		const nearby = entries
			.map(entry => numericTokens
				.slice()
				.sort((left, right) => Math.abs(left.index - entry.index) - Math.abs(right.index - entry.index))[0]?.number)
			.find(number => number !== undefined)
		if (nearby !== undefined) {
			numericByRef.set(ref, nearby)
			continue
		}
		const inferred = entries.map(entry => inferCountFromBranch(entry.branch)).find(number => number !== undefined)
		if (inferred !== undefined) numericByRef.set(ref, inferred)
	}
	for (const node of dynamic) {
		if (node.name !== 'Num:Int' || attrValue(node, 'id') === undefined) continue
		const id = attrValue(node, 'id')
		if (numericById.has(id)) continue
		const inferred = numericByRef.get(id)
		if (inferred !== undefined) numericById.set(id, inferred)
	}
	return { values, dynamic, numericById, numericByRef, byId, byName, grByRef }
}

function targetBranch(node, sourceBranch, numeric, captured, context) {
	const attrs = node.attrs ?? {}
	if (numeric === 1) {
		if (attrs.one !== undefined) return 'one'
		if (attrs.s !== undefined) return 's'
		return '__empty'
	}
	if (numeric !== undefined) {
		if (numeric === 2 && attrs.two !== undefined) return 'two'
		if (attrs.p !== undefined) return 'p'
		return '__empty'
	}
	if (sourceBranch && node.attrs?.[sourceBranch] !== undefined) return sourceBranch
	if (sourceBranch === '__empty') return '__empty'
	const target = normalize(captured)
	const matching = Object.entries(attrs).filter(([key, value]) =>
		['s', 'p', 'one', 'two'].includes(key) && normalize(value) === target,
	)
	if (matching.length === 1) return matching[0][0]
	if (sourceBranch === 's' && attrs.s === undefined && attrs.p !== undefined) return '__empty'
	if (sourceBranch === 'p' && attrs.p === undefined && attrs.s !== undefined) return '__empty'
	if (attrs.s !== undefined) return 's'
	if (attrs.p !== undefined) return 'p'
	throw new Error(`Cannot select target Gr:Count branch for ${context}: ${JSON.stringify(node)}`)
}

function sourceValue(node, index, bindings, context) {
	const id = attrValue(node, 'id')
	if (id !== undefined) {
		const value = bindings.byId.get(`${node.name}:id:${id}`)
		if (value !== undefined) return value
	}
	const name = attrValue(node, 'name')
	if (name !== undefined) {
		const value = bindings.byId.get(`${node.name}:name:${name}`)
		if (value !== undefined) return value
	}
	const occurrence = bindings.dynamic.slice(0, index).filter(value => value.name === node.name).length
	const value = bindings.byName.get(`${node.name}:occ:${occurrence}`)
	if (value !== undefined) return value
	if (node.name === 'Img:ex') return 'ex'
	throw new Error(`No source value for ${node.name} at ${context}`)
}

function localizedElementName(captured, targetNode, messages, context) {
	const named = attrValue(targetNode, 'name')
	const namedMarker = named && /^[A-Z]$/u.test(named) ? `{${named}}` : named
	const marker = String(namedMarker ?? captured).match(/^\{([A-Z])\}$/u)?.[1]
	const id = marker ? ENERGY_MARKERS[marker] : undefined
	if (id && messages.target.Game.Master.EnergyType?.[id]) return `{${marker}}`
	const english = normalize(captured).replace(/^\{(.+)\}$/u, '$1')
	const englishEnergy = Object.entries(messages.en.Game.Master.EnergyType ?? {})
		.find(([, value]) => normalize(value) === english)?.[0]
	if (englishEnergy && messages.target.Game.Master.EnergyType?.[englishEnergy]) {
		const reverseMarker = Object.entries(ENERGY_MARKERS).find(([, value]) => value === englishEnergy)?.[0]
		return reverseMarker ? `{${reverseMarker}}` : messages.target.Game.Master.EnergyType[englishEnergy]
	}
	if (messages.target.Game.Master.EnergyType?.Dragon && english === 'Dragon') return messages.target.Game.Master.EnergyType.Dragon
	throw new Error(`Cannot bind energy element ${JSON.stringify(captured)} for ${context}`)
}

function translatedTokenValue(sourceNode, sourceIndex, targetIndex, node, locale, context, maps, bindings, targetOccurrences) {
	const captured = sourceNode?.name === 'Gr:Count'
		? bindings.grByRef.get(attrValue(sourceNode, 'ref') ?? 'none')?.[0]?.value ?? ''
		: sourceNode ? sourceValue(sourceNode, sourceIndex, bindings, context) : ''
	switch (node.name) {
	case 'Num:Int': {
			if (!sourceNode) throw new Error(`RaenonX ${locale} template introduced an unbindable Num:Int token for ${context}`)
			const sourceId = attrValue(sourceNode, 'id')
			const number = parseNumber(captured) ?? (sourceId === undefined ? undefined : bindings.numericById.get(sourceId))
			if (number === 1 && attrValue(node, 'plural_only') !== undefined) return ''
			if (number !== undefined) return `${number}${attrValue(node, 'plural_only') ?? ''}`
			return ''
		}
		case 'Img:Element':
			return localizedElementName(captured, node, maps.messages, context)
		case 'Img:ex':
			return captured
		case 'Gr:Count': {
			const targetRef = attrValue(node, 'ref')
			const sourceRef = attrValue(sourceNode ?? {}, 'ref') ?? targetRef ?? 'none'
			const occurrenceKey = targetRef ?? `source:${sourceRef}`
			const sourceEntries = bindings.grByRef.get(sourceRef) ?? []
			const refOccurrence = targetOccurrences.grByRef.get(occurrenceKey) ?? 0
			targetOccurrences.grByRef.set(occurrenceKey, refOccurrence + 1)
			const sourceEntry = sourceEntries[refOccurrence] ?? sourceEntries[0]
			const numeric = bindings.numericByRef.get(sourceRef)
				?? (targetRef === undefined ? undefined : bindings.numericById.get(targetRef))
			const numericWithUnreferencedFallback = numeric ?? (() => {
				if (targetRef !== undefined || sourceNode) return undefined
				const values = [...new Set(bindings.numericById.values())]
				return values.length === 1 ? values[0] : undefined
			})()
			const branch = targetBranch(node, sourceEntry?.branch, numericWithUnreferencedFallback, sourceEntry?.value ?? captured, context)
			if (branch === '__empty') return ''
			const translated = node?.attrs?.[branch]
			if (translated === undefined) throw new Error(`Missing ${locale} Gr:Count branch ${branch} for ${context}`)
			return translated
		}
		case 'Text:CardName': {
			const entry = findNameIdByEnglish(captured, maps.cardEnglishNames, `${context} card name`)
			return lookup(maps.targetMaster.Card.Name, [], entry.id) ?? entry.value
		}
		case 'Text:AttackName': {
			const entry = findNameIdByEnglish(captured, maps.attackEnglishNames, `${context} attack name`)
			return lookup(maps.targetMaster.Attack.Name, [], entry.id) ?? entry.value
		}
		case 'Text:SpecialCondition':
			return chooseTranslatedString(captured, maps.translatedValues, locale, `${context} special condition`)
		case 'Text:EvolutionPokemon':
			return chooseTranslatedString(captured, maps.translatedValues, locale, `${context} evolution Pokémon`)
		default:
			throw new Error(`Unsupported dynamic RaenonX tag ${node.name} for ${context}`)
	}
}

function sourceIndexForTarget(targetNode, targetIndex, sourceNodes, sourceOccurrences) {
	const id = attrValue(targetNode, 'id')
	if (id !== undefined) {
		const exact = sourceNodes.findIndex(node => node.name === targetNode.name && attrValue(node, 'id') === id)
		if (exact >= 0) return exact
	}
	const name = attrValue(targetNode, 'name')
	if (name !== undefined) {
		const exact = sourceNodes.findIndex(node => node.name === targetNode.name && attrValue(node, 'name') === name)
		if (exact >= 0) return exact
	}
	if (targetNode.name === 'Gr:Count') {
		const ref = attrValue(targetNode, 'ref')
		const occurrenceKey = ref ?? 'unreferenced'
		const occurrence = sourceOccurrences.grByRef.get(occurrenceKey) ?? 0
		sourceOccurrences.grByRef.set(occurrenceKey, occurrence + 1)
		const candidates = sourceNodes
			.map((node, index) => ({ node, index }))
			.filter(({ node }) => node.name === 'Gr:Count' && (ref === undefined || attrValue(node, 'ref') === ref))
		return candidates[Math.min(occurrence, Math.max(0, candidates.length - 1))]?.index ?? sourceNodes.findIndex(node => node.name === 'Gr:Count')
	}
	const occurrence = sourceOccurrences.byName.get(targetNode.name) ?? 0
	sourceOccurrences.byName.set(targetNode.name, occurrence + 1)
	const candidates = sourceNodes
		.map((node, index) => ({ node, index }))
		.filter(({ node }) => node.name === targetNode.name)
	return candidates[Math.min(occurrence, Math.max(0, candidates.length - 1))]?.index ?? -1
}

function renderLocalizedTemplate(rawTemplate, canonicalEnglish, targetTemplate, locale, context, maps) {
	const englishBinding = splitConsecutiveDynamicValues(rawTemplate, captureDynamicValues(rawTemplate, canonicalEnglish, context, maps))
	const sourceNodes = parseTemplate(rawTemplate)
	const targetNodes = parseTemplate(targetTemplate)
	const sourceDynamic = sourceNodes.filter(isDynamic)
	const targetDynamic = targetNodes.filter(isDynamic)
	const sourceOccurrences = { grByRef: new Map(), byName: new Map() }
	const targetOccurrences = { grByRef: new Map() }
	let targetIndex = 0
	let output = ''
	for (const node of targetNodes) {
		if (node.type === 'literal') output += node.value
		else if (node.type === 'tag' && node.name === 'C:Nbsp') output += ' '
		else if (node.type === 'tag' && node.name === 'C:Nbh') output += '\u2011'
		else if (isFormatting(node)) continue
		else if (isDynamic(node)) {
			const sourceIndex = sourceIndexForTarget(node, targetIndex, sourceDynamic, sourceOccurrences)
			const sourceNode = sourceDynamic[sourceIndex]
			if (!sourceNode && node.name !== 'Gr:Count') throw new Error(`RaenonX ${locale} template introduced an unbindable ${node.name} token for ${context}`)
			output += translatedTokenValue(
				sourceNode,
				sourceIndex,
				targetIndex,
				node,
				locale,
				context,
				maps,
				englishBinding,
				targetOccurrences,
			)
			targetIndex++
		} else {
			throw new Error(`Unsupported RaenonX tag ${JSON.stringify(node)} for ${context}`)
		}
	}
	return normalize(output)
}

function resolveCardName(entry, messages) {
	return lookup(messages.Game.Master, ['Card', 'Name'], entry.entry.play?.characterI18nId)
}

function resolveLocalizedCard(entry, canonical, locale, messages, englishMessages, maps) {
	const sourceEntry = entry.entry
	const play = sourceEntry.play ?? {}
	const sourceName = resolveCardName(entry, messages)
	const name = normalizeRaenonxName(locale, sourceName)
	const card = { name }
	if (name !== sourceName) card.sourceName = sourceName
	if (!card.name) throw new Error(`Missing RaenonX card name for B4-${String(entry.number).padStart(3, '0')}`)
	if (sourceEntry.cardType === 'trainer') {
		const sourceTemplate = lookup(englishMessages.Game.Master, ['Trainer', 'Description'], play.descriptionI18nId)
		const targetTemplate = lookup(messages.Game.Master, ['Trainer', 'Description'], play.descriptionI18nId)
		const canonicalEffect = canonical.effect ?? canonical.description ?? ''
		if (!sourceTemplate || !targetTemplate) throw new Error(`Missing Trainer.Description for B4-${String(entry.number).padStart(3, '0')}`)
		card.effect = renderLocalizedTemplate(sourceTemplate, canonicalEffect, targetTemplate, locale, `B4-${String(entry.number).padStart(3, '0')} trainer effect`, maps)
		return card
	}
	card.attacks = (play.attacks ?? []).map((attack, index) => {
		const attackOut = { name: lookup(messages.Game.Master, ['Attack', 'Name'], attack.nameI18nId) }
		if (!attackOut.name) throw new Error(`Missing RaenonX attack name for B4-${String(entry.number).padStart(3, '0')} attack ${index}`)
		if (attack.descriptionI18nId !== null && attack.descriptionI18nId !== undefined) {
			const sourceTemplate = lookup(englishMessages.Game.Master, ['Attack', 'Description'], attack.descriptionI18nId)
			const targetTemplate = lookup(messages.Game.Master, ['Attack', 'Description'], attack.descriptionI18nId)
			const canonicalAttack = canonical.attacks?.[index] ?? {}
			const canonicalEffect = canonicalAttack.effect ?? ''
			if (!sourceTemplate || !targetTemplate) throw new Error(`Missing Attack.Description ${attack.descriptionI18nId} for B4-${String(entry.number).padStart(3, '0')} attack ${index}`)
			attackOut.effect = renderLocalizedTemplate(sourceTemplate, canonicalEffect, targetTemplate, locale, `B4-${String(entry.number).padStart(3, '0')} attack ${index} effect`, maps)
		}
		return attackOut
	})
	card.abilities = (play.abilities ?? []).map((ability, index) => {
		const abilityOut = {
			name: lookup(messages.Game.Master, ['Ability', 'Name'], ability.nameI18nId),
		}
		const sourceTemplate = lookup(englishMessages.Game.Master, ['Ability', 'Description'], ability.descriptionI18nId)
		const targetTemplate = lookup(messages.Game.Master, ['Ability', 'Description'], ability.descriptionI18nId)
		const canonicalAbility = canonical.abilities?.[index] ?? {}
		if (!abilityOut.name || !sourceTemplate || !targetTemplate) throw new Error(`Missing RaenonX ability payload for B4-${String(entry.number).padStart(3, '0')} ability ${index}`)
		abilityOut.effect = renderLocalizedTemplate(sourceTemplate, canonicalAbility.effect ?? '', targetTemplate, locale, `B4-${String(entry.number).padStart(3, '0')} ability ${index} effect`, maps)
		return abilityOut
	})
	return card
}

function sourceReferences(entries, messages) {
	const refs = {
		cards: 0,
		attacks: 0,
		attackDescriptions: 0,
		abilities: 0,
		abilityDescriptions: 0,
		trainers: 0,
		trainerDescriptions: 0,
	}
	for (const { entry } of entries) {
		const play = entry.play ?? {}
		if (play.characterI18nId !== undefined) refs.cards++
		if (entry.cardType === 'trainer') {
			refs.trainers++
			if (play.descriptionI18nId !== undefined && play.descriptionI18nId !== null) refs.trainerDescriptions++
		}
		for (const attack of play.attacks ?? []) {
			refs.attacks++
			if (attack.descriptionI18nId !== undefined && attack.descriptionI18nId !== null) refs.attackDescriptions++
		}
		for (const ability of play.abilities ?? []) {
			refs.abilities++
			if (ability.descriptionI18nId !== undefined && ability.descriptionI18nId !== null) refs.abilityDescriptions++
		}
	}
	for (const [locale, value] of Object.entries({
		en: messages.en,
		fr: messages.fr,
		es: messages.es,
		pt: messages.pt,
		zh: messages.zh,
	})) {
		if (!value?.Game?.Master) throw new Error(`Missing Game.Master for ${locale}`)
	}
	return refs
}

function imageManifest(entries) {
	return entries.flatMap(({ number, entry }) => Object.entries(IMAGE_SOURCE_LOCALES).map(([locale, sourceLocale]) => ({
		id: `B4-${String(number).padStart(3, '0')}`,
		number,
		cardId: entry.cardId,
		locale,
		sourceLocale,
		url: SOURCE.imageUrlTemplate.replace('{locale}', sourceLocale).replace('{cardId}', entry.cardId),
	})))
}

const canonicalPath = arg('canonical', 'meta/pocket-source-reviews/B4/B4.canonical.json')
const outputPath = arg('output', 'meta/pocket-source-reviews/B4/raenonx.overlay.json')
const snapshotPath = arg('snapshot', 'meta/pocket-source-reviews/B4/raenonx.snapshot.json')
const masterUrl = arg('master-url', SOURCE.masterUrl)
const pageCardId = arg('page-card-id', DEFAULT_CARD_ID)
const requestedNumbers = arg('numbers')
	?.split(',')
	.map(value => Number(value.trim()))
	.filter(Number.isInteger)
const pilot = process.argv.includes('--pilot')

const canonical = loadJson(canonicalPath)
if (canonical.setId !== 'B4' || canonical.cards?.length !== 233) throw new Error('B4 canonical input must contain exactly 233 cards')
for (let index = 0; index < canonical.cards.length; index++) {
	const expectedId = `B4-${String(index + 1).padStart(3, '0')}`
	if (canonical.cards[index]?.id !== expectedId) {
		throw new Error(`B4 canonical cards must be ordered by ID; expected ${expectedId}, got ${canonical.cards[index]?.id ?? 'missing'}`)
	}
}
const masterResponse = await fetchText(masterUrl, 'RaenonX global master')
const master = JSON.parse(masterResponse.body)
const entries = b4Entries(master)
const pageResponses = {}
const messages = {}
for (const locale of LOCALES) {
	const url = SOURCE.pageUrlTemplate.replace('{locale}', locale).replace('{cardId}', pageCardId)
	const response = await fetchText(url, `RaenonX ${locale} card page`)
	pageResponses[locale] = { url, status: response.status, headers: response.headers, sha256: sha256(response.body), bytes: Buffer.byteLength(response.body) }
	messages[locale] = extractMessages(response.body, locale)
}

const refs = sourceReferences(entries, messages)
const englishMaster = messages.en.Game.Master
const cardEnglishNames = indexNames(englishMaster.Card.Name)
const attackEnglishNames = indexNames(englishMaster.Attack.Name)
const selectedNumbers = pilot
	? [1, 2, 5, 18, 19, 145, 150, 200, 224, 233]
	: requestedNumbers?.length ? requestedNumbers : entries.map(({ number }) => number)
for (const number of selectedNumbers) if (!entries.some(entry => entry.number === number)) throw new Error(`Requested B4 card ${number} is not present`)

const cards = {}
for (const number of selectedNumbers) {
	const entry = entries.find(value => value.number === number)
	const canonicalCard = canonical.cards[number - 1]
	const card = {}
	for (const locale of LOCALES) {
		const translatedMap = buildTranslatedValueMap(messages.en, messages[locale])
		const maps = {
			cardEnglishNames,
			attackEnglishNames,
			energyEnglishNames: indexNames(englishMaster.EnergyType),
			targetMaster: messages[locale].Game.Master,
			translatedValues: translatedMap,
			messages: { en: messages.en, target: messages[locale] },
		}
		card[locale] = resolveLocalizedCard(entry, canonicalCard, locale, messages[locale], messages.en, maps)
	}
	cards[`B4-${String(number).padStart(3, '0')}`] = {
		number,
		cardId: entry.entry.cardId,
		raw: entry.entry,
		locales: card,
	}
}

const now = new Date().toISOString()
const snapshot = {
	schemaVersion: 1,
	setId: 'B4',
	source: {
		...SOURCE,
		masterUrl,
		accessedAt: now,
		master: {
			status: masterResponse.status,
			bytes: Buffer.byteLength(masterResponse.body),
			sha256: sha256(masterResponse.body),
			lastModified: masterResponse.headers['last-modified'] ?? null,
		},
		pages: pageResponses,
		permission: 'User authorized attribution and publication of a direct RaenonX mirror for this project; RaenonX repository licence was not found.',
	},
	locales: LOCALES,
	refs,
	entryCount: entries.length,
	imageCount: imageManifest(entries).length,
	imageManifest: imageManifest(entries),
}
const overlay = {
	schemaVersion: 1,
	setId: 'B4',
	source: snapshot.source,
	policy: {
		mode: pilot ? 'pilot' : 'source-exact',
		locales: LOCALES,
		preservedApiLocales: ['de', 'it'],
		preservedFields: ['description', 'flavorText'],
		credit: SOURCE.credit,
	},
	cards,
}
writeJson(snapshotPath, snapshot)
writeJson(outputPath, overlay)
console.log(JSON.stringify({
	setId: 'B4',
	mode: pilot ? 'pilot' : 'source-exact',
	cards: Object.keys(cards).length,
	locales: LOCALES,
	refs,
	imageSources: imageManifest(entries).length,
	snapshotPath: path.resolve(snapshotPath),
	outputPath: path.resolve(outputPath),
}, null, 2))
