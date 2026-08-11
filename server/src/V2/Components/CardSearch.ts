import type { PocketLanguage as SupportedLanguages } from '../../util'
import { getCompiledCards } from './Card'
import { getCompiledSets } from './Set'

type QueryValue = string | Array<string> | undefined
type QueryRecord = Record<string, QueryValue | unknown>

type CompiledCard = Record<string, any>
type CompiledSet = Record<string, any>

export interface CatalogOption {
	value: string
	label: string
	count: number
}

export interface CatalogSearchOptions {
	total: number
	sets: Array<CatalogOption & { releaseDate?: string }>
	boosters: Array<CatalogOption & { set: { id: string, name: string } }>
	categories: Array<CatalogOption>
	types: Array<CatalogOption>
	rarities: Array<CatalogOption>
	stages: Array<CatalogOption>
	trainerTypes: Array<CatalogOption>
	suffixes: Array<CatalogOption>
	weaknesses: Array<CatalogOption>
	retreats: Array<CatalogOption>
	attackCostTypes: Array<CatalogOption>
	hasAbility: number
	ranges: {
		hp: { min: number | null, max: number | null }
		damage: { min: number | null, max: number | null }
	}
}

interface CardPair {
	canonical: CompiledCard
	localized: CompiledCard
}

interface SetPair {
	canonical: CompiledSet
	localized: CompiledSet
}

interface BoosterValue {
	id: string
	name: string
	canonicalName: string
}

interface ParsedSearch {
	q: string
	name: string
	ability: string
	attack: string
	set: Array<string>
	booster: Array<string>
	category: Array<string>
	type: Array<string>
	rarity: Array<string>
	stage: Array<string>
	trainerType: Array<string>
	suffix: Array<string>
	retreat: Array<string>
	weakness: Array<string>
	attackCostType: Array<string>
	hasAbility?: boolean
	hpMin?: number
	hpMax?: number
	damageMin?: number
	damageMax?: number
	illustrator: string
	page: number
	pageSize: number
}

export class CatalogSearchValidationError extends Error {
	constructor(public readonly details: Array<string>) {
		super(details.join('; '))
		this.name = 'CatalogSearchValidationError'
	}
}

const rarityOrder = [
	'One Diamond',
	'Two Diamond',
	'Three Diamond',
	'Four Diamond',
	'One Star',
	'Two Star',
	'Three Star',
	'One Shiny',
	'Two Shiny',
	'Crown',
	'None',
]

const typeOrder = ['Grass', 'Fire', 'Water', 'Lightning', 'Psychic', 'Fighting', 'Darkness', 'Metal', 'Dragon', 'Colorless']

const naturalCollator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' })
const pairedCardsCache = new Map<SupportedLanguages, Array<CardPair>>()
const pairedSetsCache = new Map<SupportedLanguages, Map<string, SetPair>>()
const optionsCache = new Map<SupportedLanguages, CatalogSearchOptions>()
const searchableTextCache = new WeakMap<CompiledCard, string>()
const allowedSearchKeys = new Set([
	'q', 'name', 'ability', 'attack', 'set', 'booster', 'category', 'type', 'rarity', 'stage', 'trainerType',
	'suffix', 'retreat', 'weakness', 'attackCostType', 'hasAbility', 'hpMin',
	'hpMax', 'damageMin', 'damageMax', 'illustrator', 'page', 'pageSize',
])
const maxFilterValues = 20
const maxFilterValueLength = 80

