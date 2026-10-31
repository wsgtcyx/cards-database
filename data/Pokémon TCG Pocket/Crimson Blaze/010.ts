import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/010",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/010",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/010",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/010"
    },
    name: {
        en: "Mothim",
        "fr": "Papilord",
        "es": "Mothim",
        "it": "Mothim",
        "de": "Moterpel",
        "pt-br": "Mothim",
        "zh-tw": "紳士蛾",
        ja: "ガーメイル",
        ko: "나메일"
    },
    illustrator: "saino misaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Burmy",
        "fr": "Cheniti",
        "es": "Burmy",
        "it": "Burmy",
        "de": "Burmy",
        "pt-br": "Burmy",
        "zh-tw": "結草兒",
        ja: "ミノムッチ",
        ko: "도롱충이"
    },
    description: {
        en: "It flutters around at night and steals honey from\nthe Combee hive.",
        "fr": "Il voltige la nuit et vole du miel\nla ruche Combee.",
        "es": "Revolotea de noche y roba miel.\nla colmena Combee.",
        "it": "Svolazza di notte e ruba il miele\nl'alveare Combee.",
        "de": "Es flattert nachts herum und stiehlt Honig\nder Combee-Bienenstock.",
        "pt-br": "Ele flutua à noite e rouba mel de\na colmeia Combee.",
        "zh-tw": "它在夜間飛來飛去，偷取蜂蜜。\n庫姆蜂巢。",
        ja: "夜中 活発に 飛び回り 眠っている ミツハニーの 巣から ミツを 奪って 逃げる。",
        ko: "한밤중에 활발하게 날아다니며\n잠든 세꿀버리의 둥지에서\n꿀을 훔쳐 달아난다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Cutting Wind",
                "fr": "Couper le vent",
                "es": "Viento cortante",
                "it": "Vento tagliente",
                "de": "Schneidender Wind",
                "pt-br": "Cortando o Vento",
                "zh-tw": "風切",
                ja: "カッターウインド",
                ko: "커터윈드"
            },
            damage: 70,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
