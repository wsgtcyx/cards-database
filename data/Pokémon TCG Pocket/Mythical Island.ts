import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A1a",

	name: {
		de: "Mysteriöse Insel",
		en: "Mythical Island",
		es: "La Isla Singular",
		fr: "L’Île Fabuleuse",
		it: "L'Isola Misteriosa",
		'pt-br': "Ilha Mítica",
		ja: "幻のいる島",
		ko: '환상이 있는 섬',
		'zh-tw': "幻島"
	},

	serie: serie,

	cardCount: {
		official: 68
	},

	releaseDate: "2024-12-17",
	boosters: {
		"mythical-island": {
			"name": {
				"en": "Mythical Island",
				"fr": "L'Île Fabuleuse",
				"es": "La Isla Singular",
				"it": "L'Isola Misteriosa",
				"de": "Mysteriöse Insel",
				"pt-br": "Ilha Mítica",
				"zh-tw": "幻遊島",
				"ja": "幻のいる島",
				"ko": "환상이 있는 섬"
			},
			"logo": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1a/boosters/mythical-island/logo.webp"
			},
			"artwork_front": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1a/boosters/mythical-island/artwork_front.webp"
			}
		}
	},
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1a/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1a/logo"
	}
}

export default set