const labelOverrides: Record<string, Record<string, string>> = {
	en: { Stage1: 'Stage 1', Stage2: 'Stage 2' },
	'pt-br': {
		Pokemon: 'Pokémon', Trainer: 'Treinador', Colorless: 'Incolor', Darkness: 'Noturno', Dragon: 'Dragão', Fighting: 'Luta', Fire: 'Fogo', Grass: 'Planta', Lightning: 'Elétrico', Metal: 'Metálico', Psychic: 'Psíquico', Water: 'Água',
		Basic: 'Básico', Stage1: 'Estágio 1', Stage2: 'Estágio 2', Item: 'Item', Stadium: 'Estádio', Supporter: 'Apoiador', Tool: 'Ferramenta',
		'One Diamond': 'Um Diamante', 'Two Diamond': 'Dois Diamantes', 'Three Diamond': 'Três Diamantes', 'Four Diamond': 'Quatro Diamantes', 'One Star': 'Uma Estrela', 'Two Star': 'Duas Estrelas', 'Three Star': 'Três Estrelas', 'One Shiny': 'Um Brilhante', 'Two Shiny': 'Dois Brilhantes', Crown: 'Coroa', None: 'Nenhuma',
	},
	'zh-tw': {
		Pokemon: '寶可夢', Trainer: '訓練家', Colorless: '無色', Darkness: '惡', Dragon: '龍', Fighting: '鬥', Fire: '火', Grass: '草', Lightning: '雷', Metal: '鋼', Psychic: '超', Water: '水',
		Basic: '基礎', Stage1: '1 階進化', Stage2: '2 階進化', Item: '道具', Stadium: '場地', Supporter: '支援者', Tool: '寶可夢道具',
		'One Diamond': '一鑽', 'Two Diamond': '二鑽', 'Three Diamond': '三鑽', 'Four Diamond': '四鑽', 'One Star': '一星', 'Two Star': '二星', 'Three Star': '三星', 'One Shiny': '一閃', 'Two Shiny': '二閃', Crown: '皇冠', None: '無',
	},
}

function localizedLabel(lang: SupportedLanguages, value: string, fallback?: string): string {
	return labelOverrides[lang]?.[value] ?? fallback ?? value
}

function asStrings(value: unknown, name: string): Array<string> {
	const values = Array.isArray(value) ? value : typeof value === 'string' ? [value] : []
	const parsed = [...new Set(values
		.flatMap((item) => item.split(','))
		.map((item) => item.trim())
		.filter(Boolean))]
	if (parsed.length > maxFilterValues) {
		throw new CatalogSearchValidationError([`${name} accepts at most ${maxFilterValues} values`])
	}
	if (parsed.some((item) => item.length > maxFilterValueLength)) {
		throw new CatalogSearchValidationError([`${name} values must be at most ${maxFilterValueLength} characters`])
	}
	return parsed
}

function firstString(value: unknown): string {
	const first = Array.isArray(value) ? value[0] : value
	return typeof first === 'string' ? first.trim() : ''
}

function parseBoundedString(value: unknown, name: string, maxLength: number, rejectEmpty = false): string {
	const parsed = firstString(value)
	if (rejectEmpty && value !== undefined && !parsed) {
		throw new CatalogSearchValidationError([`${name} cannot be empty`])
	}
	if (parsed.length > maxLength) {
		throw new CatalogSearchValidationError([`${name} must be at most ${maxLength} characters`])
	}
	return parsed
}

function parsePositiveInteger(value: unknown, fallback: number, name: string, max?: number): number {
	const raw = firstString(value)
	if (!raw) return fallback
	const parsed = Number(raw)
	if (!Number.isInteger(parsed) || parsed < 1 || (max !== undefined && parsed > max)) {
		throw new CatalogSearchValidationError([`${name} must be an integer between 1 and ${max ?? 'infinity'}`])
	}
	return parsed
}

function parseOptionalNumber(value: unknown, name: string): number | undefined {
	const raw = firstString(value)
	if (!raw) return undefined
	const parsed = Number(raw)
	if (!Number.isFinite(parsed) || parsed < 0) {
		throw new CatalogSearchValidationError([`${name} must be a non-negative number`])
	}
	return parsed
}

function parseOptionalBoolean(value: unknown): boolean | undefined {
	const raw = firstString(value).toLowerCase()
	if (!raw) return undefined
	if (raw === 'true' || raw === '1') return true
	if (raw === 'false' || raw === '0') return false
	throw new CatalogSearchValidationError(['hasAbility must be true or false'])
}

function normalizeSearchText(value: unknown): string {
	return String(value ?? '')
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLocaleLowerCase()
		.replace(/[^\p{L}\p{N}]+/gu, ' ')
		.trim()
}

export function normalizeCanonicalName(value: unknown): string {
	return String(value ?? '')
		.normalize('NFKC')
		.replace(/[\u200B-\u200D\uFEFF]/gu, '')
		.trim()
		.replace(/\s+/gu, ' ')
		.toLocaleLowerCase('en')
}

function parseLeadingNumber(value: unknown): number | undefined {
	const match = String(value ?? '').match(/^\s*(\d+)/)
	return match ? Number(match[1]) : undefined
}

