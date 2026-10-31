import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/098",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/098",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/098",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/098",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/098",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/098",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/098",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-B/098"
    },
    name: {
        en: "Gabite",
        fr: "Carmache",
        es: "Gabite",
        it: "Gabite",
        de: "Knarksel",
        "pt-br": "Gabite",
        "zh-tw": "尖牙陸鯊",
        ja: "ガバイト",
        ko: "한바이트"
    },
    illustrator: "hatachu",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Dragon"
    ],
    dexId: [
        444
    ],
    evolveFrom: {
        en: "Gible",
        fr: "Griknot",
        es: "Gible",
        it: "Gible",
        de: "Kaumalat",
        "pt-br": "Gible",
        "zh-tw": "圓陸鯊",
        ja: "フカマル",
        ko: "딥상어동"
    },
    stage: "Stage1",
    description: {
        en: "It loves sparkly things. It seeks treasures in caves and hoards the loot in its nest.",
        fr: "Toujours à la recherche d'objets brillants, il arpente les grottes pour amasser son butin.",
        es: "Le gustan las cosas brillantes. Busca tesoros en cuevas y se lleva el botin a su nido.",
        it: "Adora gli oggetti luccicanti. Va a caccia di tesori nelle grotte e li trasporta nel suo nido.",
        de: "Es liebt funkelnde Dinge und sucht in Höhlen nach Schätzen, die es dann in seinem Nest hortet.",
        "pt-br": "Adora objetos cintilantes. Ele procura tesouros nas cavernas e armazena os saques em seu ninho.",
        "zh-tw": "最喜歡閃閃發光的東西，所以會把在洞窟裡找到的寶物積存到自己的巢穴裡。",
        ja: "光り輝く ものが 大好きで 洞窟の 中で 見つけた 宝を 自分の巣に ためこむ。"
    },
    attacks: [
        {
            cost: [
                "Water",
                "Fighting"
            ],
            name: {
                en: "Linear Attack",
                fr: "Attaque Linéaire",
                es: "Ataque Lineal",
                it: "Attacco Lineare",
                de: "Linearer Angriff",
                "pt-br": "Ataque Linear",
                "zh-tw": "直擊彈",
                ja: "ちょくげきだん"
            },
            effect: {
                en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "對手的1隻寶可夢受到50點傷害。",
                ja: "相手のポケモン1匹に50ダメージ。"
            }
        }
    ],
    retreat: 1,
    boosters: [
        "vol13"
    ]
};

export default card;
