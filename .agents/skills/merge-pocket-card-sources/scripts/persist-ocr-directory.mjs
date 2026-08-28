#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

function arg(name, { required = true, resolve = false } = {}) {
	const exact = process.argv.indexOf(`--${name}`)
	const value = exact >= 0 ? process.argv[exact + 1] : undefined
	if (required && !value) throw new Error(`--${name} is required`)
	return value && resolve ? path.resolve(value) : value
}

const input = arg('input', { resolve: true })
const output = arg('output', { resolve: true })
const setId = arg('set-id', { required: false })
const locale = arg('locale', { required: false })
const sourceImages = arg('source-images', { required: false, resolve: true })
const chosenFile = arg('chosen', { required: false, resolve: true })
const enrichment = [setId, locale, sourceImages, chosenFile]
if (enrichment.some(Boolean) && !enrichment.every(Boolean)) {
	throw new Error('--set-id, --locale, --source-images, and --chosen must be supplied together')
}
const chosen = chosenFile ? JSON.parse(fs.readFileSync(chosenFile, 'utf8')) : undefined
const forbiddenKeys = new Set(['jobid', 'ocrimageurl', 'providerurl', 'requesturl', 'sourcepath', 'inputpath', 'outputpath'])

function sanitize(value) {
	if (Array.isArray(value)) return value.map(sanitize)
	if (value && typeof value === 'object') {
		return Object.fromEntries(Object.entries(value)
			.filter(([key]) => !forbiddenKeys.has(key.toLowerCase()) && !/url$/iu.test(key))
			.map(([key, item]) => [key, sanitize(item)]))
	}
	if (typeof value === 'string' && /^https?:\/\//iu.test(value)) return undefined
	return value
}

function sourceImage(number) {
	const padded = String(number).padStart(3, '0')
	const candidates = [padded, String(number)].flatMap(stem => ['png', 'jpg', 'jpeg', 'webp'].map(extension => path.join(sourceImages, `${stem}.${extension}`)))
	const file = candidates.find(candidate => fs.existsSync(candidate))
	if (!file) throw new Error(`${padded}: source image not found in ${sourceImages}`)
	return file
}

const files = fs.readdirSync(input).filter(file => /^\d{3}\.json$/u.test(file)).sort()
if (!files.length) throw new Error(`${input}: no numbered OCR JSON files`)
fs.mkdirSync(output, { recursive: true })
for (const file of files) {
	const parsed = JSON.parse(fs.readFileSync(path.join(input, file), 'utf8'))
	const number = Number.parseInt(file, 10)
	const pages = sanitize(parsed.pages)
	if (!Array.isArray(pages) || !pages.length) throw new Error(`${file}: OCR pages are missing`)
	let persisted = { ...sanitize(parsed), pages }
	if (setId) {
		const cardId = `${setId}-${String(number).padStart(3, '0')}`
		const imageFile = sourceImage(number)
		const imageBytes = fs.readFileSync(imageFile)
		const chosenValue = chosen.cards?.[cardId]?.locales?.[locale]
		if (!chosenValue) throw new Error(`${file}: no chosen ${locale} value for ${cardId}`)
		persisted = {
			schemaVersion: 2,
			cardId,
			locale,
			sourceImageSha256: crypto.createHash('sha256').update(imageBytes).digest('hex'),
			sourceImageBytes: imageBytes.length,
			chosen: chosenValue,
			pages,
		}
	}
	const serialized = `${JSON.stringify(persisted, null, 2)}\n`
	if (/\/tmp\/|\/private\/tmp\/|\/Users\/|https?:\/\/|[?&](?:authorization|signature|token|x-amz-credential|x-amz-signature)=|"jobId"/iu.test(serialized)) {
		throw new Error(`${file}: persisted OCR still contains a transient path, provider URL, job ID, or credential`)
	}
	fs.writeFileSync(path.join(output, file), serialized)
}
console.log(JSON.stringify({ inputFiles: files.length, output, enriched: Boolean(setId) }, null, 2))
