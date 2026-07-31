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
const imageLanguagesArg = getArg('image-languages')
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

const imageLanguages = imageLanguagesArg
	? Object.fromEntries(imageLanguagesArg.split(',').map(pair => {
		const [locale, language, ...extra] = pair.split('=')
		if (!locale || !language || extra.length) throw new Error(`Invalid --image-languages entry: ${pair}`)
		return [locale, language]
	}))
	: Object.fromEntries(Object.keys(LOCALES).map(locale => [locale, imageLanguage]))
const missingImageLanguages = Object.keys(LOCALES).filter(locale => !imageLanguages[locale])
if (missingImageLanguages.length) {
	throw new Error(`--image-languages is missing downstream locales: ${missingImageLanguages.join(', ')}`)
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

const PROMO_RARITIES = new Set(['None', 'Promo', 'PR'])

function readTargetText(targetFile, downstreamRoot, baseRef) {
	const relativeTarget = path.relative(downstreamRoot, targetFile).split(path.sep).join('/')
	const currentText = fs.readFileSync(targetFile, 'utf8')
	if (!baseRef) return currentText
	const baseText = execFileSync('git', ['-C', downstreamRoot, 'show', `${baseRef}:${relativeTarget}`], { encoding: 'utf8' })
	if (currentText !== baseText) {
		throw new Error(`${relativeTarget}: worktree differs from ${baseRef}; refusing to overwrite user changes`)
	}
	return baseText
}

function atomicWrite(targetFile, contents) {
	const temporary = `${targetFile}.pocket-sync-${process.pid}.tmp`
	fs.writeFileSync(temporary, contents)
	fs.renameSync(temporary, targetFile)
}

function replaceTopLevelEntries(source, shouldRemove, additions) {
	const parsed = JSON.parse(source)
	const matches = [...source.matchAll(/^  ("(?:[^"\\]|\\.)+"):/gmu)]
	if (matches.length !== Object.keys(parsed).length) {
		throw new Error('target JSON must be a two-space-indented top-level object')
	}

	const objectEnd = source.trimEnd().lastIndexOf('}')
	if (objectEnd < 0) throw new Error('target JSON is missing its closing brace')
	const lineEnding = source.includes('\r\n') ? '\r\n' : '\n'
	const opening = matches.length ? source.slice(0, matches[0].index) : `{${lineEnding}`
	const ending = source.slice(objectEnd)
	const kept = matches.flatMap((match, index) => {
		const key = JSON.parse(match[1])
		if (shouldRemove(key)) return []
		const end = matches[index + 1]?.index ?? objectEnd
		return [source.slice(match.index, end).trimEnd().replace(/,$/u, '')]
	})
	const additionsText = JSON.stringify(additions, null, 2).replaceAll('\n', lineEnding)
	const firstLineEnd = additionsText.indexOf(lineEnding)
	const lastLineStart = additionsText.lastIndexOf(lineEnding)
	const additionsBody = firstLineEnd >= 0 && lastLineStart > firstLineEnd
		? additionsText.slice(firstLineEnd + lineEnding.length, lastLineStart)
		: ''
	const entries = additionsBody ? [...kept, additionsBody] : kept
	const result = `${opening}${entries.join(`,${lineEnding}`)}${entries.length ? lineEnding : ''}${ending}`
	JSON.parse(result)
	return result
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
	const code = PROMO_RARITIES.has(card.rarity) ? 'pr' : RARITY_CODES[card.rarity]
	if (!code) throw new Error(`${id}: unsupported gacha rarity ${JSON.stringify(card.rarity)}`)
	return [id, code]
}))

const rarityTargetFile = path.join(path.resolve(downstreamRoot), 'lib/config/cardRarity.additions.json')
const rarityTargetText = readTargetText(rarityTargetFile, path.resolve(downstreamRoot), baseRef)
const currentRarity = JSON.parse(rarityTargetText)
const existingRarity = Object.keys(currentRarity).filter(id => id.startsWith(`${setId}-`))
if (existingRarity.length && !baseRef) {
	throw new Error(`rarity: ${setId} already exists; provide a reviewed --base-ref to replace it`)
}
const nextRarityText = replaceTopLevelEntries(
	rarityTargetText,
	id => id.startsWith(`${setId}-`),
	rarityAdditions,
)
const nextRarity = JSON.parse(nextRarityText)

const summary = {}
const writes = []
for (const [locale, config] of Object.entries(LOCALES)) {
	const sourceCards = sourceCardsByLocale[locale]

	const targetFile = path.join(path.resolve(downstreamRoot), 'locales/card', config.file)
	const targetText = readTargetText(targetFile, path.resolve(downstreamRoot), baseRef)
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
			image: `${origin}/${imageLanguages[locale]}/tcgp/${setId}/${number}`,
			set: setName,
		}]
	}))
	const nextText = replaceTopLevelEntries(
		targetText,
		id => id.startsWith(`${setId}-`),
		additions,
	)
	const next = JSON.parse(nextText)
	writes.push([targetFile, nextText])
	summary[locale] = { existing: existing.length, added: sourceCards.length, total: Object.keys(next).length }
}

writes.push([rarityTargetFile, nextRarityText])
if (write) {
	for (const [targetFile, contents] of writes) atomicWrite(targetFile, contents)
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
