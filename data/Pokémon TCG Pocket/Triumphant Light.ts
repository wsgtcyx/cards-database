import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A2a",

	name: {
		de: "Licht des Triumphs",
		en: "Triumphant Light",
		es: "Luz Triunfal",
		fr: "Lumière Triomphale",
		it: "Luce Trionfale",
		'pt-br': "Luz Triunfante",
		ja: "超克の光",
		ko: '초극의 빛',
		'zh-tw': "凱旋之光"
	},

	serie: serie,

	cardCount: {
		official: 75
	},

	releaseDate: "2025-02-28",
	boosters: {
		"triumphant-light": {
			"name": {
				"en": "Triumphant Light",
				"fr": "Lumière Triomphale",
				"es": "Luz Triunfal",
				"it": "Luce Trionfale",
				"de": "Licht des Triumphs",
				"pt-br": "Luz Triunfante",
				"zh-tw": "超克之光",
				"ja": "超克の光",
				"ko": "초극의 빛"
			},
			"logo": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A2a/boosters/triumphant-light/logo.webp"
			},
			"artwork_front": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A2a/boosters/triumphant-light/artwork_front.webp"
			}
		}
	},
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A2a/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A2a/logo"
	}
}

export default set
