import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Pineco",
        "fr": "Pinéco",
        "es": "pineco",
        "it": "Pineco",
        "de": "Pineco",
        "pt-br": "Pinho",
        "zh-tw": "松果"
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It looks just like a pinecone. Its shell protects it\nfrom bird Pokémon that peck it by mistake.",
        "fr": "Cela ressemble à une pomme de pin. Sa coque le protège\ndes Pokémon oiseaux qui le picorent par erreur.",
        "es": "Parece una piña. Su caparazón lo protege\nde Pokémon pájaro que lo picotean por error.",
        "it": "Sembra proprio una pigna. Il suo guscio lo protegge\ndai Pokémon uccello che lo beccano per errore.",
        "de": "Es sieht aus wie ein Tannenzapfen. Seine Hülle schützt es\nvon Vogel-Pokémon, die es versehentlich picken.",
        "pt-br": "Parece uma pinha. Sua casca o protege\nde Pokémon pássaros que o bicam por engano.",
        "zh-tw": "它看起來就像一個松果。它的外殼保護著它\n來自誤啄它的鳥神奇寶貝。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
