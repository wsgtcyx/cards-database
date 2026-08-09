import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/040",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/040",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/040",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/040",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/040",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/040",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/040"
    },
    name: {
        en: "Paldean Clodsire",
        fr: "Terraiste de Paldea",
        es: "Clodsire de Paldea",
        it: "Clodsire di Paldea",
        de: "Paldea-Suelord",
        "pt-br": "Clodsire de Paldea",
        "zh-tw": "帕底亞土王",
        ko: "팔데아 토오",
        ja: "パルデア ドオー"
    },
    illustrator: "Kouki Saitou",
    rarity: "None",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    dexId: [980],
    evolveFrom: {
        en: "Wooper",
        fr: "Axoloto",
        es: "Wooper",
        it: "Wooper",
        de: "Felino",
        "pt-br": "Wooper",
        "zh-tw": "烏波",
        ko: "팔데아 우파",
        ja: "パルデア ウパー"
    },
    stage: "Stage1",
    description: {
        en: "It lives at the bottom of ponds and swamps. It will carry Wooper on its back and ferry them across water from one shore to the other.",
        fr: "Il vit au fond des étangs et des marécages. Il portera Wooper sur son dos et les transportera sur l'eau d'une rive à l'autre.",
        es: "Vive en el fondo de estanques y pantanos. Llevará a Wooper en su espalda y lo transportará a través del agua de una orilla a la otra.",
        it: "Vive sul fondo di stagni e paludi. Trasporterà Wooper sul dorso e li traghetterà attraverso l'acqua da una riva all'altra.",
        de: "Es lebt am Grund von Teichen und Sümpfen. Es wird Wooper auf seinem Rücken tragen und sie über das Wasser von einem Ufer zum anderen befördern.",
        "pt-br": "Vive no fundo de lagoas e pântanos. Ele carregará Wooper nas costas e os transportará através da água de uma margem a outra.",
        "zh-tw": "它生活在池塘和沼澤的底部。它將把伍珀背在背上，並將他們從一岸運送到另一岸。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness", "Colorless"],
            name: {
                en: "Muddy Hammer",
                fr: "Marteau Boueux",
                es: "Martillo Lodoso",
                it: "Fangomartello",
                de: "Schlammhammer",
                "pt-br": "Martelo Lamacento",
                "zh-tw": "泥水之錘"
            },
            effect: {
                en: "Discard the top card of your opponent's deck.",
                fr: "Défaussez la carte du dessus du deck de votre adversaire.",
                es: "Descarta la carta superior del mazo de tu oponente.",
                it: "Scarta la prima carta del mazzo del tuo avversario.",
                de: "Wirf die oberste Karte des Decks deines Gegners ab.",
                "pt-br": "Descarte a carta do topo do baralho do seu oponente.",
                "zh-tw": "丟棄對手牌組頂牌。"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: []
};

export default card;
