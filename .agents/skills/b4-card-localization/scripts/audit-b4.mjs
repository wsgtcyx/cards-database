#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const SET_ID = 'B4'
const EXPECTED_COUNT = 233
const TARGET_LOCALES = ['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw']

function parseArgs(argv) {
  const result = {
    setDir: 'data/Pokémon TCG Pocket/Ruler of the Skies',
    todo: 'meta/pocket-source-reviews/B4.translations.todo.json',
    output: 'meta/pocket-source-reviews/B4.localization-audit.json',
    failOnGap: false,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--set-dir') result.setDir = argv[++index]
    else if (arg === '--todo') result.todo = argv[++index]
    else if (arg === '--output') result.output = argv[++index]
    else if (arg === '--fail-on-gap') result.failOnGap = true
    else if (arg === '--help' || arg === '-h') result.help = true
    else throw new Error(`Unknown argument: ${arg}`)
  }
  return result
}

function printHelp() {
  console.log(`Usage: node audit-b4.mjs [options]\n\nOptions:\n  --set-dir <dir>       B4 card directory\n  --todo <file>         Translation todo JSON\n  --output <file>       Audit report JSON\n  --fail-on-gap         Exit non-zero when any completion gap remains\n`)
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function extractObject(source, property) {
  const matcher = new RegExp(`\\b${escapeRegExp(property)}\\s*:\\s*\\{`, 'g')
  const match = matcher.exec(source)
  if (!match) return null

  const openBrace = source.indexOf('{', match.index)
  let depth = 0
  let quote = null
  let escaped = false

  for (let index = openBrace; index < source.length; index += 1) {
    const character = source[index]
    if (quote) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === quote) quote = null
      continue
    }
    if (character === '"' || character === "'" || character === '`') quote = character
    else if (character === '{') depth += 1
    else if (character === '}') {
      depth -= 1
      if (depth === 0) return source.slice(openBrace + 1, index)
    }
  }
  throw new Error(`Unclosed ${property} object`)
}

function hasObjectKey(block, key) {
  if (block == null) return false
  const escaped = escapeRegExp(key)
  return new RegExp(`(?:["']${escaped}["']|\\b${escaped})\\s*:`).test(block)
}

function valueForKey(block, key) {
  if (block == null) return null
  const escaped = escapeRegExp(key)
  const match = block.match(new RegExp(`(?:["']${escaped}["']|\\b${escaped})\\s*:\\s*(["'])(.*?)\\1`, 's'))
  return match?.[2] ?? null
}

function numericCardId(filename) {
  return Number.parseInt(path.basename(filename, '.ts'), 10)
}

function normalizeCardPath(value) {
  return value.replaceAll('\\\\', '/')
}