function pairCards(lang: SupportedLanguages): Array<CardPair> {
	const cached = pairedCardsCache.get(lang)
	if (cached) return cached
	const localizedById = new Map(getCompiledCards(lang).map((card) => [card.id, card]))
	const cards = getCompiledCards('en').map((canonical) => ({
		canonical,
		localized: localizedById.get(canonical.id) ?? canonical,
	}))
	pairedCardsCache.set(lang, cards)
	return cards
}

function pairSets(lang: SupportedLanguages): Map<string, SetPair> {
	const cached = pairedSetsCache.get(lang)
	if (cached) return cached
	const canonicalSets = getCompiledSets('en')
	const localizedById = new Map(getCompiledSets(lang).map((set) => [set.id, set]))
	const localizedNames = new Map(
		getCompiledCards(lang)
			.filter((card) => card.set?.id && card.set?.name)
			.map((card) => [card.set.id, card.set.name])
	)
	const sets = new Map(canonicalSets.map((canonical) => {
		const localized = localizedById.get(canonical.id) ?? {
			...canonical,
			name: localizedNames.get(canonical.id) ?? canonical.name,
		}
		return [canonical.id, { canonical, localized }]
	}))
	pairedSetsCache.set(lang, sets)
	return sets
}

function arrayValues(value: unknown): Array<any> {
	return Array.isArray(value) ? value : []
}

function boostersForCard(card: CardPair, setsById: Map<string, SetPair>): Array<BoosterValue> {
	const explicitCanonical = arrayValues(card.canonical.boosters)
	const explicitLocalized = new Map(arrayValues(card.localized.boosters).map((booster) => [booster.id, booster]))
	if (explicitCanonical.length > 0) {
		return explicitCanonical.map((booster) => ({
			id: booster.id,
			canonicalName: booster.name,
			name: explicitLocalized.get(booster.id)?.name ?? booster.name,
		}))
	}

	const set = setsById.get(card.canonical.set?.id)
	const canonicalBoosters = arrayValues(set?.canonical.boosters)
	if (canonicalBoosters.length !== 1) return []
	const localizedBoosters = new Map(arrayValues(set?.localized.boosters).map((booster) => [booster.id, booster]))
	const booster = canonicalBoosters[0]
	return [{
		id: booster.id,
		canonicalName: booster.name,
		name: localizedBoosters.get(booster.id)?.name ?? booster.name,
	}]
}

function uniqueValues(values: Array<unknown>): Array<string> {
	return [...new Set(values.filter((value): value is string => typeof value === 'string' && value.length > 0))]
}

function addOption(
	map: Map<string, CatalogOption>,
	value: string | undefined,
	label: string | undefined,
): void {
	if (!value) return
	const current = map.get(value)
	if (current) {
		current.count += 1
		return
	}
	map.set(value, { value, label: label || value, count: 1 })
}

function sortedOptions(map: Map<string, CatalogOption>, order?: Array<string>): Array<CatalogOption> {
	return [...map.values()].sort((a, b) => {
		if (order) {
			const aIndex = order.indexOf(a.value)
			const bIndex = order.indexOf(b.value)
			if (aIndex !== bIndex) return (aIndex < 0 ? order.length : aIndex) - (bIndex < 0 ? order.length : bIndex)
		}
		return naturalCollator.compare(a.label, b.label)
	})
}

function searchableText(card: CompiledCard): string {
	const cached = searchableTextCache.get(card)
	if (cached !== undefined) return cached
	const text = normalizeSearchText([
		card.id,
		card.localId,
		card.name,
		card.illustrator,
		card.description,
		card.evolveFrom,
		card.effect,
		card.item?.name,
		card.item?.effect,
		...arrayValues(card.abilities).flatMap((ability) => [ability.type, ability.name, ability.effect]),
		...arrayValues(card.attacks).flatMap((attack) => [attack.name, attack.effect, attack.damage]),
	].filter(Boolean).join(' '))
	searchableTextCache.set(card, text)
	return text
}

function matchesAny(selected: Array<string>, actual: Array<string>): boolean {
	return selected.length === 0 || selected.some((value) => actual.includes(value))
}

function validateRange(min: number | undefined, max: number | undefined, name: string): void {
	if (min !== undefined && max !== undefined && min > max) {
		throw new CatalogSearchValidationError([`${name} minimum cannot exceed maximum`])
	}
}

