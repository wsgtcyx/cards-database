// Damage suffixes are mechanics, not formatting: 40, 40+, and 40× differ.
export function apiDamage(attack) {
	const value = attack?.damage
	if (value === undefined || value === null) return null
	const text = String(value).replaceAll('x', '×').replaceAll('−', '-')
	if (!/^\d+(?:[+×-])?$/u.test(text)) throw new Error(`Invalid attack damage: ${String(value)}`)
	return /^\d+$/u.test(text) ? Number(text) : text
}

export function rawDamage(attack) {
	const marking = attack?.damageMarking
	if (marking?.value === undefined || marking.value === null || marking.value === 0) return null
	return apiDamage({ damage: `${marking.value}${marking.symbol ?? ''}` })
}
