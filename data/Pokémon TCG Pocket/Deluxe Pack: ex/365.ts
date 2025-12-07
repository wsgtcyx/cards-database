import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Mewtwo ex",
        "fr": "Mewtwo ex",
        "es": "mewtwo ex",
        "it": "Mewtwo es",
        "de": "Mewtwo ex",
        "pt-br": "Mewtwo ex",
        "zh-tw": "超夢EX"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 150,
    types: ["Psychic"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Psychic Sphere",
                "fr": "Sphère psychique",
                "es": "Esfera psíquica",
                "it": "Sfera psichica",
                "de": "Psychische Sphäre",
                "pt-br": "Esfera Psíquica",
                "zh-tw": "心靈領域"
            },
            damage: 50,
            cost: ["Psychic", "Colorless"]
        }, {
            name: {
                en: "Psydrive",
                "fr": "Lecteur Psy",
                "es": "psidrive",
                "it": "Psydrive",
                "de": "Psydrive",
                "pt-br": "Psicodrive",
                "zh-tw": "心靈驅動器"
            },
            damage: 150,
            cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
            effect: {
                en: "Discard 2 {P} Energy from this Pokémon.",
                "fr": "Défaussez 2 {P} Énergie de ce Pokémon.",
                "es": "Descarta 2 {P} de Energía de este Pokémon.",
                "it": "Scarta 2 Energie {P} da questo Pokémon.",
                "de": "Lege 2 {P}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 2 {P} Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 2 個 {P} 能量。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