function parseSearch(query: QueryRecord): ParsedSearch {
	const unknownKeys = Object.keys(query).filter((key) => !allowedSearchKeys.has(key))
	if (unknownKeys.length > 0) {
		throw new CatalogSearchValidationError(unknownKeys.map((key) => `unknown parameter: ${key}`))
	}
	const parsed: ParsedSearch = {
		q: parseBoundedString(query.q, 'q', 200),
		name: parseBoundedString(query.name, 'name', 80, true),
		ability: parseBoundedString(query.ability, 'ability', 80, true),
		attack: parseBoundedString(query.attack, 'attack', 80, true),
		set: asStrings(query.set, 'set'),
		booster: asStrings(query.booster, 'booster'),
		category: asStrings(query.category, 'category'),
		type: asStrings(query.type, 'type'),
		rarity: asStrings(query.rarity, 'rarity'),
		stage: asStrings(query.stage, 'stage'),
		trainerType: asStrings(query.trainerType, 'trainerType'),
		suffix: asStrings(query.suffix, 'suffix'),
		retreat: asStrings(query.retreat, 'retreat'),
		weakness: asStrings(query.weakness, 'weakness'),
		attackCostType: asStrings(query.attackCostType, 'attackCostType'),
		hasAbility: parseOptionalBoolean(query.hasAbility),
		hpMin: parseOptionalNumber(query.hpMin, 'hpMin'),
		hpMax: parseOptionalNumber(query.hpMax, 'hpMax'),
		damageMin: parseOptionalNumber(query.damageMin, 'damageMin'),
		damageMax: parseOptionalNumber(query.damageMax, 'damageMax'),
		illustrator: parseBoundedString(query.illustrator, 'illustrator', 120),
		page: parsePositiveInteger(query.page, 1, 'page', 1000),
		pageSize: parsePositiveInteger(query.pageSize, 48, 'pageSize', 100),
	}
	validateRange(parsed.hpMin, parsed.hpMax, 'HP')
	validateRange(parsed.damageMin, parsed.damageMax, 'damage')
	return parsed
}

function exactFilter(cards: Array<CardPair>, field: 'name' | 'ability' | 'attack', value: string): { value: string, label: string } | undefined {
	const expected = normalizeCanonicalName(value)
	for (const card of cards) {
		if (field === 'name' && normalizeCanonicalName(card.canonical.name) === expected) {
			return { value: card.canonical.name, label: card.localized.name ?? card.canonical.name }
		}
		const key = field === 'ability' ? 'abilities' : 'attacks'
		const index = arrayValues(card.canonical[key]).findIndex((item) => normalizeCanonicalName(item.name) === expected)
		if (index >= 0) {
			return {
				value: arrayValues(card.canonical[key])[index].name,
				label: arrayValues(card.localized[key])[index]?.name ?? arrayValues(card.canonical[key])[index].name,
			}
		}
	}
	return undefined
}

function assertKnownExactValues(parsed: ParsedSearch, cards: Array<CardPair>): void {
	const errors = (['name', 'ability', 'attack'] as const).flatMap((field) => {
		const value = parsed[field]
		return value && !exactFilter(cards, field, value) ? [`unknown ${field}: ${value}`] : []
	})
	if (errors.length > 0) throw new CatalogSearchValidationError(errors)
}

function assertKnownValues(parsed: ParsedSearch, options: CatalogSearchOptions): void {
	const checks: Array<[string, Array<string>, Array<CatalogOption>]> = [
		['set', parsed.set, options.sets],
		['booster', parsed.booster, options.boosters],
		['category', parsed.category, options.categories],
		['type', parsed.type, options.types],
		['rarity', parsed.rarity, options.rarities],
		['stage', parsed.stage, options.stages],
		['trainerType', parsed.trainerType, options.trainerTypes],
		['suffix', parsed.suffix, options.suffixes],
		['retreat', parsed.retreat, options.retreats],
		['weakness', parsed.weakness, options.weaknesses],
		['attackCostType', parsed.attackCostType, options.attackCostTypes],
	]
	const errors = checks.flatMap(([name, selected, available]) => {
		const allowed = new Set(available.map((option) => option.value))
		return selected.filter((value) => !allowed.has(value)).map((value) => `unknown ${name}: ${value}`)
	})
	if (errors.length > 0) throw new CatalogSearchValidationError(errors)
}

