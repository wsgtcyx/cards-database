import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/103",
		de: "https://game.pokemontcgpocket.app/de/tcgp/P-A/103",
		es: "https://game.pokemontcgpocket.app/es/tcgp/P-A/103",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-A/103",
		it: "https://game.pokemontcgpocket.app/it/tcgp/P-A/103",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/103",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-A/103"
	},
	name: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		de: "Quapsel",
		"pt-br": "Poliwag",
		"zh-tw": "蚊香蝌蚪"
	},
	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	description: {
		en: "For Poliwag, swimming is easier than walking.\nThe swirl pattern on its belly is actually part of\nthe Pokémon's innards showing through the skin.",
		fr: "Pour Poliwag, nager est plus facile que marcher.\nLe motif tourbillonnant sur son ventre fait en fait partie de\nles entrailles du Pokémon visibles à travers la peau.",
		es: "Para Poliwag, nadar es más fácil que caminar.\nEl patrón de remolino en su vientre es en realidad parte de\nLas entrañas del Pokémon se ven a través de la piel.",
		it: "Per Poliwag nuotare è più facile che camminare.\nIl motivo a vortice sulla sua pancia ne è in realtà parte\nle viscere del Pokémon si vedono attraverso la pelle.",
		de: "Für Poliwag ist Schwimmen einfacher als Gehen.\nDas Wirbelmuster auf seinem Bauch ist tatsächlich ein Teil davon\nDie Innereien des Pokémon sind durch die Haut sichtbar.",
		"pt-br": "Para Poliwag, nadar é mais fácil do que caminhar.\nO padrão de redemoinho em sua barriga é na verdade parte\nas entranhas do Pokémon aparecendo através da pele.",
		"zh-tw": "對於 Poliwag 來說，游泳比走路更容易。\n它腹部的漩渦圖案實際上是\n神奇寶貝的內臟透過皮膚顯現出來。"
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Surprise Attack",
				fr: "Attaque surprise",
				es: "Ataque sorpresa",
				it: "Attacco a sorpresa",
				de: "Überraschungsangriff",
				"pt-br": "Ataque surpresa",
				"zh-tw": "偷襲"
			},
			damage: 40,
			cost: ["Colorless"],
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
				de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
				"pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
				"zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 1,
	boosters: ["vol12"]
};

export default card;
