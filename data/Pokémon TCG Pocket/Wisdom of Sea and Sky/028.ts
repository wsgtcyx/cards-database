import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Quilava",
        "fr": "Quilava",
        "es": "Quilavá",
        "it": "Quilava",
        "de": "Quilava",
        "pt-br": "Quilava",
        "zh-tw": "基拉瓦"
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
        "zh-tw": "辛達奎爾"
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
