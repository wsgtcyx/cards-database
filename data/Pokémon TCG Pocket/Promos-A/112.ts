import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/112"
	},
	name: {
		en: "Raichu ex",
		fr: "Raichu-ex",
		es: "Raichu ex",
		it: "Raichu-ex",
		de: "Raichu-ex",
		"pt-br": "Raichu ex",
		"zh-tw": "雷丘ex"
	},
	illustrator: "PLANETA Mochizuki",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Volt Tackle",
				fr: "Électacle",
				es: "Placaje Eléctrico",
				it: "Locomovolt",
				de: "Volttackle",
				"pt-br": "Investida Volt",
				"zh-tw": "伏特攻擊"
			},
			damage: 130,
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
				"pt-br": "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				"zh-tw": "這隻寶可夢也會對自己造成30點傷害。"
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 1,
	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		de: "Pikachu",
		"pt-br": "Pikachu",
		"zh-tw": "皮卡丘"
	},
	boosters: ["vol13"]
};

export default card;