export function getCatalogSearchOptions(lang: SupportedLanguages): CatalogSearchOptions {
	const cached = optionsCache.get(lang)
	if (cached) return cached
	const cards = pairCards(lang)
	const setsById = pairSets(lang)
	const categories = new Map<string, CatalogOption>()
	const types = new Map<string, CatalogOption>()
	const rarities = new Map<string, CatalogOption>()
	const stages = new Map<string, CatalogOption>()
	const trainerTypes = new Map<string, CatalogOption>()
	const suffixes = new Map<string, CatalogOption>()
	const weaknesses = new Map<string, CatalogOption>()
	const retreats = new Map<string, CatalogOption>()
	const attackCostTypes = new Map<string, CatalogOption>()
	const setCounts = new Map<string, number>()
	const boosterCounts = new Map<string, { count: number, label: string, setId: string }>()
	let hasAbility = 0
	let hpMin: number | null = null
	let hpMax: number | null = null
	let damageMin: number | null = null
	let damageMax: number | null = null

	for (const card of cards) {
		addOption(categories, card.canonical.category, localizedLabel(lang, card.canonical.category, card.localized.category))
		addOption(rarities, card.canonical.rarity, localizedLabel(lang, card.canonical.rarity, card.localized.rarity))
		addOption(stages, card.canonical.stage, localizedLabel(lang, card.canonical.stage, card.localized.stage))
		addOption(trainerTypes, card.canonical.trainerType, localizedLabel(lang, card.canonical.trainerType, card.localized.trainerType))
		addOption(suffixes, card.canonical.suffix, card.localized.suffix)
		if (card.canonical.retreat !== undefined) addOption(retreats, String(card.canonical.retreat), String(card.localized.retreat ?? card.canonical.retreat))

		const localizedTypes = arrayValues(card.localized.types)
		uniqueValues(arrayValues(card.canonical.types)).forEach((value, index) => addOption(types, value, localizedLabel(lang, value, localizedTypes[index])))
		const localizedWeaknesses = arrayValues(card.localized.weaknesses)
		uniqueValues(arrayValues(card.canonical.weaknesses).map((weakness) => weakness.type)).forEach((value) => {
			const localized = localizedWeaknesses.find((weakness) => weakness.type)?.type ?? localizedWeaknesses[0]?.type ?? value
			addOption(weaknesses, value, localizedLabel(lang, value, localized))
		})
		const canonicalCosts = uniqueValues(arrayValues(card.canonical.attacks).flatMap((attack) => arrayValues(attack.cost)))
		const localizedCosts = uniqueValues(arrayValues(card.localized.attacks).flatMap((attack) => arrayValues(attack.cost)))
		canonicalCosts.forEach((value, index) => addOption(attackCostTypes, value, localizedLabel(lang, value, localizedCosts[index])))

		const setId = card.canonical.set?.id
		if (setId) setCounts.set(setId, (setCounts.get(setId) ?? 0) + 1)
		for (const booster of boostersForCard(card, setsById)) {
			const current = boosterCounts.get(booster.id)
			if (current) current.count += 1
			else boosterCounts.set(booster.id, { count: 1, label: booster.name, setId })
		}

		if (arrayValues(card.canonical.abilities).length > 0) hasAbility += 1
		if (typeof card.canonical.hp === 'number') {
			hpMin = hpMin === null ? card.canonical.hp : Math.min(hpMin, card.canonical.hp)
			hpMax = hpMax === null ? card.canonical.hp : Math.max(hpMax, card.canonical.hp)
		}
		for (const attack of arrayValues(card.canonical.attacks)) {
			const damage = parseLeadingNumber(attack.damage)
			if (damage === undefined) continue
			damageMin = damageMin === null ? damage : Math.min(damageMin, damage)
			damageMax = damageMax === null ? damage : Math.max(damageMax, damage)
		}
	}

	const sets = [...setsById.values()]
		.map(({ canonical, localized }) => ({
			value: canonical.id,
			label: localized.name ?? canonical.name,
			count: setCounts.get(canonical.id) ?? 0,
			releaseDate: canonical.releaseDate,
		}))
		.filter((set) => set.count > 0)
		.sort((a, b) => (b.releaseDate ?? '').localeCompare(a.releaseDate ?? '') || naturalCollator.compare(a.label, b.label))

	const boosters = [...boosterCounts.entries()]
		.map(([value, booster]) => {
			const set = setsById.get(booster.setId)
			return {
				value,
				label: booster.label,
				count: booster.count,
				set: { id: booster.setId, name: set?.localized.name ?? set?.canonical.name ?? booster.setId },
			}
		})
		.sort((a, b) => naturalCollator.compare(a.set.name, b.set.name) || naturalCollator.compare(a.label, b.label))

	const options = {
		total: cards.length,
		sets,
		boosters,
		categories: sortedOptions(categories),
		types: sortedOptions(types, typeOrder),
		rarities: sortedOptions(rarities, rarityOrder),
		stages: sortedOptions(stages, ['Basic', 'Stage1', 'Stage2']),
		trainerTypes: sortedOptions(trainerTypes),
		suffixes: sortedOptions(suffixes),
		weaknesses: sortedOptions(weaknesses, typeOrder),
		retreats: sortedOptions(retreats, ['0', '1', '2', '3', '4']),
		attackCostTypes: sortedOptions(attackCostTypes, typeOrder),
		hasAbility,
		ranges: {
			hp: { min: hpMin, max: hpMax },
			damage: { min: damageMin, max: damageMax },
		},
	}
	optionsCache.set(lang, options)
	return options
}

