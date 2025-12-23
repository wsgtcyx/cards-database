import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Clauncher",
        "fr": "Flingouste",
        "es": "Clauncher",
        "it": "Clauncher",
        "de": "Scampisto",
        "pt-br": "Clauncher",
        "zh-tw": "鐵臂槍蝦"
    },
    illustrator: "Krgc",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "Clauncher's claws will regrow if they fall off.\nThe meat inside the claws is edible, but it has a\ndistinct flavor that doesn't appeal to all tastes.",
        "fr": "Les griffes de Clauncher repousseront si elles tombent.\nLa viande à l'intérieur des griffes est comestible, mais elle a une\nsaveur distincte qui ne plaît pas à tous les goûts.",
        "es": "Las garras de Clauncher volverán a crecer si se caen.\nLa carne dentro de las garras es comestible, pero tiene una\nsabor distintivo que no atrae a todos los gustos.",
        "it": "Gli artigli di Clauncher ricresceranno se cadono.\nLa carne all'interno degli artigli è commestibile, ma ha un\nsapore deciso che non piace a tutti i gusti.",
        "de": "Die Krallen des Claunchers wachsen nach, wenn sie abfallen.\nDas Fleisch in den Krallen ist essbar, hat aber eine\nausgeprägter Geschmack, der nicht jeden Geschmack anspricht.",
        "pt-br": "As garras do Clauncher crescerão novamente se caírem.\nA carne dentro das garras é comestível, mas tem um\nsabor distinto que não agrada a todos os gostos.",
        "zh-tw": "如果發射器的爪子脫落，它們會重新長出來。\n爪子裡面的肉是可以吃的，但是有一個\n獨特的風味並不適合所有口味。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
