import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Slugma",
        "fr": "Limagma",
        "es": "Slugma",
        "it": "Slugma",
        "de": "Slugma",
        "pt-br": "Slugma",
        "zh-tw": "熔岩蟲",
    },
    illustrator: "Mékayu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    description: {
        en: "A common sight in volcanic areas, it slowly slithers\naround in a constant search for warm places.",
        "fr": "Un spectacle courant dans les zones volcaniques, il glisse lentement\ndans une recherche constante d'endroits chauds.",
        "es": "Una vista común en áreas volcánicas, se desliza lentamente\nalrededor en una búsqueda constante de lugares cálidos.",
        "it": "Uno spettacolo comune nelle aree vulcaniche, scivola lentamente\nin giro alla costante ricerca di luoghi caldi.",
        "de": "Es ist ein häufiger Anblick in vulkanischen Gebieten und gleitet langsam dahin\nauf der ständigen Suche nach warmen Orten.",
        "pt-br": "Uma visão comum em áreas vulcânicas, desliza lentamente\nem busca constante de lugares quentes.",
        "zh-tw": "它在火山地區很常見，它緩慢地滑行\n不斷地尋找溫暖的地方。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stampede",
                "fr": "Débandade",
                "es": "Estampida",
                "it": "Fuga precipitosa",
                "de": "Ansturm",
                "pt-br": "Debandada",
                "zh-tw": "踩踏"
            },
            damage: 30,
            cost: ["Fire", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
