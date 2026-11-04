import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/109/389cbac7c29d6d7c",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/109/389cbac7c29d6d7c",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/109/389cbac7c29d6d7c",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/109/389cbac7c29d6d7c",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/109/389cbac7c29d6d7c",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/109/389cbac7c29d6d7c",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/109/389cbac7c29d6d7c",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/109/389cbac7c29d6d7c",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/109/389cbac7c29d6d7c"
    },
	name: {
		en: "Eevee ex",
		fr: "Évoli-ex",
		es: "Eevee ex",
		it: "Eevee-ex",
		de: "Evoli-ex",
		"pt-br": "Eevee ex",
		"zh-tw": "伊布ex",
		ja: "イーブイex",
		ko: "이브이 ex"
	},
	illustrator: "Kanami Ogata",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Veevee 'volve",
				fr: "Veevee 'volve",
				es: "Veevee 'volve",
				it: "Evoluzione Eevee",
				de: "Volivoli-Entwicklung",
				"pt-br": "Veevee 'volve",
				"zh-tw": "威威沃爾沃",
				ja: "ブイブイしんか",
				ko: "브이브이 진화"
			},
			effect: {
				en: "This Pokémon can evolve into any Pokémon that evolves from Eevee if you play it from your hand onto this Pokémon. (This Pokémon can't evolve during your first turn or the turn you play it.)",
				fr: "Ce Pokémon peut évoluer en n'importe quel Pokémon qui évolue de Évoli si vous le jouez de votre main sur ce Pokémon. (Ce Pokémon ne peut pas évoluer pendant votre premier tour ou pendant le tour où vous le jouez.)",
				es: "Este Pokémon puede evolucionar a cualquier Pokémon que evolucione de Eevee si pones en juego ese Pokémon sobre este Pokémon desde tu mano. (Este Pokémon no puede evolucionar durante tu primer turno ni durante el turno en que lo pongas en juego).",
				it: "Questo Pokémon può evolversi in qualsiasi Pokémon che si evolve da Eevee, se giochi quel Pokémon dalla tua mano mettendolo sopra questo Pokémon. Questo Pokémon non può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
				de: "Dieses Pokémon kann sich zu einem beliebigen Pokémon entwickeln, das sich aus Evoli entwickelt, wenn du es aus deiner Hand auf dieses Pokémon spielst. Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, nicht entwickeln.",
				"pt-br": "Este Pokémon pode evoluir para qualquer Pokémon que evolua de Eevee se você jogá-lo da sua mão sobre este Pokémon. (Este Pokémon não poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.)",
				"zh-tw": "可從手牌使出從「伊布」進化而來的卡,放置於這隻寶可夢身上完成進化。(在自己的最初回合或者剛使出的回合無法進化。)",
				ja: "このポケモンは、「イーブイ」から進化するカードを手札から出して、このポケモンにのせて進化できる。(最初の自分の番や、出したばかりの番には進化できない。)",
				ko: "이 포켓몬은 「이브이」에서 진화하는 카드를 패에서 꺼내서 이 포켓몬에게 올려서 진화할 수 있다. (자신의 첫 번째 차례나 필드에 처음 나왔을 때에는 진화시킬 수 없다.)"
			}
		}
	],
	attacks: [
		{
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				de: "Biss",
				"pt-br": "Mordida",
				"zh-tw": "咬住",
				ja: "かみつく",
				ko: "물기"
			},
			damage: 30,
			cost: ["Colorless"]
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 1,
	boosters: []
};

export default card;
