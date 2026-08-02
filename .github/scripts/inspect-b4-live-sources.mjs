#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'

const OUTPUT = process.argv[2] || 'meta/pocket-source-reviews/B4.live-source-inspection.json'
const TIMEOUT_MS = 30_000
const RAENONX = 'https://ptcgp.raenonx.cc'
const COMMUNITY = 'https://pokemontcgpocket.app'
const SAMPLE_CARD_ID = 'PK_10_019620_00'
const SAMPLE_CARD_NUMBER = 'B4-001'
const LOCALES = ['en', 'fr', 'es', 'pt', 'zh', 'ko', 'ja', 'de', 'it']

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex')
}

function compact(value, limit = 900) {
  const text = String(value ?? '').replaceAll(/\s+/g, ' ').trim()
  return text.length <= limit ? text : `${text.slice(0, limit)}…`
}

async function request(url, accept = '*/*', headers = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: {
        accept,
        'user-agent': 'wsgtcyx/cards-database-b4-live-source-inspection/1.0',
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
        contentLength: response.headers.get('content-length'),
        lastModified: response.headers.get('last-modified'),
        etag: response.headers.get('etag'),
        bytes: bytes.length,
        sha256: sha256(bytes),
      },
      text: bytes.toString('utf8'),
    }
  } catch (error) {
    return {
      meta: { url, ok: false, error: `${error.name}: ${error.message}` },
      text: '',
    }
  } finally {
    clearTimeout(timer)
  }
}

function scriptUrls(html, baseUrl) {
  const urls = new Set()
  for (const match of html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)) {
    try {
      const url = new URL(match[1], baseUrl)
      if (url.origin === new URL(baseUrl).origin) urls.add(url.toString())
    } catch {
      // Ignore malformed script URLs.
    }
  }
  return [...urls]
}

function contextSnippets(text, markers, radius = 500, limitPerMarker = 8) {
  const output = {}
  for (const marker of markers) {
    const values = []
    let cursor = 0
    while (values.length < limitPerMarker) {
      const index = text.indexOf(marker, cursor)
      if (index < 0) break
      values.push(compact(text.slice(Math.max(0, index - radius), Math.min(text.length, index + marker.length + radius))))
      cursor = index + marker.length
    }
    if (values.length) output[marker] = values
  }
  return output
}

