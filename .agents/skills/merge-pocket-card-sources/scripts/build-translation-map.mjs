#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function arg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	const value = exact >= 0 ? process.argv[exact + 1] : undefined
	if (!value) throw new Error(`--${name} is required`)
	return path.resolve(value)
}

const canonical = JSON.parse(fs.readFileSync(arg('canonical'), 'utf8'))
const localizations = JSON.parse(fs.readFileSync(arg('localizations'), 'utf8'))
const output = arg('output')
const configIndex = process.argv.indexOf('--config')
const config = configIndex >= 0 ? JSON.parse(fs.readFileSync(process.argv[configIndex + 1], 'utf8')) : undefined
if (!Array.isArray(canonical.cards) || canonical.cards.length === 0) throw new Error('Canonical cards must not be empty')
const targetLocales = (config?.ruleLocales ?? [...new Set(canonical.cards.flatMap(card => Object.keys(localizations.cards?.[card.id]?.locales ?? {})))]).filter(locale => locale !== 'en')
if (!targetLocales.length || new Set(targetLocales).size !== targetLocales.length || targetLocales.some(locale => !['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw', 'ja', 'ko'].includes(locale))) throw new Error('Expected explicit supported ruleLocales or non-empty localized cards')
const mapping = {}

function add(english, values, context) {
	if (!english) return
	const localized = { en: english }
	for (const locale of targetLocales) {
		const value = values[locale]
		if (!value) throw new Error(`${context}: missing ${locale}`)
		localized[locale] = value
	}
	const existing = mapping[english]
	if (existing && JSON.stringify(existing) !== JSON.stringify(localized)) {
		throw new Error(`${context}: conflicting localization for ${JSON.stringify(english)}`)
	}
	mapping[english] = localized
}

for (const card of canonical.cards) {
	const locales = localizations.cards?.[card.id]?.locales
	if (!locales) throw new Error(`${card.id}: localization record is missing`)
	if (card.description) add(card.description, Object.fromEntries(targetLocales.map(locale => [locale, locales[locale]?.description])), `${card.id}.description`)
	for (const [index, attack] of (card.attacks ?? []).entries()) {
		add(attack.name, Object.fromEntries(targetLocales.map(locale => [locale, locales[locale]?.attacks?.[index]?.name])), `${card.id}.attacks[${index}].name`)
		if (attack.effect) add(attack.effect, Object.fromEntries(targetLocales.map(locale => [locale, locales[locale]?.attacks?.[index]?.effect])), `${card.id}.attacks[${index}].effect`)
	}
	for (const [index, ability] of (card.abilities ?? []).entries()) {
		add(ability.name, Object.fromEntries(targetLocales.map(locale => [locale, locales[locale]?.abilities?.[index]?.name])), `${card.id}.abilities[${index}].name`)
		add(ability.effect, Object.fromEntries(targetLocales.map(locale => [locale, locales[locale]?.abilities?.[index]?.effect])), `${card.id}.abilities[${index}].effect`)
	}
	if (card.effect) add(card.effect, Object.fromEntries(targetLocales.map(locale => [locale, locales[locale]?.effect])), `${card.id}.effect`)
}

const ordered = Object.fromEntries(Object.entries(mapping).sort(([left], [right]) => left.localeCompare(right)))
fs.mkdirSync(path.dirname(output), { recursive: true })
fs.writeFileSync(output, `${JSON.stringify(ordered, null, 2)}\n`)
console.log(JSON.stringify({ setId: canonical.setId, strings: Object.keys(ordered).length, locales: ['en', ...targetLocales], output }, null, 2))
