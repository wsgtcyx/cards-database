#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function getArg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	const value = exact >= 0
		? process.argv[exact + 1]
		: process.argv.find(item => item.startsWith(`--${name}=`))?.slice(name.length + 3)
	if (!value) throw new Error(`--${name} is required`)
	return path.resolve(value)
}

const baseFile = getArg('base')
const decisionsFile = getArg('decisions')
const outputFile = getArg('output')
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'))
const base = readJson(baseFile)
const decisions = readJson(decisionsFile)

if (base.schemaVersion !== 1 || decisions.schemaVersion !== 1) {
	throw new Error('Base review and decisions must use schemaVersion 1')
}
if (!base.setId || base.setId !== decisions.setId) {
	throw new Error('Base review and decisions must target the same setId')
}
if (!base.cards || typeof base.cards !== 'object' || Array.isArray(base.cards)) {
	throw new Error('Base review must contain a cards object')
}
if (!decisions.fields || typeof decisions.fields !== 'object' || Array.isArray(decisions.fields)) {
	throw new Error('Decisions must contain a fields object')
}

let applied = 0
for (const [field, cards] of Object.entries(decisions.fields)) {
	if (!cards || typeof cards !== 'object' || Array.isArray(cards)) {
		throw new Error(`decisions.fields.${field} must be an object keyed by card ID`)
	}
	for (const [id, rawDecision] of Object.entries(cards)) {
		if (!/^.+-\d{3}$/u.test(id)) throw new Error(`Invalid card ID ${id}`)
		const decision = rawDecision && typeof rawDecision === 'object' && !Array.isArray(rawDecision)
			&& Object.prototype.hasOwnProperty.call(rawDecision, 'value')
			? rawDecision
			: { value: rawDecision }
		const defaults = decisions.defaults?.[field] ?? {}
		const evidence = decision.evidence ?? defaults.evidence
		if (!Array.isArray(evidence) || evidence.length === 0) {
			throw new Error(`${id}.${field} must have evidence directly or through defaults`)
		}
		base.cards[id] ??= { fields: {} }
		base.cards[id].fields ??= {}
		base.cards[id].fields[field] = {
			value: decision.value,
			...(decision.raw !== undefined ? { raw: decision.raw } : {}),
			evidence,
			...(decision.note ?? defaults.note ? { note: decision.note ?? defaults.note } : {}),
		}
		applied++
	}
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true })
fs.writeFileSync(outputFile, `${JSON.stringify(base, null, 2)}\n`)
console.log(JSON.stringify({ setId: base.setId, applied, output: outputFile }, null, 2))
