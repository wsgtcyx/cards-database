import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/234",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/234",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/234",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/234",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/234",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/234",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/234"
    },
    name: {
        en: "Gyarados ex",
        "fr": "Léviator-ex",
        "es": "Gyarados ex",
        "it": "Gyarados-ex",
        "de": "Garados-ex",
        "pt-br": "Gyarados ex",
        "zh-tw": "暴鯉龍ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 180,
    types: ["Water"],
    evolveFrom: {
        en: "Magikarp",
        "fr": "Magicarpe",
        "es": "Magikarp",
        "it": "Magikarp",
        "de": "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Rampaging Whirlpool",
                "fr": "Tourbillon déchaîné",
                "es": "Remolino arrasador",
                "it": "Vortice scatenato",
                "de": "Tobender Whirlpool",
                "pt-br": "Redemoinho furioso",
                "zh-tw": "狂暴漩渦"
            },
            damage: 140,
            cost: ["Water", "Water", "Water", "Colorless"],
            effect: {
                en: "Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
                "fr": "Défaussez une Énergie aléatoire parmi les Énergies attachées à tous les Pokémon (le vôtre et celui de votre adversaire).",
                "es": "Descarta una Energía aleatoria de entre las Energías unidas a todos los Pokémon (tanto los tuyos como los de tu rival).",
                "it": "Scarta un'Energia casuale tra quelle assegnate a tutti i Pokémon (sia i tuoi che quelli del tuo avversario).",
                "de": "Lege eine zufällige Energie von der Energie ab, die an alle Pokémon (sowohl deines als auch die deines Gegners) angelegt ist.",
                "pt-br": "Descarte uma Energia aleatória dentre as Energias ligadas a todos os Pokémon (seus e do seu oponente).",
                "zh-tw": "從所有神奇寶貝（你的和對手的）所附帶的能量中隨機丟棄一個能量。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["lugia"]
};
export default card;
