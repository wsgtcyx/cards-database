const RULES = {
	ko: [
		[/^(알로라|가라르|히스이|팔데아|로켓단의)(?=[가-힣])/u, '$1 '],
		[/^(일격|연격)(?=우라오스)/u, '$1 '],
		[/^(오리진)(?=디아루가|펄기아)/u, '$1 '],
		[/^(캐스퐁)(?=빗방울의 모습|설운의 모습|태양의 모습)/u, '$1 '],
		[/^(오거폰)(?=화덕의 가면|벽록의 가면|주춧돌의 가면|우물의 가면)/u, '$1 '],
		[/^(네크로즈마)(?=새벽의 날개|황혼의 갈기)/u, '$1 '],
	],
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
		.replace(/\[C:Lsb\s*\]/gu, '[').replace(/\[C:Rsb\s*\]/gu, ']')
	if (locale === 'ko') normalized = normalized.replace(/\[Gr:Pron\s+v="[^"]+"\s*\]/gu, '')
	for (const [pattern, replacement] of RULES[locale] ?? []) normalized = normalized.replace(pattern, replacement)
	return normalized.replace(/\s+-ex\b/gu, '-ex').replace(/\s+/gu, ' ').trim()
}
