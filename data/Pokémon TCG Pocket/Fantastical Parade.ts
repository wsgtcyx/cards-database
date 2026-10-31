import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "B2",

	name: {
		de: "Traumhafte Parade",
		en: "Fantastical Parade",
		es: "Desfile de Ensueño",
		fr: "Parade Onirique",
		it: "Parata Fantasmagorica",
		'pt-br': "Desfile Onírico",
		ja: "夢幻パレード",
		ko: '몽환 퍼레이드',
		'zh-tw': '奇幻遊行'
	},

	serie: serie,

	cardCount: {
		official: 155
	},

	boosters: {
		booster: {
			name: {
				de: "Booster",
				en: 'Booster',
				fr: 'Booster',
				es: 'Booster',
				it: 'Booster',
				'pt-br': 'Booster',
				ja: "夢幻パレード",
				ko: 'Booster',
				'zh-tw': 'Booster'
			}
		}
	},

	releaseDate: "2025-01-29"
}

export default set
