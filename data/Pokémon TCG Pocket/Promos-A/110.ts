import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/110/2a6c1f4b9a2790cc",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/110/2a6c1f4b9a2790cc",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/110/2a6c1f4b9a2790cc",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/110/2a6c1f4b9a2790cc",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/110/2a6c1f4b9a2790cc",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/110/2a6c1f4b9a2790cc",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/110/2a6c1f4b9a2790cc",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/110/2a6c1f4b9a2790cc",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/110/2a6c1f4b9a2790cc"
    },
	name: {
		en: "Entei ex",
		fr: "Entei-ex",
		es: "Entei ex",
		it: "Entei-ex",
		de: "Entei-ex",
		"pt-br": "Entei ex",
		"zh-tw": "炎帝ex",
		ja: "エンテイex",
		ko: "앤테이 ex"
	},
	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Legendary Pulse",
				fr: "Impulsion légendaire",
				es: "Pulso legendario",
				it: "Pulsazione Leggendaria",
				de: "Legendärer Puls",
				"pt-br": "Pulso Lendário",
				"zh-tw": "傳奇脈搏",
				ja: "でんせつのこどう",
				ko: "전설의고동"
			},
			effect: {
				en: "At the end of your turn, if this Pokémon is in the Active Spot, draw a card.",
				fr: "À la fin de votre tour, si ce Pokémon est sur le Poste Actif, piochez une carte.",
				es: "Al final de tu turno, si este Pokémon está en el Puesto Activo, roba 1 carta.",
				it: "Alla fine del tuo turno, se questo Pokémon è in posizione attiva, pesca una carta.",
				de: "Am Ende deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, ziehe 1 Karte.",
				"pt-br": "No final do seu turno, se este Pokémon estiver no Campo Ativo, compre 1 carta.",
				"zh-tw": "在自己的回合結束時,若這隻寶可夢在戰鬥場上,則從自己的牌庫抽出1張卡。",
				ja: "自分の番の終わりに、このポケモンがバトル場にいるなら、自分の山札を1枚引く。",
				ko: "자신의 차례의 마지막에 이 포켓몬이 배틀필드에 있다면 자신의 덱을 1장 뽑는다."
			}
		}
	],
	attacks: [
		{
			name: {
				en: "Blazing Beatdown",
				fr: "Dérouillée Flamboyante",
				es: "Paliza Abrasadora",
				it: "Batosta Rovente",
				de: "Lodernder Niederprügler",
				"pt-br": "Batida Escaldante",
				"zh-tw": "火焰奏擊",
				ja: "ブレイズビート",
				ko: "블레이즈비트"
			},
			damage: "60+",
			cost: ["Fire", "Fire"],
			effect: {
				en: "If this Pokémon has at least 2 extra {R} Energy attached, this attack does 60 more damage.",
				fr: "Si ce Pokémon a au moins 2 Énergies {R} de plus, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon tiene por lo menos 2 Energías {R} adicionales unidas a él, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon ha almeno 2 Energie {R} extra assegnate, questo attacco infligge 60 danni in più.",
				de: "Wenn an dieses Pokémon mindestens 2 extra {R}-Energien angelegt sind, fügt diese Attacke 60 Schadenspunkte mehr zu.",
				"pt-br": "Se este Pokémon tiver pelo menos 2 Energias {R} extras ligadas a ele, este ataque causará 60 pontos de dano a mais.",
				"zh-tw": "若額外附有2個{R}能量,則增加60點傷害。",
				ja: "追加で{R}エネルギーが2個ついているなら、60ダメージ追加。",
				ko: "{R}에너지 2개가 추가로 붙어 있다면 60데미지를 추가한다."
			}
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		}
	],
	retreat: 2,
	boosters: []
};

export default card;
