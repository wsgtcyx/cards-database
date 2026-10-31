import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A4",

	name: {
		en: "Wisdom of Sea and Sky",
		de: "Weisheit von Meer und Himmel",
		es: "Sabiduría del Mar y del Cielo",
		fr: "Sagesse de la Mer et du Ciel",
		it: "Saggezza del Mare e del Cielo",
		'pt-br': "Sabedoria do Mar e do Céu",
		'zh-tw': "海與天空的智慧",
		ja: "空と海の導き",
		ko: "하늘과 바다의 인도"
	},

	serie: serie,

	cardCount: {
		official: 161
	},

	releaseDate: "2025-07-30",

	boosters: {
		lugia: {
			name: {
				en: 'Lugia',
				de: 'Lugia',
				es: 'Lugia',
				fr: 'Lugia',
				it: 'Lugia',
				'pt-br': 'Lugia',
				'zh-tw': '盧基亞',
				ja: "空と海の導き ルギア",
				ko: "하늘과 바다의 인도 루기아"
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4/boosters/lugia/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4/boosters/lugia/logo.webp"
			}
		},
		'ho-oh': {
			name: {
				en: 'Ho-Oh',
				de: 'Ho-Oh',
				es: 'Ho-Oh',
				fr: 'Ho-Oh',
				it: 'Ho-Oh',
				'pt-br': 'Ho-Oh',
				'zh-tw': '鳳王',
				ja: "空と海の導き ホウオウ",
				ko: "하늘과 바다의 인도 칠색조"
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4/boosters/ho-oh/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4/boosters/ho-oh/logo.webp"
			}
		}
	},
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A4/logo"
	}
}

export default set
