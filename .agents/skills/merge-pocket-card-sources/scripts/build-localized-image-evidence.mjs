#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

function arg(name) {
	const index = process.argv.indexOf(`--${name}`)
	const value = index >= 0 ? process.argv[index + 1] : undefined
	if (!value) throw new Error(`--${name} is required`)
	return value
}

const setId = arg('set-id')
const total = Number(arg('total'))
const sourceRoot = path.resolve(arg('source-root'))
const ocrRoot = path.resolve(arg('ocr-root'))
const manifest = JSON.parse(fs.readFileSync(path.resolve(arg('r2-manifest')), 'utf8'))
const output = path.resolve(arg('output'))
const logoRoot = path.resolve(arg('logo-root'))
const artwork = path.resolve(arg('artwork'))
const sourceSetId = Number(arg('source-set-id'))
const localeConfig = {
	en: { dir: 'images-en', source: 'en' }, fr: { dir: 'images-fr', source: 'fr' }, es: { dir: 'images-es', source: 'es' },
	it: { dir: 'images-it', source: 'it' }, de: { dir: 'images-de', source: 'de' }, 'pt-br': { dir: 'images-ptbr', source: 'ptbr' }, 'zh-tw': { dir: 'images-zh', source: 'zh' },
}
const objects = new Map(manifest.objects.map(object => [object.key, object]))

function digest(file) {
	const bytes = fs.readFileSync(file)
	return { bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex') }
}

function numberedFile(directory, number) {
	const padded = String(number).padStart(3, '0')
	const candidates = [padded, String(number)].flatMap(stem => ['png', 'jpg', 'jpeg', 'webp'].map(extension => path.join(directory, `${stem}.${extension}`)))
	const file = candidates.find(candidate => fs.existsSync(candidate))
	if (!file) throw new Error(`${directory}: source image ${padded} not found`)
	return file
}

const cards = []
let mappedOutputs = 0
let ocrArtifacts = 0
for (let number = 1; number <= total; number++) {
	const localId = String(number).padStart(3, '0')
	for (const [locale, config] of Object.entries(localeConfig)) {
		const sourceFile = numberedFile(path.join(sourceRoot, config.dir), number)
		const source = digest(sourceFile)
		const outputs = ['high', 'low'].map(variant => {
			const key = `${locale}/tcgp/${setId}/${localId}/${variant}.webp`
			const object = objects.get(key)
			if (!object) throw new Error(`${key}: R2 manifest object missing`)
			mappedOutputs++
			return { key, bytes: object.bytes, sha256: object.sha256 }
		})
		let ocr
		if (['en', 'de', 'it'].includes(locale)) {
			const ocrFile = path.join(ocrRoot, locale, `${localId}.json`)
			const artifact = JSON.parse(fs.readFileSync(ocrFile, 'utf8'))
			if (artifact.sourceImageSha256 !== source.sha256 || artifact.cardId !== `${setId}-${localId}` || artifact.locale !== locale) throw new Error(`${ocrFile}: OCR evidence is not bound to its source image/card/locale`)
			ocr = { artifact: `ocr/${locale}/${localId}.json`, ...digest(ocrFile) }
			ocrArtifacts++
		}
		cards.push({
			cardId: `${setId}-${localId}`,
			locale,
			source: {
				url: `https://s3.pokeos.com/pokeos-uploads/tcg/pocket/${sourceSetId}/src/${number}_${config.source}.png`,
				...source,
			},
			outputs,
			...(ocr ? { ocr } : {}),
		})
	}
}

const artworkSource = digest(artwork)
const boosters = []
for (const [locale, config] of Object.entries(localeConfig)) {
	const logoFile = path.join(logoRoot, `${config.source}.webp`)
	if (!fs.existsSync(logoFile)) throw new Error(`${logoFile}: localized logo missing`)
	for (const [kind, source] of [['logo', { evidenceUrl: `https://www.pokeos.com/api/tcg/setInfo?id=${sourceSetId}`, ...digest(logoFile) }], ['artwork_front', { evidenceUrl: `https://github.com/flibustier/pokemon-tcg-pocket-database/blob/53a42a8050296505fcbf3db5032aee736cd9fd36/dist/images/packs/Team%20Rocket.webp`, languageNeutral: true, ...artworkSource }]]) {
		const key = `${locale}/tcgp/${setId}/boosters/team-rockets-ambition/${kind}.webp`
		const object = objects.get(key)
		if (!object) throw new Error(`${key}: booster R2 manifest object missing`)
		boosters.push({ locale, kind, source, output: { key, bytes: object.bytes, sha256: object.sha256 } })
	}
}

if (cards.length !== total * 7 || mappedOutputs !== total * 14 || ocrArtifacts !== total * 3 || boosters.length !== 14) throw new Error('Evidence count contract failed')
const evidence = {
	schemaVersion: 1,
	setId,
	sources: {
		pokeos: { setId: sourceSetId, attribution: 'https://www.pokeos.com/', license: 'No formal redistribution license located; mirrored under the user-authorized attributed scope.' },
		flibustier: { release: '2.10.0', commit: '53a42a8050296505fcbf3db5032aee736cd9fd36', license: 'MIT' },
	},
	counts: { sourceCardImages: cards.length, mappedCardObjects: mappedOutputs, ocrArtifacts, boosterObjects: boosters.length },
	cards,
	boosters,
}
fs.mkdirSync(path.dirname(output), { recursive: true })
fs.writeFileSync(output, `${JSON.stringify(evidence, null, 2)}\n`)
console.log(JSON.stringify({ output, ...evidence.counts }, null, 2))
