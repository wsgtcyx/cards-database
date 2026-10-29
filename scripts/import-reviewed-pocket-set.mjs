import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { createHash } from 'node:crypto'

const objectSource = value => JSON.stringify(value, null, 4).replace(/^(\s*)"([A-Za-z_$][\w$]*)":/gm, '$1$2:')

export function renderReviewedSet(config, cards, audit) {
	assert(typeof config.setFile === 'string' && config.setFile.trim() && !['.', '..'].includes(config.setFile) && !/[\\/\0]/.test(config.setFile), 'setFile must be a single directory name')
	assert.equal(audit.setId, config.setId)
	assert.equal(audit.passed, true, 'Localization audit must pass before metadata is written')
	assert(Number.isSafeInteger(config.total) && config.total > 0, 'total must be a positive integer')
	assert.equal(Object.keys(cards).length, config.total)
	const image = (number) => Object.fromEntries(config.ruleLocales.map(locale => [locale, `${config.r2Origin}/${locale}/tcgp/${config.setId}/${number}`]))
	const files = {}
	for (let number = 1; number <= config.total; number++) {
		const localId = String(number).padStart(3, '0')
		const id = `${config.setId}-${localId}`
		const card = cards[id]
		assert(card, `Missing ${id}`)
		for (const locale of config.nameLocales) assert(card.name?.[locale], `${id}: missing ${locale} name`)
		assert(card.illustrator && card.rarity && ['Pokemon', 'Trainer'].includes(card.category), `${id}: incomplete metadata`)
		const fields = card.category === 'Trainer' ? ['effect'] : ['evolveFrom', 'description']
		for (const field of fields) if (card[field]) for (const locale of config.ruleLocales) assert(card[field][locale], `${id}.${field}.${locale}`)
		if (card.category === 'Trainer') assert(card.effect && card.trainerType, `${id}: incomplete Trainer`)
		else {
			assert(card.hp > 0 && card.types?.length && card.stage && Array.isArray(card.attacks), `${id}: incomplete Pokémon`)
			assert(card.types.every(type => typeof type === 'string' && type.length), `${id}: invalid Pokémon type`)
			if (card.suffix !== 'EX') assert(card.description, `${id}: missing flavor text`)
		}
		for (const group of ['attacks', 'abilities']) for (const item of card[group] ?? []) for (const locale of config.ruleLocales) {
			if (group === 'abilities') assert(item.type, `${id}: missing ability type`)
			assert(item.name?.[locale], `${id}.${group}: missing ${locale} name`)
			if (item.effect) assert(item.effect[locale], `${id}.${group}: missing ${locale} effect`)
		}
		assert(Array.isArray(card.boosters) && card.boosters.every(id => config.boosters.some(b => b.slug === id)), `${id}: invalid pack membership`)
		const renderedCard = structuredClone(card)
		const fallbackText = text => ({ ...text, ...Object.fromEntries(config.nameLocales.filter(locale => !config.ruleLocales.includes(locale)).map(locale => [locale, text.en])) })
		for (const field of ['effect', 'description', 'evolveFrom']) if (renderedCard[field]) renderedCard[field] = fallbackText(renderedCard[field])
		for (const group of ['attacks', 'abilities']) for (const item of renderedCard[group] ?? []) for (const field of ['name', 'effect']) if (item[field]) item[field] = fallbackText(item[field])
		const json = objectSource({ image: image(localId), ...renderedCard }).slice(1)
		files[`${config.setFile}/${localId}.ts`] = `import { Card } from "../../../interfaces";\nimport Set from ${JSON.stringify(`../${config.setFile}`)};\n\nconst card: Card = {\n    set: Set,${json};\n\nexport default card;\n`
	}
	const set = {
		id: config.setId, name: config.setNames,
		logo: { en: `${config.r2Origin}/en/tcgp/${config.setId}/boosters/${config.boosters[0].slug}/logo` },
		cardCount: { official: config.officialCount },
		boosters: Object.fromEntries(config.boosters.map(booster => [booster.slug, {
			name: booster.names,
			logo: Object.fromEntries(config.nameLocales.map(locale => [locale, `${config.r2Origin}/en/tcgp/${config.setId}/boosters/${booster.slug}/logo.webp`])),
			artwork_front: Object.fromEntries(config.nameLocales.map(locale => [locale, `${config.r2Origin}/en/tcgp/${config.setId}/boosters/${booster.slug}/artwork_front.webp`])),
		}])),
		releaseDate: config.releaseDate,
	}
	files[`${config.setFile}.ts`] = `import { Set } from '../../interfaces'\nimport serie from '../Pokémon TCG Pocket'\n\nconst set: Set = {\n    serie,${objectSource(set).slice(1)}\n\nexport default set\n`
	assert.equal(audit.reviewedCardsSha256, createHash('sha256').update(JSON.stringify(cards)).digest('hex'), 'reviewed cards changed after localization audit')
	return files
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
	const arg = name => {
		const index = process.argv.indexOf(`--${name}`)
		assert(index >= 0 && process.argv[index + 1], `--${name} is required`)
		return process.argv[index + 1]
	}
	const load = name => JSON.parse(fs.readFileSync(arg(name), 'utf8'))
	const config = load('config')
	const files = renderReviewedSet(config, load('cards'), load('audit'))
	const output = path.resolve(arg('output'))
	// A new-set import never replaces existing modules or unrelated work.
	assert(!fs.lstatSync(path.join(output, config.setFile), { throwIfNoEntry: false }), 'Set directory already exists, including symlinks')
	for (const file of Object.keys(files)) assert(!fs.lstatSync(path.join(output, file), { throwIfNoEntry: false }), `Already exists: ${file}`)
	fs.mkdirSync(output, { recursive: true })
	const staging = fs.mkdtempSync(path.join(output, '.pocket-import-'))
	let publishedCards = false
	try {
		for (const [file, text] of Object.entries(files)) {
			fs.mkdirSync(path.dirname(path.join(staging, file)), { recursive: true })
			fs.writeFileSync(path.join(staging, file), text, { flag: 'wx' })
		}
		fs.renameSync(path.join(staging, config.setFile), path.join(output, config.setFile))
		publishedCards = true
		fs.linkSync(path.join(staging, `${config.setFile}.ts`), path.join(output, `${config.setFile}.ts`))
	} catch (error) {
		if (publishedCards) fs.rmSync(path.join(output, config.setFile), { recursive: true, force: true })
		throw error
	} finally { fs.rmSync(staging, { recursive: true, force: true }) }
	console.log(JSON.stringify({ setId: config.setId, files: Object.keys(files).length }))
}
