import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Machoke",
        "fr": "Machoke",
        "es": "Machoke",
        "it": "Machoke",
        "de": "Machoke",
        "pt-br": "Machoke",
        "zh-tw": "馬喬克"
    },
    illustrator: "match",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Machop",
        "fr": "Machop",
        "es": "Machop",
        "it": "Machop",
        "de": "Machop",
        "pt-br": "Machop",
        "zh-tw": "馬喬普"
    },
    description: {
        en: "Its muscular body is so powerful, it must wear a\npower-save belt to be able to regulate\nits motions.",
        "fr": "Son corps musclé est si puissant qu'il doit porter un\nceinture d'économie d'énergie pour pouvoir réguler\nses mouvements.",
        "es": "Su cuerpo musculoso es tan poderoso que debe usar un\ncinturón de ahorro de energía para poder regular\nsus movimientos.",
        "it": "Il suo corpo muscoloso è così potente che deve indossare un\ncintura di risparmio energetico per poterla regolare\ni suoi movimenti.",
        "de": "Sein muskulöser Körper ist so kraftvoll, dass er einen tragen muss\nEnergiespargürtel regulieren zu können\nseine Bewegungen.",
        "pt-br": "Seu corpo musculoso é tão poderoso que ele deve usar um\ncinto de economia de energia para poder regular\nseus movimentos.",
        "zh-tw": "它肌肉發達的身體如此強大，它必須穿著\n能夠調節的節能帶\n它的動議。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Strength",
                "fr": "Force",
                "es": "Fortaleza",
                "it": "Forza",
                "de": "Stärke",
                "pt-br": "Força",
                "zh-tw": "力量"
            },
            damage: 50,
            cost: ["Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
