import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A3a",

	name: {
		de: "Extradimensional Crisis",
		en: "Extradimensional Crisis",
		es: "Crisis Extradimensional",
		fr: "Crise Extradimensionnelle",
		it: "Crisi Extradimensionale",
		'pt-br': "Crise Extradimensional",
		ja: "異次元クライシス",
		ko: "이차원 크라이시스",
		'zh-tw': "次元危機"
	},

	serie: serie,

	cardCount: {
		official: 69 // ???
	},

	// boosters: {
	// 	mewtwo: {
	// 		name: {
	// 			en: 'Mewtwo'
	// 		}
	// 	},
	// 	charizard: {
	// 		name: {
	// 			en: 'Charizard'
	// 		}
	// 	},
	// 	pikachu: {
	// 		name: {
	// 			en: 'Pikachu'
	// 		}
	// 	}
	// },

	releaseDate: "2025-05-29",
	boosters: {
		"extradimensional-crisis": {
			"name": {
				"en": "Extradimensional Crisis",
				"fr": "Crise Interdimensionnelle",
				"es": "Crisis Dimensional",
				"it": "Crisi Ultradimensionale",
				"de": "Dimensionale Krise",
				"pt-br": "Crise Extradimensional",
				"zh-tw": "異次元危機",
				"ja": "異次元クライシス",
				"ko": "이차원 크라이시스"
			},
			"logo": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3a/boosters/extradimensional-crisis/logo.webp"
			},
			"artwork_front": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3a/boosters/extradimensional-crisis/artwork_front.webp"
			}
		}
	},
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3a/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A3a/logo"
	}
}

export default set
