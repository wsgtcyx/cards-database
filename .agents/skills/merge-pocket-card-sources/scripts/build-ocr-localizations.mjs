#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function arg(name, { required = true } = {}) {
	const exact = process.argv.indexOf(`--${name}`)
	const value = exact >= 0 ? process.argv[exact + 1] : process.argv.find(item => item.startsWith(`--${name}=`))?.slice(name.length + 3)
	if (required && !value) throw new Error(`--${name} is required`)
	return value
}

function repeated(name) {
	const values = []
	for (let index = 0; index < process.argv.length; index++) if (process.argv[index] === `--${name}`) values.push(process.argv[index + 1])
	return values
}

const canonical = JSON.parse(fs.readFileSync(path.resolve(arg('canonical')), 'utf8'))
const englishDir = path.resolve(arg('english-ocr'))
const sourceCards = JSON.parse(fs.readFileSync(path.resolve(arg('localized-cards')), 'utf8'))
const baseOverlay = JSON.parse(fs.readFileSync(path.resolve(arg('base-overlay')), 'utf8'))
const output = path.resolve(arg('output'))
const translationMapFile = arg('translation-map', { required: false })
const translationMap = translationMapFile ? JSON.parse(fs.readFileSync(path.resolve(translationMapFile), 'utf8')) : {}
const reviewFile = arg('review', { required: false })
const review = reviewFile ? JSON.parse(fs.readFileSync(path.resolve(reviewFile), 'utf8')) : { cards: {} }
const localeDirs = Object.fromEntries(repeated('locale').map(value => {
	const separator = value.indexOf(':')
	if (separator < 1) throw new Error(`Invalid --locale ${value}; expected LOCALE:/absolute/ocr-dir`)
	return [value.slice(0, separator), path.resolve(value.slice(separator + 1))]
}))
const sourceField = { fr: 'card_name_lang_5', es: 'card_name_lang_7', it: 'card_name_lang_8', de: 'card_name_lang_6', 'pt-br': 'card_name_lang_10' }
const baseLocale = { en: 'en', fr: 'fr', es: 'es', 'pt-br': 'pt', 'zh-tw': 'zh' }

function page(dir, number) {
	const file = path.join(dir, `${String(number).padStart(3, '0')}.json`)
	const artifact = JSON.parse(fs.readFileSync(file, 'utf8'))
	if (artifact.schemaVersion >= 2) {
		const expectedCardId = `${canonical.setId}-${String(number).padStart(3, '0')}`
		if (artifact.cardId !== expectedCardId) throw new Error(`${file}: OCR evidence is bound to ${artifact.cardId}, expected ${expectedCardId}`)
		if (!/^[a-f0-9]{64}$/u.test(artifact.sourceImageSha256 ?? '')) throw new Error(`${file}: source image SHA-256 is missing`)
		if (!artifact.chosen || typeof artifact.chosen !== 'object') throw new Error(`${file}: chosen localized values are missing`)
	}
	const result = artifact.pages?.[0]?.prunedResult
	if (!result?.rec_texts || !result?.rec_boxes) throw new Error(`${file}: unsupported PaddleOCR output`)
	return result.rec_texts.map((text, index) => ({ text: String(text).trim(), box: result.rec_boxes[index], score: result.rec_scores[index] }))
		.filter(line => line.text)
}

function centerY(line) {
	return (line.box[1] + line.box[3]) / 2
}

function clean(value) {
	return String(value ?? '')
		.normalize('NFKC')
		.replaceAll('Pok√©mon', 'Pokémon')
		.replaceAll('PokÃ©mon', 'Pokémon')
		.replaceAll('Pokèmon', 'Pokémon')
		.replaceAll('Pokimon', 'Pokémon')
		.replace(/\s+/gu, ' ')
		.trim()
}

function normalized(value) {
	return clean(value).replace(/[’‘]/gu, "'").replace(/[^À-ɏ\p{L}\p{N}]+/gu, '').toLowerCase()
}

function findEnglishAnchor(lines, value, context) {
	const target = normalized(value)
	const ranked = lines.map(line => {
		const source = normalized(line.text)
		let score = source === target ? 100 : source.includes(target) || target.includes(source) ? Math.min(source.length, target.length) : 0
		return { line, score }
	}).sort((left, right) => right.score - left.score)
	if (!ranked[0]?.score) throw new Error(`${context}: cannot find English OCR anchor ${JSON.stringify(value)}`)
	return ranked[0].line
}

