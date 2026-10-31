import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A4a",

	name: {
		en: "Secluded Springs",
		de: "Verborgene Quelle",
		es: "Manantial Oculto",
		fr: "Source Secrète",
		it: "Sorgenti Recondite",
		'pt-br': "Nascentes Reclusas",
		ko: '미지의 수역',
		ja: '未知なる水域',
		'zh-tw': '未知水域',
		'zh-cn': '未知水域'
	},

	serie: serie,

	cardCount: {
		official: 71
	},

	boosters: {
		suicune: {
			name: {
				en: 'Suicune themed booster pack', // still not sure how to name the boosters...
				fr: "Suicune",
				es: "Suicune",
				it: "Suicune",
				de: "Suicune",
				"pt-br": "Suicune",
				"zh-tw": "水君",
				ja: "未知なる水域",
				ko: "미지의 수역"
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4a/boosters/suicune/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4a/boosters/suicune/logo.webp"
			}
		}
	},

	releaseDate: "2025-08-28",
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4a/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4a/logo"
	}
}

export default set
