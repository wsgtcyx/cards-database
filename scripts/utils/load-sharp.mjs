import { createRequire } from 'node:module'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(import.meta.url)

export async function loadSharp(...roots) {
	let entry = process.env.SHARP_ENTRY
	if (!entry) {
		try {
			entry = require.resolve('sharp', { paths: roots })
		} catch (cause) {
			throw new Error('Cannot resolve sharp. Install tcgp dependencies or set SHARP_ENTRY.', { cause })
		}
	}
	return (await import(pathToFileURL(path.resolve(entry)).href)).default
}
