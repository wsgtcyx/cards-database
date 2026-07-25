import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/024",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/024",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/024",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/024",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/024"
    },
    name: {
        en: "Mega Latios ex",
        fr: "Méga-Latios-ex",
        es: "Mega-Latios ex",
        it: "Mega Latios-ex",
        de: "Mega-Latios-ex",
        "pt-br": "Mega Latios ex",
        "zh-tw": "超級拉帝歐斯ex",
        ko: "메가라티오스 ex",
        ja: "メガラティオスex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "None",
    category: "Pokemon",
    hp: 180,
    types: ["Dragon"],
    dexId: [381],
    stage: "Basic",
    attacks: [
        {
            cost: ["Water", "Water", "Psychic"],
            name: {
                en: "Sonic Impulse",
                fr: "Impulsion Sonique",
                es: "Impulso Sónico",
                it: "Impulso Sonico",
                de: "Überschallimpuls",
                "pt-br": "Impulso Sônico",
                "zh-tw": "音速脈衝"
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
            damage: 160
        }
    ],
    retreat: 2,
    boosters: ["vol3"]
};

export default card;
