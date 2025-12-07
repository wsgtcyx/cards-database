import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Torchic",
        "fr": "Torchique",
        "es": "Antorcha",
        "it": "Torchic",
        "de": "Torchisch",
        "pt-br": "Tocha",
        "zh-tw": "火稚雞",
    },
    illustrator: "GOSSAN",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "A fire burns inside, so it feels very warm to hug.\nIt launches fireballs of 1,800 degrees Fahrenheit.",
        "fr": "Un feu brûle à l’intérieur, donc il fait très chaud à serrer dans ses bras.\nIl lance des boules de feu à 1 800 degrés Fahrenheit.",
        "es": "Un fuego arde en el interior, por lo que se siente muy cálido abrazarlo.\nLanza bolas de fuego de 1.800 grados Fahrenheit.",
        "it": "Un fuoco arde dentro, quindi è molto caldo abbracciarsi.\nLancia palle di fuoco di 1.800 gradi Fahrenheit.",
        "de": "Im Inneren brennt ein Feuer, daher fühlt es sich sehr warm an, wenn man es umarmt.\nEs feuert Feuerbälle mit einer Temperatur von 1.800 Grad Fahrenheit ab.",
        "pt-br": "Um fogo queima por dentro, então é muito quente abraçar.\nEle lança bolas de fogo de 1.800 graus Fahrenheit.",
        "zh-tw": "裡面有一團火在燃燒，擁抱起來感覺很溫暖。\n它發射 1,800 華氏度的火球。"
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
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
