import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/064",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/064",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/064",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/064",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/064",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/064"
    },
    name: {
        en: "Mega Swampert ex",
        fr: "Méga-Laggron-ex",
        es: "Mega-Swampert ex",
        it: "Mega Swampert-ex",
        de: "Mega-Sumpex-ex",
        "pt-br": "Mega Swampert ex",
        "zh-tw": "超級巨沼怪ex",
        ja: "メガラグラージex",
        ko: "메가대짱이 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 230,
    types: [
        "Water"
    ],
    evolveFrom: {
        en: "Marshtomp",
        fr: "Flobio",
        es: "Marshtomp",
        it: "Marshtomp",
        de: "Moorabbel",
        "pt-br": "Marshtomp",
        "zh-tw": "沼躍魚",
        ja: "Marshtomp",
        ko: "Marshtomp"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Strong-Armed Destroyer",
                fr: "Bras Destructeurs",
                es: "Destructor Intimidatorio",
                it: "Distruzione Nerboruta",
                de: "Erbarmungsloser Zerstörer",
                "pt-br": "Destruidor Braço-forte",
                "zh-tw": "壯臂破壞",
                ja: "Strong-Armed Destroyer",
                ko: "Strong-Armed Destroyer"
            },
            damage: 150,
            cost: [
                "Water",
                "Water",
                "Water"
            ],
            effect: {
                en: "Discard 2 random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
                fr: "Défaussez 2 Énergies au hasard parmi celles attachées à tous les Pokémon en jeu (les vôtres et ceux de votre adversaire).",
                es: "Descarta 2 Energías aleatorias de entre las Energías unidas a todos los Pokémon (tanto tuyos como de tu rival).",
                it: "Rimuovi 2 Energie a caso fra quelle assegnate a tutti i Pokémon, sia tuoi che del tuo avversario.",
                de: "Lege 2 zufällige Energien von allen Energien, die an alle Pokémon (deine und die deines Gegners) angelegt sind, ab.",
                "pt-br": "Descarte 2 Energias aleatórias dentre as Energias ligadas a todos os Pokémon (seus e do seu oponente).",
                "zh-tw": "從雙方的所有寶可夢身上附加的能量中隨機丟棄2個能量。",
                ja: "Discard 2 random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
                ko: "Discard 2 random Energy from among the Energy attached to all Pokémon (both yours and your opponent's)."
            }
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
