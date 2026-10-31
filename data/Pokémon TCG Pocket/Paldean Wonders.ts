import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "B2a",

	name: {
		en: "Paldean Wonders",
		fr: "Merveilles de Paldea",
		es: "Encantos de Paldea",
		it: "Meraviglie di Paldea",
		de: "Wundervolles Paldea",
		'pt-br': "Maravilhas de Paldea",
		'zh-tw': "帕底亞驚奇",
		ja: "パルデアワンダー",
		ko: "팔데아 원더",
	},

	serie: serie,

	cardCount: {
		official: 93
	},

	boosters: {
		paldea: {
			name: {
				en: "Paldea",
				fr: "Paldea",
				es: "Paldea",
				it: "Paldea",
				de: "Paldea",
				'pt-br': "Paldea",
				'zh-tw': "帕底亞",
				ja: "パルデアワンダー",
				ko: "팔데아 원더",
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B2a/boosters/paldea/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B2a/boosters/paldea/logo.webp"
			}
		}
	},		

	releaseDate: "2026-02-26",
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B2a/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B2a/logo"
	}
}


export default set
