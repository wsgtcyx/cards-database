#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const TARGET_LOCALES = ['en', 'fr', 'es', 'it', 'de', 'pt-br', 'zh-tw']
const SAMPLE_IDS = ['B4-001', 'B4-082', 'B4-122', 'B4-154', 'B4-176', 'B4-233']
const POKEOS_IMAGE_CODES = {
  en: ['en'],
  fr: ['fr'],
  es: ['es'],
  it: ['it'],
  de: ['de'],
  'pt-br': ['pt', 'pt-br', 'br'],
  'zh-tw': ['zh', 'zh-tw', 'tw'],
}
const GAME_IMAGE_CODES = {
  en: ['en'],
  fr: ['fr'],
  es: ['es'],
  it: ['it'],
  de: ['de'],
  'pt-br': ['pt', 'pt-br'],
  'zh-tw': ['zh-tw', 'zh'],
}

function parseArgs(argv) {
  const result = {
    output: 'meta/pocket-source-reviews/B4.upstream-probe.json',
    timeoutMs: 20_000,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--output') result.output = argv[++index]
    else if (arg === '--timeout-ms') result.timeoutMs = Number(argv[++index])
    else if (arg === '--help' || arg === '-h') result.help = true
    else throw new Error(`Unknown argument: ${arg}`)
  }
  if (!Number.isFinite(result.timeoutMs) || result.timeoutMs < 1_000) {
    throw new Error('--timeout-ms must be at least 1000')
  }
  return result
}

function printHelp() {
  console.log(`Usage: node probe-upstreams.mjs [options]\n\nOptions:\n  --output <file>       JSON report path\n  --timeout-ms <number> Per-request timeout (default: 20000)\n`)
}

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex')
}

function summarizeJson(json, url) {
  if (Array.isArray(json)) {
    const b4 = json.filter(item => String(item?.id ?? item?.set_code ?? '').startsWith('B4'))
    return {
      jsonType: 'array',
      count: json.length,
      b4Count: b4.length,
      sample: b4.slice(0, 3),
    }
  }
  if (json && typeof json === 'object') {
    const sample = structuredClone(json)
    if (Array.isArray(sample.cards) && sample.cards.length > 8) {
      sample.cards = sample.cards.slice(0, 8)
      sample.cardsTruncated = true
    }
    return {
      jsonType: 'object',
      keys: Object.keys(json).sort(),
      sample,
    }
  }
  return { jsonType: typeof json, sample: json, url }
}

async function request(url, { method = 'GET', timeoutMs, accept = '*/*' } = {}) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      headers: {
        accept,
        'user-agent': 'wsgtcyx/cards-database-b4-probe/2.0',
      },
      signal: controller.signal,
    })
    const result = {
      url,
      finalUrl: response.url,
      method,
      status: response.status,
      ok: response.ok,
      contentType: response.headers.get('content-type'),
      contentLength: response.headers.get('content-length'),
      etag: response.headers.get('etag'),
      cacheControl: response.headers.get('cache-control'),
      lastModified: response.headers.get('last-modified'),
    }

    if (method !== 'HEAD') {
      const bytes = Buffer.from(await response.arrayBuffer())
      result.bytes = bytes.length
      result.sha256 = sha256(bytes)
      result.magicHex = bytes.subarray(0, 16).toString('hex')
      const contentType = String(result.contentType ?? '').toLowerCase()
      if (contentType.includes('json') || bytes[0] === 0x7b || bytes[0] === 0x5b) {
        try {
          Object.assign(result, summarizeJson(JSON.parse(bytes.toString('utf8')), url))
        } catch (error) {
          result.parseError = `${error.name}: ${error.message}`
          result.bodyPreview = bytes.toString('utf8', 0, Math.min(bytes.length, 500))
        }
      }
    }
    return result
  } catch (error) {
    return {
      url,
      method,
      ok: false,
      error: `${error.name}: ${error.message}`,
    }
  } finally {
    clearTimeout(timeout)
  }
}

