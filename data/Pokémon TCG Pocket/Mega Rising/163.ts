import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/163",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/163",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/163",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/163",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/163",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/163"
    },
    name: {
        en: "Impidimp",
        "fr": "Grimalin",
        "es": "Impidimp",
        "it": "Impidimp",
        "de": "Bähmon",
        "pt-br": "Impidimp",
        "zh-tw": "搗蛋小妖",
    },
    illustrator: "Rianti Hidayat",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "They live in groups, pestering and playing pranks\non each other to polish their troublemaking skills.",
        "fr": "Ils vivent en groupe, harcelant et faisant des farces\nles uns sur les autres pour perfectionner leurs compétences en matière de fauteur de troubles.",
        "es": "Viven en grupos, molestando y gastando bromas.\nunos a otros para pulir sus habilidades para crear problemas.",
        "it": "Vivono in gruppi, importunando e facendo scherzi\nl'uno sull'altro per affinare le proprie capacità di creare problemi.",
        "de": "Sie leben in Gruppen, belästigen und spielen Streiche\naufeinander, um ihre Unruhestifterfähigkeiten zu verbessern.",
        "pt-br": "Eles vivem em grupos, importunando e pregando peças\nuns com os outros para aprimorar suas habilidades de criar problemas.",
        "zh-tw": "他們成群結隊地生活，糾纏著、惡作劇\n互相磨練他們製造麻煩的技巧。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
