import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/157",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/157"
    },
    name: {
        en: "Grovyle",
        fr: "Massko",
        es: "Grovyle",
        it: "Grovyle",
        de: "Reptain",
        "pt-br": "Grovyle",
        "zh-tw": "森林蜥蜴",
        ko: "나무돌이",
        ja: "ジュプトル"
    },
    illustrator: "danciao",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [253],
    evolveFrom: {
        en: "Treecko",
        fr: "Arcko",
        es: "Treecko",
        it: "Treecko",
        de: "Geckarbor",
        "pt-br": "Treecko",
        "zh-tw": "木守宮",
        ko: "나무지기",
        ja: "キモリ"
    },
    stage: "Stage1",
    description: {
        en: "Grovyle leaps from branch to branch in large trees, moving with ease. It propels itself with astounding speed and force.",
        fr: "Massko saute de branche en branche dans les grands arbres, se déplaçant avec aisance. Il se propulse avec une vitesse et une force étonnantes.",
        es: "Grovyle salta de rama en rama en árboles grandes, moviéndose con facilidad. Se impulsa con asombrosa velocidad y fuerza.",
        it: "Grovyle salta di ramo in ramo sui grandi alberi, muovendosi con facilità. Si spinge con una velocità e una forza sorprendenti.",
        de: "Reptain springt in großen Bäumen von Ast zu Ast und bewegt sich dabei mühelos. Es treibt sich mit erstaunlicher Geschwindigkeit und Kraft voran.",
        "pt-br": "Grovyle salta de galho em galho em árvores grandes, movendo-se com facilidade. Ele se impulsiona com velocidade e força surpreendentes.",
        "zh-tw": "森林蜥蜴 在大樹中從一個樹枝跳躍到另一個樹枝，移動自如。它以驚人的速度和力量推動自己。"
    },
    attacks: [
        {
            cost: ["Grass", "Grass"],
            name: {
                en: "Slicing Snipe",
                fr: "Lame de Précision",
                es: "Filo Fustigante",
                it: "Fendente Mirato",
                de: "Hinterhältige Klinge",
                "pt-br": "Disparo Afiado",
                "zh-tw": "狙擊刀鋒"
            },
            effect: {
                en: "This attack does 50 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige 50 dégâts à un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge 50 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手後備隊的 1 只寶可夢造成 50 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
