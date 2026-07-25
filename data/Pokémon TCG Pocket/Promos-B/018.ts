import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/018",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/018",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/018",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/018",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/018"
    },
    name: {
        en: "Heliolisk",
        fr: "Iguolta",
        es: "Heliolisk",
        it: "Heliolisk",
        de: "Elezard",
        "pt-br": "Heliolisk",
        "zh-tw": "光電傘蜥",
        ko: "일레도리자드",
        ja: "エレザード"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "None",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    dexId: [695],
    evolveFrom: {
        en: "Helioptile",
        fr: "Galvaran",
        es: "Helioptile",
        it: "Helioptile",
        de: "Eguana",
        "pt-br": "Helioptile",
        "zh-tw": "傘電蜥",
        ko: "목도리키텔",
        ja: "エリキテル"
    },
    stage: "Stage1",
    description: {
        en: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.",
        fr: "Lorsqu'il déploie sa collerette pour emmagasiner\nla lumière du soleil, il génère à lui seul assez\nd'électricité pour alimenter une grande ville.",
        es: "Al extender su gorguera y exponerse a la luz\nsolar, genera la energía eléctrica suficiente para\ncubrir el consumo de una metrópoli entera.",
        it: "L'energia prodotta da un Heliolisk quando apre\nil suo collare in un luogo soleggiato è sufficiente\na soddisfare il fabbisogno di una metropoli.",
        de: "Stellt es seine kragenartigen Hautlappen auf und\nabsorbiert damit Sonnenlicht, kann ein Elezard\ngenug Strom für eine Großstadt produzieren.",
        "pt-br": "Um único Heliolisk tomando banho de sol com\nsuas cristas abertas consegue produzir energia\no suficiente para abastecer uma cidade inteira.",
        "zh-tw": "只要一隻日光蟲在陽光下伸展開來，就可以產生足夠的電力來為一座城市供電。"
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Thunderbolt",
                fr: "Tonnerre",
                es: "Rayo",
                it: "Fulmine",
                de: "Donnerblitz",
                "pt-br": "Relâmpago",
                "zh-tw": "十萬伏特"
            },
            effect: {
                en: "Discard all Energy from this Pokémon.",
                fr: "Défaussez toute l'énergie de ce Pokémon.",
                es: "Descarta toda la Energía de este Pokémon.",
                it: "Scarta tutte le Energie da questo Pokémon.",
                de: "Lege die gesamte Energie dieses Pokémon ab.",
                "pt-br": "Descarte todas as Energias deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的所有能量。"
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