function alignedName(lines, englishAnchor, context) {
	const y = centerY(englishAnchor)
	const candidates = lines
		.filter(line => Math.abs(centerY(line) - y) <= 22 && line.box[0] >= 20 && line.box[0] < 180)
		.filter(line => !/^(?:ability|abilité|habilidad|abilità|fähigkeit|habilidade|特性)$/iu.test(line.text))
		.filter(line => !/^\d+[+x×]?$/u.test(line.text))
		.sort((left, right) => Math.abs(centerY(left) - y) - Math.abs(centerY(right) - y) || left.box[0] - right.box[0])
	const preferred = candidates.filter(line => line.box[0] >= 90)
	const best = candidates[0]
	const chosen = preferred[0] && Math.abs(centerY(preferred[0]) - y) <= Math.abs(centerY(best) - y) + 5 ? preferred[0] : best
	const value = clean(chosen?.text)
		.replace(/^(?:ability|abilité|habilidad|abilità|fähigkeit|habilidade|特性)\s+/iu, '')
		.replace(/^\*+/u, '')
		.replace(/\s+\d+[+x×]?$/u, '')
		.trim()
	if (!value) throw new Error(`${context}: cannot align localized name at y=${y}`)
	return { value, line: chosen }
}

function regionText(lines, { from, to, maxX = 350 }) {
	return clean(lines
		.filter(line => centerY(line) >= from && centerY(line) < to && line.box[0] <= maxX && line.box[2] - line.box[0] >= 18)
		.filter(line => !/^\d+[+x×]?$/u.test(line.text))
		.sort((left, right) => left.box[1] - right.box[1] || left.box[0] - right.box[0])
		.map(line => line.text)
		.join(' '))
}

function insertEnergyMarkers(value, canonicalEnglish, locale) {
	const markers = [...canonicalEnglish.matchAll(/\[([A-Z])\]/gu)].map(match => match[1])
	let output = value
	for (const marker of markers) {
		if (/\*/u.test(output)) {
			output = output.replace(/\*/u, `{${marker}}`)
			continue
		}
		if (locale === 'de') {
			if (/\s- ?Energie/iu.test(output)) output = output.replace(/\s- ?Energie/iu, ` {${marker}}-Energie`)
			else output = output.replace(/\bEnergie\b/iu, `{${marker}}-Energie`)
		} else if (locale === 'it') output = output.replace(/\bEnergia\b/iu, `Energia {${marker}}`)
	}
	return output
}

function description(lines) {
	return clean(lines
		.filter(line => line.box[1] >= 455 && line.box[0] >= 115)
		.filter(line => !/^(?:ex\s*-?reg|regola\s*ex|règle\s*ex|regla\s*ex|when your|knocked out|you may play|du kannst|puoi giocare|vous pouvez|puedes jugar|você pode|你可以)/iu.test(line.text))
		.sort((left, right) => left.box[1] - right.box[1] || left.box[0] - right.box[0])
		.map(line => line.text)
		.join(' '))
}

function cardImageName(lines, trainer, context) {
	const candidates = lines
		.filter(line => trainer
			? line.box[1] >= 34 && line.box[1] < 72 && line.box[0] < 280
			: line.box[1] < 48 && line.box[0] >= 55 && line.box[0] < 255)
		.filter(line => !/^(?:hp\s*\d*|ps\s*\d*|kp\s*\d*|\d+)$/iu.test(line.text))
		.sort((left, right) => (right.box[2] - right.box[0]) - (left.box[2] - left.box[0]))
	const value = clean(candidates[0]?.text)
	if (!value) throw new Error(`${context}: localized card name is empty`)
	return value
}

function localizedMechanics(card, number, locale, targetLines, englishLines) {
	if (card.category === 'Trainer') {
		const effect = regionText(targetLines, { from: 285, to: 430 })
		if (!effect) throw new Error(`${card.id} ${locale}: Trainer effect is empty`)
		return { effect }
	}
	const attacks = []
	const attackAnchors = (card.attacks ?? []).map((attack, index) => {
		const english = findEnglishAnchor(englishLines, attack.name, `${card.id} attack ${index}`)
		return { english, localized: alignedName(targetLines, english, `${card.id} ${locale} attack ${index}`) }
	})
	const abilityAnchors = (card.abilities ?? []).map((ability, index) => {
		const english = findEnglishAnchor(englishLines, ability.name, `${card.id} ability ${index}`)
		return { english, localized: alignedName(targetLines, english, `${card.id} ${locale} ability ${index}`) }
	})
	for (let index = 0; index < (card.attacks ?? []).length; index++) {
		const source = card.attacks[index]
		const anchor = attackAnchors[index].localized
		const nextY = attackAnchors[index + 1] ? centerY(attackAnchors[index + 1].localized.line) - 9 : 430
		const effect = source.effect
			? insertEnergyMarkers(regionText(targetLines, { from: centerY(anchor.line) + 10, to: nextY }), source.effect, locale)
			: undefined
		if (source.effect && !effect) throw new Error(`${card.id} ${locale}: attack ${index} effect is empty`)
		attacks.push({ name: anchor.value, ...(effect ? { effect } : {}) })
	}
	const abilities = []
	for (let index = 0; index < (card.abilities ?? []).length; index++) {
		const source = card.abilities[index]
		const anchor = abilityAnchors[index].localized
		const nextY = attackAnchors[0] ? centerY(attackAnchors[0].localized.line) - 9 : 430
		const effect = insertEnergyMarkers(regionText(targetLines, { from: centerY(anchor.line) + 10, to: nextY }), source.effect, locale)
		if (!effect) throw new Error(`${card.id} ${locale}: ability ${index} effect is empty`)
		abilities.push({ name: anchor.value, effect })
	}
	return { attacks, abilities }
}

