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

const summary = {}
for (const [locale, config] of Object.entries(LOCALES)) {
	const sourceFile = path.join(path.resolve(sourceRoot), 'metadata/cards', config.source, 'cards.extra.json')
	const sourceCards = loadJson(sourceFile)
		.filter(card => card.set === setId)
		.sort((left, right) => left.number - right.number)
	if (sourceCards.length !== expectedCount) {
		throw new Error(`${locale}: expected ${expectedCount} source cards, got ${sourceCards.length}`)
	}
	for (let index = 0; index < sourceCards.length; index++) {
		if (sourceCards[index].number !== index + 1 || !sourceCards[index].name) {
			throw new Error(`${locale}: invalid source card at position ${index + 1}`)
		}
	}

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
	if (write) fs.writeFileSync(targetFile, nextText)
	summary[locale] = { existing: existing.length, added: sourceCards.length, total: Object.keys(next).length }
}

console.log(JSON.stringify({ mode: write ? 'write' : 'dry-run', setId, expectedCount, locales: summary }, null, 2))