export function searchCatalogCards(lang: SupportedLanguages, query: QueryRecord) {
	const parsed = parseSearch(query)
	const options = getCatalogSearchOptions(lang)
	assertKnownValues(parsed, options)
	const setsById = pairSets(lang)
	const cards = pairCards(lang)
	assertKnownExactValues(parsed, cards)
	const requestedCardId = parsed.q.trim().toLocaleLowerCase()
	const exactCardId = requestedCardId
		? cards.find((card) => card.canonical.id.toLocaleLowerCase() === requestedCardId)?.canonical.id
		: undefined
	const queryTokens = normalizeSearchText(parsed.q).split(' ').filter(Boolean)
	const illustrator = normalizeSearchText(parsed.illustrator)
	const exactName = normalizeCanonicalName(parsed.name)
	const exactAbility = normalizeCanonicalName(parsed.ability)
	const exactAttack = normalizeCanonicalName(parsed.attack)

	const matches = cards.filter((card) => {
		const canonical = card.canonical
		if (exactCardId && canonical.id !== exactCardId) return false
		const boosters = boostersForCard(card, setsById)
		if (!matchesAny(parsed.set, [canonical.set?.id])) return false
		if (!matchesAny(parsed.booster, boosters.map((booster) => booster.id))) return false
		if (!matchesAny(parsed.category, [canonical.category])) return false
		if (!matchesAny(parsed.type, uniqueValues(arrayValues(canonical.types)))) return false
		if (!matchesAny(parsed.rarity, [canonical.rarity])) return false
		if (!matchesAny(parsed.stage, [canonical.stage])) return false
		if (!matchesAny(parsed.trainerType, [canonical.trainerType])) return false
		if (!matchesAny(parsed.suffix, [canonical.suffix])) return false
		if (!matchesAny(parsed.retreat, canonical.retreat === undefined ? [] : [String(canonical.retreat)])) return false
		if (!matchesAny(parsed.weakness, uniqueValues(arrayValues(canonical.weaknesses).map((weakness) => weakness.type)))) return false
		if (!matchesAny(parsed.attackCostType, uniqueValues(arrayValues(canonical.attacks).flatMap((attack) => arrayValues(attack.cost))))) return false
		if (parsed.hasAbility !== undefined && (arrayValues(canonical.abilities).length > 0) !== parsed.hasAbility) return false
		if (parsed.hpMin !== undefined && (typeof canonical.hp !== 'number' || canonical.hp < parsed.hpMin)) return false
		if (parsed.hpMax !== undefined && (typeof canonical.hp !== 'number' || canonical.hp > parsed.hpMax)) return false
		if (illustrator && !normalizeSearchText(canonical.illustrator).includes(illustrator)) return false
		if (exactName && normalizeCanonicalName(canonical.name) !== exactName) return false
		if (exactAbility && !arrayValues(canonical.abilities).some((ability) => normalizeCanonicalName(ability.name) === exactAbility)) return false
		if (exactAttack && !arrayValues(canonical.attacks).some((attack) => normalizeCanonicalName(attack.name) === exactAttack)) return false

		if (parsed.damageMin !== undefined || parsed.damageMax !== undefined) {
			const damages = arrayValues(canonical.attacks).map((attack) => parseLeadingNumber(attack.damage)).filter((damage): damage is number => damage !== undefined)
			if (!damages.some((damage) => (parsed.damageMin === undefined || damage >= parsed.damageMin) && (parsed.damageMax === undefined || damage <= parsed.damageMax))) return false
		}

		if (queryTokens.length > 0) {
			const text = `${searchableText(card.localized)} ${searchableText(canonical)}`
			if (!queryTokens.every((token) => text.includes(token))) return false
		}
		return true
	})

	matches.sort((a, b) => {
		const aSet = setsById.get(a.canonical.set?.id)?.canonical
		const bSet = setsById.get(b.canonical.set?.id)?.canonical
		return (bSet?.releaseDate ?? '').localeCompare(aSet?.releaseDate ?? '')
			|| naturalCollator.compare(a.canonical.set?.id ?? '', b.canonical.set?.id ?? '')
			|| naturalCollator.compare(a.canonical.localId ?? a.canonical.id, b.canonical.localId ?? b.canonical.id)
	})

	const total = matches.length
	const totalPages = Math.max(1, Math.ceil(total / parsed.pageSize))
	const offset = (parsed.page - 1) * parsed.pageSize
	const items = matches.slice(offset, offset + parsed.pageSize).map((card) => {
		const canonical = card.canonical
		const localized = card.localized
		return {
			id: canonical.id,
			localId: canonical.localId,
			name: localized.name ?? canonical.name,
			image: localized.image ?? canonical.image,
			set: { id: canonical.set?.id, name: localized.set?.name ?? canonical.set?.name },
			boosters: boostersForCard(card, setsById).map((booster) => ({ id: booster.id, name: booster.name })),
			category: { value: canonical.category, label: localizedLabel(lang, canonical.category, localized.category) },
			types: uniqueValues(arrayValues(canonical.types)).map((value, index) => ({ value, label: localizedLabel(lang, value, arrayValues(localized.types)[index]) })),
			rarity: canonical.rarity ? { value: canonical.rarity, label: localizedLabel(lang, canonical.rarity, localized.rarity) } : undefined,
			stage: canonical.stage ? { value: canonical.stage, label: localizedLabel(lang, canonical.stage, localized.stage) } : undefined,
			trainerType: canonical.trainerType ? { value: canonical.trainerType, label: localizedLabel(lang, canonical.trainerType, localized.trainerType) } : undefined,
			suffix: canonical.suffix ? { value: canonical.suffix, label: localized.suffix ?? canonical.suffix } : undefined,
			hp: canonical.hp,
			retreat: canonical.retreat,
			illustrator: canonical.illustrator,
			hasAbility: arrayValues(canonical.abilities).length > 0,
		}
	})

	return {
		items,
		appliedExactFilters: {
			...(parsed.name ? { name: exactFilter(cards, 'name', parsed.name)! } : {}),
			...(parsed.ability ? { ability: exactFilter(cards, 'ability', parsed.ability)! } : {}),
			...(parsed.attack ? { attack: exactFilter(cards, 'attack', parsed.attack)! } : {}),
		},
		pagination: {
			page: parsed.page,
			pageSize: parsed.pageSize,
			total,
			totalPages,
		},
	}
}

