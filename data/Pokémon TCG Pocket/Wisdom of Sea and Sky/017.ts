import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Sunflora",
        "fr": "Flore solaire",
        "es": "flora solar",
        "it": "Sunflora",
        "de": "Sonnenflora",
        "pt-br": "Sunflora",
        "zh-tw": "向日葵"
    },
    illustrator: "Yumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Sunkern",
        "fr": "Englouti",
        "es": "hundido",
        "it": "Affondato",
        "de": "Sunkern",
        "pt-br": "Afundado",
        "zh-tw": "下沉"
    },
    description: {
        en: "In the daytime, it rushes about in a hectic\nmanner, but it comes to a complete stop when\nthe sun sets.",
        "fr": "Le jour, il se précipite de manière trépidante\nmanière, mais il s'arrête complètement lorsque\nle soleil se couche.",
        "es": "Durante el día, corre de un modo frenético.\nmanera, pero se detiene por completo cuando\nel sol se pone.",
        "it": "Di giorno corre freneticamente\nmodo, ma si ferma completamente quando\nil sole tramonta.",
        "de": "Tagsüber herrscht Hektik\nArt und Weise, aber es kommt völlig zum Stillstand, wenn\ndie Sonne geht unter.",
        "pt-br": "Durante o dia, ele corre em uma agitação\nmaneira, mas para completamente quando\no sol se põe.",
        "zh-tw": "白天，它忙碌地奔波\n方式，但當它完全停止時\n太陽落山了。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Solar Beam",
                "fr": "Faisceau solaire",
                "es": "Haz solar",
                "it": "Raggio solare",
                "de": "Sonnenstrahl",
                "pt-br": "Raio Solar",
                "zh-tw": "太陽光束"
            },
            damage: 70,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
