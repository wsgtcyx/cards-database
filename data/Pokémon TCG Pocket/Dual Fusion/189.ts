import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/189",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/189",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/189",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/189",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/189",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/189",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/189",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/189",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/189"
    },
    name: {
        en: "Grovyle",
        fr: "Massko",
        es: "Grovyle",
        "pt-br": "Grovyle",
        "zh-tw": "森林蜥蜴",
        ja: "ジュプトル",
        ko: "나무돌이",
        it: "Grovyle",
        de: "Reptain"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 80,
    types: [
        "Grass"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Treecko",
        fr: "Arcko",
        es: "Treecko",
        it: "Treecko",
        de: "Geckarbor",
        "pt-br": "Treecko",
        "zh-tw": "木守宮",
        ja: "キモリ",
        ko: "나무지기"
    },
    attacks: [
        {
            name: {
                en: "Slicing Snipe",
                fr: "Lame de Précision",
                es: "Filo Fustigante",
                it: "Fendente Mirato",
                de: "Hinterhältige Klinge",
                "pt-br": "Disparo Afiado",
                "zh-tw": "狙擊刀鋒",
                ja: "スナイプエッジ",
                ko: "스나이프에지"
            },
            cost: [
                "Grass",
                "Grass"
            ],
            effect: {
                en: "This attack does 50 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige 50 dégâts à un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge 50 danni a uno dei Pokémon nella Panchina del tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "對手的1隻備戰寶可夢受到50點傷害。",
                ja: "相手のベンチポケモン1匹に50ダメージ。",
                ko: "상대의 벤치 포켓몬 1마리에게 50데미지를 준다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Grovyle leaps from branch to branch in large trees, moving with ease. It propels itself with astounding speed and force.",
        fr: "Il se déplace dans les grands arbres en sautant avec agilité de branche en branche. Sa vivacité est extraordinaire.",
        es: "Se desplaza saltando grácilmente de rama en rama por los árboles más altos, haciendo gala de su tremenda agilidad.",
        it: "Si sposta saltando agilmente tra i rami di grandi alberi. È capace di scatti impressionanti.",
        de: "Es verfügt über eine erstaunliche Sprungkraft und bewegt sich auf hohen Bäumen mit Leichtigkeit von Ast zu Ast fort.",
        "pt-br": "Grovyle salta de galho em galho em grandes árvores com total facilidade, impulsionando-se com velocidade e força impressionantes.",
        "zh-tw": "會在大樹的枝頭間靈巧地跳躍移動。爆發力十分驚人。",
        ja: "大木の 枝から枝へ 身軽に 飛び移り 移動する。 驚異的な 瞬発力。",
        ko: "큰 나뭇가지에서 다른 가지로\n가볍게 뛰어 이동한다.\n경이로운 순발력이다."
    }
};

export default card;