type RelatedCardSummary = {
	id: string
	localId: string
	name: string
	image?: string
	category: string
	set: { id: string, name: string, releaseDate?: string }
}

type CardRelationGroup = {
	canonicalName: string
	name: string
	total: number
	items: Array<RelatedCardSummary>
}

const relationLimit = 6

function relationSort(left: CardPair, right: CardPair, setsById: Map<string, SetPair>): number {
	const leftSet = setsById.get(left.canonical.set?.id)?.canonical
	const rightSet = setsById.get(right.canonical.set?.id)?.canonical
	return (rightSet?.releaseDate ?? '').localeCompare(leftSet?.releaseDate ?? '')
		|| naturalCollator.compare(left.canonical.set?.id ?? '', right.canonical.set?.id ?? '')
		|| naturalCollator.compare(left.canonical.localId ?? left.canonical.id, right.canonical.localId ?? right.canonical.id)
}

function relationSummary(card: CardPair, setsById: Map<string, SetPair>): RelatedCardSummary {
	const set = setsById.get(card.canonical.set?.id)
	return {
		id: card.canonical.id,
		localId: card.canonical.localId,
		name: card.localized.name ?? card.canonical.name,
		image: card.localized.image ?? card.canonical.image,
		category: card.localized.category ?? card.canonical.category,
		set: {
			id: card.canonical.set?.id,
			name: set?.localized.name ?? set?.canonical.name ?? card.localized.set?.name ?? card.canonical.set?.name,
			releaseDate: set?.canonical.releaseDate,
		},
	}
}

