import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Shellder",
        "fr": "Kokiyas",
        "es": "Shellder",
        "it": "Shellder",
        "de": "Muschas",
        "pt-br": "Shellder",
        "zh-tw": "大舌貝"
    },
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "It is encased in a shell that is harder than diamond.\nInside, however, it is surprisingly tender.",
        "fr": "Il est enfermé dans une coquille plus dure que le diamant.\nÀ l’intérieur, cependant, il est étonnamment tendre.",
        "es": "Está encerrado en una concha que es más dura que el diamante.\nPor dentro, sin embargo, es sorprendentemente tierno.",
        "it": "È racchiuso in un guscio più duro del diamante.\nAll'interno, tuttavia, è sorprendentemente tenero.",
        "de": "Es ist von einer Schale umgeben, die härter als Diamant ist.\nIm Inneren ist es jedoch überraschend zart.",
        "pt-br": "Está envolto em uma concha que é mais dura que o diamante.\nPor dentro, porém, é surpreendentemente macio.",
        "zh-tw": "它被包裹在比鑽石還硬的殼裡。\n然而，它的內部卻出奇的柔軟。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "撞擊"
            },
            damage: 10,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
