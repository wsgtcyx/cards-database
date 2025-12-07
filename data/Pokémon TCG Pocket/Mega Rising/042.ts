import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Lampent",
        "fr": "Lampe",
        "es": "lámpara",
        "it": "Lampada",
        "de": "Lampent",
        "pt-br": "Lampente",
        "zh-tw": "燈籠"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Litwick",
        "fr": "Litwick",
        "es": "litwick",
        "it": "Litwick",
        "de": "Litwick",
        "pt-br": "Litwick",
        "zh-tw": "利特威克"
    },
    description: {
        en: "It lurks in cities, pretending to be a lamp.\nOnce it finds someone whose death is near,\nit will trail quietly after them.",
        "fr": "Il rôde dans les villes, se faisant passer pour une lampe.\nUne fois qu'il trouve quelqu'un dont la mort est proche,\nil les suivra tranquillement.",
        "es": "Acecha en las ciudades, haciéndose pasar por una lámpara.\nUna vez que encuentra a alguien cuya muerte está cerca,\nlos seguirá silenciosamente.",
        "it": "Si nasconde nelle città, fingendo di essere una lampada.\nUna volta trovato qualcuno la cui morte è vicina,\nli seguirà silenziosamente.",
        "de": "Es lauert in Städten und gibt vor, eine Lampe zu sein.\nSobald es jemanden findet, dessen Tod nahe ist,\nes wird ihnen leise folgen.",
        "pt-br": "Espreita nas cidades, fingindo ser uma lâmpada.\nUma vez que encontra alguém cuja morte está próxima,\nele seguirá silenciosamente atrás deles.",
        "zh-tw": "它潛伏在城市中，假裝是一盞燈。\n一旦它發現某人快要死了，\n它會悄悄地跟在他們後面。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Will-O-Wisp",
                "fr": "Feu Follet",
                "es": "Fuego fatuo",
                "it": "Fuoco fatuo",
                "de": "Irrlicht",
                "pt-br": "Will-O-Wisp",
                "zh-tw": "鬼火"
            },
            damage: 40,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
