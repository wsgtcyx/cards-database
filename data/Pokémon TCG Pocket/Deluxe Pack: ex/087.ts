import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";

const card: Card = {
	set: Set,
	image: {
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/087",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/087",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/087",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/087",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/087"
	},
	name: {
		en: "Blastoise ex",
		fr: "Tortank-ex",
		es: "Blastoise ex",
		it: "Blastoise-ex",
		de: "Turtok-ex",
		"pt-br": "Blastoise ex",
		"zh-tw": "水箭龜ex"
	},
	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage2",
	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
		es: "Wartortle",
		it: "Wartortle",
		de: "Schillok",
		"pt-br": "Wartortle",
		"zh-tw": "卡咪龜"
	},
	suffix: "EX",
	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				de: "Surfer",
				ko: "파도타기",
				"pt-br": "Surfar",
				"zh-tw": "衝浪"
			},
			damage: "40"
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				en: "Hydro Bazooka",
				fr: "Aquazooka",
				es: "Hidrobazuca",
				it: "Idrobazooka",
				de: "Hydro-Bazooka",
				ko: "하이드로 바주카",
				"pt-br": "Bazuca d'Água",
				"zh-tw": "水力火箭筒"
			},
			effect: {
				en: "If this Pokémon has at least 2 extra {W} Energy attached, this attack does 60 more damage.",
				fr: "Si ce Pokémon a au moins 2 Énergies {W} de plus, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon tiene por lo menos 2 Energías {W} adicionales unidas a él, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon ha almeno 2 Energie {W} extra assegnate, questo attacco infligge 60 danni in più.",
				de: "Wenn an dieses Pokémon mindestens 2 extra {W}-Energien angelegt sind, fügt diese Attacke 60 Schadenspunkte mehr zu.",
				ko: "{W}에너지 2개가 추가로 붙어 있다면 60데미지를 추가한다.",
				"pt-br": "Se este Pokémon tiver pelo menos 2 Energia {W} extra ligada a ele, este ataque causará 60 pontos de dano a mais.",
				"zh-tw": "如果這只神奇寶貝附加了至少 2 個額外的 {W} 能量，則此攻擊造成的傷害增加 60 點。"
			},
			damage: "100+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 3,
	rarity: "Four Diamond"
};

export default card;
