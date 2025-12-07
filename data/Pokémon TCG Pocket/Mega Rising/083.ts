import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Flaaffy",
        "fr": "Flaaffy",
        "es": "flaco",
        "it": "Flaaffy",
        "de": "Flaaffy",
        "pt-br": "Flaaffy",
        "zh-tw": "弗拉菲"
    },
    illustrator: "Shibuzoh.",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Mareep",
        "fr": "Mareep",
        "es": "Mareep",
        "it": "Mareep",
        "de": "Mareep",
        "pt-br": "Mareep",
        "zh-tw": "馬里普"
    },
    description: {
        en: "Because of its rubbery, electricity-resistant skin,\nit can store lots of electricity in its fur.",
        "fr": "En raison de sa peau caoutchouteuse et résistante à l'électricité,\nil peut stocker beaucoup d'électricité dans sa fourrure.",
        "es": "Debido a su piel gomosa y resistente a la electricidad,\nPuede almacenar mucha electricidad en su pelaje.",
        "it": "A causa della sua pelle gommosa e resistente all'elettricità,\npuò immagazzinare molta elettricità nella sua pelliccia.",
        "de": "Aufgrund seiner gummiartigen, strombeständigen Haut\nEs kann viel Strom in seinem Fell speichern.",
        "pt-br": "Devido à sua pele emborrachada e resistente à eletricidade,\nele pode armazenar muita eletricidade em seu pelo.",
        "zh-tw": "由於其橡膠狀、耐電的皮膚，\n它的皮毛可以儲存大量的電力。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electric Punch",
                "fr": "Poinçon électrique",
                "es": "Punzón eléctrico",
                "it": "Pugno elettrico",
                "de": "Elektrischer Schlag",
                "pt-br": "Soco Elétrico",
                "zh-tw": "電動沖床"
            },
            damage: 40,
            cost: ["Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
