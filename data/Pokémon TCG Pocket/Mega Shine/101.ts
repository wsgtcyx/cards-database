import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/101",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/101",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/101",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/101",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/101",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/101"
    },
    name: {
        en: "Haunter",
        fr: "Spectrum",
        es: "Haunter",
        it: "Haunter",
        de: "Alpollo",
        "pt-br": "Haunter",
        "zh-tw": "鬼斯通",
        ko: "고우스트",
        ja: "ゴースト"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    dexId: [93],
    evolveFrom: {
        en: "Gastly",
        fr: "Fantominus",
        es: "Gastly",
        it: "Gastly",
        de: "Nebulak",
        "pt-br": "Gastly",
        "zh-tw": "鬼斯",
        ko: "고오스",
        ja: "ゴース"
    },
    stage: "Stage1",
    description: {
        en: "In total darkness, where nothing is visible, Haunter lurks, silently stalking its next victim.",
        fr: "Dans l'obscurité totale, où rien n'est visible, Spectrum se cache, traquant silencieusement sa prochaine victime.",
        es: "En la oscuridad total, donde no se ve nada, Haunter acecha, acechando silenciosamente a su próxima víctima.",
        it: "Nell'oscurità totale, dove nulla è visibile, Haunter si nasconde, inseguendo silenziosamente la sua prossima vittima.",
        de: "In völliger Dunkelheit, wo nichts sichtbar ist, lauert Alpollo und verfolgt lautlos sein nächstes Opfer.",
        "pt-br": "Na escuridão total, onde nada é visível, Haunter espreita, perseguindo silenciosamente a sua próxima vítima.",
        "zh-tw": "在完全黑暗、什麼也看不見的地方，鬼斯通 潛伏著，默默地跟蹤下一個受害者。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Spin Turn",
                fr: "Tournoyer",
                es: "Giro y Vuelta",
                it: "Girotondo",
                de: "Absatzdreher",
                "pt-br": "Volta Giratória",
                "zh-tw": "旋轉迴旋"
            },
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                de: "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此寶可夢與你的 1 個備戰寶可夢交換。"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
