import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A3",

	name: {
		de: "Hüter des Firmaments",
		en: "Celestial Guardians",
		es: "Guardianes Celestiales",
		fr: "Gardiens Astraux",
		it: "Guardiani Astrali",
		'pt-br': "Guardiões Celestiais",
		ja: "双天の守護者",
		ko: '쌍천의 수호자',
		'zh-tw': "蒼穹守護者"
	},

	serie: serie,

	cardCount: {
		official: 155
	},

	boosters: {
		solgaleo: {
			name: {
				de: "Solgaleo",
				en: 'Solgaleo',
				fr: 'Solgaleo',
				es: 'Solgaleo',
				it: 'Solgaleo',
				'pt-br': 'Solgaleo',
				ja: "双天の守護者 ソルガレオ",
				ko: "쌍천의 수호자 솔가레오",
				'zh-tw': '索爾迦雷歐'
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3/boosters/solgaleo/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3/boosters/solgaleo/logo.webp"
			}
		},
		lunala: {
			name: {
				de: "Lunala",
				en: 'Lunala',
				fr: 'Lunala',
				es: 'Lunala',
				it: 'Lunala',
				'pt-br': 'Lunala',
				ja: "双天の守護者 ルナアーラ",
				ko: "쌍천의 수호자 루나아라",
				'zh-tw': '露奈雅拉'
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3/boosters/lunala/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3/boosters/lunala/logo.webp"
			}
		}
	},

	releaseDate: "2025-04-30",
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3/logo"
	}
}

export default set