function relationGroup(
	canonicalName: string,
	localizedName: string,
	matches: Array<CardPair>,
	setsById: Map<string, SetPair>,
	diverse: boolean,
): CardRelationGroup | undefined {
	if (matches.length === 0) return undefined
	const sorted = [...matches].sort((left, right) => relationSort(left, right, setsById))
	let preview = sorted
	if (diverse) {
		const seen = new Set<string>()
		const first: Array<CardPair> = []
		const rest: Array<CardPair> = []
		for (const card of sorted) {
			const name = normalizeCanonicalName(card.canonical.name)
			if (seen.has(name)) rest.push(card)
			else {
				seen.add(name)
				first.push(card)
			}
		}
		preview = [...first, ...rest]
	}
	return {
		canonicalName,
		name: localizedName,
		total: matches.length,
		items: preview.slice(0, relationLimit).map((card) => relationSummary(card, setsById)),
	}
}

// ponytail: 3,761 cards are scanned once per cached request;
// add an index only if production profiling shows this is slow.
export function getCardRelations(lang: SupportedLanguages, cardId: string) {
	const cards = pairCards(lang)
	const current = cards.find((card) => card.canonical.id.toLocaleLowerCase() === cardId.toLocaleLowerCase())
	if (!current) return undefined
	const setsById = pairSets(lang)
	const currentId = current.canonical.id
	const sameNameKey = normalizeCanonicalName(current.canonical.name)
	const evolvesFromName = current.canonical.evolveFrom
	const evolvesFromKey = normalizeCanonicalName(evolvesFromName)
	const uniqueMechanicNames = (items: Array<any>) => [...new Map(items
		.map((item, index) => [normalizeCanonicalName(item.name), { name: item.name, index }] as const)
		.filter(([key]) => key)).values()]
	const abilityNames = uniqueMechanicNames(arrayValues(current.canonical.abilities))
	const attackNames = uniqueMechanicNames(arrayValues(current.canonical.attacks))
	const abilityKeys = new Set(abilityNames.map((item) => normalizeCanonicalName(item.name)))
	const attackKeys = new Set(attackNames.map((item) => normalizeCanonicalName(item.name)))
	const sameName: Array<CardPair> = []
	const evolvesFrom: Array<CardPair> = []
	const abilities = new Map(abilityNames.map((item) => [normalizeCanonicalName(item.name), [] as Array<CardPair>]))
	const attacks = new Map(attackNames.map((item) => [normalizeCanonicalName(item.name), [] as Array<CardPair>]))

	for (const card of cards) {
		if (card.canonical.id === currentId) continue
		if (normalizeCanonicalName(card.canonical.name) === sameNameKey) sameName.push(card)
		if (evolvesFromKey && normalizeCanonicalName(card.canonical.name) === evolvesFromKey) evolvesFrom.push(card)
		for (const key of abilityKeys) {
			if (arrayValues(card.canonical.abilities).some((item) => normalizeCanonicalName(item.name) === key)) abilities.get(key)!.push(card)
		}
		for (const key of attackKeys) {
			if (arrayValues(card.canonical.attacks).some((item) => normalizeCanonicalName(item.name) === key)) attacks.get(key)!.push(card)
		}
	}

	const localizedAbilityNames = arrayValues(current.localized.abilities)
	const localizedAttackNames = arrayValues(current.localized.attacks)
	return {
		cardId: currentId,
		sameName: relationGroup(current.canonical.name, current.localized.name ?? current.canonical.name, sameName, setsById, false),
		evolvesFrom: evolvesFromName ? relationGroup(
			evolvesFromName,
			evolvesFrom[0]?.localized.name ?? evolvesFrom[0]?.canonical.name ?? evolvesFromName,
			evolvesFrom,
			setsById,
			false,
		) : undefined,
		abilities: abilityNames.flatMap(({ name, index }) => {
			const group = relationGroup(name, localizedAbilityNames[index]?.name ?? name, abilities.get(normalizeCanonicalName(name))!, setsById, true)
			return group ? [group] : []
		}),
		attacks: attackNames.flatMap(({ name, index }) => {
			const group = relationGroup(name, localizedAttackNames[index]?.name ?? name, attacks.get(normalizeCanonicalName(name))!, setsById, true)
			return group ? [group] : []
		}),
	}
}
