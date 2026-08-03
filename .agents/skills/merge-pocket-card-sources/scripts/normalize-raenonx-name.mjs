const RULES = {
	en: [
		[/(Teal Mask|Hearthflame Mask|Wellspring Mask|Cornerstone Mask|Dawn Wings|Dusk Mane|Rapid Strike|Single Strike|Origin Forme|Galarian|Alolan|Paldean|Hisuian|Sunny Form|Rainy Form|Snowy Form|Castform)(?=[A-ZÀ-ÖØ-Þ])/gu, '$1 '],
	],
	fr: [
		[/(Ogerpon)(?=Masque Turquoise)/gu, '$1 '],
		[/([A-Za-zÀ-ÖØ-öø-ÿ])(?=(?:Masque|Forme|Mille|Poing|Ailes|Crinière))/gu, '$1 '],
		[/([A-Za-zÀ-ÖØ-öø-ÿ])(?=d['’]Alola|de (?:Galar|Hisui|Paldea))/gu, '$1 '],
	],
	es: [
		[/(Ogerpon)(?=Máscara)/gu, '$1 '],
		[/([A-Za-zÀ-ÖØ-öø-ÿ])(?=(?:Máscara|Forma|Golpe|Melena|Alas))/gu, '$1 '],
		[/([A-Za-zÀ-ÖØ-öø-ÿ])(?=de (?:Galar|Alola|Hisui|Paldea))/gu, '$1 '],
	],
	pt: [
		[/(Ogerpon)(?=Máscara)/gu, '$1 '],
		[/([A-Za-zÀ-ÖØ-öø-ÿ])(?=(?:Máscara|Forma|Golpe|Juba|Asas))/gu, '$1 '],
		[/([A-Za-zÀ-ÖØ-öø-ÿ])(?=de (?:Galar|Alola|Hisui|Paldea))/gu, '$1 '],
	],
}

export function normalizeRaenonxName(locale, value) {
	let normalized = String(value ?? '')
		.replace(/\[C:(?:N?nbsp|Nbsp)\s*\]/gu, ' ')
	for (const [pattern, replacement] of RULES[locale] ?? []) normalized = normalized.replace(pattern, replacement)
	return normalized.replace(/\s+-ex\b/gu, '-ex').replace(/\s+/gu, ' ').trim()
}
