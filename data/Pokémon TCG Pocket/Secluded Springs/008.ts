import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Slugma",
        "fr": "Limagma",
        "es": "Slugma",
        "it": "Slugma",
        "de": "Slugma",
        "pt-br": "Slugma",
        "zh-tw": "斯盧格馬"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
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
                en: "Combustion",
                "fr": "Combustion",
                "es": "Combustión",
                "it": "Combustione",
                "de": "Verbrennung",
                "pt-br": "Combustão",
                "zh-tw": "燃燒"
            },
            damage: 40,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
