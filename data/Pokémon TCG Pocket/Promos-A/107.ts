import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/107/3076cd6a75ac5946",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/107/3076cd6a75ac5946",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/107/3076cd6a75ac5946",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/107/3076cd6a75ac5946",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/107/3076cd6a75ac5946",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/107/3076cd6a75ac5946",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/107/3076cd6a75ac5946",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/107/3076cd6a75ac5946",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/107/3076cd6a75ac5946"
    },
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		es: "Miltank",
		it: "Miltank",
		de: "Miltank",
		"pt-br": "Miltank",
		"zh-tw": "大奶罐",
		ja: "ミルタンク",
		ko: "밀탱크"
	},
	illustrator: "Kanako Eo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	description: {
		en: "Miltank produces highly nutritious milk, so it's\nbeen supporting the lives of people and other\nPokémon since ancient times.",
		fr: "Grâce à son lait très nutritif, Écrémeuh contribue depuis longtemps au bien-être des humains et des Pokémon.",
		es: "Debido a la nutritiva leche que produce, ha contribuido al bienestar de humanos y Pokémon desde tiempos inmemoriales.",
		it: "Il suo latte altamente nutriente contribuisce al sostentamento di persone e Pokémon da tempo immemore.",
		de: "Dank seiner äußerst nährstoffreichen Milch trägt Miltank seit langer Zeit zum Wohl von Menschen und Pokémon bei.",
		"pt-br": "Miltank produzem um tipo de leite altamente nutritivo, que sustenta as vidas de pessoas e de outros Pokémon desde a antiguidade.",
		"zh-tw": "由於能生產營養滿分的鮮奶，自古以來支持著人類與寶可夢的生活。",
		ja: "栄養満点の ミルクを 出すことから 古くから 人間と ポケモンの 暮らしを 支えてきた。",
		ko: "영양 만점의 우유를 만들어내서\n옛날부터 사람과 포켓몬의\n삶을 지탱해왔다."
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Rolling Frenzy",
				fr: "Roulade Frénétique",
				es: "Frenesí Rodante",
				it: "Ruzzolata Frenetica",
				de: "Walzender Wahn",
				"pt-br": "Frenesi Rolante",
				"zh-tw": "越滾越勇",
				ja: "ころがりフィーバー",
				ko: "구르기피버"
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				en: "Until this Pokémon leaves the Active Spot, this Pokémon's Rolling Frenzy attack does +30 damage. This effect stacks.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, son attaque Roulade Frénétique inflige + 30 dégâts. Cet effet est cumulable.",
				es: "Hasta que este Pokémon deje el Puesto Activo, el ataque Frenesí Rodante de este Pokémon hace +30 puntos de daño. Este efecto se acumula.",
				it: "Finché questo Pokémon è in posizione attiva, il suo attacco Ruzzolata Frenetica infligge +30 danni. Questo effetto è cumulabile.",
				de: "Bis dieses Pokémon die Aktive Position verlässt, fügt seine Attacke Walzender Wahn + 30 Schadenspunkte zu. Dieser Effekt stapelt sich.",
				"pt-br": "Até este Pokémon sair do Campo Ativo, o ataque Frenesi Rolante deste Pokémon causará +30 pontos de dano. Este efeito acumula.",
				"zh-tw": "在這隻寶可夢離開戰鬥場前,這隻寶可夢的「越滾越勇」的傷害+30點。這個效果會重複。",
				ja: "このポケモンがバトル場をはなれるまで、このポケモンの「ころがりフィーバー」のダメージを+30する。この効果は重なる。",
				ko: "이 포켓몬이 배틀필드를 떠날 때까지 이 포켓몬의 「구르기피버」의 데미지를 +30한다. 이 효과는 중복된다."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 3,
	boosters: []
};

export default card;
