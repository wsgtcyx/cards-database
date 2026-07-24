import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/053",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/053"
    },
    name: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [133],
    stage: "Basic",
    description: {
        en: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones.",
        fr: "Son code génétique est irrégulier. Il peut muter s'il est exposé aux radiations des pierres élémentaires.",
        es: "Su código genético es irregular. Puede mutar si se expone a la radiación de las piedras elementales.",
        it: "Il suo codice genetico è irregolare. Potrebbe mutare se esposto alle radiazioni delle pietre elementali.",
        de: "Sein genetischer Code ist unregelmäßig. Es kann mutieren, wenn es der Strahlung von Elementsteinen ausgesetzt wird.",
        "pt-br": "Seu código genético é irregular. Ele pode sofrer mutação se for exposto à radiação das pedras elementares.",
        "zh-tw": "它的遺傳密碼是不規則的。如果受到元素石的輻射，就有可能發生變異。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Gnaw",
                fr: "Ronge",
                es: "Roer",
                it: "Rosicchiamento",
                de: "Nagen",
                "pt-br": "Roída",
                "zh-tw": "咬"
            },
            damage: 10
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
