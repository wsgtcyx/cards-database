import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/012",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/012",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/012"
    },
    name: {
        en: "Ledian",
        "fr": "Coxyclaque",
        "es": "Ledian",
        "it": "Ledian",
        "de": "Ledian",
        "pt-br": "Ledian",
        "zh-tw": "安瓢蟲",
    },
    illustrator: "Hitoshi Ariga",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Ledyba",
        "fr": "Lédyba",
        "es": "Ledyba",
        "it": "Ledyba",
        "de": "Ledyba",
        "pt-br": "Ledyba",
        "zh-tw": "芭瓢蟲",
    },
    description: {
        en: "It's said that the patterns on its back are\nrelated to the stars in the night sky, but the\ndetails of that relationship remain unclear.",
        "fr": "On dit que les motifs sur son dos sont\nlié aux étoiles dans le ciel nocturne, mais le\nles détails de cette relation restent flous.",
        "es": "Se dice que los patrones en su espalda son\nrelacionado con las estrellas en el cielo nocturno, pero el\nLos detalles de esa relación siguen sin estar claros.",
        "it": "Si dice che i motivi sul dorso lo siano\nlegato alle stelle nel cielo notturno, ma il\ni dettagli di tale relazione rimangono poco chiari.",
        "de": "Es wird gesagt, dass die Muster auf der Rückseite so sind\nim Zusammenhang mit den Sternen am Nachthimmel, aber die\nEinzelheiten dieser Beziehung bleiben unklar.",
        "pt-br": "Diz-se que os padrões nas suas costas são\nrelacionado com as estrelas no céu noturno, mas o\nos detalhes desse relacionamento permanecem obscuros.",
        "zh-tw": "據說它背上的圖案是\n與夜空中的星星有關，但\n這種關係的細節仍不清楚。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Punch",
                "fr": "Punch",
                "es": "Puñetazo",
                "it": "Punch",
                "de": "Stempel",
                "pt-br": "Soco",
                "zh-tw": "沖床"
            },
            damage: 50,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
