#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

function getArg(name, { required = true } = {}) {
	const exact = process.argv.indexOf(`--${name}`)
	const value = exact >= 0
		? process.argv[exact + 1]
		: process.argv.find(item => item.startsWith(`--${name}=`))?.slice(name.length + 3)
	if (required && !value) throw new Error(`--${name} is required`)
	return value
}

const setId = getArg('set-id')
const total = Number(getArg('total'))
const indexFile = path.resolve(getArg('index'))
const deckGymFile = path.resolve(getArg('deckgym'))
const pokemonMetaFile = path.resolve(getArg('pokemon-meta'))
const reviewFile = path.resolve(getArg('review'))
const sourcesFile = path.resolve(getArg('sources'))
const imagesDir = path.resolve(getArg('images'))
const outputDir = path.resolve(getArg('output'))
const imageRefBase = getArg('image-ref-base', { required: false })?.replace(/\/+$/u, '')

if (!Number.isInteger(total) || total < 1) throw new Error('--total must be a positive integer')

const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'))
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`)
const sha256 = data => crypto.createHash('sha256').update(data).digest('hex')
const hashFile = file => sha256(fs.readFileSync(file))

function normalizeString(value) {
	return value
		.normalize('NFKC')
		.replace(/[’‘]/gu, "'")
		.replace(/\bPokemon\b/giu, 'Pokémon')
		.replace(/\[G\]/gu, 'Grass')
		.replace(/\[R\]/gu, 'Fire')
		.replace(/\[W\]/gu, 'Water')
		.replace(/\[L\]/gu, 'Lightning')
		.replace(/\[P\]/gu, 'Psychic')
		.replace(/\[F\]/gu, 'Fighting')
		.replace(/\[D\]/gu, 'Darkness')
		.replace(/\[M\]/gu, 'Metal')
		.replace(/\[N\]/gu, 'Dragon')
		.replace(/\[C\]/gu, 'Colorless')
		.replace(/,(\s+and\b)/giu, '$1')
		.replace(/[.,;:()—–-]/gu, ' ')
		.replace(/\s+/gu, ' ')
		.trim()
		.toLowerCase()
}

function normalizeValue(value) {
	if (typeof value === 'string') return normalizeString(value)
	if (Array.isArray(value)) return value.map(normalizeValue)
	if (value && typeof value === 'object') {
		return Object.fromEntries(Object.entries(value)
			.filter(([, item]) => item !== undefined)
			.sort(([left], [right]) => left.localeCompare(right))
			.map(([key, item]) => [key, normalizeValue(item)]))
	}
	return value
}

function equivalent(left, right) {
	return JSON.stringify(normalizeValue(left)) === JSON.stringify(normalizeValue(right))
}

function imageFor(number) {
	for (const extension of ['webp', 'png', 'jpg', 'jpeg']) {
		const file = path.join(imagesDir, `${number}.${extension}`)
		if (fs.existsSync(file)) return file
	}
	return undefined
}

function hashImageDirectory() {
	const entries = fs.readdirSync(imagesDir)
		.filter(file => /\.(webp|png|jpe?g)$/iu.test(file))
		.sort((left, right) => left.localeCompare(right, 'en', { numeric: true }))
	const digest = crypto.createHash('sha256')
	for (const file of entries) {
		digest.update(file)
		digest.update('\0')
		digest.update(fs.readFileSync(path.join(imagesDir, file)))
		digest.update('\0')
	}
	return { count: entries.length, sha256: digest.digest('hex') }
}

const rarityFromIndex = {
	C: 'One Diamond', U: 'Two Diamond', R: 'Three Diamond', RR: 'Four Diamond',
	AR: 'One Star', SR: 'Two Star', SAR: 'Two Star', IM: 'Three Star',
	S: 'One Shiny', SSR: 'Two Shiny', UR: 'Crown',
}
const rarityFromDeckGym = {
	'◊': 'One Diamond', '◊◊': 'Two Diamond', '◊◊◊': 'Three Diamond', '◊◊◊◊': 'Four Diamond',
	'☆': 'One Star', '☆☆': 'Two Star', '☆☆☆': 'Three Star',
	'*': 'One Shiny', '**': 'Two Shiny', '♛': 'Crown',
}
const rarityFromPokemonMeta = {
	'd-1': 'One Diamond', 'd-2': 'Two Diamond', 'd-3': 'Three Diamond', 'd-4': 'Four Diamond',
	's-1': 'One Star', 's-2': 'Two Star', 's-3': 'Three Star',
	'shiny-1': 'One Shiny', 'shiny-2': 'Two Shiny', cr: 'Crown',
}
const stageFromDeckGym = { 0: 'Basic', 1: 'Stage 1', 2: 'Stage 2' }
const energyCodes = {
	Grass: 'G', Fire: 'R', Water: 'W', Lightning: 'L', Psychic: 'P',
	Fighting: 'F', Darkness: 'D', Metal: 'M', Colorless: 'C',
}

function parseDamage(value) {
	if (value === undefined || value === null || value === '') return undefined
	if (Number(value) === 0) return undefined
	return /^\d+$/u.test(String(value)) ? Number(value) : String(value)
}

function cleanRuleText(value) {
	if (!value) return undefined
	return value
		.replace(/\[N\]/gu, 'Dragon')
		.replace(/Pok[eé]mon/giu, 'Pokémon')
		.replace(/\s+/gu, ' ')
		.trim()
}

function deckGymAttacks(card) {
	return (card.attacks ?? []).map(attack => ({
		name: attack.title,
		cost: attack.energy_required ?? [],
		...(parseDamage(attack.fixed_damage) !== undefined ? { damage: parseDamage(attack.fixed_damage) } : {}),
		...(cleanRuleText(attack.effect) ? { effect: cleanRuleText(attack.effect) } : {}),
	}))
}

function pokemonMetaAttacks(card) {
	return (card.moves ?? []).map(attack => ({
		name: attack.name,
		cost: (attack.energyCost ?? []).filter(Boolean),
		...(parseDamage(attack.hp) !== undefined ? { damage: parseDamage(attack.hp) } : {}),
		...(cleanRuleText(attack.text) ? { effect: cleanRuleText(attack.text) } : {}),
	}))
}

function deckGymAbilities(card) {
	return card.ability
		? [{ type: 'Ability', name: card.ability.title, effect: cleanRuleText(card.ability.effect) }]
		: []
}

function pokemonMetaAbilities(card) {
	return (card.abilities ?? []).map(ability => ({
		type: 'Ability',
		name: ability.name,
		effect: cleanRuleText(ability.text),
	}))
}

function damageBase(value) {
	if (value === undefined) return undefined
	const match = String(value).match(/^\d+/u)
	return match ? Number(match[0]) : String(value)
}

function reconcileAttacks(deckGym, pokemonMeta) {
	if (!Array.isArray(deckGym) || !Array.isArray(pokemonMeta) || deckGym.length !== pokemonMeta.length) return undefined
	const reconciled = []
	for (let index = 0; index < deckGym.length; index++) {
		const left = deckGym[index]
		const right = pokemonMeta[index]
		if (!equivalent(left.name, right.name)
			|| !equivalent(left.cost ?? [], right.cost ?? [])
			|| !equivalent(left.effect ?? '', right.effect ?? '')
			|| damageBase(left.damage) !== damageBase(right.damage)) return undefined
		const damage = typeof right.damage === 'string' && /[+x×]$/iu.test(right.damage)
			? right.damage
			: left.damage
		reconciled.push({
			name: left.name,
			cost: left.cost ?? [],
			...(damage !== undefined ? { damage } : {}),
			...(left.effect ? { effect: left.effect } : {}),
		})
	}
	return reconciled
}

function normalizeTrainerType(value) {
	if (value === 'Fossil') return 'Item'
	if (value === 'Pokemon Tool') return 'Tool'
	return value
}

function fieldResolution(fieldName, preferred, candidates, review, automatic) {
	const usable = candidates.filter(candidate => candidate.value !== undefined)
	const disagreement = usable.length > 1 && !usable.every(candidate => equivalent(candidate.value, usable[0].value))
	if (review !== undefined) {
		if (!Object.prototype.hasOwnProperty.call(review, 'value')) {
			return { chosen: preferred, status: 'unresolved', candidates: usable, note: 'Review entry has no value.' }
		}
		if (!Array.isArray(review.evidence) || review.evidence.length === 0) {
			return { chosen: review.value, status: 'unresolved', candidates: usable, note: 'Review entry has no evidence.' }
		}
		return {
			chosen: review.value,
			status: disagreement ? 'resolved-conflict' : (review.raw !== undefined && !equivalent(review.raw, review.value) ? 'ocr-corrected' : 'reviewed'),
			candidates: [
				...usable,
				...(review.raw !== undefined ? [{ source: 'cardImageOcr', value: review.raw }] : []),
			],
			evidence: review.evidence,
			...(review.note ? { note: review.note } : {}),
		}
	}
	if (usable.length === 0) {
		return { chosen: preferred, status: 'unresolved', candidates: [], note: `${fieldName} has no candidate.` }
	}
	if (disagreement) {
		if (automatic?.value !== undefined) {
			return {
				chosen: automatic.value,
				status: 'reconciled',
				candidates: usable,
				evidence: usable.map(candidate => candidate.source),
				note: automatic.note,
			}
		}
		const groups = new Map()
		for (const candidate of usable) {
			const key = JSON.stringify(normalizeValue(candidate.value))
			const group = groups.get(key) ?? []
			group.push(candidate)
			groups.set(key, group)
		}
		const ranked = [...groups.values()].sort((left, right) => right.length - left.length)
		if (ranked[0].length >= 2 && ranked[0].length > (ranked[1]?.length ?? 0)) {
			return {
				chosen: ranked[0][0].value,
				status: 'majority-resolved',
				candidates: usable,
				evidence: ranked[0].map(candidate => candidate.source),
				note: 'Two independent candidates agree against one outlier.',
			}
		}
		return { chosen: preferred, status: 'unresolved', candidates: usable, note: 'Candidates disagree; add a reviewed value with evidence.' }
	}
	return {
		chosen: preferred ?? usable[0].value,
		status: usable.length > 1 ? 'agreed' : 'single-source',
		candidates: usable,
	}
}

const indexCards = readJson(indexFile)
const deckGymRaw = readJson(deckGymFile)
const pokemonMetaRaw = readJson(pokemonMetaFile)
const review = readJson(reviewFile)
const sources = readJson(sourcesFile)

if (!Array.isArray(indexCards) || !Array.isArray(deckGymRaw) || !Array.isArray(pokemonMetaRaw)) {
	throw new Error('Index, DeckGym, and Pokemon Meta inputs must be JSON arrays')
}
if (review.schemaVersion !== 1 || review.setId !== setId || !review.cards || typeof review.cards !== 'object') {
	throw new Error('Review must use schemaVersion 1, the requested setId, and a cards object')
}
if (!sources || typeof sources !== 'object' || Array.isArray(sources) || Object.keys(sources).length < 3) {
	throw new Error('Source registry must be an object with at least three sources')
}

const expectedIds = Array.from({ length: total }, (_, index) => `${setId}-${String(index + 1).padStart(3, '0')}`)
const indexById = new Map(indexCards
	.filter(card => card.set === setId && card.number >= 1 && card.number <= total)
	.map(card => [`${setId}-${String(card.number).padStart(3, '0')}`, card]))
const deckGymById = new Map(deckGymRaw
	.map(entry => entry.Pokemon ?? entry.Trainer)
	.filter(Boolean)
	.map(card => [card.id.replace(/\s+/gu, '-'), card])
	.filter(([id]) => expectedIds.includes(id)))
const pokemonMetaById = new Map(pokemonMetaRaw
	.filter(card => expectedIds.includes(card.pokemonId))
	.map(card => [card.pokemonId, card]))

const canonicalCards = []
const provenanceCards = []
const diagnostics = []

for (const [offset, id] of expectedIds.entries()) {
	const number = offset + 1
	const indexCard = indexById.get(id)
	const deckGym = deckGymById.get(id)
	const pokemonMeta = pokemonMetaById.get(id)
	const localImage = imageFor(number)
	const image = localImage && imageRefBase
		? `${imageRefBase}/${path.basename(localImage)}`
		: localImage
	const reviewFields = review.cards[id]?.fields ?? {}
	const isPokemon = Boolean(deckGym?.attacks) || pokemonMeta?.cardType === 'Pokemon'

	if ((pokemonMeta?.moves ?? []).some(move => (move.energyCost ?? []).includes(null))) {
		diagnostics.push({ id, field: 'attacks.cost', source: 'pokemonMeta', issue: 'Null energy entries removed before comparison.' })
	}

	const fields = {
		image: fieldResolution('image', image, image ? [{ source: 'pinnedCardImage', value: image }] : [], reviewFields.image),
		name: fieldResolution('name', indexCard?.name ?? deckGym?.name ?? pokemonMeta?.name, [
			{ source: 'index', value: indexCard?.name },
			{ source: 'deckGym', value: deckGym?.name },
			{ source: 'pokemonMeta', value: pokemonMeta?.name },
		], reviewFields.name),
		rarity: fieldResolution('rarity', rarityFromIndex[indexCard?.rarity], [
			{ source: 'index', value: rarityFromIndex[indexCard?.rarity] },
			{ source: 'deckGym', value: rarityFromDeckGym[deckGym?.rarity] },
			{ source: 'pokemonMeta', value: rarityFromPokemonMeta[pokemonMeta?.rarity] },
		], reviewFields.rarity),
		illustrator: fieldResolution('illustrator', reviewFields.illustrator?.value, [], reviewFields.illustrator),
	}

	let canonical
	if (isPokemon) {
		const deckAttacks = deckGym ? deckGymAttacks(deckGym) : undefined
		const metaAttacks = pokemonMeta ? pokemonMetaAttacks(pokemonMeta) : undefined
		const reconciledAttacks = reconcileAttacks(deckAttacks, metaAttacks)
		const deckAbilities = deckGym ? deckGymAbilities(deckGym) : undefined
		const metaAbilities = pokemonMeta ? pokemonMetaAbilities(pokemonMeta) : undefined
		const pokemonName = fields.name.chosen
		const isEx = / ex$/iu.test(pokemonName ?? '')
		Object.assign(fields, {
			hp: fieldResolution('hp', deckGym?.hp, [
				{ source: 'deckGym', value: deckGym?.hp },
				{ source: 'pokemonMeta', value: pokemonMeta?.hp ? Number(pokemonMeta.hp) : undefined },
			], reviewFields.hp),
			types: fieldResolution('types', deckGym?.energy_type ? [deckGym.energy_type] : undefined, [
				{ source: 'deckGym', value: deckGym?.energy_type ? [deckGym.energy_type] : undefined },
				{ source: 'pokemonMeta', value: pokemonMeta?.energyType },
			], reviewFields.types),
			stage: fieldResolution('stage', stageFromDeckGym[deckGym?.stage], [
				{ source: 'deckGym', value: stageFromDeckGym[deckGym?.stage] },
				{ source: 'pokemonMeta', value: pokemonMeta?.subType },
			], reviewFields.stage),
			evolveFrom: fieldResolution('evolveFrom', deckGym?.evolves_from ?? null, [
				{ source: 'deckGym', value: deckGym ? (deckGym.evolves_from ?? null) : undefined },
			], reviewFields.evolveFrom),
			abilities: fieldResolution('abilities', deckAbilities, [
				{ source: 'deckGym', value: deckAbilities },
				{ source: 'pokemonMeta', value: metaAbilities },
			], reviewFields.abilities),
			attacks: fieldResolution('attacks', deckAttacks, [
				{ source: 'deckGym', value: deckAttacks },
				{ source: 'pokemonMeta', value: metaAttacks },
			], reviewFields.attacks, reconciledAttacks ? {
				value: reconciledAttacks,
				note: 'Mechanics agree after expanding energy symbols; preserved the Pokemon Meta damage suffix when its numeric base matches.',
			} : undefined),
			weaknesses: fieldResolution('weaknesses', deckGym ? (deckGym.weakness ? [{ type: deckGym.weakness, value: '+20' }] : []) : undefined, [
				{ source: 'deckGym', value: deckGym ? (deckGym.weakness ? [{ type: deckGym.weakness, value: '+20' }] : []) : undefined },
				{ source: 'pokemonMeta', value: pokemonMeta ? (pokemonMeta.weakness ?? []).map(type => ({ type, value: '+20' })) : undefined },
			], reviewFields.weaknesses),
			retreat: fieldResolution('retreat', deckGym?.retreat_cost?.length, [
				{ source: 'deckGym', value: deckGym?.retreat_cost?.length },
				{ source: 'pokemonMeta', value: pokemonMeta?.retreat },
			], reviewFields.retreat),
			description: isEx && !reviewFields.description
				? { chosen: undefined, status: 'not-applicable', candidates: [], note: 'Pokémon ex card has no flavor-text requirement.' }
				: fieldResolution('description', reviewFields.description?.value, [], reviewFields.description),
		})
		canonical = {
			id,
			name: fields.name.chosen,
			rarity: fields.rarity.chosen,
			category: 'Pokemon',
			hp: fields.hp.chosen,
			types: fields.types.chosen,
			stage: fields.stage.chosen,
			...(fields.evolveFrom.chosen ? { evolveFrom: fields.evolveFrom.chosen } : {}),
			...(fields.abilities.chosen?.length ? { abilities: fields.abilities.chosen } : {}),
			attacks: fields.attacks.chosen,
			weaknesses: fields.weaknesses.chosen,
			retreat: fields.retreat.chosen,
			illustrator: fields.illustrator.chosen,
			...(fields.description.chosen ? { description: fields.description.chosen } : {}),
			sourceImage: fields.image.chosen,
		}
	} else {
		Object.assign(fields, {
			trainerType: fieldResolution('trainerType', normalizeTrainerType(deckGym?.trainer_card_type), [
				{ source: 'deckGym', value: normalizeTrainerType(deckGym?.trainer_card_type) },
				{ source: 'pokemonMeta', value: normalizeTrainerType(pokemonMeta?.subType) },
			], reviewFields.trainerType),
			effect: fieldResolution('effect', cleanRuleText(deckGym?.effect), [
				{ source: 'deckGym', value: cleanRuleText(deckGym?.effect) },
				{ source: 'pokemonMeta', value: cleanRuleText(pokemonMeta?.description) },
			], reviewFields.effect),
		})
		canonical = {
			id,
			name: fields.name.chosen,
			rarity: fields.rarity.chosen,
			category: 'Trainer',
			trainerType: fields.trainerType.chosen,
			effect: fields.effect.chosen,
			illustrator: fields.illustrator.chosen,
			sourceImage: fields.image.chosen,
		}
	}

	const statuses = Object.values(fields).map(field => field.status)
	canonical.confidence = statuses.includes('unresolved')
		? 'low'
		: statuses.includes('ocr-corrected') || statuses.includes('single-source') ? 'medium' : 'high'
	canonicalCards.push(canonical)
	provenanceCards.push({ id, confidence: canonical.confidence, fields })
}

const details = canonicalCards.map(card => {
	if (card.category === 'Trainer') {
		return {
			ID: card.id,
			Name: card.name,
			'Card-Type': card.trainerType,
			Illustrator: card.illustrator,
			Description: card.effect,
		}
	}
	return {
		ID: card.id,
		Name: card.name,
		'Card-Type': 'Pokemon',
		Illustrator: card.illustrator,
		...(card.description ? { 'Flavor-Text': card.description } : {}),
		Ability: card.abilities?.length ? card.abilities.map(ability => ability.name) : null,
		'Ability-Effect': card.abilities?.length ? card.abilities.map(ability => ability.effect) : null,
		Moves: (card.attacks ?? []).map(attack => attack.name),
		'Move-Energy': (card.attacks ?? []).map(attack => (attack.cost ?? []).map(energy => {
			if (!energyCodes[energy]) throw new Error(`${card.id}: unsupported attack energy ${JSON.stringify(energy)}`)
			return energyCodes[energy]
		}).join('')),
		'Move-Damage': (card.attacks ?? []).map(attack => attack.damage === undefined ? '' : String(attack.damage)),
		Effects: (card.attacks ?? []).map(attack => attack.effect ?? ''),
	}
})

const missingFields = []
for (const card of canonicalCards) {
	const required = card.category === 'Pokemon'
		? ['name', 'rarity', 'hp', 'types', 'stage', 'attacks', 'weaknesses', 'retreat', 'illustrator', ...(/ ex$/iu.test(card.name) ? [] : ['description']), 'sourceImage']
		: ['name', 'rarity', 'trainerType', 'effect', 'illustrator', 'sourceImage']
	for (const field of required) {
		const value = card[field]
		if (value === undefined || value === null || value === '' || (['types'].includes(field) && Array.isArray(value) && value.length === 0)) {
			missingFields.push({ id: card.id, field })
		}
	}
}

const unresolvedConflicts = provenanceCards.flatMap(card => Object.entries(card.fields)
	.filter(([, value]) => value.status === 'unresolved')
	.map(([field, value]) => ({ id: card.id, field, chosen: value.chosen, candidates: value.candidates, note: value.note })))
const resolvedConflicts = provenanceCards.flatMap(card => Object.entries(card.fields)
	.filter(([, value]) => ['resolved-conflict', 'reconciled', 'majority-resolved'].includes(value.status))
	.map(([field, value]) => ({ id: card.id, field, chosen: value.chosen, candidates: value.candidates, evidence: value.evidence, note: value.note })))

const imageHash = hashImageDirectory()
const idsContinuous = canonicalCards.map(card => card.id).every((id, index) => id === expectedIds[index])
const inputHashes = {
	index: hashFile(indexFile),
	deckGym: hashFile(deckGymFile),
	pokemonMeta: hashFile(pokemonMetaFile),
	review: hashFile(reviewFile),
	sources: hashFile(sourcesFile),
	images: imageHash,
}
const audit = {
	schemaVersion: 1,
	setId,
	range: `001-${String(total).padStart(3, '0')}`,
	generatedAt: new Date().toISOString(),
	inputHashes,
	counts: {
		cards: canonicalCards.length,
		detailsRecords: details.length,
		provenanceRecords: provenanceCards.length,
		indexRecords: indexById.size,
		deckGymRecords: deckGymById.size,
		pokemonMetaRecords: pokemonMetaById.size,
		imageFiles: imageHash.count,
	},
	idsContinuous,
	missingFields,
	resolvedConflicts,
	unresolvedConflicts,
	diagnostics,
	confidence: Object.fromEntries(['high', 'medium', 'low'].map(level => [
		level,
		canonicalCards.filter(card => card.confidence === level).length,
	])),
	passed: idsContinuous
		&& canonicalCards.length === total
		&& indexById.size === total
		&& deckGymById.size === total
		&& pokemonMetaById.size === total
		&& imageHash.count >= total
		&& missingFields.length === 0
		&& unresolvedConflicts.length === 0,
}

fs.mkdirSync(outputDir, { recursive: true })
writeJson(path.join(outputDir, `${setId}.canonical.json`), { schemaVersion: 1, setId, cards: canonicalCards })
writeJson(path.join(outputDir, `${setId}.details.json`), details)
writeJson(path.join(outputDir, `${setId}.provenance.json`), {
	schemaVersion: 1,
	setId,
	generatedAt: audit.generatedAt,
	inputHashes,
	sources,
	cards: provenanceCards,
})
writeJson(path.join(outputDir, `${setId}.audit.json`), audit)

console.log(JSON.stringify({
	setId,
	passed: audit.passed,
	cards: audit.counts.cards,
	missingFields: missingFields.length,
	resolvedConflicts: resolvedConflicts.length,
	unresolvedConflicts: unresolvedConflicts.length,
	diagnostics: diagnostics.length,
	outputDir,
}, null, 2))

if (!audit.passed) process.exitCode = 2
