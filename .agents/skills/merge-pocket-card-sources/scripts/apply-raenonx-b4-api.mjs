#!/usr/bin/env node

/**
 * Apply the reviewed RaenonX B4 localization overlay to the API's existing
 * 233 card modules. The overlay owns only en/fr/es/pt/zh localized names and
 * rules; de/it, flavor text, and the existing English image URL are retained.
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import jscodeshift from 'jscodeshift'
import { normalizeRaenonxName } from './normalize-raenonx-name.mjs'

const j = jscodeshift.withParser('ts')

function arg(name, fallback) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function repoRelative(repoRoot, file) {
	const relative = path.relative(repoRoot, file)
	if (!relative || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
		throw new Error(`Target file must stay inside repository root: ${file}`)
	}
	return relative.split(path.sep).join('/')
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

function propertyName(property) {
	if (!property?.key) return undefined
	return property.key.name ?? property.key.value
}

function findProperty(object, name) {
	return object?.properties?.find(property => propertyName(property) === name)
}

function literalKey(name) {
	return /^[A-Za-z_$][\w$]*$/u.test(name) ? j.identifier(name) : j.literal(name)
}

function setProperty(object, name, value) {
	let property = findProperty(object, name)
	if (!property) {
		property = j.property('init', literalKey(name), j.literal(value))
		object.properties.push(property)
	} else {
		property.value = j.literal(value)
	}
}

function objectValue(property) {
	return property?.value?.type === 'ObjectExpression' ? property.value : undefined
}

function arrayValue(property) {
	return property?.value?.type === 'ArrayExpression' ? property.value : undefined
}

function setLocalized(object, locale, value) {
	if (value === undefined || value === null) return
	setProperty(object, locale, value)
}

function cardObject(source) {
	const root = j(source)
	const matches = root.find(j.VariableDeclarator, { id: { name: 'card' } })
	const object = matches.find(j.ObjectExpression).nodes()[0]
	if (!object) throw new Error('Could not find const card object')
	return { root, object }
}

function apiLocale(locale) {
	return { en: 'en', fr: 'fr', es: 'es', pt: 'pt-br', zh: 'zh-tw' }[locale]
}

function applyCard(source, overlayCard, number, origin) {
	const parsed = cardObject(source)
	const { root, object } = parsed
	const image = objectValue(findProperty(object, 'image'))
	const name = objectValue(findProperty(object, 'name'))
	if (!image || !name) throw new Error(`B4-${String(number).padStart(3, '0')}: missing image/name object`)
	const numberText = String(number).padStart(3, '0')
	for (const locale of ['fr', 'es', 'pt', 'zh']) {
		setLocalized(image, apiLocale(locale), `${origin}/${locale === 'pt' ? 'pt' : locale === 'zh' ? 'zh-tw' : locale}/tcgp/B4/${numberText}`)
	}
	for (const [locale, card] of Object.entries(overlayCard.locales)) {
		setLocalized(name, apiLocale(locale), card.name)
	}

	const attacks = arrayValue(findProperty(object, 'attacks'))
	for (const [locale, card] of Object.entries(overlayCard.locales)) {
		const language = apiLocale(locale)
		for (let index = 0; index < (card.attacks ?? []).length; index++) {
			const sourceAttack = attacks?.elements?.[index]
			if (!sourceAttack || sourceAttack.type !== 'ObjectExpression') {
				throw new Error(`B4-${numberText}: missing API attack ${index + 1}`)
			}
			const attack = card.attacks[index]
			const attackName = objectValue(findProperty(sourceAttack, 'name'))
			if (!attackName) throw new Error(`B4-${numberText}: attack ${index + 1} has no name object`)
			setLocalized(attackName, language, attack.name)
			if (attack.effect !== undefined) {
				let effect = objectValue(findProperty(sourceAttack, 'effect'))
				if (!effect) {
					const property = j.property('init', j.identifier('effect'), j.objectExpression([]))
					sourceAttack.properties.push(property)
					effect = property.value
				}
				setLocalized(effect, language, attack.effect)
			}
		}
	}

	const abilities = arrayValue(findProperty(object, 'abilities'))
	for (const [locale, card] of Object.entries(overlayCard.locales)) {
		const language = apiLocale(locale)
		for (let index = 0; index < (card.abilities ?? []).length; index++) {
			const sourceAbility = abilities?.elements?.[index]
			if (!sourceAbility || sourceAbility.type !== 'ObjectExpression') {
				throw new Error(`B4-${numberText}: missing API ability ${index + 1}`)
			}
			const ability = card.abilities[index]
			const abilityName = objectValue(findProperty(sourceAbility, 'name'))
			if (!abilityName) throw new Error(`B4-${numberText}: ability ${index + 1} has no name object`)
			setLocalized(abilityName, language, ability.name)
			if (ability.effect !== undefined) {
				let effect = objectValue(findProperty(sourceAbility, 'effect'))
				if (!effect) {
					const property = j.property('init', j.identifier('effect'), j.objectExpression([]))
					sourceAbility.properties.push(property)
					effect = property.value
				}
				setLocalized(effect, language, ability.effect)
			}
		}
	}

	const trainerEffect = overlayCard.locales.en.effect !== undefined
		|| Object.values(overlayCard.locales).some(card => card.effect !== undefined)
	if (trainerEffect) {
		let effect = objectValue(findProperty(object, 'effect'))
		if (!effect) {
			const property = j.property('init', j.identifier('effect'), j.objectExpression([]))
			object.properties.push(property)
			effect = property.value
		}
		for (const [locale, card] of Object.entries(overlayCard.locales)) {
			if (card.effect !== undefined) setLocalized(effect, apiLocale(locale), card.effect)
		}
	}
	return root.toSource({ quote: 'double' })
}

const overlayPath = arg('overlay', 'meta/pocket-source-reviews/B4/raenonx.overlay.json')
const root = path.resolve(arg('source-root', 'data/Pokémon TCG Pocket/Ruler of the Skies'))
const repoRoot = path.resolve(arg('repo-root', '.'))
const origin = arg('origin', 'https://game.pokemontcgpocket.app').replace(/\/+$/u, '')
const write = process.argv.includes('--write')
const baseRef = arg('base-ref')
const overlay = loadJson(overlayPath)
const entries = Object.entries(overlay.cards).sort(([, left], [, right]) => left.number - right.number)
if (entries.length !== 233) throw new Error(`Expected 233 overlay cards, got ${entries.length}`)

for (let index = 0; index < entries.length; index++) {
	const [id, overlayCard] = entries[index]
	const expectedId = `B4-${String(index + 1).padStart(3, '0')}`
	if (id !== expectedId || overlayCard.number !== index + 1) {
		throw new Error(`Overlay must be ordered and keyed by ${expectedId}; got ${id} / ${overlayCard.number}`)
	}
	for (const [locale, localized] of Object.entries(overlayCard.locales ?? {})) {
		const normalized = normalizeRaenonxName(locale, localized.name)
		if (normalized !== localized.name) throw new Error(`${id}.${locale}: localized name has an unreviewed missing form separator`)
	}
}

const writes = []
for (const [id, overlayCard] of entries) {
	const number = overlayCard.number
	const filename = path.join(root, `${String(number).padStart(3, '0')}.ts`)
	if (!fs.existsSync(filename)) throw new Error(`${id}: missing API card module ${filename}`)
	const source = fs.readFileSync(filename, 'utf8')
	const next = applyCard(source, overlayCard, number, origin)
	writes.push({ filename, source, next })
}

const changed = writes.filter(item => item.source !== item.next)
if (write) {
	if (!baseRef) throw new Error('--write requires --base-ref <reviewed-commit>')
	for (const item of changed) {
		const relative = repoRelative(repoRoot, item.filename)
		const base = execFileSync('git', ['-C', repoRoot, 'show', `${baseRef}:${relative}`], { encoding: 'utf8' })
		if (item.source !== base) throw new Error(`${relative}: worktree differs from ${baseRef}; refusing to overwrite user changes`)
	}
	for (const item of changed) writeAtomic(item.filename, item.next)
}
console.log(JSON.stringify({
	setId: 'B4',
	cards: writes.length,
	changed: changed.length,
	localizationLocales: ['en', 'fr', 'es', 'pt-br', 'zh-tw'],
	imageLocalesAdded: ['fr', 'es', 'pt-br', 'zh-tw'],
	mode: write ? 'write' : 'dry-run',
}, null, 2))
