import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Kirlia",
        "fr": "Kirlia",
        "es": "kirlia",
        "it": "Kirlia",
        "de": "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "奇魯莉安",
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Ralts",
        "fr": "Ralts",
        "es": "Ralts",
        "it": "Ralts",
        "de": "Ralts",
        "pt-br": "Ralts",
        "zh-tw": "拉魯拉絲",
    },
    description: {
        en: "It has a psychic power that enables it to distort\nthe space around it and see into the future.",
        "fr": "Il possède un pouvoir psychique qui lui permet de déformer\nl'espace qui l'entoure et voir vers l'avenir.",
        "es": "Tiene un poder psíquico que le permite distorsionar\nel espacio que lo rodea y ver el futuro.",
        "it": "Ha un potere psichico che gli consente di distorcere\nlo spazio circostante e vedere nel futuro.",
        "de": "Es verfügt über eine psychische Kraft, die es ihm ermöglicht, zu verzerren\nden Raum um sich herum und blicke in die Zukunft.",
        "pt-br": "Tem um poder psíquico que lhe permite distorcer\no espaço ao seu redor e ver o futuro.",
        "zh-tw": "它擁有一種精神力量，可以扭曲\n周圍的空間並展望未來。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slap",
                "fr": "Gifler",
                "es": "Bofetada",
                "it": "Schiaffo",
                "de": "Schlagen",
                "pt-br": "Tapa",
                "zh-tw": "拍擊"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
