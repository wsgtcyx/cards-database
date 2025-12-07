import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Zorua",
        "fr": "Zorua",
        "es": "Zorúa",
        "it": "Zorua",
        "de": "Zorua",
        "pt-br": "Zorua",
        "zh-tw": "索魯亞"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It changes into the forms of others to surprise\nthem. Apparently, it often transforms into a\nsilent child.",
        "fr": "Il se transforme en forme d'autrui pour surprendre\neux. Apparemment, cela se transforme souvent en\nenfant silencieux.",
        "es": "Cambia a las formas de otros para sorprender.\nellos. Al parecer, a menudo se transforma en un\nniño silencioso.",
        "it": "Si trasforma nelle forme degli altri per sorprendere\nloro. Apparentemente, spesso si trasforma in a\nbambino silenzioso.",
        "de": "Es verwandelt sich in die Formen anderer, um zu überraschen\nsie. Anscheinend verwandelt es sich oft in ein\nstilles Kind.",
        "pt-br": "Ele muda para a forma de outros para surpreender\neles. Aparentemente, muitas vezes se transforma em um\ncriança silenciosa.",
        "zh-tw": "變化成別人的形態給大家帶來驚喜\n他們。顯然，它經常轉變為\n沉默的孩子。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存"
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