function pickPokeosB4(setResponse) {
  const values = Array.isArray(setResponse?.sample)
    ? setResponse.sample
    : []
  return values.find(item => String(item?.set_code ?? '').toUpperCase() === 'B4') ?? null
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    printHelp()
    return
  }

  const generatedAt = new Date().toISOString()
  const pokeosSetUrl = 'https://api.pokeos.com/api/tcg/set?lang=pocket&group=b'
  const pokeosSets = await request(pokeosSetUrl, {
    timeoutMs: options.timeoutMs,
    accept: 'application/json',
  })

  // The generic array summary only keeps B4-like IDs. PokeOS uses set_code, so
  // refetch and retain the matching object without persisting the full payload.
  let pokeosB4 = null
  if (pokeosSets.ok) {
    const raw = await request(pokeosSetUrl, {
      timeoutMs: options.timeoutMs,
      accept: 'application/json',
    })
    if (Array.isArray(raw.sample)) pokeosB4 = pickPokeosB4(raw)
    if (!pokeosB4 && raw.jsonType === 'array') {
      // `sample` is already restricted to B4 candidates by summarizeJson.
      pokeosB4 = raw.sample?.find(item => String(item?.set_code ?? '').toUpperCase() === 'B4') ?? null
    }
  }

  const report = {
    schemaVersion: 2,
    setId: 'B4',
    generatedAt,
    completionPolicy: {
      noEnglishImageFallback: true,
      noCircularApiAsCanonicalSource: true,
      requiredLocales: TARGET_LOCALES.filter(locale => locale !== 'en'),
    },
    pokeos: {
      setEndpoint: pokeosSets,
      set: pokeosB4,
      assets: {},
    },
    gameCdn: {},
    structured: {},
  }

  const pokeosInternalId = pokeosB4?.id ? String(pokeosB4.id) : null

  for (const locale of TARGET_LOCALES) {
    report.structured[locale] = {
      deployedApiList: await request(`https://api.pokemontcgpocket.app/v2/${locale}/cards`, {
        timeoutMs: options.timeoutMs,
        accept: 'application/json',
      }),
      deployedApiCards: {},
      tcgdexSet: await request(`https://api.tcgdex.net/v2/${locale}/sets/B4`, {
        timeoutMs: options.timeoutMs,
        accept: 'application/json',
      }),
      tcgdexCards: {},
    }

    for (const id of SAMPLE_IDS) {
      report.structured[locale].deployedApiCards[id] = await request(
        `https://api.pokemontcgpocket.app/v2/${locale}/cards/${id}`,
        { timeoutMs: options.timeoutMs, accept: 'application/json' },
      )
      report.structured[locale].tcgdexCards[id] = await request(
        `https://api.tcgdex.net/v2/${locale}/cards/${id}`,
        { timeoutMs: options.timeoutMs, accept: 'application/json' },
      )
    }

    report.gameCdn[locale] = {}
    for (const id of SAMPLE_IDS) {
      const number = id.slice(-3)
      report.gameCdn[locale][id] = {}
      for (const imageLocale of GAME_IMAGE_CODES[locale]) {
        const base = `https://game.pokemontcgpocket.app/${imageLocale}/tcgp/B4/${number}`
        report.gameCdn[locale][id][imageLocale] = {
          base: await request(base, { method: 'GET', timeoutMs: options.timeoutMs }),
          high: await request(`${base}/high.webp`, { method: 'GET', timeoutMs: options.timeoutMs }),
          low: await request(`${base}/low.webp`, { method: 'GET', timeoutMs: options.timeoutMs }),
        }
      }
    }

    report.pokeos.assets[locale] = {}
    if (pokeosInternalId) {
      for (const id of SAMPLE_IDS) {
        const number = Number(id.slice(-3))
        report.pokeos.assets[locale][id] = {}
        for (const imageLocale of POKEOS_IMAGE_CODES[locale]) {
          const url = `https://s3.pokeos.com/pokeos-uploads/tcg/pocket/${pokeosInternalId}/src/${number}_${imageLocale}.png`
          report.pokeos.assets[locale][id][imageLocale] = await request(url, {
            method: 'GET',
            timeoutMs: options.timeoutMs,
          })
        }
      }
    }
  }

  await fs.mkdir(path.dirname(options.output), { recursive: true })
  await fs.writeFile(options.output, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`Wrote ${options.output}`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
