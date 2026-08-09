import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/080",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/080",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/080",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/080",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/080",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/080",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/080"
    },
    name: {
        en: "Machoke",
        "fr": "Machopeur",
        "es": "Machoke",
        "it": "Machoke",
        "de": "Maschock",
        "pt-br": "Machoke",
        "zh-tw": "豪力"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Machop",
        "fr": "Machoc",
        "es": "Machop",
        "it": "Machop",
        "de": "Machollo",
        "pt-br": "Machop",
        "zh-tw": "腕力"
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
