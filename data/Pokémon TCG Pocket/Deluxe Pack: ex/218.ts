import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Crabrawler",
        "fr": "Crabrawler",
        "es": "cangrejo",
        "it": "Crabrawler",
        "de": "Krabbenjäger",
        "pt-br": "Caranguejo",
        "zh-tw": "爬行者"
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "This Pokémon punches trees and eats\nthe berries that drop down, training itself\nand getting food at the same time.",
        "fr": "Ce Pokémon frappe les arbres et mange\nles baies qui tombent, s'entraînent\net obtenir de la nourriture en même temps.",
        "es": "Este Pokémon golpea árboles y come\nlas bayas que caen, entrenándose\ny conseguir comida al mismo tiempo.",
        "it": "Questo Pokémon prende a pugni gli alberi e mangia\nle bacche che cadono formandosi\ne procurarsi il cibo allo stesso tempo.",
        "de": "Dieses Pokémon schlägt Bäume und frisst\ndie Beeren, die herunterfallen und sich trainieren\nund gleichzeitig Essen bekommen.",
        "pt-br": "Este Pokémon soca árvores e come\nas bagas que caem, treinando-se\ne conseguir comida ao mesmo tempo.",
        "zh-tw": "這只神奇寶貝會打樹並吃東西\n掉落下來的漿果，自我訓練\n並同時獲取食物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Punch",
                "fr": "Punch",
                "es": "Puñetazo",
                "it": "Punch",
                "de": "Stempel",
                "pt-br": "Soco",
                "zh-tw": "沖床"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
