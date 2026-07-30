#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function getArg(name) {
	const index = process.argv.indexOf(`--${name}`)
	const value = index >= 0 ? process.argv[index + 1] : undefined
	if (!value) throw new Error(`--${name} is required`)
	return value
}

function getArgs(name) {
	const result = []
	for (let index = 0; index < process.argv.length; index++) {
		if (process.argv[index] === `--${name}` && process.argv[index + 1]) result.push(process.argv[index + 1])
	}
	if (!result.length) throw new Error(`at least one --${name} is required`)
	return result
}

const setId = getArg('set-id')
const canonicalFile = path.resolve(getArg('canonical'))
const repoRoot = path.resolve(getArg('repo-root'))
const flavorFile = path.resolve(getArg('flavor-csv'))
const speciesFile = path.resolve(getArg('species-csv'))
const outputFile = path.resolve(getArg('output'))
const reportFile = path.resolve(getArg('report'))
const batches = getArgs('batch').map(value => {
	const separator = value.indexOf(':')
	if (separator < 1) throw new Error(`Invalid --batch ${value}; expected START:/absolute/result.json`)
	return { start: Number(value.slice(0, separator)), file: path.resolve(value.slice(separator + 1)) }
})
const idBatches = (() => {
	const values = []
	for (let index = 0; index < process.argv.length; index++) {
		if (process.argv[index] === '--id-batch' && process.argv[index + 1]) values.push(process.argv[index + 1])
	}
	return values.map(value => {
		const separator = value.indexOf(':')
		if (separator < 1) throw new Error(`Invalid --id-batch ${value}; expected ID,ID:/absolute/result.json`)
		return { ids: value.slice(0, separator).split(','), file: path.resolve(value.slice(separator + 1)) }
	})
})()

function parseCsv(text) {
	const rows = []
	let row = []
	let value = ''
	let quoted = false
	for (let index = 0; index < text.length; index++) {
		const char = text[index]
		if (quoted) {
			if (char === '"' && text[index + 1] === '"') {
				value += '"'
				index++
			} else if (char === '"') quoted = false
			else value += char
		} else if (char === '"') quoted = true
		else if (char === ',') {
			row.push(value)
			value = ''
		} else if (char === '\n') {
			row.push(value)
			rows.push(row)
			row = []
			value = ''
		} else if (char !== '\r') value += char
	}
	if (value || row.length) {
		row.push(value)
		rows.push(row)
	}
	return rows
}

function walk(directory) {
	const result = []
	for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
		const absolute = path.join(directory, entry.name)
		if (entry.isDirectory()) result.push(...walk(absolute))
		else if (entry.isFile() && entry.name.endsWith('.ts')) result.push(absolute)
	}
	return result
}

function normalized(value) {
	return value
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/gu, '')
		.replace(/Pok[eé]mon/giu, 'pokemon')
		.replace(/[^a-z0-9]+/giu, '')
		.toLowerCase()
}

function levenshtein(left, right) {
	if (!left.length) return right.length
	if (!right.length) return left.length
	let previous = Array.from({ length: right.length + 1 }, (_, index) => index)
	for (let row = 1; row <= left.length; row++) {
		const current = [row]
		for (let column = 1; column <= right.length; column++) {
			current[column] = Math.min(
				current[column - 1] + 1,
				previous[column] + 1,
				previous[column - 1] + (left[row - 1] === right[column - 1] ? 0 : 1),
			)
		}
		previous = current
	}
	return previous[right.length]
}

function similarity(left, right) {
	const a = normalized(left)
	const b = normalized(right)
	if (!a || !b) return 0
	return 1 - levenshtein(a, b) / Math.max(a.length, b.length)
}

const artistCorpus = new Set()
for (const file of walk(path.join(repoRoot, 'data/Pokémon TCG Pocket'))) {
	const content = fs.readFileSync(file, 'utf8')
	for (const match of content.matchAll(/illustrator:\s*["']([^"']+)["']/gu)) artistCorpus.add(match[1])
}

