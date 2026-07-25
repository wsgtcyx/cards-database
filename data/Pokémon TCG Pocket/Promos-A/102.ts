import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
		de: "https://game.pokemontcgpocket.app/de/tcgp/P-A/102",
		es: "https://game.pokemontcgpocket.app/es/tcgp/P-A/102",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-A/102",
		it: "https://game.pokemontcgpocket.app/it/tcgp/P-A/102",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/102"
	},
	name: {
		en: "Tropius",
		fr: "Tropius",
		es: "Tropius",
		it: "Tropius",
		de: "Tropius",
		"pt-br": "Tropius",
		"zh-tw": "熱帶龍"
	},
	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	description: {
		en: "It lives in tropical jungles. The bunch of fruit\naround its neck is delicious. The fruit grows\ntwice a year.",
		fr: "Il vit dans les jungles tropicales. La grappe de fruits\nautour de son cou est délicieux. Le fruit pousse\ndeux fois par an.",
		es: "Vive en selvas tropicales. el racimo de fruta\nalrededor de su cuello es delicioso. la fruta crece\ndos veces al año.",
		it: "Vive nelle giungle tropicali. Il grappolo di frutta\nintorno al collo è delizioso. Il frutto cresce\ndue volte l'anno.",
		de: "Es lebt in tropischen Dschungeln. Der Fruchthaufen\num den Hals ist köstlich. Die Frucht wächst\nzweimal im Jahr.",
		"pt-br": "Vive em selvas tropicais. O cacho de frutas\nem volta do pescoço é delicioso. A fruta cresce\nduas vezes por ano.",
		"zh-tw": "它生活在熱帶叢林中。那串水果\n脖子上的東西很好吃。果實長大了\n每年兩次。"
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Double Smash",
				fr: "Double Broiement",
				es: "Golpe Doble",
				it: "Colpo Duplice",
				de: "Doppelstoß",
				"pt-br": "Bordoada Dupla",
				"zh-tw": "雙重粉碎"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
				"pt-br": "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				"zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 40 點傷害。"
			},
			damage: "40x",
			cost: ["Colorless", "Colorless"]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 2,
	boosters: ["vol12"]
};

export default card;
