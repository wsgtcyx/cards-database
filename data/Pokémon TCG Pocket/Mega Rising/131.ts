import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Krokorok",
        "fr": "Krokorok",
        "es": "krokorok",
        "it": "Krokorok",
        "de": "Krokorok",
        "pt-br": "Crokorok",
        "zh-tw": "克羅科羅克"
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Sandile",
        "fr": "Sandile",
        "es": "sandil",
        "it": "Sandile",
        "de": "Sandile",
        "pt-br": "Sandália",
        "zh-tw": "桑迪萊"
    },
    description: {
        en: "Thanks to the special membrane covering its\neyes, it can see its surroundings clearly, even in\nthe middle of the night.",
        "fr": "Grâce à la membrane spéciale recouvrant son\nyeux, il peut voir clairement son environnement, même dans\nle milieu de la nuit.",
        "es": "Gracias a la membrana especial que cubre su\nojos, puede ver claramente su entorno, incluso en\nmedia noche.",
        "it": "Grazie alla speciale membrana che lo ricopre\nocchi, può vedere chiaramente ciò che lo circonda, anche dentro\nnel mezzo della notte.",
        "de": "Dank der speziellen Membran, die es bedeckt\nMit seinen Augen kann es seine Umgebung auch im Dunkeln klar erkennen\nmitten in der Nacht.",
        "pt-br": "Graças à membrana especial que cobre o seu\nolhos, ele pode ver claramente o que está ao seu redor, mesmo em\nno meio da noite.",
        "zh-tw": "由於其上覆蓋有特殊的薄膜\n眼睛能看清周圍的情況，即使在\n半夜。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 40,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
