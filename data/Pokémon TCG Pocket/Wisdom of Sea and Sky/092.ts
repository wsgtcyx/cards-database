import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Onix",
        "fr": "Onix",
        "es": "ónix",
        "it": "Onice",
        "de": "Onix",
        "pt-br": "Ônix",
        "zh-tw": "大岩蛇",
    },
    illustrator: "KEIICHIRO ITO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    description: {
        en: "As it digs through the ground, it absorbs many\nhard objects. This is what makes its body so solid.",
        "fr": "En creusant le sol, il absorbe beaucoup\nobjets durs. C'est ce qui rend son corps si solide.",
        "es": "Mientras excava en el suelo, absorbe muchos\nobjetos duros. Esto es lo que hace que su cuerpo sea tan sólido.",
        "it": "Mentre scava nel terreno, ne assorbe molti\noggetti duri. Questo è ciò che rende il suo corpo così solido.",
        "de": "Während es sich durch den Boden gräbt, nimmt es viele auf\nharte Gegenstände. Das macht seinen Körper so robust.",
        "pt-br": "À medida que escava o solo, absorve muitos\nobjetos duros. É isso que torna seu corpo tão sólido.",
        "zh-tw": "當它挖掘地面時，它吸收了許多\n堅硬的物體。這就是它的身體如此堅固的原因。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 50,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh"]
};
export default card;
