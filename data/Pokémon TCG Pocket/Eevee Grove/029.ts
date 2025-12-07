import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Woobat",
        "fr": "Woobat",
        "es": "Woobat",
        "it": "Woobat",
        "de": "Woobat",
        "pt-br": "Uau",
        "zh-tw": "滾滾蝙蝠",
    },
    illustrator: "match",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "While inside a cave, if you look up and see lots\nof heart-shaped marks lining the walls, it's\nevidence that Woobat live there.",
        "fr": "À l'intérieur d'une grotte, si vous levez les yeux et voyez beaucoup de choses\nde marques en forme de cœur bordant les murs, c'est\npreuve que Woobat y vit.",
        "es": "Mientras estás dentro de una cueva, si miras hacia arriba y ves muchas\nde marcas en forma de corazón que recubren las paredes, es\nevidencia de que los Woobat viven allí.",
        "it": "Mentre sei all'interno di una grotta, se alzi lo sguardo e vedi molto\ndi segni a forma di cuore che ricoprono le pareti, è\nprova che Woobat vive lì.",
        "de": "Wenn Sie in einer Höhle nach oben schauen und viel sehen\nEs gibt herzförmige Markierungen an den Wänden\nBeweise dafür, dass Woobat dort lebt.",
        "pt-br": "Enquanto estiver dentro de uma caverna, se você olhar para cima e ver muitas\nde marcas em forma de coração revestindo as paredes, é\nevidência de que Woobat mora lá.",
        "zh-tw": "在洞穴內時，如果你抬頭看到很多\n牆上排列著心形的標記，它是\n伍巴特住在那裡的證據。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Gust",
                "fr": "Rafale",
                "es": "Ráfaga",
                "it": "Raffica",
                "de": "Böe",
                "pt-br": "Rajada",
                "zh-tw": "陣風"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
