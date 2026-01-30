import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Machoke",
        "fr": "Machoke",
        "es": "Machoke",
        "it": "Machoke",
        "de": "Machoke",
        "pt-br": "Machoke",
        "zh-tw": "馬喬克"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Machop",
        "fr": "Machop",
        "es": "Machop",
        "it": "Machop",
        "de": "Machop",
        "pt-br": "Machop",
        "zh-tw": "馬喬普"
    },
    description: {
        en: "Its formidable body never gets tired. It helps\npeople by doing work such as the moving of\nheavy goods.",
        "fr": "Son corps redoutable ne se fatigue jamais. Ça aide\npersonnes en effectuant des travaux tels que le déménagement\nmarchandises lourdes.",
        "es": "Su formidable cuerpo nunca se cansa. ayuda\npersonas realizando trabajos como el traslado de\nmercancías pesadas.",
        "it": "Il suo corpo formidabile non si stanca mai. Aiuta\npersone svolgendo lavori come il trasloco\nmerci pesanti.",
        "de": "Sein beeindruckender Körper wird nie müde. Es hilft\nMenschen durch Arbeiten wie den Umzug\nschwere Güter.",
        "pt-br": "Seu corpo formidável nunca se cansa. Isso ajuda\npessoas realizando trabalhos como a mudança de\nmercadorias pesadas.",
        "zh-tw": "它強大的身體永遠不會疲倦。它有幫助\n人們通過做諸如搬家之類的工作\n重貨。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Chop",
                "fr": "Hacher",
                "es": "Cortar",
                "it": "Taglio",
                "de": "Hacken",
                "pt-br": "Cortar",
                "zh-tw": "劈"
            },
            damage: 40,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
