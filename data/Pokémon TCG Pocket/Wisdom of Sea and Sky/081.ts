import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Natu",
        "fr": "Natu",
        "es": "natural",
        "it": "Natura",
        "de": "Natu",
        "pt-br": "Natu",
        "zh-tw": "天然雀",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "It is extremely good at climbing tree trunks and\nlikes to eat the new sprouts on the trees.",
        "fr": "Il est extrêmement doué pour grimper aux troncs d'arbres et\naime manger les nouvelles pousses des arbres.",
        "es": "Es extremadamente bueno trepando por los troncos de los árboles y\nLe gusta comerse los nuevos brotes de los árboles.",
        "it": "È estremamente bravo ad arrampicarsi sui tronchi degli alberi e\ngli piace mangiare i nuovi germogli sugli alberi.",
        "de": "Es ist sehr gut darin, auf Baumstämme zu klettern\nfrisst gerne die neuen Triebe an den Bäumen.",
        "pt-br": "É extremamente bom para subir em troncos de árvores e\ngosta de comer os novos brotos das árvores.",
        "zh-tw": "它非常擅長攀爬樹幹\n喜歡吃樹上新芽。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Peck",
                "fr": "Picorer",
                "es": "Picotear",
                "it": "Pecca",
                "de": "Picken",
                "pt-br": "Peck",
                "zh-tw": "啄"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
