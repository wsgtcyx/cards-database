import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Petilil",
        "fr": "Pétilil",
        "es": "Petilil",
        "it": "Petilil",
        "de": "Petilil",
        "pt-br": "Petilil",
        "zh-tw": "佩蒂利爾"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "If the leaves on its head are pruned with\nregularity, this Pokémon can be grown into\na fine plump shape.",
        "fr": "Si les feuilles sur sa tête sont taillées avec\nrégularité, ce Pokémon peut devenir\nune forme fine et rebondie.",
        "es": "Si se podan las hojas de su cabeza con\nregularidad, este Pokémon puede convertirse en\nuna forma fina y regordeta.",
        "it": "Se le foglie sulla sua testa vengono potate con\nregolarità, è possibile far crescere questo Pokémon\nuna bella forma paffuta.",
        "de": "Wenn die Blätter auf seinem Kopf beschnitten werden\nRegelmäßigkeit, in die dieses Pokémon hineinwachsen kann\neine schöne, pralle Form.",
        "pt-br": "Se as folhas da sua cabeça forem podadas com\nregularidade, este Pokémon pode ser transformado em\numa forma rechonchuda e fina.",
        "zh-tw": "如果它頭上的葉子被修剪掉\n規律性，這個神奇寶貝可以成長為\n精緻豐滿的形狀。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flop",
                "fr": "Fiasco",
                "es": "Fracaso",
                "it": "Flop",
                "de": "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
