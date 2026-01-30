import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Swampert",
        "fr": "Swampert",
        "es": "Swampert",
        "it": "Swampert",
        "de": "Swampert",
        "pt-br": "Swampert",
        "zh-tw": "沼澤"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    evolveFrom: {
        en: "Marshtomp",
        "fr": "Marais",
        "es": "Marshtomp",
        "it": "Marshtomp",
        "de": "Marshtomp",
        "pt-br": "Marshtomp",
        "zh-tw": "馬什托姆普"
    },
    description: {
        en: "Swampert's arms are rock-hard. With one swing,\nthey can batter down Swampert's foes. This\nPokémon makes its nest on beautiful beaches.",
        "fr": "Les bras de Swampert sont durs comme la pierre. D'un seul coup,\nils peuvent abattre les ennemis de Swampert. Ceci\nPokémon fait son nid sur de belles plages.",
        "es": "Los brazos de Swampert son duros como piedras. Con un solo golpe,\npueden derribar a los enemigos de Swampert. esto\nPokémon hace su nido en hermosas playas.",
        "it": "Le braccia di Swampert sono dure come la roccia. Con uno swing,\npossono abbattere i nemici di Swampert. Questo\nI Pokémon nidificano su bellissime spiagge.",
        "de": "Swamperts Arme sind steinhart. Mit einem Schwung,\nSie können Swamperts Feinde niederschmettern. Dies\nPokémon nisten an wunderschönen Stränden.",
        "pt-br": "Os braços de Swampert são duros como pedra. Com um balanço,\neles podem derrotar os inimigos de Swampert. Isto\nPokémon faz seus ninhos em belas praias.",
        "zh-tw": "斯瓦伯特的手臂堅如磐石。一揮桿，\n他們可以擊敗斯瓦伯特的敵人。這個\n神奇寶貝在美麗的海灘上築巢。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Large Whirlpool",
                "fr": "Grand bain à remous",
                "es": "Bañera de hidromasaje grande",
                "it": "Grande idromassaggio",
                "de": "Großer Whirlpool",
                "pt-br": "Hidromassagem Grande",
                "zh-tw": "大漩渦"
            },
            damage: 100,
            cost: ["Water", "Water", "Water"],
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
    retreat: 3
};
export default card;
