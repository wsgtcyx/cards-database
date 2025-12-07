import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Charmander",
        "fr": "Salamèche",
        "es": "Charmander",
        "it": "Charmander",
        "de": "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍"
    },
    illustrator: "Teeziro",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "It has a preference for hot things. When it rains,\nsteam is said to spout from the tip of its tail.",
        "fr": "Il a une préférence pour les choses chaudes. Quand il pleut,\non dit que de la vapeur jaillit du bout de sa queue.",
        "es": "Tiene preferencia por las cosas calientes. Cuando llueve,\nSe dice que sale vapor de la punta de su cola.",
        "it": "Ha una preferenza per le cose calde. Quando piove,\nsi dice che il vapore esca dalla punta della coda.",
        "de": "Es hat eine Vorliebe für heiße Dinge. Wenn es regnet,\nAus der Spitze seines Schwanzes soll Dampf austreten.",
        "pt-br": "Tem preferência por coisas quentes. Quando chove,\ndiz-se que o vapor jorra da ponta de sua cauda.",
        "zh-tw": "它對熱的東西有偏愛。下雨的時候，\n據說蒸汽從它的尾尖噴出。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ember",
                "fr": "Braise",
                "es": "Ascua",
                "it": "Brace",
                "de": "Glut",
                "pt-br": "Brasa",
                "zh-tw": "餘燼"
            },
            damage: 30,
            cost: ["Fire"],
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                "fr": "Défaussez une Énergie {R} de ce Pokémon.",
                "es": "Descarta una Energía {R} de este Pokémon.",
                "it": "Scarta un'Energia {R} da questo Pokémon.",
                "de": "Wirf eine {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {R} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
