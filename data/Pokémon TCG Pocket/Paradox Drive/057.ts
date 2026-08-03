import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/057",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/057"
    },
    name: {
        en: "Girafarig",
        fr: "Girafarig",
        es: "Girafarig",
        it: "Girafarig",
        de: "Girafarig",
        "pt-br": "Girafarig",
        "zh-tw": "麒麟奇",
        ko: "키링키",
        ja: "キリンリキ"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [203],
    stage: "Basic",
    description: {
        en: "Girafarig’s tail has a small head. It instinctively bites at any foe that approaches the Pokémon from behind.",
        fr: "La queue du Girafarig a une petite tête. Il mord instinctivement tout ennemi qui s'approche du Pokémon par derrière.",
        es: "La cola de Girafarig tiene una cabeza pequeña. Muerde instintivamente a cualquier enemigo que se acerque al Pokémon por detrás.",
        it: "La coda di Girafarig ha una testa piccola. Morde istintivamente qualsiasi nemico che si avvicini al Pokémon da dietro.",
        de: "Der Schwanz von Girafarig hat einen kleinen Kopf. Es beißt instinktiv jeden Gegner an, der sich dem Pokémon von hinten nähert.",
        "pt-br": "A cauda de Girafarig tem uma cabeça pequena. Ele morde instintivamente qualquer inimigo que se aproxime do Pokémon por trás.",
        "zh-tw": "麒麟奇的尾巴上有一個小頭。它本能地咬住任何從後面接近寶可夢的敵人。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Headbang",
                fr: "Frappe de Tête",
                es: "Cabecear",
                it: "Scuotitesta",
                de: "Headbangen",
                "pt-br": "Baque de Cabeça",
                "zh-tw": "鐵頭碰"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
