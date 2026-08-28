#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function arg(name, { required = true } = {}) {
	const exact = process.argv.indexOf(`--${name}`)
	const value = exact >= 0 ? process.argv[exact + 1] : process.argv.find(item => item.startsWith(`--${name}=`))?.slice(name.length + 3)
	if (required && !value) throw new Error(`--${name} is required`)
	return value ? path.resolve(value) : undefined
}

const canonical = JSON.parse(fs.readFileSync(arg('canonical'), 'utf8'))
const localizations = JSON.parse(fs.readFileSync(arg('localizations'), 'utf8'))
const dexMap = JSON.parse(fs.readFileSync(arg('dex-map'), 'utf8'))
const englishDir = arg('english-pages')
const targetDir = arg('target-pages')
const output = arg('output')
const reportPath = arg('report')
const reviewPath = arg('review', { required: false })
const review = reviewPath ? JSON.parse(fs.readFileSync(reviewPath, 'utf8')) : { cards: {} }

function normalize(value) {
	return String(value ?? '')
		.normalize('NFKC')
		.replace(/[’‘]/gu, "'")
		.replace(/[“”]/gu, '"')
		.replace(/[^\p{L}\p{N}]+/gu, '')
		.toLowerCase()
}

function levenshtein(left, right) {
	const previous = Array.from({ length: right.length + 1 }, (_, index) => index)
	for (let row = 1; row <= left.length; row++) {
		let diagonal = previous[0]
		previous[0] = row
		for (let column = 1; column <= right.length; column++) {
			const old = previous[column]
			previous[column] = Math.min(previous[column] + 1, previous[column - 1] + 1, diagonal + (left[row - 1] === right[column - 1] ? 0 : 1))
			diagonal = old
		}
	}
	return previous[right.length]
}

function similarity(left, right) {
	const a = normalize(left), b = normalize(right)
	return 1 - levenshtein(a, b) / Math.max(1, a.length, b.length)
}

function extract(file) {
	const html = fs.readFileSync(file, 'utf8')
	const result = {}
	for (const match of html.matchAll(/\\"text([12])\\":\\"((?:\\\\.|[^"\\])*)\\"/gu)) result[match[1]] = JSON.parse(`"${match[2]}"`)
	if (!result['1'] || !result['2']) throw new Error(`${file}: official Pokédex text1/text2 are missing`)
	return result
}

const report = { schemaVersion: 1, setId: canonical.setId, cards: [], unresolved: [] }
for (const card of canonical.cards) {
	if (!card.description) continue
	const dex = dexMap[card.id]
	if (!dex) throw new Error(`${card.id}: dex id is missing`)
	const fileName = `${String(dex).padStart(4, '0')}.html`
	const english = extract(path.join(englishDir, fileName))
	const target = extract(path.join(targetDir, fileName))
	const ranked = ['1', '2'].map(index => ({ index, score: similarity(card.description, english[index]) })).sort((left, right) => right.score - left.score)
	if (ranked[0].score < 0.82 || ranked[0].score - ranked[1].score < 0.08) {
		const reviewed = review.cards?.[card.id]
		if (reviewed?.value && Array.isArray(reviewed.evidence) && reviewed.evidence.length) {
			localizations.cards[card.id].locales['zh-tw'].description = reviewed.value
			report.cards.push({ id: card.id, dex, version: 'reviewed-card-image', score: null, 'zh-tw': reviewed.value, sources: reviewed.evidence })
			continue
		}
		report.unresolved.push({ id: card.id, dex, canonical: card.description, candidates: ranked.map(item => ({ ...item, value: english[item.index] })) })
		continue
	}
	localizations.cards[card.id].locales['zh-tw'].description = target[ranked[0].index]
	report.cards.push({
		id: card.id,
		dex,
		version: Number(ranked[0].index),
		score: ranked[0].score,
		english: english[ranked[0].index],
		'zh-tw': target[ranked[0].index],
		sources: {
			en: `https://sg.portal-pokemon.com/play/pokedex/${fileName}`,
			'zh-tw': `https://tw.portal-pokemon.com/play/pokedex/${fileName}`,
		},
	})
}
fs.mkdirSync(path.dirname(output), { recursive: true })
fs.mkdirSync(path.dirname(reportPath), { recursive: true })
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)
if (report.unresolved.length) throw new Error(`Official Pokédex flavor binding has ${report.unresolved.length} unresolved cards: ${report.unresolved.map(card => card.id).join(', ')}`)
fs.writeFileSync(output, `${JSON.stringify(localizations, null, 2)}\n`)
console.log(JSON.stringify({ setId: canonical.setId, bound: report.cards.length, unresolved: report.unresolved.length, output, report: reportPath }, null, 2))
