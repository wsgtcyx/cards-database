import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/095"
    },
    name: {
        en: "Alolan Persian",
        "fr": "Persan alolan",
        "es": "Persa de Alola",
        "it": "Persiano di Alola",
        "de": "Alolan-Persisch",
        "pt-br": "Persa de Alola",
        "zh-tw": "阿羅拉波斯語"
    },
    illustrator: "Hideki Ishikawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Alolan Meowth",
        "fr": "Miaouss d'Alola",
        "es": "Meowth de Alola",
        "it": "Meowth di Alola",
        "de": "Alola-Miau",
        "pt-br": "Meowth de Alola",
        "zh-tw": "阿羅拉喵"
    },
    description: {
        en: "This Pokémon is one tough opponent. Not only\ndoes it have formidable physical abilities, but it's\nalso not above fighting dirty.",
        "fr": "Ce Pokémon est un adversaire coriace. Non seulement\nest-ce qu'il a des capacités physiques formidables, mais c'est\npas non plus au-dessus de se battre salement.",
        "es": "Este Pokémon es un oponente duro. No sólo\n¿Tiene capacidades físicas formidables, pero es\nTampoco por encima de pelear sucio.",
        "it": "Questo Pokémon è un avversario difficile. Non solo\nha capacità fisiche formidabili, ma lo è\ninoltre non disdegna di combattere sporco.",
        "de": "Dieses Pokémon ist ein harter Gegner. Nicht nur\nHat es beeindruckende körperliche Fähigkeiten, aber es ist so\nauch nicht davor zurück, schmutzig zu kämpfen.",
        "pt-br": "Este Pokémon é um oponente difícil. Não só\ntem habilidades físicas formidáveis, mas é\ntambém não hesita em lutar sujo.",
        "zh-tw": "這只神奇寶貝是一位強大的對手。不僅\n它有強大的身體能力嗎？\n也不是上面鬥臟的。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 40,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
