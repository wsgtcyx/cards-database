import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { extractFile } from '../utils/ts-extract-utils'

type LangKey = 'en' | 'fr' | 'es' | 'es-mx' | 'it' | 'pt' | 'pt-br' | 'pt-pt' | 'de' | 'nl' | 'pl' | 'ru' | 'ja' | 'ko' | 'zh-tw' | 'id' | 'th' | 'zh-cn'

const SUPPORTED_LANGS: LangKey[] = [
	'en', 'fr', 'es', 'es-mx', 'it', 'pt', 'pt-br', 'pt-pt', 'de', 'nl', 'pl', 'ru', 'ja', 'ko', 'zh-tw', 'id', 'th', 'zh-cn'
]

const TARGET_LANGS: LangKey[] = ['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw']

interface MissingEntry {
	file: string
	path: string
	en?: string
	missing: LangKey[]
	langs: Record<string, unknown>
}

interface TodoEntry {
	en: string
	missing: LangKey[]
	files: string[]
	paths: string[]
}

const batchArg = process.argv.find(arg => arg.startsWith('--batch='))?.split('=')[1]
const outMissingArg = process.argv.find(arg => arg.startsWith('--out-missing='))?.split('=')[1]
const outTodoArg = process.argv.find(arg => arg.startsWith('--out-todo='))?.split('=')[1]

const batchPattern = batchArg ?? 'data/Pokémon TCG Pocket/Mega Rising/**/*.ts'
const outMissing = outMissingArg ?? 'scripts/tmp/mega-missing.json'
const outTodo = outTodoArg ?? 'scripts/tmp/pocket-translations.todo.json'

function ensureDir(file: string) {
	fs.mkdirSync(path.dirname(file), { recursive: true })
}

function isLanguagesObject(obj: unknown): obj is Record<string, unknown> {
	if (!obj || typeof obj !== 'object') return false
	return Object.keys(obj as Record<string, unknown>).some(k => SUPPORTED_LANGS.includes(k as LangKey))
}

function walk(value: unknown, currentPath: string, onLanguages: (langs: Record<string, unknown>, objPath: string) => void) {
	if (Array.isArray(value)) {
		value.forEach((item, idx) => walk(item, `${currentPath}[${idx}]`, onLanguages))
		return
	}
	if (value && typeof value === 'object') {
		if (isLanguagesObject(value)) {
			onLanguages(value as Record<string, unknown>, currentPath || 'root')
		}
		for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
			const nextPath = currentPath ? `${currentPath}.${key}` : key
			walk(val, nextPath, onLanguages)
		}
	}
}

async function main() {
	const files = await glob(batchPattern, { absolute: true, cwd: process.cwd() })

	const missingEntries: MissingEntry[] = []
	const todoMap: Map<string, { missing: Set<LangKey>, files: Set<string>, paths: Set<string> }> = new Map()

	for (const file of files) {
		const rel = path.relative(process.cwd(), file)
		const card = extractFile(file)
		if (!card) continue

		walk(card, '', (langs, objPath) => {
			const missing = TARGET_LANGS.filter(lang => !(lang in langs)) as LangKey[]
			if (missing.length === 0) return

			const enVal = typeof langs.en === 'string' ? langs.en : undefined
			missingEntries.push({
				file: rel,
				path: objPath,
				en: enVal,
				missing,
				langs
			})

			if (enVal) {
				const existing = todoMap.get(enVal) ?? { missing: new Set<LangKey>(), files: new Set<string>(), paths: new Set<string>() }
				missing.forEach(m => existing.missing.add(m))
				existing.files.add(rel)
				existing.paths.add(objPath)
				todoMap.set(enVal, existing)
			}
		})
	}

	const todoEntries: TodoEntry[] = Array.from(todoMap.entries()).map(([en, data]) => ({
		en,
		missing: Array.from(data.missing),
		files: Array.from(data.files).sort(),
		paths: Array.from(data.paths).sort()
	})).sort((a, b) => a.en.localeCompare(b.en))

	ensureDir(outMissing)
	ensureDir(outTodo)

	fs.writeFileSync(outMissing, JSON.stringify(missingEntries, null, 2), 'utf-8')
	fs.writeFileSync(outTodo, JSON.stringify(todoEntries, null, 2), 'utf-8')

	console.log(`Files scanned: ${files.length}`)
	console.log(`Languages objects missing targets: ${missingEntries.length}`)
	console.log(`Unique EN strings needing targets: ${todoEntries.length}`)
	console.log(`Missing report: ${outMissing}`)
	console.log(`Todo translations: ${outTodo}`)
}

void main()

