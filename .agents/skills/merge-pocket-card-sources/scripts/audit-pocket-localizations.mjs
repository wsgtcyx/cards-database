#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function arg(name, { required = true } = {}) {
	const index = process.argv.indexOf(`--${name}`)
	const value = index >= 0 ? process.argv[index + 1] : undefined
	if (required && !value) throw new Error(`--${name} is required`)
	return value
}

const canonical = JSON.parse(fs.readFileSync(path.resolve(arg('canonical')), 'utf8'))
const localizations = JSON.parse(fs.readFileSync(path.resolve(arg('localizations')), 'utf8'))
const config = JSON.parse(fs.readFileSync(path.resolve(arg('config')), 'utf8'))
const output = path.resolve(arg('output'))
const locales = ['en', 'fr', 'es', 'it', 'de', 'pt-br', 'zh-tw']
const reviewedExceptions = config.reviewedTokenExceptions ?? {}
const findings = []
const tokenChecks = { exact: 0, reviewedExceptions: [], unresolved: [] }

function normalize(value) {
	return String(value ?? '').normalize('NFKC').replace(/[\s'’\-_.:,;!?()[\]{}]/gu, '').toLowerCase()
}

function tokens(value) {
	return [...String(value ?? '').matchAll(/[\[{]([A-Z])[\]}]/gu)].map(match => match[1]).sort()
}

function checkText(cardId, locale, field, value) {
	if (typeof value !== 'string' || !value.trim()) return
	if (/(?:^|\s)(?:TODO|TBD)(?=\s|$)|\[C:[^\]]+\]/u.test(value) || /ILLUSTRATOR[_\s-]*\d+/iu.test(value) || /[\uFFFDÃÂ√]/u.test(value)) findings.push({ cardId, locale, field, kind: 'placeholder-or-mojibake', value })
	if (/\p{Script=Latin}\d/u.test(value.replace(/Pokémon/gu, ''))) findings.push({ cardId, locale, field, kind: 'letter-number-join', value })
	const pairs = [['[', ']'], ['(', ')'], ['{', '}']]
	for (const [open, close] of pairs) if ((value.split(open).length - 1) !== (value.split(close).length - 1)) findings.push({ cardId, locale, field, kind: 'unbalanced-delimiter', value })
}

function compareRules(card, locale, localized) {
	const pairs = []
	if (card.effect !== undefined) pairs.push(['effect', card.effect, localized.effect])
	for (const [index, attack] of (card.attacks ?? []).entries()) {
		if (attack.effect !== undefined) pairs.push([`attacks.${index}.effect`, attack.effect, localized.attacks?.[index]?.effect])
	}
	for (const [index, ability] of (card.abilities ?? []).entries()) pairs.push([`abilities.${index}.effect`, ability.effect, localized.abilities?.[index]?.effect])
	for (const [field, english, translated] of pairs) {
		if (locale !== 'en' && normalize(english).length > 12 && normalize(english) === normalize(translated)) findings.push({ cardId: card.id, locale, field, kind: 'english-fallback', value: translated })
		const expected = tokens(english)
		const actual = tokens(translated)
		if (JSON.stringify(expected) === JSON.stringify(actual)) tokenChecks.exact++
		else {
			const key = `${card.id}.${field}.${locale}`
			const reason = reviewedExceptions[key]
			const entry = { key, expected, actual, ...(reason ? { reason } : {}) }
			if (reason) tokenChecks.reviewedExceptions.push(entry)
			else {
				tokenChecks.unresolved.push(entry)
				findings.push({ cardId: card.id, locale, field, kind: 'token-multiset-mismatch', expected, actual })
			}
		}
	}
}

const sameName = new Map()
for (const card of canonical.cards) {
	const entry = localizations.cards?.[card.id]
	if (!entry) {
		findings.push({ cardId: card.id, kind: 'missing-card' })
		continue
	}
	for (const locale of locales) {
		const localized = entry.locales?.[locale]
		if (!localized?.name) {
			findings.push({ cardId: card.id, locale, kind: 'missing-locale-or-name' })
			continue
		}
		if (locale === 'zh-tw') {
			const stripped = localized.name.replace(/ex/giu, '').replace(/[QXY]/gu, '')
			if (/[A-Za-z]{2,}/u.test(stripped)) findings.push({ cardId: card.id, locale, field: 'name', kind: 'latin-fallback-in-cjk-name', value: localized.name })
		}
		for (const [field, value] of Object.entries(localized)) {
			if (typeof value === 'string') checkText(card.id, locale, field, value)
			if (Array.isArray(value)) value.forEach((item, index) => Object.entries(item).forEach(([nested, text]) => checkText(card.id, locale, `${field}.${index}.${nested}`, text)))
		}
		compareRules(card, locale, localized)
	}
	if (/ILLUSTRATOR[_\s-]*\d+/iu.test(card.illustrator ?? '') || /[\uFFFDÃÂ√]/u.test(card.illustrator ?? '')) findings.push({ cardId: card.id, field: 'illustrator', kind: 'placeholder-or-mojibake', value: card.illustrator })
	const key = normalize(card.name)
	const previous = sameName.get(key)
	if (!previous) sameName.set(key, { id: card.id, names: Object.fromEntries(locales.map(locale => [locale, entry.locales?.[locale]?.name])) })
	else for (const locale of locales) if (normalize(previous.names[locale]) !== normalize(entry.locales?.[locale]?.name)) findings.push({ cardId: card.id, locale, field: 'name', kind: 'same-canonical-name-disagrees', previousCardId: previous.id, previous: previous.names[locale], value: entry.locales?.[locale]?.name })
}

for (const key of Object.keys(reviewedExceptions)) {
	if (!tokenChecks.reviewedExceptions.some(entry => entry.key === key)) findings.push({ kind: 'unused-token-exception', key })
}

const audit = {
	schemaVersion: 1,
	setId: canonical.setId,
	counts: { cards: canonical.cards.length, locales: locales.length, findings: findings.length },
	tokenChecks: { exact: tokenChecks.exact, reviewedExceptions: tokenChecks.reviewedExceptions, unresolved: tokenChecks.unresolved.length },
	findings,
	passed: findings.length === 0,
}
fs.mkdirSync(path.dirname(output), { recursive: true })
fs.writeFileSync(output, `${JSON.stringify(audit, null, 2)}\n`)
console.log(JSON.stringify({ output, ...audit.counts, tokenChecks: audit.tokenChecks, passed: audit.passed }, null, 2))
if (!audit.passed) process.exitCode = 1