function countBy(items, selector) {
  const output = {}
  for (const item of items) {
    const key = selector(item)
    output[key] = (output[key] ?? 0) + 1
  }
  return Object.fromEntries(Object.entries(output).sort(([left], [right]) => left.localeCompare(right)))
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    printHelp()
    return
  }

  const directoryEntries = await fs.readdir(options.setDir, { withFileTypes: true })
  const cardFiles = directoryEntries
    .filter(entry => entry.isFile() && /^\d{3}\.ts$/.test(entry.name))
    .map(entry => entry.name)
    .sort((left, right) => numericCardId(left) - numericCardId(right))

  const expectedFiles = Array.from({ length: EXPECTED_COUNT }, (_, index) => `${String(index + 1).padStart(3, '0')}.ts`)
  const actualSet = new Set(cardFiles)
  const expectedSet = new Set(expectedFiles)
  const missingCardFiles = expectedFiles.filter(filename => !actualSet.has(filename))
  const unexpectedCardFiles = cardFiles.filter(filename => !expectedSet.has(filename))

  const imageMissing = Object.fromEntries(TARGET_LOCALES.map(locale => [locale, []]))
  const imageUrls = Object.fromEntries(TARGET_LOCALES.map(locale => [locale, []]))
  const englishImageMissing = []
  const nameMissing = Object.fromEntries(TARGET_LOCALES.map(locale => [locale, []]))
  const malformed = []

  for (const filename of cardFiles) {
    const cardId = `${SET_ID}-${path.basename(filename, '.ts')}`
    const source = await fs.readFile(path.join(options.setDir, filename), 'utf8')
    const image = extractObject(source, 'image')
    const name = extractObject(source, 'name')

    if (image == null) malformed.push({ cardId, field: 'image', reason: 'missing object' })
    if (name == null) malformed.push({ cardId, field: 'name', reason: 'missing object' })

    if (!hasObjectKey(image, 'en')) englishImageMissing.push(cardId)
    for (const locale of TARGET_LOCALES) {
      if (!hasObjectKey(image, locale)) imageMissing[locale].push(cardId)
      else imageUrls[locale].push({ cardId, url: valueForKey(image, locale) })
      if (!hasObjectKey(name, locale)) nameMissing[locale].push(cardId)
    }
  }

  let todo = []
  try {
    const parsed = JSON.parse(await fs.readFile(options.todo, 'utf8'))
    if (!Array.isArray(parsed)) throw new Error('translation todo must be a JSON array')
    todo = parsed
  } catch (error) {
    malformed.push({ field: 'translationTodo', reason: `${error.name}: ${error.message}` })
  }

  const missingStringLanguagePairs = todo.reduce(
    (total, entry) => total + (Array.isArray(entry.missing) ? entry.missing.length : 0),
    0,
  )
  const missingFieldOccurrences = todo.reduce((total, entry) => {
    const files = Array.isArray(entry.files) ? entry.files.length : 0
    const paths = Array.isArray(entry.paths) ? entry.paths.length : 0
    const languages = Array.isArray(entry.missing) ? entry.missing.length : 0
    return total + Math.max(files, 1) * Math.max(paths, 1) * languages
  }, 0)
  const affectedCards = [...new Set(todo.flatMap(entry => (
    Array.isArray(entry.files) ? entry.files.map(normalizeCardPath) : []
  )))]
    .map(file => file.match(/\/(\d{3})\.ts$/)?.[1])
    .filter(Boolean)
    .map(number => `${SET_ID}-${number}`)
    .sort()

  const missingTranslationsByLocale = Object.fromEntries(TARGET_LOCALES.map(locale => [
    locale,
    todo.filter(entry => Array.isArray(entry.missing) && entry.missing.includes(locale)).length,
  ]))
  const missingTranslationsByPath = countBy(
    todo.flatMap(entry => (Array.isArray(entry.paths) ? entry.paths : ['unknown'])),
    value => value,
  )

  const report = {
    schemaVersion: 1,
    setId: SET_ID,
    generatedAt: new Date().toISOString(),
    completionPolicy: {
      expectedCount: EXPECTED_COUNT,
      requiredMetadataLocales: TARGET_LOCALES,
      requiredImageLocales: TARGET_LOCALES,
      englishFallbackCountsAsLocalized: false,
    },
    cards: {
      count: cardFiles.length,
      continuous: missingCardFiles.length === 0 && unexpectedCardFiles.length === 0,
      missingFiles: missingCardFiles,
      unexpectedFiles: unexpectedCardFiles,
      malformed,
    },
    metadata: {
      uniqueMissingStrings: todo.length,
      missingStringLanguagePairs,
      missingFieldOccurrences,
      affectedCardCount: affectedCards.length,
      affectedCards,
      missingByLocale: missingTranslationsByLocale,
      missingByPath: missingTranslationsByPath,
      nameMissingByLocale: Object.fromEntries(TARGET_LOCALES.map(locale => [locale, nameMissing[locale].length])),
      nameMissingCards: nameMissing,
      todoFile: options.todo,
    },
    images: {
      englishMissingCount: englishImageMissing.length,
      englishMissingCards: englishImageMissing,
      localizedMissingByLocale: Object.fromEntries(TARGET_LOCALES.map(locale => [locale, imageMissing[locale].length])),
      localizedMissingCards: imageMissing,
      declaredLocalizedUrls: imageUrls,
    },
  }

  const gaps = []
  if (!report.cards.continuous || cardFiles.length !== EXPECTED_COUNT) gaps.push('card-continuity')
  if (malformed.length > 0) gaps.push('malformed-input')
  if (todo.length > 0) gaps.push('localized-metadata')
  if (englishImageMissing.length > 0) gaps.push('english-images')
  if (TARGET_LOCALES.some(locale => imageMissing[locale].length > 0)) gaps.push('localized-images')
  report.status = gaps.length === 0 ? 'complete' : 'incomplete'
  report.gaps = gaps

  await fs.mkdir(path.dirname(options.output), { recursive: true })
  await fs.writeFile(options.output, `${JSON.stringify(report, null, 2)}\n`)
  console.log([
    `set=${SET_ID}`,
    `cards=${cardFiles.length}`,
    `todoStrings=${todo.length}`,
    `missingPairs=${missingStringLanguagePairs}`,
    `affectedCards=${affectedCards.length}`,
    `localizedImageGaps=${TARGET_LOCALES.reduce((sum, locale) => sum + imageMissing[locale].length, 0)}`,
    `status=${report.status}`,
  ].join(' '))

  if (options.failOnGap && gaps.length > 0) process.exitCode = 1
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
