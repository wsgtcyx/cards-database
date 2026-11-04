import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/067/d7e777bcee0ab71a",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/067/d7e777bcee0ab71a",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/067/d7e777bcee0ab71a",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/067/d7e777bcee0ab71a",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/067/d7e777bcee0ab71a",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/067/d7e777bcee0ab71a",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/067/d7e777bcee0ab71a",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/067/d7e777bcee0ab71a",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/067/d7e777bcee0ab71a"
    },
    name: {
        en: "Cosmog",
        fr: "Cosmog",
        es: "Cosmog",
        it: "Cosmog",
        de: "Cosmog",
        'pt-br': "Cosmog",
        ja: "コスモッグ",
        ko: "코스모그",
        "zh-tw": "科斯莫古",
    },
    illustrator: "Mizue",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "Even though its helpless, gaseous body can be blown\naway by the slightest breeze, it doesn't seem to care.",
        fr: "Son corps est composé d'un gaz très instable.\nIl se fait emporter par la moindre brise, mais\nn'a pas l'air de s'en soucier pour autant.",
        es: "Hasta la brisa más leve es capaz de arrastrar\nsu cuerpo, compuesto de una materia gaseosa\ninestable, pero no parece que eso le moleste.",
        it: "Il suo corpo è formato da un gas instabile. Potrebbe volare via\nal minimo soffio di vento, ma non sembra preoccuparsene.",
        de: "Da sein Körper aus Gas besteht, kann es schon\nvon einem leichten Luftzug weggeweht werden.\nAber das scheint ihm nichts auszumachen.",
        'pt-br': "Seu corpo indefeso e gasoso pode ser carregado por\nbrisas leves, mas Cosmog não parece se importar muito.",
        ja: "頼りない ガス状の 身体は ちょっとの 風にも 流されるが 全然 気にして いない 様子。",
        ko: "의지할 곳 없는 가스 상태의 몸은\n약한 바람에도 휩쓸리지만,\n전혀 신경 쓰지 않는 듯하다.",
        "zh-tw": "不可靠的氣體狀身體只要稍微有點風就會被吹走，但牠看起來一點都不在意。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Teleport",
                fr: "Téléport",
                es: "Teletransporte",
                it: "Teletrasporto",
                de: "Teleport",
                'pt-br': "Teleporte",
                ja: "テレポート",
                ko: "순간이동",
                "zh-tw": "瞬間移動"
            },
            cost: ["Colorless"],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con uno della tua panchina.",
                de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
                'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                ja: "このポケモンをベンチポケモンと入れ替える。",
                ko: "이 포켓몬을 벤치 포켓몬과 교체한다.",
                "zh-tw": "將這隻寶可夢與備戰寶可夢互換。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: []
};
export default card;
