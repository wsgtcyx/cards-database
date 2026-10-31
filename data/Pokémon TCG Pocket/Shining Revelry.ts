import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A2b",

	name: {
		de: "Glänzendes Festival",
		en: "Shining Revelry",
		es: "Festival Brillante",
		fr: "Réjouissances Rayonnantes",
		it: "Tripudio Splendente",
		'pt-br': "Festival Brilhante",
		ja: "シャイニングハイ",
		ko: '샤이닝 하이',
		'zh-tw': "閃耀盛典"
	},

	serie: serie,

	cardCount: {
		official: 72
	},

	releaseDate: "2025-03-27",
	boosters: {
		"shining-revelry": {
			"name": {
				"en": "Shining Revelry",
				"fr": "Réjouissances Rayonnantes",
				"es": "Festival Brillante",
				"it": "Tripudio Splendente",
				"de": "Glänzendes Festival",
				"pt-br": "Festival Brilhante",
				"zh-tw": "嗨放異彩",
				"ja": "シャイニングハイ",
				"ko": "샤이닝 하이"
			},
			"logo": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A2b/boosters/shining-revelry/logo.webp"
			},
			"artwork_front": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A2b/boosters/shining-revelry/artwork_front.webp"
			}
		}
	},
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A2b/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A2b/logo"
	}
}

export default set
