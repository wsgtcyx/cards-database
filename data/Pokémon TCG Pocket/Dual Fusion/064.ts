import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/064",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/064",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/064",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/064",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/064",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/064"
    },
    name: {
        en: "Cosmog",
        fr: "Cosmog",
        es: "Cosmog",
        "pt-br": "Cosmog",
        "zh-tw": "科斯莫古",
        ja: "コスモッグ",
        ko: "코스모그",
        it: "Cosmog",
        de: "Cosmog"
    },
    illustrator: "Megumi Mizutani",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x",
        "pikachu"
    ],
    hp: 60,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Dust Gathering",
                fr: "Ramasse Poussière",
                es: "Concentración de Polvo",
                it: "Coglipolvere",
                de: "Staubfänger",
                "pt-br": "Coleta de Poeira",
                "zh-tw": "集塵",
                ja: "Dust Gathering",
                ko: "Dust Gathering"
            },
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Draw a card.",
                fr: "Piochez une carte.",
                es: "Roba carta.",
                it: "Pesca una carta.",
                de: "Ziehe 1 Karte.",
                "pt-br": "Compre carta.",
                "zh-tw": "從自己的牌庫抽出張卡。",
                ja: "Draw a card.",
                ko: "Draw a card."
            }
        }
    ],
    abilities: [],
    description: {
        en: "This Pokémon came from another universe. Its gaseous body is so light that even a gentle breeze can blow it away.",
        fr: "Il vient d’un autre univers. Son corps gazeux est si léger que la moindre brise peut l’emporter.",
        es: "Proviene de otro mundo. Su cuerpo gaseoso es tan liviano que hasta la brisa más suave es capaz de arrastrarlo.",
        it: "Proviene da un altro universo. Il suo corpo fatto di gas è talmente leggero che può volar via al minimo soffio di vento.",
        de: "Es stammt aus einem anderen Universum. Sein Körper aus Gas ist so leicht, dass es sogar von einer sanften Brise weggeweht wird.",
        "pt-br": "Este Pokémon veio de outro universo. Seu corpo gasoso é tão leve que uma brisa suave pode levá-lo embora.",
        "zh-tw": "來自其他的宇宙。氣體構成的身體十分輕盈，連微風都能把牠吹走。",
        ja: "This Pokémon came from another universe. Its gaseous body is so light that even a gentle breeze can blow it away.",
        ko: "This Pokémon came from another universe. Its gaseous body is so light that even a gentle breeze can blow it away."
    }
};

export default card;
