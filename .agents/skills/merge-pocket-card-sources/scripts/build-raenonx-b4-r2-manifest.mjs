#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function arg(name, fallback) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

const snapshotPath = arg('snapshot', 'meta/pocket-source-reviews/B4/raenonx.snapshot.json')
const outputPath = arg('output', 'meta/pocket-source-reviews/B4/raenonx.r2.manifest.json')
const snapshot = loadJson(snapshotPath)
const languages = ['fr', 'es', 'pt', 'zh']
const expectedCards = languages.length * 233 * 2
if (snapshot.setId !== 'B4' || snapshot.entryCount !== 233) throw new Error('RaenonX snapshot is not the complete B4 snapshot')
for (const language of languages) {
	const entries = snapshot.imageManifest.filter(value => value.locale === language)
	if (entries.length !== 233) throw new Error(`RaenonX ${language} image manifest has ${entries.length} cards`)
}

const manifest = {
	schemaVersion: 1,
	set: { id: 'B4', sourceId: 'B4', total: 233, boosters: [] },
	r2: { bucket: 'game', origin: 'https://game.pokemontcgpocket.app' },
	images: {
		// RaenonX uses `zh`, but the project's public R2 convention is `zh-tw`.
		// Keep the source locale as the manifest key and map it to the public path.
		cardLanguages: Object.fromEntries(languages.map(language => [language, language === 'zh' ? 'zh-tw' : language])),
		cardSourceFormats: Object.fromEntries(languages.map(language => [language, 'png'])),
		packLanguages: {},
		expectedObjects: { cards: expectedCards, boosters: 0, total: expectedCards },
	},
	provenance: {
		snapshot: path.relative(process.cwd(), path.resolve(snapshotPath)).split(path.sep).join('/'),
		source: snapshot.source,
		policy: 'Existing English R2 objects are preserved; RaenonX fr/es/pt objects are added under matching paths and RaenonX zh is published under the project-standard zh-tw path.',
	},
}
fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true })
fs.writeFileSync(path.resolve(outputPath), `${JSON.stringify(manifest, null, 2)}\n`)
console.log(JSON.stringify({
	setId: 'B4',
	languages,
	expectedObjects: expectedCards,
	output: path.resolve(outputPath),
}, null, 2))
