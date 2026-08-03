import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/066",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/066",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/066",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/066",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/066",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/066",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/066"
    },
    name: {
        en: "Ceruledge ex",
        fr: "Malvalame-ex",
        es: "Ceruledge ex",
        it: "Ceruledge-ex",
        de: "Azugladis-ex",
        "pt-br": "Ceruledge ex",
        "zh-tw": "蒼炎刃鬼ex",
        ko: "파라블레이즈 ex",
        ja: "ソウブレイズex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "None",
    category: "Pokemon",
    hp: 150,
    types: ["Psychic"],
    dexId: [937],
    evolveFrom: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ko: "카르본",
        ja: "カルボウ"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Shimmering Slash",
                fr: "Entaille chatoyante",
                es: "Tajo brillante",
                it: "Taglio scintillante",
                de: "Schimmernder Schlitz",
                "pt-br": "Corte Cintilante",
                "zh-tw": "陽炎斬"
            },
            effect: {
                en: "Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
                fr: "Défaussez une Énergie aléatoire parmi les Énergies attachées à tous les Pokémon (le vôtre et celui de votre adversaire).",
                es: "Descarta una Energía aleatoria de entre las Energías unidas a todos los Pokémon (tanto los tuyos como los de tu rival).",
                it: "Scarta un'Energia casuale tra quelle assegnate a tutti i Pokémon (sia i tuoi che quelli del tuo avversario).",
                de: "Lege eine zufällige Energie von der Energie ab, die an alle Pokémon (sowohl deines als auch die deines Gegners) angelegt ist.",
                "pt-br": "Descarte uma Energia aleatória dentre as Energias ligadas a todos os Pokémon (seus e do seu oponente).",
                "zh-tw": "從所有寶可夢（你的和對手的）所附帶的能量中隨機丟棄一個能量。"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol9"]
};

export default card;
