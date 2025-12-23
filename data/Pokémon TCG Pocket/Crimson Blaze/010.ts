import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Mothim",
        "fr": "Papilord",
        "es": "Mothim",
        "it": "Mothim",
        "de": "Moterpel",
        "pt-br": "Mothim",
        "zh-tw": "紳士蛾"
    },
    illustrator: "saino misaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Burmy",
        "fr": "Cheniti",
        "es": "Burmy",
        "it": "Burmy",
        "de": "Burmy",
        "pt-br": "Burmy",
        "zh-tw": "結草兒"
    },
    description: {
        en: "It flutters around at night and steals honey from\nthe Combee hive.",
        "fr": "Il voltige la nuit et vole du miel\nla ruche Combee.",
        "es": "Revolotea de noche y roba miel.\nla colmena Combee.",
        "it": "Svolazza di notte e ruba il miele\nl'alveare Combee.",
        "de": "Es flattert nachts herum und stiehlt Honig\nder Combee-Bienenstock.",
        "pt-br": "Ele flutua à noite e rouba mel de\na colmeia Combee.",
        "zh-tw": "它在夜間飛來飛去，偷取蜂蜜。\n庫姆蜂巢。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Cutting Wind",
                "fr": "Couper le vent",
                "es": "Viento cortante",
                "it": "Vento tagliente",
                "de": "Schneidender Wind",
                "pt-br": "Cortando o Vento",
                "zh-tw": "風切"
            },
            damage: 70,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