function apiCandidates(text, baseUrl) {
  const output = new Set()
  const normalized = text.replaceAll('\\/', '/')
  for (const match of normalized.matchAll(/(?:https?:\/\/ptcgp\.raenonx\.cc)?\/api\/[A-Za-z0-9_?&=./%:+,{}$\[\]-]+/g)) {
    const raw = match[0].replace(/["'`),;\]}]+$/g, '')
    if (/[${}\[\]]/.test(raw) || raw.length > 500) continue
    try {
      const url = new URL(raw, baseUrl)
      if (url.origin === new URL(baseUrl).origin) output.add(url.toString())
    } catch {
      // Ignore malformed candidates.
    }
  }
  return [...output]
}

function collectKeyDiagnostics(value) {
  const counts = new Map()
  const samples = new Map()
  const pattern = /logic|param|msid|i18n|description|message|locale|language/i

  function visit(node, location = '$') {
    if (Array.isArray(node)) {
      node.forEach((item, index) => visit(item, `${location}[${index}]`))
      return
    }
    if (!node || typeof node !== 'object') return
    for (const [key, nested] of Object.entries(node)) {
      if (pattern.test(key)) {
        counts.set(key, (counts.get(key) || 0) + 1)
        if (!samples.has(key)) samples.set(key, [])
        if (samples.get(key).length < 5) {
          samples.get(key).push({
            path: `${location}.${key}`,
            value: typeof nested === 'object' ? JSON.parse(JSON.stringify(nested)) : nested,
          })
        }
      }
      visit(nested, `${location}.${key}`)
    }
  }

  visit(value)
  return Object.fromEntries([...counts.entries()]
    .sort((left, right) => left[0].localeCompare(right[0]))
    .map(([key, count]) => [key, { count, samples: samples.get(key) }]))
}

function extractImages(html, baseUrl) {
  const output = new Set()
  const normalized = html.replaceAll('\\/', '/')
  for (const pattern of [
    /(?:src|href|content)=["']([^"']+\.(?:png|webp|avif|jpe?g)(?:\?[^"']*)?)["']/gi,
    /https?:\/\/[^"'<>\s]+\.(?:png|webp|avif|jpe?g)(?:\?[^"'<>\s]*)?/gi,
  ]) {
    for (const match of normalized.matchAll(pattern)) {
      const raw = match[1] || match[0]
      try {
        output.add(new URL(raw, baseUrl).toString())
      } catch {
        // Ignore malformed assets.
      }
    }
  }
  return [...output].slice(0, 100)
}

function extractTitle(html) {
  return compact(html.match(/<title>([^<]*)<\/title>/i)?.[1] || '')
}

async function inspectRaenonX() {
  const list = await request(`${RAENONX}/en/card`, 'text/html,*/*')
  const scripts = scriptUrls(list.text, list.meta.finalUrl || `${RAENONX}/en/card`)
  const inspectedScripts = []
  const allCandidates = new Set()
  const markers = [
    'LogicParameters',
    'AttackLogicParameters',
    'AbilityLogicParameters',
    'TrainerLogicParameters',
    'Num:Int',
    'Gr:Count',
    'descriptionI18nId',
    'global-master',
    '/api/data/',
    'supportedLocales',
    'locale',
  ]

  for (const url of scripts.slice(0, 80)) {
    const response = await request(url, 'application/javascript,text/javascript,*/*')
    const snippets = contextSnippets(response.text, markers, 500, 5)
    for (const candidate of apiCandidates(response.text, RAENONX)) allCandidates.add(candidate)
    if (Object.keys(snippets).length || Object.keys(apiCandidates(response.text, RAENONX)).length) {
      inspectedScripts.push({ ...response.meta, snippets, apiCandidates: apiCandidates(response.text, RAENONX) })
    }
  }

  const masterResponse = await request(`${RAENONX}/api/data/global-master`, 'application/json')
  let master = null
  let parseError = null
  try {
    master = JSON.parse(masterResponse.text)
  } catch (error) {
    parseError = `${error.name}: ${error.message}`
  }

  const guessedEndpoints = [
    '/api/data/global-master',
    '/api/data/master-data',
    '/api/data/masterdata',
    '/api/data/localization',
    '/api/data/localizations',
    '/api/data/locale',
    '/api/data/locales',
    '/api/data/message',
    '/api/data/messages',
    '/api/data/card-detail',
    '/api/data/card',
  ]
  for (const value of guessedEndpoints) allCandidates.add(new URL(value, RAENONX).toString())

  const endpointResults = {}
  for (const url of [...allCandidates].sort()) {
    const response = await request(url, 'application/json,text/plain,*/*')
    endpointResults[url] = {
      ...response.meta,
      preview: compact(response.text, 700),
    }
  }

  const localePages = {}
  for (const locale of LOCALES) {
    const url = `${RAENONX}/${locale}/card/${SAMPLE_CARD_ID}`
    const page = await request(url, 'text/html,*/*')
    localePages[locale] = {
      ...page.meta,
      title: extractTitle(page.text),
      snippets: contextSnippets(page.text, [SAMPLE_CARD_ID, 'Wurmple', 'Chenipotte', 'Chenipan', 'Waumpel', 'Wurmple', 'Gnaw', 'Ronge', 'Mordicchio', 'Nagen'], 350, 3),
      images: extractImages(page.text, page.meta.finalUrl || url),
    }
  }

  return {
    listPage: list.meta,
    scriptCount: scripts.length,
    scripts: inspectedScripts,
    endpoints: endpointResults,
    globalMaster: {
      ...masterResponse.meta,
      parseError,
      topLevelKeys: master && typeof master === 'object' ? Object.keys(master).sort() : [],
      keyDiagnostics: master ? collectKeyDiagnostics(master) : {},
    },
    localePages,
  }
}

async function inspectCommunitySite() {
  const locales = ['en', 'fr', 'es', 'pt', 'pt-br', 'zh-TW', 'de', 'it']
  const results = {}
  for (const locale of locales) {
    const url = `${COMMUNITY}/${locale}/card/${SAMPLE_CARD_NUMBER}`
    const page = await request(url, 'text/html,*/*')
    results[locale] = {
      ...page.meta,
      title: extractTitle(page.text),
      b4MarkerCount: page.text.split('B4-001').length - 1,
      notFoundMarkers: ['404', 'Not Found', 'Card not found', 'Karte nicht gefunden', 'Carta non trovata']
        .filter(marker => page.text.includes(marker)),
      snippets: contextSnippets(page.text, ['B4-001', 'Wurmple', 'Chenipotte', 'Waumpel', 'Ruler of the Skies', 'Herrscher der Lüfte', 'Sovrano dei Cieli'], 400, 3),
      images: extractImages(page.text, page.meta.finalUrl || url),
      scripts: scriptUrls(page.text, page.meta.finalUrl || url).slice(0, 40),
    }
  }
  return results
}

async function main() {
  const report = {
    schemaVersion: 1,
    setId: 'B4',
    generatedAt: new Date().toISOString(),
    raenonx: await inspectRaenonX(),
    communityCardSite: await inspectCommunitySite(),
  }
  await fs.mkdir(path.dirname(OUTPUT), { recursive: true })
  await fs.writeFile(OUTPUT, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`Wrote ${OUTPUT}`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
