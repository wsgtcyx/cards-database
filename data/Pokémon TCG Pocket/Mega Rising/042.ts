import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/042",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/042",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/042",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/042",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/042",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/042",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/042"
    },
    name: {
        en: "Lampent",
        "fr": "Mélancolux",
        "es": "Lampent",
        "it": "Lampent",
        "de": "Laternecto",
        "pt-br": "Lampent",
        "zh-tw": "燈火幽靈",
    },
    illustrator: "Kyoko Umemoto",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Litwick",
        "fr": "Funécire",
        "es": "Litwick",
        "it": "Litwick",
        "de": "Lichtel",
        "pt-br": "Litwick",
        "zh-tw": "燭光靈",
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
