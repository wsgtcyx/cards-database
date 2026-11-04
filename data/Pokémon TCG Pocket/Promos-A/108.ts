import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/108/53b13d3c85739927",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/108/53b13d3c85739927",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/108/53b13d3c85739927",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/108/53b13d3c85739927",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/108/53b13d3c85739927",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/108/53b13d3c85739927",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/108/53b13d3c85739927",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/108/53b13d3c85739927",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/108/53b13d3c85739927"
    },
	name: {
		en: "Phanpy",
		fr: "Phanpy",
		es: "Phanpy",
		it: "Phanpy",
		de: "Phanpy",
		"pt-br": "Phanpy",
		"zh-tw": "小小象",
		ja: "ゴマゾウ",
		ko: "코코리"
	},
	illustrator: "Asako Ito",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	description: {
		en: "This Pokémon lives and nests on a riverbank.\nAfter playing in the mud, it won't be able to\nsettle down unless it washes its body.",
		fr: "Les Phanpy vivent dans les trous qu'ils creusent, près des rivières. Après avoir joué dans la boue, ils ont besoin de faire leur toilette pour se calmer.",
		es: "Vive en hoyos que cava en la ribera de los ríos. Tras retozar en el lodo, no se queda tranquilo hasta haberse lavado bien el cuerpo.",
		it: "Vive in tane che costruisce in riva ai fiumi. Dopo aver giocato nel fango, non riesce a star tranquillo finché non si è lavato.",
		de: "Es lebt in Nestern, die es an Flussufern baut. Nach dem Spielen im Schlamm muss es sich erst waschen, um sich wohlzufühlen.",
		"pt-br": "Este Pokémon vive e constrói seu ninho nas margens dos rios. Depois de brincar na lama, não sossega até se lavar direito.",
		"zh-tw": "會在河邊做出巢穴棲息。玩完泥巴後如果不把身體洗乾淨，就會渾身不自在。",
		ja: "川辺に 巣穴を 作り 暮らす。 泥遊びをしたあとは 体を 洗わないと 落ち着かないのだ。",
		ko: "냇가에 굴을 파고 산다.\n흙장난을 한 뒤에 몸을 씻지 못하면\n안절부절못하기 때문이다."
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Flail",
				fr: "Gigotage",
				es: "Azote",
				it: "Flagello",
				de: "Dreschflegel",
				"pt-br": "Mangual",
				"zh-tw": "抓狂",
				ja: "じたばた",
				ko: "바둥바둥"
			},
			cost: ["Fighting"],
			effect: {
				en: "This attack does damage to your opponent's Active Pokémon equal to the damage this Pokémon has on it.",
				fr: "Cette attaque inflige des dégâts au Pokémon Actif de votre adversaire égaux à ceux que ce Pokémon a déjà subis.",
				es: "Este ataque hace una cantidad de daño al Pokémon Activo de tu rival igual al daño que ya tenga este Pokémon.",
				it: "Questo attacco infligge al Pokémon attivo dell’avversario danni pari alla quantità di danni subiti al momento da questo Pokémon.",
				de: "Diese Attacke fügt dem Aktiven Pokémon deines Gegners Schaden in Höhe des Schadens zu, der diesem Pokémon bereits zugefügt wurde.",
				"pt-br": "Este ataque causa dano ao Pokémon Ativo do seu oponente equivalente ao dano que este Pokémon tiver nele.",
				"zh-tw": "對對手的戰鬥寶可夢造成與這隻寶可夢已受到的傷害相同數值的傷害。",
				ja: "このポケモンが受けているダメージぶん、相手のバトルポケモンにダメージを与える。",
				ko: "이 포켓몬이 받고 있는 데미지만큼 상대의 배틀 포켓몬에게 데미지를 준다."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 2,
	boosters: []
};

export default card;
