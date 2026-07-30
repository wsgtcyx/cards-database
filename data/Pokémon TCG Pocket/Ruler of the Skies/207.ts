import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/207"
    },
    name: {
        en: "Swampert",
        fr: "Laggron",
        es: "Swampert",
        it: "Swampert",
        de: "Sumpex",
        "pt-br": "Swampert",
        "zh-tw": "巨沼怪",
        ko: "대짱이",
        ja: "ラグラージ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    dexId: [260],
    evolveFrom: {
        en: "Marshtomp",
        fr: "Flobio",
        es: "Marshtomp",
        it: "Marshtomp",
        de: "Moorabbel",
        "pt-br": "Marshtomp",
        "zh-tw": "沼躍魚",
        ko: "늪짱이",
        ja: "ヌマクロー"
    },
    stage: "Stage2",
    description: {
        en: "Swampert's arms are rock-hard. With one swing, they can batter down Swampert's foes. This Pokémon makes its nest on beautiful beaches."
    },
    attacks: [
        {
            cost: ["Water", "Water", "Water"],
            name: {
                en: "Large Whirlpool",
                fr: "Grand bain à remous",
                es: "Bañera de hidromasaje grande",
                it: "Grande idromassaggio",
                de: "Großer Whirlpool",
                "pt-br": "Hidromassagem Grande",
                "zh-tw": "大潮旋"
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
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
