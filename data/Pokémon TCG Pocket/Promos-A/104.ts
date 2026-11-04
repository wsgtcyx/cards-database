import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/104/9e1d583a0ea7683a",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/104/9e1d583a0ea7683a",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/104/9e1d583a0ea7683a",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/104/9e1d583a0ea7683a",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/104/9e1d583a0ea7683a",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/104/9e1d583a0ea7683a",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/104/9e1d583a0ea7683a",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/104/9e1d583a0ea7683a",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/104/9e1d583a0ea7683a"
    },
	name: {
		en: "Milotic",
		fr: "Milobellus",
		es: "Milotic",
		it: "Milotic",
		de: "Milotic",
		"pt-br": "Milotic",
		"zh-tw": "美納斯",
		ja: "ミロカロス",
		ko: "밀로틱"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
		es: "Feebas",
		it: "Feebas",
		de: "Barschwa",
		"pt-br": "Feebas",
		"zh-tw": "醜醜魚",
		ja: "ヒンバス",
		ko: "빈티나"
	},
	description: {
		en: "Milotic has provided inspiration to many artists.\nIt has even been referred to as the most\nbeautiful Pokémon of all.",
		fr: "Célébré comme l'un des plus beaux Pokémon, il sert souvent de modèle et d'inspiration aux plus grands artistes.",
		es: "Se dice que es el Pokémon más bello. Ha sido la fuente de inspiración de un sinnúmero de artistas.",
		it: "È considerato il Pokémon più bello del mondo ed è fonte d'ispirazione per tantissimi artisti.",
		de: "Milotic soll das schönste aller Pokémon sein. Es hat schon so manchem Künstler als Quelle der Inspiration gedient.",
		"pt-br": "Milotic foi a fonte de inspiração de vários artistas. Dizem que é o Pokémon mais bonito de todos.",
		"zh-tw": "也被稱為是最美的寶可夢，一直以來為無數的藝術家提供了靈感。",
		ja: "もっとも 美しい ポケモンとも 呼ばれ 多くの 芸術家に インスピレーションを 与えてきた。",
		ko: "가장 아름다운 포켓몬으로\n불리며 많은 예술가에게\n영감을 주고 있다."
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Healing Ripples",
				fr: "Ondulations de guérison",
				es: "Ondas curativas",
				it: "Increspature Curative",
				de: "Heilende Wellen",
				"pt-br": "Ondulações de Cura",
				"zh-tw": "療愈漣漪",
				ja: "いやしのはもん",
				ko: "치유파문"
			},
			effect: {
				en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may heal 60 damage from 1 of your {W} Pokémon.",
				fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez soigner 60 dégâts d'un de vos Pokémon {W}.",
				es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes curar 60 puntos de daño a 1 de tus Pokémon {W}.",
				it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi curare uno dei tuoi Pokémon {W} da 60 danni.",
				de: "Einmal während deines Zuges, wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 60 Schadenspunkte bei 1 deiner {W}-Pokémon heilen.",
				"pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá curar 60 pontos de dano de 1 dos seus Pokémon {W}.",
				"zh-tw": "在自己的回合,當從手牌使出這張卡並完成進化時,可使用1次。將自己的1隻{W}寶可夢恢復60HP。",
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の{W}ポケモン1匹のHPを60回復。",
				ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 1번 사용할 수 있다. 자신의 {W}포켓몬 1마리의 HP를 60회복."
			}
		}
	],
	attacks: [
		{
			name: {
				en: "Aqua Edge",
				fr: "Aqua-Dague",
				es: "Filo Agua",
				it: "Acquataglio",
				de: "Aquaschneide",
				"pt-br": "Aqua Gume",
				"zh-tw": "水之刀鋒",
				ja: "アクアエッジ",
				ko: "아쿠아에지"
			},
			damage: 60,
			cost: ["Water", "Colorless"]
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 2,
	boosters: ["vol12"]
};

export default card;
