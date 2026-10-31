import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/205",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/205",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/205",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/205",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/205",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/205",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/205",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/205",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/205"
    },
    name: {
        en: "Hisuian Zorua",
        fr: "Zorua de Hisui",
        es: "Zorua de Hisui",
        "pt-br": "Zorua de Hisui",
        "zh-tw": "洗翠索羅亞",
        ja: "ヒスイゾロア",
        ko: "히스이 조로아",
        it: "Zorua di Hisui",
        de: "Hisui-Zorua"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 60,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Run Around",
                fr: "Course Effrénée",
                es: "Correr Alrededor",
                it: "Correre Intorno",
                de: "Herumrennen",
                "pt-br": "Zoar",
                "zh-tw": "雀躍",
                ja: "はしゃぐ",
                ko: "들뜸"
            },
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con uno della tua panchina.",
                de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這隻寶可夢與備戰寶可夢互換。",
                ja: "このポケモンをベンチポケモンと入れ替える。",
                ko: "이 포켓몬을 벤치 포켓몬과 교체한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "A once-departed soul, returned to life in Hisui. Derives power from resentment, which rises as energy atop its head and takes on the forms of foes. In this way, Zorua vents lingering malice.",
        fr: "Zorua serait une âme disparue, ressuscitée à Hisui. Sa rancœur émane sous forme d'énergie au-dessus de sa tête, puis adopte l'apparence de ses ennemis, et finit par se dissiper.",
        es: "Es un alma difunta resucitada en Hisui que transforma su rencor en energía. Esta surge de su cabeza y adopta la forma de su oponente, disipando así su inquina.",
        it: "Uno spirito defunto, tornato a nuova vita nella terra di Hisui. Il suo sdegno si fa energia e promana dal capo, tramutandosi nell'avversario per esigere vendetta.",
        de: "Eine verstorbene Seele, die in Hisui zu neuem Leben erwachte. Groll verleiht ihm Kraft und quillt aus seinem Kopf, um als Ventil für den eigenen Hass die Gestalt seiner Feinde anzunehmen.",
        "pt-br": "Uma alma que partiu deste mundo e voltou à vida em Hisui. Seu poder é oriundo do rancor, que se converte em energia no topo de sua cabeça e toma a forma de seus inimigos. Dessa maneira, Zorua se liberta da malícia persistente.",
        "zh-tw": "死後靈魂在洗翠地區復生。怨恨化為力量，從其頭部湧出，會化成對手的樣貌去報仇恨。",
        ja: "死した魂 ヒスイの地にて 蘇る。 怨嗟は 力となり 頭より 立ち昇り 相手の姿に 変じ 恨み 晴らしたり。",
        ko: "죽은 영혼이 히스이 땅에서 되살아났다.\n원한은 곧 힘이 되어 머리에 피어오르고\n상대의 모습으로 변하여 원한을 풀려 한다."
    }
};

export default card;