function artistCandidates(line) {
	const trimmed = line.trim()
	const words = trimmed.split(/\s+/u)
	return new Set([
		trimmed,
		words.slice(1).join(' '),
		words.slice(2).join(' '),
		trimmed.replace(/^(?:ill?u?s?|ilios|i+|idea|wor|nos|1122?)\.?\s*[:.]?\s*/iu, ''),
	])
}

function matchArtist(lines) {
	const scored = []
	for (const [lineIndex, line] of lines.slice(0, 8).entries()) {
		if (!line || line.length > 80) continue
		for (const candidate of artistCandidates(line)) {
			if (normalized(candidate).length < 4) continue
			for (const artist of artistCorpus) {
				const score = similarity(candidate, artist)
				if (score >= 0.45) scored.push({ artist, raw: candidate, line, lineIndex, score })
			}
		}
	}
	scored.sort((left, right) => right.score - left.score)
	const best = scored[0]
	if (!best) return undefined
	const nextDifferent = scored.find(item => item.artist !== best.artist)
	const margin = best.score - (nextDifferent?.score ?? 0)
	return {
		...best,
		margin,
		accepted: best.score >= 0.88 || (best.score >= 0.72 && margin >= 0.05),
	}
}

const speciesByEnglishName = new Map(parseCsv(fs.readFileSync(speciesFile, 'utf8')).slice(1)
	.filter(([, language]) => language === '9')
	.map(([species, , name]) => [normalized(name), species]))
const flavorsBySpecies = new Map()
for (const [species, , language, text] of parseCsv(fs.readFileSync(flavorFile, 'utf8')).slice(1)) {
	if (language !== '9') continue
	const list = flavorsBySpecies.get(species) ?? []
	const cleaned = text.replace(/\f/gu, '\n').replace(/\s+/gu, ' ').trim()
	if (!list.includes(cleaned)) list.push(cleaned)
	flavorsBySpecies.set(species, list)
}

function baseSpeciesName(name) {
	return name
		.replace(/ ex$/iu, '')
		.replace(/^Mega /iu, '')
		.replace(/^(Paldean|Hisuian|Alolan|Galarian) /iu, '')
		.replace(/^Rapid Strike /iu, '')
		.replace(/^Single Strike /iu, '')
		.replace(/ (Sunny|Rainy|Snowy) Form$/iu, '')
		.replace(/ [XY]$/u, '')
}

function matchFlavor(card, lines, artistMatch) {
	const species = speciesByEnglishName.get(normalized(baseSpeciesName(card.name)))
	const flavors = flavorsBySpecies.get(species) ?? []
	if (!flavors.length) return undefined
	const filtered = lines.filter((line, index) => {
		if (!line.trim()) return false
		if (artistMatch && index === artistMatch.lineIndex) return false
		if (/^[◇♦◆♡☆★*✦✿🌸✈️\s]+$/u.test(line)) return false
		if (/^(?:weakness|ex\s*rule|mega evolution|when your|knocked out|you may play only|you may play any|you use pok[eé]mon tools)/iu.test(line.trim())) return false
		return true
	})
	const variants = []
	for (let drop = 0; drop <= Math.min(3, filtered.length); drop++) variants.push(filtered.slice(drop).join(' '))
	const scored = []
	for (const raw of variants) {
		for (const flavor of flavors) scored.push({ raw, flavor, score: similarity(raw, flavor) })
	}
	scored.sort((left, right) => right.score - left.score)
	const best = scored[0]
	if (!best) return undefined
	return { ...best, accepted: best.score >= 0.78 }
}

function extractPages(file) {
	const envelope = JSON.parse(fs.readFileSync(file, 'utf8'))
	if (!envelope.ok) throw new Error(`${file}: ${envelope.error?.message ?? 'OCR failed'}`)
	const pages = envelope.result?.result?.layoutParsingResults
	if (!Array.isArray(pages)) throw new Error(`${file}: unsupported PaddleOCR result shape`)
	return pages.map(page => (page.prunedResult?.parsing_res_list ?? [])
		.map(block => block.block_content)
		.filter(Boolean)
		.join('\n')
		.split('\n')
		.map(line => line.trim())
		.filter(Boolean))
}

