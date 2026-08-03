import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/226",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/226",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/226",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/226",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/226"
    },
    name: {
        en: "Mega Swampert ex",
        fr: "Méga-Laggron-ex",
        es: "Mega-Swampert ex",
        it: "Mega Swampert-ex",
        de: "Mega-Sumpex-ex",
        "pt-br": "Mega Swampert ex",
        "zh-tw": "超級巨沼怪ex",
        ko: "메가대짱이 ex",
        ja: "メガラグラージex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 230,
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
    attacks: [
        {
            cost: ["Water", "Water", "Water"],
            name: {
                en: "Strong-Armed Destroyer",
                fr: "Bras Destructeurs",
                es: "Destructor Intimidatorio",
                it: "Distruttore dalle armi potenti",
                de: "Stark bewaffneter Zerstörer",
                "pt-br": "Destruidor Braço-forte",
                "zh-tw": "壯臂破壞"
            },
            effect: {
                en: "Discard 2 random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
                fr: "Défaussez 2 Énergies au hasard parmi celles attachées à tous les Pokémon en jeu (les vôtres et ceux de votre adversaire).",
                es: "Descarta 2 Energías aleatorias de entre las Energías unidas a todos los Pokémon (tanto tuyos como de tu rival).",
                it: "Scarta 2 Energie casuali tra quelle assegnate a tutti i Pokémon (sia i tuoi che quelli del tuo avversario).",
                de: "Lege 2 zufällige Energien von der Energie ab, die an alle Pokémon (dein und die deines Gegners) angelegt ist.",
                "pt-br": "Descarte 2 Energias aleatórias dentre as Energias ligadas a todos os Pokémon (seus e do seu oponente).",
                "zh-tw": "從雙方的所有寶可夢身上附加的能量中隨機丟棄2個能量。"
            },
            damage: 150
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
