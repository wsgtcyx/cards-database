import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/207",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/207",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/207",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/207",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/207",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/207",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/207"
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
        en: "Swampert's arms are rock-hard. With one swing, they can batter down Swampert's foes. This Pokémon makes its nest on beautiful beaches.",
        "es": "Tiene unos brazos duros como la roca, con los que puede dejar molido al enemigo de un solo golpe. Construye su nido en playas bonicas.",
        "pt-br": "Os braços de Swampert são duros como pedra e, com um único golpe, conseguem derrubar os inimigos. Este Pokémon faz ninho em praias maravilhosas."
    },
    attacks: [
        {
            cost: ["Water", "Water", "Water"],
            name: {
                en: "Large Whirlpool",
                fr: "Grand Tourbillon",
                es: "Gran Remolino",
                it: "Grande idromassaggio",
                de: "Großer Whirlpool",
                "pt-br": "Redemoinho Enorme",
                "zh-tw": "大潮旋"
            },
            effect: {
                en: "Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
                fr: "Défaussez une Énergie au hasard parmi celles attachées à tous les Pokémon en jeu (les vôtres et ceux de votre adversaire).",
                es: "Descarta Energía aleatoria de entre las Energías unidas a todos los Pokémon (tanto tuyos como de tu rival).",
                it: "Scarta un'Energia casuale tra quelle assegnate a tutti i Pokémon (sia i tuoi che quelli del tuo avversario).",
                de: "Lege eine zufällige Energie von der Energie ab, die an alle Pokémon (sowohl deines als auch die deines Gegners) angelegt ist.",
                "pt-br": "Descarte Energia aleatória dentre as Energias ligadas a todos os Pokémon (seus e do seu oponente).",
                "zh-tw": "從雙方的所有寶可夢身上附加的能量中隨機丟棄個能量。"
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
