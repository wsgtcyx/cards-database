import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Floragato",
        "fr": "Floragato",
        "es": "floragato",
        "it": "Floragato",
        "de": "Floragato",
        "pt-br": "Floragata",
        "zh-tw": "弗洛拉加托"
    },
    illustrator: "Kariya",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Sprigatito",
        "fr": "Sprigatito",
        "es": "sprigatito",
        "it": "Sprigato",
        "de": "Sprigatito",
        "pt-br": "Sprigatito",
        "zh-tw": "斯普里加蒂托"
    },
    description: {
        en: "Floragato deftly wields the vine hidden beneath\nits long fur, slamming the hard flower bud against\nits opponents.",
        "fr": "Floragato manie adroitement la vigne cachée en dessous\nsa longue fourrure, frappant le bouton floral dur contre\nses adversaires.",
        "es": "Floragato empuña hábilmente la enredadera escondida debajo\nsu largo pelaje, golpeando el duro capullo de la flor contra\nsus oponentes.",
        "it": "Floragato brandisce abilmente la vite nascosta sotto\nla sua lunga pelliccia, che sbatte contro il duro bocciolo del fiore\ni suoi avversari.",
        "de": "Floragato schwingt geschickt die darunter verborgene Rebe\nSein langes Fell schlägt gegen die harte Blütenknospe\nseine Gegner.",
        "pt-br": "Floragato maneja habilmente a videira escondida abaixo\nseu longo pêlo, batendo o duro botão da flor contra\nseus adversários.",
        "zh-tw": "Floragato 巧妙地運用隱藏在下面的藤蔓\n它長長的毛皮，猛烈地撞擊著堅硬的花蕾\n它的對手。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 40,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
