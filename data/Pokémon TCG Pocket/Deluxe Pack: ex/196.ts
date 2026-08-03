import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/196",
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/196",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/196",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/196",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/196",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/196",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/196"
	},
	name: {
		en: "Marowak ex",
		fr: "Ossatueur-ex",
		es: "Marowak ex",
		it: "Marowak-ex",
		de: "Knogga-ex",
		"pt-br": "Marowak ex",
		"zh-tw": "嘎啦嘎啦ex"
	},
	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
		es: "Cubone",
		it: "Cubone",
		de: "Tragosso",
		"pt-br": "Cubone",
		"zh-tw": "卡拉卡拉"
	},
	suffix: "EX",
	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				en: "Bonemerang",
				fr: "Osmerang",
				es: "Huesomerang",
				it: "Ossomerang",
				de: "Knochmerang",
				"pt-br": "Ossomerangue",
				ko: "뼈다귀부메랑",
				"zh-tw": "骨梅蘭"
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
				"pt-br": "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
				ko: "동전을 2번 던져서 앞면이 나온 수 × 80데미지를 준다.",
				"zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 80 點傷害。"
			},
			damage: "80×"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 1,
	rarity: "Four Diamond"
};

export default card;
