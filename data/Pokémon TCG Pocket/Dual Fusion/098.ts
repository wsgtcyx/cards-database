import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/098",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/098",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/098",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/098",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/098",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/098",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/098",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/098",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/098"
    },
    name: {
        en: "Dratini",
        fr: "Minidraco",
        es: "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ja: "ミニリュウ",
        ko: "미뇽",
        it: "Dratini",
        de: "Dratini"
    },
    illustrator: "kurumitsu",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Dragon"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [],
    attacks: [
        {
            name: {
                en: "Hook",
                fr: "Crochet",
                es: "Garfio",
                it: "Uncino",
                de: "Haken",
                "pt-br": "Gancho",
                "zh-tw": "鉤住",
                ja: "ひっかける",
                ko: "걸기"
            },
            cost: [
                "Colorless",
                "Colorless"
            ],
            damage: 30
        }
    ],
    abilities: [],
    description: {
        en: "It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.",
        fr: "Ce Pokémon grandit en muant à répétition. Lors de ce processus, il s’abrite derrière une puissante cascade.",
        es: "Durante la etapa de crecimiento, muda muchas veces de piel y se protege mediante una cascada.",
        it: "Cresce cambiando ripetutamente la pelle. Durante la muta, si protegge tra le acque impetuose di una cascata.",
        de: "Es häutet sich, um zu wachsen. Dabei wird es von einem tosenden Wasserfall beschützt.",
        "pt-br": "Troca de pele várias vezes à medida que cresce. Durante este processo, é protegido por uma cachoeira agitada.",
        "zh-tw": "會在湍流而下的瀑布保護下反覆蛻皮，使身體變得越來越大。",
        ja: "激しく 流れ落ちる 滝に 守られながら 脱皮を 繰り返し どんどん 大きくなる。",
        ko: "세차게 떨어지는 폭포의 보호를 받으며\n탈피를 거듭해 점점 크게 자란다."
    }
};

export default card;