const pageById = new Map()
for (const batch of batches) {
	for (const [offset, lines] of extractPages(batch.file).entries()) {
		const id = `${setId}-${String(batch.start + offset).padStart(3, '0')}`
		pageById.set(id, { lines, file: batch.file, page: offset + 1 })
	}
}
for (const batch of idBatches) {
	const pages = extractPages(batch.file)
	if (pages.length !== batch.ids.length) throw new Error(`${batch.file}: expected ${batch.ids.length} pages, got ${pages.length}`)
	for (const [offset, lines] of pages.entries()) {
		pageById.set(batch.ids[offset], { lines, file: batch.file, page: offset + 1 })
	}
}

const canonical = JSON.parse(fs.readFileSync(canonicalFile, 'utf8')).cards
const cards = {}
const report = { setId, artists: { accepted: [], unresolved: [] }, flavors: { accepted: [], propagated: [], unresolved: [] } }
const acceptedFlavorByName = new Map()

for (const card of canonical) {
	const page = pageById.get(card.id)
	if (!page) throw new Error(`${card.id}: no OCR page`)
	const evidence = `paddleocr:${page.file}#page=${page.page}`
	const artist = matchArtist(page.lines)
	const fields = {}
	if (artist?.accepted) {
		fields.illustrator = {
			value: artist.artist,
			raw: artist.raw,
			evidence: [evidence],
			note: artist.score === 1 ? 'OCR matches the repository artist corpus.' : 'OCR spelling corrected against the repository artist corpus.',
		}
		report.artists.accepted.push({ id: card.id, value: artist.artist, raw: artist.raw, score: artist.score, margin: artist.margin })
	} else {
		report.artists.unresolved.push({ id: card.id, lines: page.lines.slice(0, 5), best: artist })
	}

	if (card.category === 'Pokemon' && !/ ex$/iu.test(card.name)) {
		const flavor = matchFlavor(card, page.lines, artist)
		if (flavor?.accepted) {
			fields.description = {
				value: flavor.flavor,
				raw: flavor.raw,
				evidence: [evidence, 'https://github.com/PokeAPI/pokeapi/tree/dbef1b8570119d49b06943bc8ba6f0288d5872d5/data/v2/csv'],
				note: flavor.score === 1 ? 'OCR exactly matches a pinned PokeAPI Pokédex entry.' : 'OCR corrected to the closest pinned PokeAPI Pokédex entry for this species.',
			}
		acceptedFlavorByName.set(normalized(card.name), fields.description)
			report.flavors.accepted.push({ id: card.id, score: flavor.score })
		} else report.flavors.unresolved.push({ id: card.id, name: card.name, lines: page.lines, best: flavor })
	}
	cards[card.id] = { fields }
}

for (const unresolved of [...report.flavors.unresolved]) {
	const propagated = acceptedFlavorByName.get(normalized(unresolved.name))
	if (!propagated) continue
	cards[unresolved.id].fields.description = {
		...propagated,
		evidence: [...propagated.evidence, `same-card:${unresolved.name}`],
		note: 'Reused the verified flavor text from another printing of the same card in this set.',
	}
	report.flavors.propagated.push({ id: unresolved.id, fromName: unresolved.name })
	report.flavors.unresolved = report.flavors.unresolved.filter(item => item.id !== unresolved.id)
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true })
fs.mkdirSync(path.dirname(reportFile), { recursive: true })
fs.writeFileSync(outputFile, `${JSON.stringify({ schemaVersion: 1, setId, cards }, null, 2)}\n`)
fs.writeFileSync(reportFile, `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify({
	cards: canonical.length,
	ocrPages: pageById.size,
	artistAccepted: report.artists.accepted.length,
	artistUnresolved: report.artists.unresolved.length,
	flavorAccepted: report.flavors.accepted.length,
	flavorPropagated: report.flavors.propagated.length,
	flavorUnresolved: report.flavors.unresolved.length,
}, null, 2))
