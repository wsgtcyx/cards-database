import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/007",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/007",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/007",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/007",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/007"
    },
    name: {
        en: "Weedle",
        "fr": "Aspicot",
        "es": "Weedle",
        "it": "Weedle",
        "de": "Hornliu",
        "pt-br": "Weedle",
        "zh-tw": "獨角蟲",
        ja: "ビードル",
        ko: "뿔충이",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "Often found in forests and grasslands.\nIt has a sharp, toxic barb of around two inches\non top of its head.",
        "fr": "On le trouve souvent dans les forêts et les prairies.\nIl a une barbe pointue et toxique d’environ deux pouces\nau dessus de sa tête.",
        "es": "A menudo se encuentra en bosques y pastizales.\nTiene una púa afilada y tóxica de alrededor de dos pulgadas.\nencima de su cabeza.",
        "it": "Si trova spesso nelle foreste e nelle praterie.\nHa una punta affilata e tossica di circa due pollici\nsopra la sua testa.",
        "de": "Häufig in Wäldern und Grasland zu finden.\nEs hat einen scharfen, giftigen Stachel von etwa fünf Zentimetern Länge\nauf dem Kopf.",
        "pt-br": "Frequentemente encontrado em florestas e pastagens.\nTem uma farpa afiada e tóxica de cerca de cinco centímetros\nno topo de sua cabeça.",
        "zh-tw": "常見於森林和草原。\n它有一個大約兩英寸長的鋒利有毒倒鉤\n在它的頭頂上。",
        ja: "森や 草地に 多く 生息。 頭の 先に ５センチぐらいの 小さく 鋭い 毒針を持つ。",
        ko: "숲이나 풀밭에 많이 서식한다.\n머리끝에 5cm 정도의\n작고 날카로운 독침을 지니고 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Multiply",
                "fr": "Multiplier",
                "es": "Multiplicar",
                "it": "Moltiplicare",
                "de": "Multiplizieren",
                "pt-br": "Multiplicar",
                "zh-tw": "乘",
                ja: "ふえる",
                ko: "증식하기"
            },
            cost: ["Grass"],
            effect: {
                en: "Put 1 random Weedle from your deck onto your Bench.",
                "fr": "Placez 1 Weedle aléatoire de votre deck sur votre Banc.",
                "es": "Coloca 1 Weedle aleatorio de tu mazo en tu Banca.",
                "it": "Metti 1 Weedle a caso dal tuo mazzo nella tua panchina.",
                "de": "Lege 1 zufälliges Unkraut aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 1 Weedle aleatório do seu deck no seu Banco.",
                "zh-tw": "將 1 個隨機雜草從你的牌組放到你的替補席上。",
                ja: "自分の山札から「ビードル」をランダムに1枚、ベンチに出す。",
                ko: "자신의 덱에서 「뿔충이」를 랜덤으로 1장 벤치로 내보낸다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
