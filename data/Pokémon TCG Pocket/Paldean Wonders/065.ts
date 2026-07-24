import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/065",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/065"
    },
    name: {
        en: "Paldean Clodsire",
        fr: "Terraiste de Paldea",
        es: "Clodsire de Paldea",
        it: "Clodsire di Paldea",
        de: "Paldea-Suelord",
        "pt-br": "Clodsire",
        "zh-tw": "帕底亞 土王",
        pt: "Clodsire de Paldea"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    dexId: [980],
    evolveFrom: {
        en: "Paldean Wooper",
        fr: "Axoloto de Paldea",
        es: "Wooper de Paldea",
        it: "Wooper di Paldea",
        de: "Paldea-Felino",
        "pt-br": "Wooper",
        "zh-tw": "帕底亞 烏波",
        'es-mx': "Wooper de Paldea",
        pt: "Wooper de Paldea"
    },
    description: {
        en: "It lives at the bottom of ponds and swamps. It will carry Wooper on its back and ferry them across water from one shore to the other.",
        "fr": "Il vit au fond des étangs et des marécages. Il portera Wooper sur son dos et les transportera sur l'eau d'une rive à l'autre.",
        "es": "Vive en el fondo de estanques y pantanos. Llevará a Wooper en su espalda y lo transportará a través del agua de una orilla a la otra.",
        "it": "Vive sul fondo di stagni e paludi. Trasporterà Wooper sul dorso e li traghetterà attraverso l'acqua da una riva all'altra.",
        "de": "Es lebt am Grund von Teichen und Sümpfen. Es wird Wooper auf seinem Rücken tragen und sie über das Wasser von einem Ufer zum anderen befördern.",
        "pt-br": "Vive no fundo de lagoas e pântanos. Ele carregará Wooper nas costas e os transportará através da água de uma margem a outra.",
        "zh-tw": "它生活在池塘和沼澤的底部。它將把伍珀背在背上，並將他們從一岸運送到另一岸。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Muddy Hammer",
                fr: "Marteau Boueux",
                es: "Martillo Lodoso",
                it: "Fangomartello",
                de: "Schlammhammer",
                "pt-br": "Martelo Enlameado",
                "zh-tw": "土錘",
                pt: "Martelo Lamacento"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "Discard the top card of your opponent's deck.",
                fr: "Défaussez la carte du dessus du deck de votre adversaire.",
                es: "Descarta la primera carta de la baraja de tu rival.",
                it: "Scarta la prima carta del mazzo del tuo avversario.",
                de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel.",
                "pt-br": "Descarte a carta do topo do baralho do seu oponente.",
                "zh-tw": "丟棄對手牌組頂牌。",
                pt: "Descarte a carta de cima do baralho do seu oponente."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
