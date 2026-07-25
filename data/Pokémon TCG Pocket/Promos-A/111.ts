import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		de: "Pikachu",
		"pt-br": "Pikachu",
		"zh-tw": "皮卡丘"
	},
	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	description: {
		en: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
		fr: "Quand il s'énerve, il libère instantanément\nl'énergie emmagasinée dans les poches de\nses joues.",
		es: "Cuando se enfada, este Pokémon\ndescarga la energía que almacena en\nel interior de las bolsas de las mejillas.",
		it: "Quando s'arrabbia, libera subito l'energia\naccumulata nelle sacche sulle guance.",
		de: "Ist es wütend, entlädt sich augenblicklich die\nElektrizität, die es in seinen Backentaschen\ngespeichert hat.",
		"pt-br": "Quando está com raiva, descarrega\nimediatamente a energia armazenada\nnas bolsas em suas bochechas.",
		ko: "양 볼에는 전기를 저장하는 주머니가 있다.\n화가 나면 저장한 전기를 단숨에 방출한다.",
		"zh-tw": "當它被激怒時，它會立即釋放臉頰眼袋中儲存的能量。"
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Quick Attack",
				fr: "Attaque rapide",
				es: "Ataque rápido",
				it: "Attacco rapido",
				de: "Schneller Angriff",
				"pt-br": "Ataque Rápido",
				"zh-tw": "電光一閃"
			},
			damage: "20+",
			cost: ["Lightning", "Colorless"],
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
				"pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
				"zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
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
	boosters: ["vol13"]
};

export default card;
