#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const BASE_URL = 'https://ptcgp.raenonx.cc'
const MASTER_URL = `${BASE_URL}/api/data/global-master`
const SET_ID = 'B4'
const EXPECTED_COUNT = 233
const SAMPLE_NUMBERS = [1, 82, 145, 233]
const LOCALES = {
  en: 'en',
  fr: 'fr',
  es: 'es',
  it: 'it',
  de: 'de',
  'pt-br': 'pt',
  'zh-tw': 'zh',
}

function args(argv) {
  const result = {
    output: 'meta/pocket-source-reviews/B4.raenonx-qualification.json',
    timeoutMs: 30_000,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--output') result.output = argv[++index]
    else if (value === '--timeout-ms') result.timeoutMs = Number(argv[++index])
    else throw new Error(`Unknown argument: ${value}`)
  }
  return result
}

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex')
}

function compact(value, limit = 350) {
  if (typeof value !== 'string') return value
  return value.length <= limit ? value : `${value.slice(0, limit)}…`
}

async function get(url, options, accept = '*/*', headers = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), options.timeoutMs)
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: {
        accept,
        'user-agent': 'wsgtcyx/cards-database-b4-qualification/1.0',
        ...headers,
      },
      signal: controller.signal,
    })
    const bytes = Buffer.from(await response.arrayBuffer())
    return {
      meta: {
        url,
        finalUrl: response.url,
        status: response.status,
        ok: response.ok,
        contentType: response.headers.get('content-type'),
        lastModified: response.headers.get('last-modified'),
        bytes: bytes.length,
        sha256: sha256(bytes),
      },
      text: bytes.toString('utf8'),
    }
  } catch (error) {
    return { meta: { url, ok: false, error: `${error.name}: ${error.message}` }, text: '' }
  } finally {
    clearTimeout(timer)
  }
}

function dpl(text) {
  return text.match(/[?&]dpl=([^"'&<>\\]+)/)?.[1] ?? null
}

function title(text) {
  return compact(text.match(/<title>([^<]*)<\/title>/i)?.[1] ?? null, 240)
}

function balancedJson(text, marker) {
  const markerIndex = text.indexOf(marker)
  if (markerIndex < 0) return null
  let start = markerIndex + marker.length
  while (/\s/.test(text[start] ?? '')) start += 1
  const open = text[start]
  if (open !== '{' && open !== '[') return null
  const close = open === '{' ? '}' : ']'
  let depth = 0
  let quoted = false
  let escaped = false
  for (let index = start; index < text.length; index += 1) {
    const character = text[index]
    if (quoted) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === '"') quoted = false
      continue
    }
    if (character === '"') {
      quoted = true
      continue
    }
    if (character === open) depth += 1
    else if (character === close) {
      depth -= 1
      if (depth === 0) return JSON.parse(text.slice(start, index + 1))
    }
  }
  return null
}

function nextFlightStrings(text) {
  const result = []
  const marker = 'self.__next_f.push([1,'
  let cursor = 0
  while (result.length < 300) {
    const markerIndex = text.indexOf(marker, cursor)
    if (markerIndex < 0) break
    let start = markerIndex + marker.length
    while (/\s/.test(text[start] ?? '')) start += 1
    if (text[start] !== '"') {
      cursor = start + 1
      continue
    }
    let escaped = false
    let end = start + 1
    for (; end < text.length; end += 1) {
      const character = text[end]
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === '"') break
    }
    if (end >= text.length) break
    try {
      result.push(JSON.parse(text.slice(start, end + 1)))
    } catch {
      // Continue with the next flight chunk.
    }
    cursor = end + 1
  }
  return result
}

function extractMessageObjects(name, text) {
  const candidates = [{ kind: 'direct', text }]
  nextFlightStrings(text).forEach((value, index) => candidates.push({ kind: `flight-${index}`, text: value }))
  const output = []
  for (const candidate of candidates) {
    try {
      const value = balancedJson(candidate.text, '"messages":')
      if (value && typeof value === 'object') output.push({ name, kind: candidate.kind, value })
    } catch {
      // A malformed candidate is only diagnostic noise.
    }
  }
  return output
}

function markerSnippet(text) {
  for (const marker of ['"messages":', '\\"messages\\":', '/api/data/']) {
    const index = text.indexOf(marker)
    if (index >= 0) {
      return compact(text.slice(Math.max(0, index - 120), index + marker.length + 280).replaceAll(/\s+/g, ' '), 500)
    }
  }
  return null
}

