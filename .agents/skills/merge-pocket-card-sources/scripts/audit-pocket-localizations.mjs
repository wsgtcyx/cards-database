#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { isDeepStrictEqual } from 'node:util'

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
const reviewedCardsFile = arg('reviewed-cards', { required: false })
const reviewedCards = reviewedCardsFile ? JSON.parse(fs.readFileSync(path.resolve(reviewedCardsFile), 'utf8')) : undefined
const locales = config.ruleLocales ?? ['en', 'fr', 'es', 'it', 'de', 'pt-br', 'zh-tw']
const reviewedExceptions = config.reviewedTokenExceptions ?? {}
if (!Array.isArray(canonical.cards) || canonical.cards.length === 0) throw new Error('Canonical cards must not be empty')
if (!locales.length || new Set(locales).size !== locales.length) throw new Error('ruleLocales must be non-empty and unique')
const findings = []
const tokenChecks = { exact: 0, reviewedExceptions: [], unresolved: [] }

function normalize(value) {
	return String(value ?? '').normalize('NFKC').replace(/[\s'’\-_.:,;!?()[\]{}]/gu, '').toLowerCase()
}

function tokens(value) {
	return [...String(value ?? '').matchAll(/[\[{]([A-Z])[\]}]/gu)].map(match => match[1]).sort()
}

function checkText(cardId, locale, field, value) {
	if (typeof value !== 'string' || !value.trim()) {
 findings.push({ cardId, locale, field, kind: 'missing-text' })
 return
 }
 if (locale === 'ko') for (const match of value.matchAll(/「([^「」]+)」(으로|로|을|를|은|는|과|와|이|가)/gu)) {
  const spoken = match[1].trim().replace(/ex$/iu, '스').replace(/[♂♀]$/u, '').replace(/[\]）)]+$/u, '')
  const last = spoken.at(-1)
  if (!last || !/[가-힣]/u.test(last)) continue
  const final = (last.charCodeAt(0) - 0xAC00) % 28
  const pair = [['으로','로'],['을','를'],['은','는'],['과','와'],['이','가']].find(pair => pair.includes(match[2]))
  const expected = pair[final !== 0 && (pair[0] !== '으로' || final !== 8) ? 0 : 1]
  if (expected !== match[2]) findings.push({ cardId, locale, field, kind: 'korean-particle-mismatch', value, expected, actual: match[2] })
 }
	if (locale === 'ko' && (/\[\/?[A-Za-z][A-Za-z0-9]*:/u.test(value) || !/[가-힣]/u.test(value) && !['GUARD', 'POWER'].includes(value))) findings.push({ cardId, locale, field, kind: 'invalid-korean-text', value })
	if (/(?:^|\s)(?:TODO|TBD)(?=\s|$)|\[C:[^\]]+\]/u.test(value) || /ILLUSTRATOR[_\s-]*\d+/iu.test(value) || /[\uFFFDÃÂ√]/u.test(value)) findings.push({ cardId, locale, field, kind: 'placeholder-or-mojibake', value })
	const prose = ['name', 'evolveFrom'].includes(field) ? value.replace(/\bPorygon2\b/gu, '') : value
	if (/\p{Script=Latin}\d/u.test(prose.replace(/Pokémon/gu, '').replace(/\bx\d+\b/gu, ''))) findings.push({ cardId, locale, field, kind: 'letter-number-join', value })
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
if (localizations.setId !== undefined && localizations.setId !== canonical.setId || config.setId !== undefined && config.setId !== canonical.setId) findings.push({ kind: 'set-id-mismatch' })
if (Object.keys(localizations.cards ?? {}).length !== canonical.cards.length) findings.push({ kind: 'localized-card-count-mismatch' })
if (new Set(canonical.cards.map(card => card.id)).size !== canonical.cards.length) findings.push({ kind: 'duplicate-canonical-card' })
if (reviewedCards && Object.keys(reviewedCards).length !== canonical.cards.length) findings.push({ kind: 'reviewed-card-count-mismatch' })
for (const card of canonical.cards) {
	const entry = localizations.cards?.[card.id]
	if (!entry) {
		findings.push({ cardId: card.id, kind: 'missing-card' })
		continue
	}
	if (reviewedCards) {
		const raw = reviewedCards[card.id]
		const english = raw && structuredClone(raw)
		if (english) {
			english.id = card.id
			for (const field of ['name', 'effect', 'description', 'evolveFrom']) if (english[field]) english[field] = english[field].en
			for (const group of ['attacks', 'abilities']) for (const item of english[group] ?? []) for (const field of ['name', 'effect']) if (item[field]) item[field] = item[field].en
		}
		if (!isDeepStrictEqual(english, card)) findings.push({ cardId: card.id, kind: 'reviewed-canonical-mismatch' })
		for (const locale of locales) {
			const translated = {}
			for (const field of ['name', 'effect', 'description', 'evolveFrom']) if (raw?.[field]) translated[field] = raw[field][locale]
			for (const group of ['attacks', 'abilities']) if (raw?.[group]) translated[group] = raw[group].map(item => Object.fromEntries(['name', 'effect'].filter(field => item[field]).map(field => [field, item[field][locale]])))
			if (!isDeepStrictEqual(translated, entry.locales?.[locale])) findings.push({ cardId: card.id, locale, kind: 'reviewed-localization-mismatch' })
		}
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
   if (Array.isArray(value)) value.forEach((item, index) => {
    if (!item || typeof item !== 'object') { findings.push({ cardId: card.id, locale, field, kind: 'invalid-localized-item' }); return }
    Object.entries(item).forEach(([nested, text]) => checkText(card.id, locale, `${field}.${index}.${nested}`, text))
   })
  }
		for (const field of ['name', 'description', 'evolveFrom', 'effect']) if (field === 'name' || card[field] !== undefined) checkText(card.id, locale, field, localized[field])
  for (const group of ['attacks', 'abilities']) {
   const expected = card[group] ?? [], actual = localized[group] ?? []
   if (!Array.isArray(actual) || actual.length !== expected.length) findings.push({ cardId: card.id, locale, field: group, kind: 'localized-array-shape-mismatch' })
   for (const [index, item] of expected.entries()) for (const field of ['name', 'effect']) if (field === 'name' || item[field] !== undefined) checkText(card.id, locale, `${group}.${index}.${field}`, actual?.[index]?.[field])
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
	...(reviewedCards ? { reviewedCardsSha256: createHash('sha256').update(JSON.stringify(reviewedCards)).digest('hex') } : {}),
}
fs.mkdirSync(path.dirname(output), { recursive: true })
fs.writeFileSync(output, `${JSON.stringify(audit, null, 2)}\n`)
console.log(JSON.stringify({ output, ...audit.counts, tokenChecks: audit.tokenChecks, passed: audit.passed }, null, 2))
if (!audit.passed) process.exitCode = 1
