#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

function arg(name, fallback) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function readBaseFile(file, root, baseRef) {
	const current = fs.readFileSync(file, 'utf8')
	if (!baseRef) return current
	const relative = path.relative(root, file).split(path.sep).join('/')
	const base = execFileSync('git', ['-C', root, 'show', `${baseRef}:${relative}`], { encoding: 'utf8' })
	if (current !== base) throw new Error(`${relative}: worktree differs from ${baseRef}; refusing to overwrite user changes`)
	return base
}

function writeAtomic(file, contents) {
	const temporary = `${file}.tmp-${process.pid}`
	try {
		fs.writeFileSync(temporary, contents)
		fs.renameSync(temporary, file)
	} finally {
		if (fs.existsSync(temporary)) fs.rmSync(temporary)
	}
}

function replaceEntriesInPlace(source, replacements) {
	const matches = [...source.matchAll(/^  ("(?:[^"\\]|\\.)+"):/gmu)]
	const parsed = JSON.parse(source)
	if (matches.length !== Object.keys(parsed).length) throw new Error('target JSON must be a two-space-indented top-level object')
	const objectEnd = source.trimEnd().lastIndexOf('}')
	const lineEnding = source.includes('\r\n') ? '\r\n' : '\n'
	const chunks = []
	let cursor = 0
	for (let index = 0; index < matches.length; index++) {
		const match = matches[index]
		const key = JSON.parse(match[1])
		const end = matches[index + 1]?.index ?? objectEnd
		chunks.push(source.slice(cursor, match.index))
		const originalSegment = source.slice(match.index, end)
		if (!Object.hasOwn(replacements, key)) {
			chunks.push(originalSegment)
		} else {
			const valueText = JSON.stringify(replacements[key], null, 2)
				.replaceAll('\n', lineEnding)
				.replaceAll(lineEnding, `${lineEnding}  `)
			const hasComma = originalSegment.trimEnd().endsWith(',')
			chunks.push(`  ${JSON.stringify(key)}: ${valueText}${hasComma ? ',' : ''}${lineEnding}`)
		}
		cursor = end
	}
	chunks.push(source.slice(cursor))
	const result = chunks.join('')
	JSON.parse(result)
	return result
}

const overlayPath = arg('overlay', 'meta/pocket-source-reviews/B4/raenonx.overlay.json')
const downstreamRoot = path.resolve(arg('downstream', '../../tcgp'))
const baseRef = arg('base-ref')
const origin = arg('origin', 'https://game.pokemontcgpocket.app').replace(/\/+$/u, '')
const write = process.argv.includes('--write')
const overlay = loadJson(overlayPath)
const localeConfig = {
	en: { overlay: 'en', image: 'en', file: 'en.json' },
	fr: { overlay: 'fr', image: 'fr', file: 'fr.json' },
	es: { overlay: 'es', image: 'es', file: 'es.json' },
	it: { overlay: null, image: 'en', file: 'it.json' },
	de: { overlay: null, image: 'en', file: 'de.json' },
	pt: { overlay: 'pt', image: 'pt', file: 'pt.json' },
	'zh-TW': { overlay: 'zh', image: 'zh-tw', file: 'zh-TW.json' },
}
const ids = Object.keys(overlay.cards).sort((left, right) => overlay.cards[left].number - overlay.cards[right].number)
if (ids.length !== 233) throw new Error(`Expected 233 overlay cards, got ${ids.length}`)
for (let index = 0; index < ids.length; index++) {
	const expectedId = `B4-${String(index + 1).padStart(3, '0')}`
	const id = ids[index]
	if (id !== expectedId || overlay.cards[id].number !== index + 1) {
		throw new Error(`Overlay must be ordered and keyed by ${expectedId}; got ${id} / ${overlay.cards[id].number}`)
	}
}
if (write && !baseRef) throw new Error('--write requires --base-ref <reviewed-commit>')

const rarityFile = path.join(downstreamRoot, 'lib/config/cardRarity.additions.json')
const rarityText = readBaseFile(rarityFile, downstreamRoot, baseRef)
const rarity = JSON.parse(rarityText)
const rarityCodes = { C: 'd1', U: 'd2', R: 'd3', RR: 'd4', AR: 's1', SR: 's2', SAR: 's2', IM: 's3', S: 'h1', SSR: 'h2', UR: 'cr' }
for (const id of ids) {
	const sourceRarity = overlay.cards[id].raw?.rarity
	const expected = rarityCodes[sourceRarity]
	if (!expected || rarity[id] !== expected) throw new Error(`${id}: downstream rarity ${rarity[id]} does not match RaenonX ${sourceRarity}`)
}

const writes = []
const summary = {}
for (const [locale, config] of Object.entries(localeConfig)) {
	const targetFile = path.join(downstreamRoot, 'locales/card', config.file)
	const targetText = readBaseFile(targetFile, downstreamRoot, baseRef)
	const current = JSON.parse(targetText)
	const replacements = {}
	let namesChanged = 0
	let imagesChanged = 0
	for (const id of ids) {
		const currentCard = current[id]
		if (!currentCard || currentCard.set !== 'Ruler of the Skies') throw new Error(`${locale}: missing or wrong-set ${id}`)
		const card = overlay.cards[id]
		const number = String(card.number).padStart(3, '0')
		const nextName = config.overlay ? card.locales[config.overlay].name : currentCard.name
		const nextImage = `${origin}/${config.image}/tcgp/B4/${number}`
		if (nextName !== currentCard.name) namesChanged++
		if (nextImage !== currentCard.image) imagesChanged++
		replacements[id] = { ...currentCard, name: nextName, image: nextImage }
	}
	const nextText = replaceEntriesInPlace(targetText, replacements)
	writes.push({ targetFile, targetText, nextText })
	summary[locale] = { cards: ids.length, namesChanged, imagesChanged }
}

if (write) {
	for (const item of writes) writeAtomic(item.targetFile, item.nextText)
}
console.log(JSON.stringify({
	setId: 'B4',
	mode: write ? 'write' : 'dry-run',
	locales: summary,
	rarity: { verified: ids.length, changed: 0 },
}, null, 2))