function messageEntries(value, prefix = '', output = []) {
  if (typeof value === 'string') {
    output.push({ key: prefix, value })
    return output
  }
  if (!value || typeof value !== 'object') return output
  for (const [key, nested] of Object.entries(value)) {
    messageEntries(nested, prefix ? `${prefix}.${key}` : key, output)
  }
  return output
}

function i18nReferences(value, prefix = '', output = []) {
  if (Array.isArray(value)) {
    value.forEach((nested, index) => i18nReferences(nested, `${prefix}[${index}]`, output))
    return output
  }
  if (!value || typeof value !== 'object') return output
  for (const [key, nested] of Object.entries(value)) {
    const next = prefix ? `${prefix}.${key}` : key
    if (/I18nId$/i.test(key)) {
      for (const id of Array.isArray(nested) ? nested : [nested]) {
        if (id != null && ['string', 'number'].includes(typeof id)) output.push({ path: next, id: String(id) })
      }
    }
    i18nReferences(nested, next, output)
  }
  return output
}

function unique(items, key) {
  const seen = new Set()
  return items.filter(item => {
    const value = key(item)
    if (seen.has(value)) return false
    seen.add(value)
    return true
  })
}

function messageIndex(entries) {
  const index = new Map()
  for (const entry of entries) {
    const leaf = entry.key.split('.').at(-1)
    if (!index.has(leaf)) index.set(leaf, [])
    index.get(leaf).push(entry)
  }
  return index
}

function referenceWords(reference) {
  return reference.path
    .split(/[.\[\]]+/)
    .map(value => value.toLowerCase())
    .filter(value => value && !/^\d+$/.test(value) && !['play', 'i18nid'].includes(value))
}

function resolve(reference, index, maxCandidates = 2) {
  const words = referenceWords(reference)
  const candidates = (index.get(reference.id) ?? [])
    .map(entry => ({
      key: entry.key,
      value: compact(entry.value),
      score: words.reduce((score, word) => score + (entry.key.toLowerCase().includes(word) ? 1 : 0), 0),
    }))
    .sort((left, right) => right.score - left.score || left.key.localeCompare(right.key))
  const top = candidates[0]
  const second = candidates[1]
  return {
    path: reference.path,
    id: reference.id,
    candidateCount: candidates.length,
    decisive: candidates.length === 1 || Boolean(top && (!second || top.score > second.score)),
    candidates: candidates.slice(0, maxCandidates),
  }
}

function collectionNumber(entry) {
  return (entry.collectionNums ?? []).find(value => value?.expansion?.id === SET_ID)?.num ?? null
}

function assetUrls(text, cardId) {
  const normalized = text.replaceAll('\\/', '/')
  const values = new Set()
  for (const pattern of [
    /https?:\/\/[^"'<>\s]+/g,
    /\/[^"'<>\s]+\.(?:png|webp|avif|jpg|jpeg)(?:\?[^"'<>\s]*)?/gi,
  ]) {
    for (const match of normalized.matchAll(pattern)) {
      const value = match[0].replace(/[),;\]}]+$/g, '')
      if (value.includes(cardId) || /card|preview|image/i.test(value)) values.add(compact(value, 600))
    }
  }
  return [...values].slice(0, 15)
}

async function loadPagePair(url, options) {
  const html = await get(url, options, 'text/html,*/*')
  const pageDpl = dpl(html.text)
  const rsc = pageDpl
    ? await get(`${url}?_rsc=1&dpl=${encodeURIComponent(pageDpl)}`, options, 'text/x-component,*/*', { RSC: '1' })
    : { meta: { url, ok: false, error: 'missing dpl' }, text: '' }
  return { html, rsc, dpl: pageDpl }
}