const sourceByNumber = new Map(sourceCards.map(card => [Number(card.card_number), card]))
const cards = {}
const reviewedMechanics = { de: new Map(), it: new Map() }
const reviewedDescriptions = Object.fromEntries(Object.keys(localeDirs).map(locale => [locale, new Map()]))
for (let index = 0; index < canonical.cards.length; index++) {
	const number = index + 1
	const card = canonical.cards[index]
	const englishLines = page(englishDir, number)
	const locales = {}
	for (const [locale, sourceLocale] of Object.entries(baseLocale)) {
		locales[locale] = structuredClone(baseOverlay.cards[card.id].locales[sourceLocale])
		const sourceName = locale === 'en'
			? card.name
			: sourceByNumber.get(number)?.[sourceField[locale]]
				?? (localeDirs[locale] ? cardImageName(page(localeDirs[locale], number), card.category === 'Trainer', `${card.id} ${locale}`) : undefined)
		if (sourceName) locales[locale].name = sourceName
	}
	for (const locale of ['de', 'it']) {
		const signature = JSON.stringify({ name: card.name, category: card.category, attacks: card.attacks, abilities: card.abilities, effect: card.effect })
		const reused = reviewedMechanics[locale].get(signature)
		const targetLines = reused ? undefined : page(localeDirs[locale], number)
		locales[locale] = {
			name: sourceByNumber.get(number)?.[sourceField[locale]],
			...structuredClone(reused ?? localizedMechanics(card, number, locale, targetLines, englishLines)),
		}
	}
	if (card.category === 'Pokemon' && !/ ex$/iu.test(card.name)) {
		for (const [locale, dir] of Object.entries(localeDirs)) {
			const signature = `${card.name}\0${card.description}`
			const value = translationMap[card.description]?.[locale]
				?? reviewedDescriptions[locale].get(signature)
				?? description(page(dir, number))
			if (value) locales[locale].description = value
			if (value) reviewedDescriptions[locale].set(signature, value)
		}
	}
	locales.en.description = card.description
	for (const [locale, fields] of Object.entries(review.cards?.[card.id]?.locales ?? {})) {
		if (!locales[locale]) throw new Error(`${card.id}: review targets unsupported locale ${locale}`)
		locales[locale] = { ...locales[locale], ...structuredClone(fields) }
	}
	for (const locale of ['de', 'it']) {
		const signature = JSON.stringify({ name: card.name, category: card.category, attacks: card.attacks, abilities: card.abilities, effect: card.effect })
		reviewedMechanics[locale].set(signature, structuredClone(locales[locale]))
	}
	if (card.category === 'Pokemon' && !/ ex$/iu.test(card.name)) {
		for (const locale of Object.keys(localeDirs)) {
			if (locales[locale].description) reviewedDescriptions[locale].set(`${card.name}\0${card.description}`, locales[locale].description)
		}
	}
	for (const locale of Object.keys(locales)) if (!locales[locale].name) throw new Error(`${card.id} ${locale}: localized name is empty`)
	cards[card.id] = { locales }
}

const localizedNamesByCanonical = new Map()
for (const card of canonical.cards) {
	const key = normalized(card.name)
	const first = localizedNamesByCanonical.get(key)
	if (!first) {
		localizedNamesByCanonical.set(key, { id: card.id, locales: Object.fromEntries(Object.entries(cards[card.id].locales).map(([locale, fields]) => [locale, fields.name])) })
		continue
	}
	for (const [locale, fields] of Object.entries(cards[card.id].locales)) {
		if (normalized(fields.name) !== normalized(first.locales[locale])) {
			throw new Error(`${card.id} ${locale}: localized name ${JSON.stringify(fields.name)} disagrees with ${first.id} ${JSON.stringify(first.locales[locale])} for canonical name ${JSON.stringify(card.name)}`)
		}
	}
}

fs.mkdirSync(path.dirname(output), { recursive: true })
fs.writeFileSync(output, `${JSON.stringify({ schemaVersion: 1, setId: canonical.setId, cards }, null, 2)}\n`)
console.log(JSON.stringify({ setId: canonical.setId, cards: Object.keys(cards).length, locales: Object.keys(cards[canonical.cards[0].id].locales), output }, null, 2))
