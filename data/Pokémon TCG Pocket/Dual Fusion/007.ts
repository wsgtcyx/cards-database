import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/007",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/007",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/007",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/007"
    },
    name: {
        en: "Combee",
        fr: "Apitrini",
        es: "Combee",
        "pt-br": "Combee",
        "zh-tw": "三蜜蜂",
        ja: "ミツハニー",
        ko: "세꿀버리",
        it: "Combee",
        de: "Wadribie"
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 50,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Flap",
                fr: "Battement",
                es: "Aleteo",
                it: "Alabattito",
                de: "Flattern",
                "pt-br": "Asa",
                "zh-tw": "羽擊",
                ja: "はばたく",
                ko: "Flap"
            },
            cost: [
                "Grass"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "At night, Combee sleep in a group of about a hundred, packed closely together in a lump.",
        fr: "À la nuit tombée, les Apitrini s’agglutinent par grappes de cent pour dormir.",
        es: "Cuando llega la noche, se juntan unos cien Combee y duermen formando una gran colmena.",
        it: "Scesa la notte, formano dei grandi alveari di circa 100 esemplari e dormono raggruppati.",
        de: "Des Nachts schmiegen sich bis zu 100 Wadribie aneinander und formieren sich so zum Schlafen zu einem großen Gebilde.",
        "pt-br": "À noite, Combee dormem amontoados em grupos de aproximadamente cem indivíduos.",
        "zh-tw": "到了晚上就會有１００隻左右的三蜜蜂擠聚成堆，依偎著彼此睡覺。",
        ja: "夜に なると １００匹 ほどの ミツハニーが 寄り添い合って 大きな かたまりで 眠る。",
        ko: "At night, Combee sleep in a group of about a hundred, packed closely together in a lump."
    }
};

export default card;
