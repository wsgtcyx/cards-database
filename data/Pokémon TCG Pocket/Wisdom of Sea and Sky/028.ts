import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/028",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/028",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/028"
    },
    name: {
        en: "Quilava",
        "fr": "Feurisson",
        "es": "Quilava",
        "it": "Quilava",
        "de": "Igelavar",
        "pt-br": "Quilava",
        "zh-tw": "火岩鼠",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Cyndaquil",
        "fr": "Cyndaquil",
        "es": "cindaquil",
        "it": "Cyndaquil",
        "de": "Cyndaquil",
        "pt-br": "Cindaquil",
        "zh-tw": "火球鼠",
    },
    description: {
        en: "Before battle, it turns its back on its opponent to\ndemonstrate how ferociously its fire blazes.",
        "fr": "Avant le combat, il tourne le dos à son adversaire pour\ndémontrer avec quelle férocité son feu flambe.",
        "es": "Antes de la batalla, le da la espalda a su oponente para\ndemostrar cuán ferozmente arde su fuego.",
        "it": "Prima della battaglia volta le spalle al suo avversario\ndimostrare quanto ferocemente divampa il suo fuoco.",
        "de": "Vor dem Kampf wendet es seinem Gegner den Rücken zu\ndemonstrieren, wie heftig sein Feuer lodert.",
        "pt-br": "Antes da batalha, ele vira as costas ao oponente para\ndemonstrar quão ferozmente seu fogo arde.",
        "zh-tw": "戰鬥前，它會背對對手\n展示它的火焰有多麼猛烈。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Combustion",
                "fr": "Combustion",
                "es": "Combustión",
                "it": "Combustione",
                "de": "Verbrennung",
                "pt-br": "Combustão",
                "zh-tw": "燃燒"
            },
            damage: 30,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
