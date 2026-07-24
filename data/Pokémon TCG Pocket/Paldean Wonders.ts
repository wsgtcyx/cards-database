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
		ko: "Paldean Wonders",
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
				ko: "Paldea",
			}
		}
	},		

	releaseDate: "2026-02-26"
}


export default set
