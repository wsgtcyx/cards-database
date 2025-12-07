import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Staryu",
        "fr": "Staryu",
        "es": "Staryu",
        "it": "Staryu",
        "de": "Staryu",
        "pt-br": "Staryu",
        "zh-tw": "斯塔尤"
    },
    illustrator: "Hiroki Asanuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Water"],
    description: {
        en: "If you visit a beach at the end of summer, you'll\nbe able to see groups of Staryu lighting up in a\nsteady rhythm.",
        "fr": "Si vous visitez une plage à la fin de l'été, vous\npouvoir voir des groupes de Staryu s'illuminer dans un\nrythme soutenu.",
        "es": "Si visitas una playa a finales de verano, podrás\npoder ver grupos de Staryu iluminándose en un\nritmo constante.",
        "it": "Se visiti una spiaggia alla fine dell'estate, lo farai\npoter vedere gruppi di Staryu illuminarsi in a\nritmo costante.",
        "de": "Wenn Sie am Ende des Sommers einen Strand besuchen, werden Sie es tun\nin der Lage sein, Gruppen von Staryu aufleuchten zu sehen\ngleichmäßiger Rhythmus.",
        "pt-br": "Se você visitar uma praia no final do verão, você\npoder ver grupos de Staryu iluminando-se em um\nritmo constante.",
        "zh-tw": "如果你在夏末去海灘，你會\n能夠看到成群的Staryu在一個\n穩定的節奏。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Smack",
                "fr": "Claque",
                "es": "Golpe",
                "it": "Schiaffo",
                "de": "Klatschen",
                "pt-br": "Bater",
                "zh-tw": "斯馬克"
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
