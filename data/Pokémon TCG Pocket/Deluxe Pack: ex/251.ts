import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/251",
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/251",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/251",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/251",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/251",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/251",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/251"
	},
	name: {
		en: "Alolan Dugtrio ex",
		fr: "Triopikeur d'Alola-ex",
		es: "Dugtrio de Alola ex",
		it: "Dugtrio di Alola-ex",
		de: "Alola-Digdri-ex",
		"pt-br": "Dugtrio de Alola ex",
		"zh-tw": "阿羅拉三地鼠ex"
	},
	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
		es: "Diglett",
		it: "Diglett",
		de: "Digda",
		"pt-br": "Diglett",
		"zh-tw": "阿羅拉 地鼠"
	},
	stage: "Stage1",
	suffix: "EX",
	attacks: [
		{
			name: {
				en: "Triplet Headbutt",
				fr: "Coup de tête triplet",
				es: "Cabezazo triplete",
				it: "Tripletta di testata",
				de: "Drillinge-Kopfstoß",
				"pt-br": "Cabeçada tripla",
				"zh-tw": "三連發頭撞"
			},
			damage: 60,
			cost: ["Metal", "Colorless"],
			effect: {
				en: "Flip 3 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque tête.",
				es: "Lanza 3 monedas. Este ataque hace 60 de daño por cada cabeza.",
				it: "Lancia 3 monete. Questo attacco infligge 60 danni per ogni testa.",
				de: "Wirf 3 Münzen. Dieser Angriff verursacht 60 Schaden pro Kopf.",
				"pt-br": "Jogue 3 moedas. Este ataque causa 60 de dano para cada cabeça.",
				"zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 60 點傷害。"
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 1
};

export default card;
