import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/066",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/066",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/066",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/066",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/066",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/066",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/066"
    },
    name: {
        en: "Corvisquire",
        fr: "Bleuseille",
        es: "Corvisquire",
        it: "Corvisquire",
        de: "Kranoviz",
        "pt-br": "Corvisquire",
        "zh-tw": "藍鴉",
        ko: "파크로우",
        ja: "アオガラス"
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [822],
    evolveFrom: {
        en: "Rookidee",
        fr: "Minisange",
        es: "Rookidee",
        it: "Rookidee",
        de: "Meikro",
        "pt-br": "Rookidee",
        "zh-tw": "稚山雀",
        ko: "파라꼬",
        ja: "ココガラ"
    },
    stage: "Stage1",
    description: {
        en: "This intelligent Pokémon will quickly learn how to use any tool it can hold in its beak or its talons.",
        fr: "Ce Pokémon intelligent apprendra rapidement à utiliser n'importe quel outil qu'il peut tenir dans son bec ou ses serres.",
        es: "Este Pokémon inteligente aprenderá rápidamente a utilizar cualquier herramienta que pueda llevar en el pico o en las garras.",
        it: "Questo Pokémon intelligente imparerà presto a usare qualsiasi strumento possa tenere nel becco o negli artigli.",
        de: "Dieses intelligente Pokémon lernt schnell, jedes Werkzeug zu benutzen, das es in seinem Schnabel oder seinen Krallen halten kann.",
        "pt-br": "Este Pokémon inteligente aprenderá rapidamente como usar qualquer ferramenta que possa segurar no bico ou nas garras.",
        "zh-tw": "這種聰明的寶可夢很快就會學會如何使用它可以用喙或爪子握住的任何工具。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Flap",
                fr: "Battement",
                es: "Aleteo",
                it: "Alabattito",
                de: "Flattern",
                "pt-br": "Asa",
                "zh-tw": "羽擊"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
