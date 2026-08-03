import { objectSize } from '@dzeio/object-util'
import Queue from '@dzeio/queue'
import { glob } from 'glob'
import { exec, spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { Card, Languages, Set, SupportedLanguages } from '../../../interfaces'
import * as legals from '../../../meta/legals'
interface fileCacheInterface {
	[key: string]: any
}

export const DB_PATH = "../"

const fileCache: fileCacheInterface = {}

/**
 * Fetch a JSON file from a remote location
 * @param url the URL to fetch
 * @returns the JSON file content
 */
export async function fetchRemoteFile<T = any>(url: string): Promise<T> {
	if (!fileCache[url]) {
		const controller = new AbortController()

		const finished = setTimeout(() => {
			controller.abort()
		}, 60 * 1000)

		try {
			const response = await fetch(url, { signal: controller.signal })
			if (!response.ok) {
				throw new Error(`${url}: ${response.status} ${response.statusText}`)
			}
			fileCache[url] = await response.json()
		} finally {
			clearTimeout(finished)
		}
	}
	return fileCache[url]
}

const globCache: Record<string, Array<string>> = {}

function wildcardRegex(segment: string): RegExp {
	let source = '^'
	for (const character of segment) {
		if (character === '*') source += '.*'
		else if (character === '?') source += '.'
		else source += character.replace(/[\\^$+{}()[\].|]/gu, '\\$&')
	}
	return new RegExp(`${source}$`, 'u')
}

async function filesystemGlob(query: string): Promise<Array<string>> {
	const absoluteQuery = path.join(process.cwd(), query)
	const segments = absoluteQuery.split(path.sep)
	const wildcardIndex = segments.findIndex(segment => /[*?]/u.test(segment))
	if (wildcardIndex < 0) {
		try {
			if ((await stat(absoluteQuery)).isFile()) return [path.relative(process.cwd(), absoluteQuery)]
		} catch {}
		return []
	}
	const prefix = segments.slice(0, wildcardIndex).join(path.sep) || path.parse(absoluteQuery).root
	const patterns = segments.slice(wildcardIndex)
	const matches: Array<string> = []
	const walk = async (directory: string, index: number): Promise<void> => {
		if (index >= patterns.length) {
			matches.push(directory)
			return
		}
		const pattern = patterns[index]
		try {
			if (/[*?]/u.test(pattern)) {
				const entries = await readdir(directory, { withFileTypes: true })
				const matcher = wildcardRegex(pattern)
				for (const entry of entries) {
					if (!matcher.test(entry.name)) continue
					const next = path.join(directory, entry.name)
					if (index === patterns.length - 1) {
						if (entry.isFile()) matches.push(next)
					} else if (entry.isDirectory()) {
						await walk(next, index + 1)
					}
				}
				return
			}
			const next = path.join(directory, pattern)
			if (index === patterns.length - 1) {
				if ((await stat(next)).isFile()) matches.push(next)
			} else if ((await stat(next)).isDirectory()) {
				await walk(next, index + 1)
			}
		} catch {}
	}
	await walk(prefix, 0)
	return matches.sort().map(file => path.relative(process.cwd(), file))
}

export async function smartGlob(query: string): Promise<Array<string>> {
	if (!globCache[query]) {
		try {
			globCache[query] = await glob(query)
		} catch {
			globCache[query] = []
		}
		if (globCache[query].length === 0) globCache[query] = await filesystemGlob(query)
	}
	return globCache[query]
}

/**
 * Check if a card is currently Legal
 * @param type the type of legality
 * @param card the card to check
 * @param localId the card localid
 * @returns {boolean} if the card is currently in the legal type
 */
export function cardIsLegal(type: 'standard' | 'expanded', card: Card, localId: string): boolean {
	const legal = legals[type]
	if (
		legal.includes.series.includes(card.set.serie.id) ||
		legal.includes.sets.includes(card.set.id) ||
		card.energyType === "Normal" ||
		card.regulationMark && legal.includes.regulationMark.includes(card.regulationMark)
	) {
		return !(
			legal.excludes.sets.includes(card.set.id) ||
			(type === 'standard' && card.types?.includes("Fairy")) ||
			legal.excludes.cards.includes(`${card.set.id}-${localId}`)
		)
	}

    return false;
}

/**
 * Check if a set is currently Legal
 * @param type the type of legality
 * @param set the set to check
 * @returns {boolean} if the set is currently in the legal type
 */
export function setIsLegal(type: 'standard' | 'expanded', set: Set): boolean {
	const legal = legals[type]
	if (
		legal.includes.series.includes(set.serie.id) ||
		legal.includes.sets.includes(set.id)
	) {
		return !legal.excludes.sets.includes(set.id)
	}
	return false
}

export function getDataFolder(lang: SupportedLanguages) {
	// This fork keeps every Pocket locale in the single canonical data tree.
	return 'data'
}

/**
 * run a command on the OS, it uses Spawn by default because exec seems to have a bug linked to the Buffer
 *
 * @param command the command to run
 * @param useSpawn select the method to use to run the command
 * @returns a string with the stdout
 */
function runCommand(command: string, useSpawn = true): Promise<string> {
	if (!useSpawn) {
		return new Promise<string>((res, rej) => {
			exec(command, (err, out) => {
				if (err) {
					rej(err)
				}
				res(out)
			})
		})
	}
	const splitted = command.split(' ')
	command = splitted.shift()!

	return new Promise<string>((res, rej) => {
		const cmd = spawn(command, splitted)
		let out: string = ''
		cmd.stdout.on('data', (data) => {
			out += data.toString()
		})

		cmd.on('close', (code) => {
			if (code !== 0) {
				console.log(`command exited with code ${code}`);
				rej(code)
				return
			}
			res(out)
		})
	})
}

const lastEditsCache: Record<string, string> = {}
export async function loadLastEdits() {
	console.log('Loading Git File Tree...')
	const firstCommand = 'git ls-tree -r --name-only HEAD ../data'
	const files = (await runCommand(firstCommand)).split('\n')
	console.log('Loaded files tree', files.length, 'files')
	console.log('Loading their last edit time')
	let processed = 0
	const concurrent = process.platform === 'win32' ? 10 : 1000
	const queue = new Queue(concurrent, 10)
	queue.start()

	for await (let file of files) {
		file = file.replace(/"/g, '').replace("\\303\\251", "é")
		await queue.add(runCommand(`git log -1 --pretty="format:%cd" --date=iso-strict "${file}"`, false).then((res) => {
			lastEditsCache[file] = res
		})
		.catch(() => {
			console.warn('could not load file', file, 'hope it does not break everything else lol')
		})
		.finally(() => {
			processed++
			if (processed % 1000 === 0) {
				console.log('loaded', processed, 'out of', files.length, 'files', `(${(processed / files.length * 100).toFixed(0)}%)`)
			}
		}))
		// try {
		// 	// don't really know why but it does not correctly execute the command when using Spawn
		// 	lastEditsCache[file] = await runCommand(`git log -1 --pretty="format:%cd" --date=iso-strict "${file}"`, false)
		// } catch {
		// 	console.warn('could not load file', file, 'hope it does not break everything else lol')
		// }
		// processed++
		// if (processed % 1000 === 0) {
		// 	console.log('loaded', processed, 'out of', files.length, 'files', `(${(processed / files.length * 100).toFixed(0)}%)`)
		// }
	}
	await queue.waitEnd()
	console.log('done loading files', objectSize(lastEditsCache))
}

export function getLastEdit(path: string): string {
	const date = lastEditsCache[path]
	if (!date) {
		return new Date().toISOString()
		// throw new Error(`edit date not found for file ${path}`)
	}
	return date
}

export function resolveText<T>(text: Languages<T> | undefined, lang: SupportedLanguages): T | undefined {
	if (!text) return text as undefined
	const res: T | undefined = text[lang]
	if (typeof res === 'undefined' && !lang.includes('-')) {
		const key = Object.keys(text).find(key => key.startsWith(lang))
		return text[key as keyof Languages<T>]
	}
	return res
}
