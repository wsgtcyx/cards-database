import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/305",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/305",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/305",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/305",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/305",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/305",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/305",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/305",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/305"
    },
    name: {
        en: "Drowzee",
        "fr": "Soporifik",
        "es": "Drowzee",
        "it": "Drowzee",
        "de": "Traumato",
        "pt-br": "Drowzee",
        "zh-tw": "催眠貘",
        ja: "スリープ",
        ko: "슬리프",
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    description: {
        en: "It remembers every dream it eats. It rarely eats\nthe dreams of adults because children's are much\ntastier.",
        "fr": "Il se souvient de chaque rêve qu'il mange. Il mange rarement\nles rêves des adultes parce que ceux des enfants sont beaucoup\nplus savoureux.",
        "es": "Recuerda cada sueño que come. rara vez come\nlos sueños de los adultos porque los de los niños son mucho\nmás sabroso.",
        "it": "Ricorda ogni sogno che mangia. Mangia raramente\ni sogni degli adulti perché quelli dei bambini sono tanti\npiù gustoso.",
        "de": "Es erinnert sich an jeden Traum, den es isst. Es frisst selten\nEs gibt viele Träume von Erwachsenen, weil es Kinderträume gibt\nschmackhafter.",
        "pt-br": "Ele se lembra de cada sonho que come. Raramente come\nos sonhos dos adultos porque os das crianças são muito\nmais saboroso.",
        "zh-tw": "它記得牠吃下的每一個夢。它很少吃東西\n成年人的夢想，因為孩子們的夢想很多\n更美味。",
        ja: "食べた夢は 全部 覚えている。 子どもの 夢のほうが 美味しいので めったに 大人の 夢は食べない。",
        ko: "먹어 치운 꿈은 모두 기억하고 있다.\n아이들의 꿈이 맛있기 때문에\n어른들의 꿈은 거의 먹지 않는다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mumble",
                "fr": "Marmonner",
                "es": "Mascullar",
                "it": "Mumble",
                "de": "Murmeln",
                "pt-br": "Resmungar",
                "zh-tw": "咕噥",
                ja: "つぶやく",
                ko: "중얼거리기"
            },
            damage: 30,
            cost: ["Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
