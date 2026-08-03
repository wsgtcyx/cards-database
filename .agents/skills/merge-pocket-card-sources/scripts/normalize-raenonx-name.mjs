const RULES = {
	en: [
		[/(Teal Mask|Galarian|Alolan)(?=[A-ZÀ-ÖØ-Þ])/gu, '$1 '],
	],
	fr: [
		[/(Ogerpon)(?=Masque Turquoise)/gu, '$1 '],
		[/([A-Za-zÀ-ÖØ-öø-ÿ])(?=d['’]Alola|de Galar)/gu, '$1 '],
	],
	es: [
		[/(Ogerpon)(?=Máscara)/gu, '$1 '],
		[/([A-Za-zÀ-ÖØ-öø-ÿ])(?=de (?:Galar|Alola))/gu, '$1 '],
	],
	pt: [
		[/(Ogerpon)(?=Máscara)/gu, '$1 '],
		[/([A-Za-zÀ-ÖØ-öø-ÿ])(?=de (?:Galar|Alola))/gu, '$1 '],
	],
}

export function normalizeRaenonxName(locale, value) {
	let normalized = String(value ?? '')
	for (const [pattern, replacement] of RULES[locale] ?? []) normalized = normalized.replace(pattern, replacement)
	return normalized
}
