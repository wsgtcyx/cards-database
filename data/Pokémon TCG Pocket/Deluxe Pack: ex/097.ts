import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Magikarp",
        "fr": "Magikarpe",
        "es": "Magikarp",
        "it": "Magikarp",
        "de": "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王"
    },
    illustrator: "Mitsuhiro Arita",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    description: {
        en: "An underpowered, pathetic Pokémon. It may\njump high on rare occasions but never more\nthan seven feet.",
        "fr": "Un Pokémon pathétique et sous-alimenté. Il se peut\nsauter haut en de rares occasions mais jamais plus\nplus de sept pieds.",
        "es": "Un Pokémon patético y con pocos poderes. puede\nsaltar alto en raras ocasiones pero nunca más\nde siete pies.",
        "it": "Un Pokémon sottodimensionato e patetico. Potrebbe\nsaltare in alto in rare occasioni ma mai di più\npiù di sette piedi.",
        "de": "Ein schwaches, erbärmliches Pokémon. Es kann sein\nSpringe in seltenen Fällen hoch, aber nie öfter\nals sieben Fuß.",
        "pt-br": "Um Pokémon patético e pouco poderoso. Pode\npular alto em raras ocasiões, mas nunca mais\ndo que sete pés.",
        "zh-tw": "力量不足、可憐的神奇寶貝。它可能\n偶爾會跳得很高，但絕不會更多\n超過七英尺。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Leap Out",
                "fr": "Sautez",
                "es": "Saltar",
                "it": "Salta fuori",
                "de": "Spring raus",
                "pt-br": "Salte",
                "zh-tw": "跳出"
            },
            cost: ["Water"],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                "fr": "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                "es": "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                "it": "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                "de": "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此神奇寶貝與你的 1 個替補神奇寶貝交換。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
