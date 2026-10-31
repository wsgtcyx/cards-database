import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/026",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/026",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/026",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/026"
    },
    name: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ja: "カルボウ",
        ko: "카르본",
        it: "Charcadet",
        de: "Knarbon"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x",
        "pikachu"
    ],
    hp: 60,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Will-O-Wisp",
                fr: "Feu Follet",
                es: "Fuego Fatuo",
                it: "Fuocofatuo",
                de: "Irrlicht",
                "pt-br": "Fogo Fátuo",
                "zh-tw": "鬼火",
                ja: "おにび",
                ko: "Will-O-Wisp"
            },
            cost: [
                "Fire",
                "Fire"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
        fr: "Ce Pokémon est un charbon de bois consumé qui a pris vie. Il est animé par un désir de combattre qui le pousse à défier des adversaires puissants.",
        es: "Nació de unos restos de carbón consumidos por las llamas. Reta a rivales poderosos para saciar su ardiente espíritu combativo.",
        it: "Dal carbone bruciato ha preso vita, divenendo un Pokémon. Sfida anche i nemici più temibili, mosso da un rovente spirito combattivo.",
        de: "Ein verbranntes Stück Holzkohle ist als Pokémon zum Leben erwacht. Es fordert selbst starke Gegner heraus und hat einen feurigen Kampfgeist.",
        "pt-br": "Um carvão queimado ganhou vida e tornou-se um Pokémon. Com um espírito de luta flamejante, Charcadet batalhará até mesmo contra oponentes mais fortes.",
        "zh-tw": "生命寄宿在燃燒的木炭上，變成了寶可夢。即使敵人再強，也會以燃燒的鬥志迎面而戰。",
        ja: "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
        ko: "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents."
    }
};

export default card;
