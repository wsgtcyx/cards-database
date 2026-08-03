import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/146",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/146",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/146",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/146",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/146",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/146",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/146"
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
    illustrator: "Naoyo Kimura",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
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
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Joust",
                fr: "Joute",
                es: "Justa",
                it: "Giostra",
                de: "Lanzenstich",
                "pt-br": "Justar",
                "zh-tw": "狙落"
            },
            effect: {
                en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
                fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
                es: "Antes de hacer daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
                it: "Prima di infliggere danni, scarta tutti gli Strumenti Pokémon dal Pokémon attivo del tuo avversario.",
                de: "Bevor du Schaden verursachst, wirf alle Pokémon-Werkzeuge vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
                "zh-tw": "在造成傷害之前，丟棄對手的活躍寶可夢中的所有寶可夢工具。"
            },
            damage: 30
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
