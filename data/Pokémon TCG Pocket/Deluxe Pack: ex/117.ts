import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Popplio",
        "fr": "Popplio",
        "es": "poplio",
        "it": "Popplio",
        "de": "Popplio",
        "pt-br": "Popplio",
        "zh-tw": "波普利奧"
    },
    illustrator: "match",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "The balloons it inflates with its nose grow\nlarger and larger as it practices day by day.",
        "fr": "Les ballons qu'il gonfle avec son nez grandissent\nde plus en plus grand à mesure qu'il s'entraîne jour après jour.",
        "es": "Los globos que infla con su nariz crecen\nmás y más grande a medida que se practica día a día.",
        "it": "I palloncini che gonfia con il naso crescono\nsempre più grande man mano che si esercita giorno dopo giorno.",
        "de": "Die Ballons, die es mit seiner Nase aufbläst, wachsen\ngrößer und größer, je mehr es Tag für Tag praktiziert.",
        "pt-br": "Os balões que ele infla com o nariz crescem\ncada vez maior à medida que pratica dia após dia.",
        "zh-tw": "它用鼻子吹的氣球長大了\n隨著它日復一日的練習，它變得越來越大。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Watering",
                "fr": "Arrosage",
                "es": "Riego",
                "it": "Irrigazione",
                "de": "Bewässerung",
                "pt-br": "Rega",
                "zh-tw": "澆水"
            },
            damage: 30,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
