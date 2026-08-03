import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/113",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/113",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/113",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/113",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/113",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/113",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/113"
    },
    name: {
        en: "Single Strike Urshifu",
        fr: "Shifours Poing Final",
        es: "Urshifu Estilo Brusco",
        it: "Urshifu Stile Singolcolpo",
        de: "Wulaosu Fokussierter Stil",
        "pt-br": "Urshifu Estilo Golpe Decisivo",
        "zh-tw": "一擊武道熊師",
        ko: "일격 우라오스",
        ja: "いちげきウーラオス"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    dexId: [892],
    evolveFrom: {
        en: "Kubfu",
        fr: "Wushours",
        es: "Kubfu",
        it: "Kubfu",
        de: "Dakuma",
        "pt-br": "Kubfu",
        "zh-tw": "熊徒弟",
        ko: "치고마",
        ja: "ダクマ"
    },
    stage: "Stage1",
    description: {
        en: "This form of Urshifu is a strong believer in the one-hit KO. Its strategy is to leap in close to foes and land a devastating blow with a hardened fist.",
        fr: "Adepte des techniques pouvant mettre K.O.\nen un seul coup, il se jette sur son adversaire\net le frappe de son poing robuste.",
        es: "Su estilo de lucha se basa en abatir a sus rivales\nde un solo golpe. Se abalanza sobre ellos con su\npuño cincelado por el entrenamiento.",
        it: "Il suo credo è sconfiggere l’avversario con un\ncolpo solo. Si lancia sul nemico e lo colpisce con\nun pugno potenziato al massimo dall’allenamento.",
        de: "Es ist darauf spezialisiert, Gegner mit nur einem\nTreffer zu bezwingen, indem es sie schlagartig\nanfällt und einen fokussierten Hieb austeilt.",
        "pt-br": "Esta forma de Urshifu acredita fortemente no nocaute de um golpe. Sua estratégia é saltar perto dos inimigos e desferir um golpe devastador com o punho endurecido.",
        "zh-tw": "一擊必殺是牠的信念。\n會衝進對手的懷裡，不留情地\n用千錘百煉的拳頭給予一擊。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Double Type",
                fr: "Type double",
                es: "Tipo doble",
                it: "Doppio tipo",
                de: "Doppelter Typ",
                "pt-br": "Tipo Duplo",
                "zh-tw": "雙重屬性"
            },
            effect: {
                en: "As long as this Pokémon is in play, it is {F} and {D} type.",
                fr: "Tant que ce Pokémon est en jeu, il est de type {F} et {D}.",
                es: "Mientras este Pokémon esté en juego, es de tipo {F} y {D}.",
                it: "Finché questo Pokémon è in gioco, è di tipo {F} e {D}.",
                de: "Solange dieses Pokémon im Spiel ist, ist es vom Typ {F} und {D}.",
                "pt-br": "Enquanto este Pokémon estiver em jogo, ele será do tipo {F} e {D}.",
                "zh-tw": "只要這隻寶可夢在場，它就是{F}和{D}類型。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Darkness", "Darkness", "Colorless"],
            name: {
                en: "Power Blast",
                fr: "Violente Déflagration",
                es: "Estallido Vigoroso",
                it: "Forzacolpo",
                de: "Powerschuss",
                "pt-br": "Explosão Poderosa",
                "zh-tw": "力量爆破"
            },
            effect: {
                en: "Discard a {D} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {D} de ce Pokémon.",
                es: "Descarta una Energía {D} de este Pokémon.",
                it: "Scarta un'Energia {D} da questo Pokémon.",
                de: "Wirf eine {D}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {D} deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的 {D} 能量。"
            },
            damage: 110
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
