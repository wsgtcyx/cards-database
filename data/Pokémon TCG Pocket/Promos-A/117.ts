import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/117",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-A/117",
		es: "https://game.pokemontcgpocket.app/es/tcgp/P-A/117",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-A/117",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/117"
	},
	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		de: "Absol",
		"pt-br": "Absol",
		"zh-tw": "阿勃梭魯"
	},
	illustrator: "Eri Yamaki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	description: {
		en: "Swift as the wind, Absol races through fields and\nmountains. Its curved, bow-like horn is acutely\nsensitive to the warning signs of natural disasters.",
		fr: "Rapide comme le vent, Absol court à travers champs et\nmontagnes. Sa corne courbée en forme d'arc est extrêmement\nsensibles aux signes avant-coureurs des catastrophes naturelles.",
		es: "Rápido como el viento, Absol corre por los campos y\nmontañas. Su cuerno curvo, en forma de arco, es agudamente\nsensibles a las señales de alerta de desastres naturales.",
		it: "Veloce come il vento, Absol corre attraverso i campi e\nmontagne. Il suo corno ricurvo, a forma di arco, è acuto\nsensibile ai segnali premonitori dei disastri naturali.",
		de: "Schnell wie der Wind rast Absol durch Felder und\nBerge. Sein gebogenes, bogenförmiges Horn ist spitz\nsensibel auf die Warnsignale von Naturkatastrophen reagieren.",
		"pt-br": "Rápido como o vento, Absol corre pelos campos e\nmontanhas. Seu chifre curvo em forma de arco é agudamente\nsensíveis aos sinais de alerta de desastres naturais.",
		"zh-tw": "阿勃索爾疾馳如風，穿過田野，\n山。它彎曲的弓狀角非常鋒利\n對自然災害的警告信號敏感。"
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Leap Over",
				fr: "Sautez par-dessus",
				es: "Saltar",
				it: "Salta oltre",
				de: "Überspringen",
				"pt-br": "Saltar",
				"zh-tw": "跨越"
			},
			cost: ["Darkness"],
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 30 danni a 1 dei Pokémon nella panchina del tuo avversario.",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
				"pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
				"zh-tw": "這次攻擊對對手後備隊的 1 只寶可夢造成 30 點傷害。"
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 1,
	boosters: []
};

export default card;