async function qualifyLocale(locale, routeLocale, options, sampleCards, allReferences) {
  const list = await loadPagePair(`${BASE_URL}/${routeLocale}/card`, options)
  const objects = [
    ...extractMessageObjects('list-html', list.html.text),
    ...extractMessageObjects('list-rsc', list.rsc.text),
  ]
  const samples = {}
  const detailPairs = []

  for (const card of sampleCards) {
    const detail = await loadPagePair(`${BASE_URL}/${routeLocale}/card/${card.cardId}`, options)
    detailPairs.push(detail)
    objects.push(
      ...extractMessageObjects(`card-${card.number}-html`, detail.html.text),
      ...extractMessageObjects(`card-${card.number}-rsc`, detail.rsc.text),
    )
    samples[String(card.number)] = {
      cardId: card.cardId,
      title: title(detail.html.text),
      html: detail.html.meta,
      rsc: detail.rsc.meta,
      assets: unique(
        [...assetUrls(detail.html.text, card.cardId), ...assetUrls(detail.rsc.text, card.cardId)],
        value => value,
      ),
    }
  }

  const entries = unique(objects.flatMap(object => messageEntries(object.value)), entry => `${entry.key}\u0000${entry.value}`)
  const index = messageIndex(entries)
  const resolved = allReferences.map(reference => resolve(reference, index, 1))
  const matched = resolved.filter(item => item.candidateCount > 0)
  const decisive = resolved.filter(item => item.decisive)
  const ambiguous = resolved.filter(item => item.candidateCount > 0 && !item.decisive)
  const unmatched = resolved.filter(item => item.candidateCount === 0)

  for (const card of sampleCards) {
    samples[String(card.number)].references = card.references.map(reference => resolve(reference, index))
  }

  return {
    locale,
    routeLocale,
    list: {
      title: title(list.html.text),
      dpl: list.dpl,
      html: list.html.meta,
      rsc: list.rsc.meta,
    },
    messageObjects: objects.map(object => ({
      source: object.name,
      kind: object.kind,
      topLevelKeys: Object.keys(object.value).sort(),
      leafCount: messageEntries(object.value).length,
    })),
    messages: {
      objectCount: objects.length,
      leafCount: entries.length,
      namespacePrefixes: [...new Set(entries.map(entry => entry.key.split('.').slice(0, 3).join('.')))].sort().slice(0, 60),
      entrySamples: entries.slice(0, 12).map(entry => ({ key: entry.key, value: compact(entry.value, 200) })),
      fallbackSnippets: objects.length ? [] : [
        markerSnippet(list.html.text),
        markerSnippet(list.rsc.text),
        ...detailPairs.flatMap(pair => [markerSnippet(pair.html.text), markerSnippet(pair.rsc.text)]),
      ].filter(Boolean).slice(0, 10),
    },
    resolution: {
      referenceCount: resolved.length,
      matchedCount: matched.length,
      decisiveCount: decisive.length,
      ambiguousCount: ambiguous.length,
      unmatchedCount: unmatched.length,
      ambiguousSamples: ambiguous.slice(0, 8),
      unmatchedSamples: unmatched.slice(0, 12),
    },
    samples,
  }
}

async function main() {
  const options = args(process.argv.slice(2))
  const masterResponse = await get(MASTER_URL, options, 'application/json')
  if (!masterResponse.meta.ok) throw new Error(`global-master failed: ${JSON.stringify(masterResponse.meta)}`)
  const master = JSON.parse(masterResponse.text)
  const cards = Object.values(master.cardEntryMap ?? {})
    .map(entry => ({ number: collectionNumber(entry), entry }))
    .filter(item => Number.isInteger(item.number))
    .sort((left, right) => left.number - right.number)
  const allReferences = unique(cards.flatMap(item => i18nReferences(item.entry)), item => `${item.path}\u0000${item.id}`)
  const sampleCards = SAMPLE_NUMBERS.map(number => {
    const found = cards.find(item => item.number === number)
    if (!found) throw new Error(`Missing sample B4-${number}`)
    return {
      number,
      cardId: found.entry.cardId,
      rarity: found.entry.rarity,
      cardType: found.entry.cardType,
      references: unique(i18nReferences(found.entry), item => `${item.path}\u0000${item.id}`),
    }
  })

  const locales = {}
  for (const [locale, routeLocale] of Object.entries(LOCALES)) {
    locales[locale] = await qualifyLocale(locale, routeLocale, options, sampleCards, allReferences)
  }

  const report = {
    schemaVersion: 1,
    setId: SET_ID,
    generatedAt: new Date().toISOString(),
    source: {
      globalMaster: masterResponse.meta,
      licenseStatus: 'unverified-community-endpoint; data identifies live game master records',
    },
    coverage: {
      expected: EXPECTED_COUNT,
      actual: cards.length,
      contiguous: cards.every((item, index) => item.number === index + 1),
      uniqueCardIds: new Set(cards.map(item => item.entry.cardId)).size,
      uniqueI18nReferences: allReferences.length,
    },
    samples: Object.fromEntries(sampleCards.map(card => [String(card.number), card])),
    locales,
  }

  await fs.mkdir(path.dirname(options.output), { recursive: true })
  await fs.writeFile(options.output, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`Wrote ${options.output}`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
