import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/114"
	},
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		de: "Machomei",
		"pt-br": "Machamp",
		"zh-tw": "怪力"
	},
	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		de: "Maschock",
		"pt-br": "Machoke",
		"zh-tw": "豪力"
	},
	description: {
		en: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
		fr: "Il peut bouger ses quatre bras à grande vitesse\net frapper du poing ou du tranchant de la main\ndans toutes les directions sans se fatiguer.",
		es: "Mueve rápidamente sus cuatro brazos\npara asestar incesantes golpes y\npuñetazos desde todos los ángulos.",
		it: "Agita velocemente le quattro braccia tempestando\ngli avversari di pugni e colpi da ogni direzione.",
		de: "Es verwendet seine vier Arme, um seine\nGegner unermüdlich mit schnellen Schlägen\naus allen Winkeln einzudecken.",
		"pt-br": "Ele balança velozmente seus quatro braços para\natingir seus oponentes com socos e pancadas\nincessantes de todos os ângulos.",
		ko: "4개의 팔을 재빠르게 움직여서\n모든 각도에서 쉬지 않고\n펀치와 당수를 날린다.",
		"zh-tw": "它迅速揮動四隻手臂，從各個角度不斷地出拳和砍擊，震撼對手。"
	},
	stage: "Stage2",
	attacks: [
		{
			name: {
				en: "Hurricane Punch",
				fr: "Poing Ouragan",
				es: "Puño Huracán",
				it: "Pugno Uragano",
				de: "Hurrikanhieb",
				"pt-br": "Soco Furacão",
				"zh-tw": "颶風拳"
			},
			damage: "50x",
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				en: "Flip 4 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
				es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia 4 volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
				"pt-br": "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				"zh-tw": "翻轉4個硬幣。每出現1次正面，這個招式造成50點傷害。"
			}
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		}
	],
	retreat: 2,
	boosters: ["vol13"]
};

export default card;
