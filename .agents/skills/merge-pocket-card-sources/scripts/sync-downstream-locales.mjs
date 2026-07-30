#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

function getArg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3)
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'))
}

const sourceRoot = getArg('source-root')
const downstreamRoot = getArg('downstream')
const setId = getArg('set-id')
const setName = getArg('set-name')
const origin = (getArg('origin') ?? 'https://game.pokemontcgpocket.app').replace(/\/+$/u, '')
const imageLanguage = getArg('image-language') ?? 'en'
const baseRef = getArg('base-ref')
const expectedCount = Number(getArg('expected-count'))
const write = process.argv.includes('--write')
if (!sourceRoot || !downstreamRoot || !setId || !setName || !Number.isInteger(expectedCount)) {
	throw new Error('--source-root, --downstream, --set-id, --set-name and --expected-count are required')
}

const LOCALES = {
	en: { source: 'en-US', file: 'en.json' },
	fr: { source: 'fr-FR', file: 'fr.json' },
	es: { source: 'es-ES', file: 'es.json' },
	it: { source: 'it-IT', file: 'it.json' },
	de: { source: 'de-DE', file: 'de.json' },
	pt: { source: 'pt-BR', file: 'pt.json' },
	'zh-TW': { source: 'zh-TW', file: 'zh-TW.json' },
}

const RARITY_CODES = {
	C: 'd1',
	U: 'd2',
	R: 'd3',
	RR: 'd4',
	AR: 's1',
	SR: 's2',
	SAR: 's2',
	IM: 's3',
	S: 'h1',
	SSR: 'h2',
	UR: 'cr',
}

function sourceCardsFor(config) {
	const sourceFile = path.join(path.resolve(sourceRoot), 'metadata/cards', config.source, 'cards.extra.json')
	const cards = loadJson(sourceFile)
		.filter(card => card.set === setId)
		.sort((left, right) => left.number - right.number)
	if (cards.length !== expectedCount) {
		throw new Error(`${config.source}: expected ${expectedCount} source cards, got ${cards.length}`)
	}
	for (let index = 0; index < cards.length; index++) {
		if (cards[index].number !== index + 1 || !cards[index].name) {
			throw new Error(`${config.source}: invalid source card at position ${index + 1}`)
		}
	}
	return cards
}

const sourceCardsByLocale = Object.fromEntries(
	Object.entries(LOCALES).map(([locale, config]) => [locale, sourceCardsFor(config)]),
)
const englishSourceCards = sourceCardsByLocale.en
const rarityAdditions = Object.fromEntries(englishSourceCards.map(card => {
	const number = String(card.number).padStart(3, '0')
	const id = `${setId}-${number}`
	const code = setId.startsWith('P-') ? 'pr' : RARITY_CODES[card.rarity]
	if (!code) throw new Error(`${id}: unsupported gacha rarity ${JSON.stringify(card.rarity)}`)
	return [id, code]
}))

const rarityTargetFile = path.join(path.resolve(downstreamRoot), 'lib/config/cardRarity.additions.json')
const rarityRelativeTarget = path.relative(path.resolve(downstreamRoot), rarityTargetFile).split(path.sep).join('/')
const rarityTargetText = baseRef
	? execFileSync('git', ['-C', path.resolve(downstreamRoot), 'show', `${baseRef}:${rarityRelativeTarget}`], { encoding: 'utf8' })
	: fs.readFileSync(rarityTargetFile, 'utf8')
const currentRarity = JSON.parse(rarityTargetText)
const existingRarity = Object.keys(currentRarity).filter(id => id.startsWith(`${setId}-`))
if (existingRarity.length && !baseRef) {
	throw new Error(`rarity: ${setId} already exists; provide a reviewed --base-ref to replace it`)
}
const nextRarity = {
	...Object.fromEntries(Object.entries(currentRarity).filter(([id]) => !id.startsWith(`${setId}-`))),
	...rarityAdditions,
}
const nextRarityText = `${JSON.stringify(nextRarity, null, 2)}\n`

const summary = {}
const writes = []
for (const [locale, config] of Object.entries(LOCALES)) {
	const sourceCards = sourceCardsByLocale[locale]

	const targetFile = path.join(path.resolve(downstreamRoot), 'locales/card', config.file)
	const relativeTarget = path.relative(path.resolve(downstreamRoot), targetFile).split(path.sep).join('/')
	const targetText = baseRef
		? execFileSync('git', ['-C', path.resolve(downstreamRoot), 'show', `${baseRef}:${relativeTarget}`], { encoding: 'utf8' })
		: fs.readFileSync(targetFile, 'utf8')
	const current = JSON.parse(targetText)
	const existing = Object.keys(current).filter(id => id.startsWith(`${setId}-`))
	if (existing.length && !baseRef) {
		throw new Error(`${locale}: ${setId} already exists; provide a reviewed --base-ref to replace it without reordering unrelated keys`)
	}
	const additions = Object.fromEntries(sourceCards.map(card => {
		const number = String(card.number).padStart(3, '0')
		const id = `${setId}-${number}`
		return [id, {
			localId: id,
			id,
			name: card.name,
			image: `${origin}/${imageLanguage}/tcgp/${setId}/${number}`,
			set: setName,
		}]
	}))
	const trimmed = targetText.trimEnd()
	if (!trimmed.endsWith('}')) throw new Error(`${locale}: target is not a JSON object`)
	const additionLines = JSON.stringify(additions, null, 2).split('\n').slice(1, -1)
	const nextText = `${trimmed.slice(0, -1).trimEnd()},\n${additionLines.join('\n')}\n}\n`
	const next = JSON.parse(nextText)
	writes.push([targetFile, nextText])
	summary[locale] = { existing: existing.length, added: sourceCards.length, total: Object.keys(next).length }
}

writes.push([rarityTargetFile, nextRarityText])
if (write) {
	for (const [targetFile, contents] of writes) fs.writeFileSync(targetFile, contents)
}
const raritySummary = {
	existing: existingRarity.length,
	added: Object.keys(rarityAdditions).length,
	total: Object.keys(nextRarity).length,
}

console.log(JSON.stringify({
	mode: write ? 'write' : 'dry-run',
	setId,
	expectedCount,
	locales: summary,
	rarity: raritySummary,
}, null, 2))
