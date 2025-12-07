import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Lugia ex",
        "fr": "Lugia ex",
        "es": "lugia ex",
        "it": "Lugia ex",
        "de": "Lugia ex",
        "pt-br": "Lugia ex",
        "zh-tw": "洛奇亞 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Elemental Blast",
                "fr": "Explosion élémentaire",
                "es": "Explosión elemental",
                "it": "Esplosione Elementale",
                "de": "Elementarexplosion",
                "pt-br": "Explosão Elemental",
                "zh-tw": "元素衝擊"
            },
            damage: 180,
            cost: ["Fire", "Water", "Lightning"],
            effect: {
                en: "Discard a {R}, {W}, and {L} Energy from this Pokémon.",
                "fr": "Défaussez une Énergie {R}, {W} et {L} de ce Pokémon.",
                "es": "Descarta una Energía {R}, {W} y {L} de este Pokémon.",
                "it": "Scarta un'Energia {R}, {W} e {L} da questo Pokémon.",
                "de": "Lege eine {R}-, {W}- und {L}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma energia {R}, {W} e {L} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 {R}、{W} 和 {L} 能量。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
