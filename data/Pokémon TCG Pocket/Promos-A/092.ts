import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/092/3e9bdc545a06f2cc",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/092/3e9bdc545a06f2cc",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/092/3e9bdc545a06f2cc",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/092/3e9bdc545a06f2cc",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/092/3e9bdc545a06f2cc",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/092/3e9bdc545a06f2cc",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/092/3e9bdc545a06f2cc",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/092/3e9bdc545a06f2cc",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/092/3e9bdc545a06f2cc"
    },
    name: {
        en: "Eevee",
        es: "Eevee",
        "fr": "Évoli",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    illustrator: "nisimono",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
        es: "Es capaz de evolucionar de muchas maneras\npara adaptarse sin problemas a cualquier medio.",
        "fr": "Ses multiples évolutions lui permettent de s'adapter à tout type de milieu naturel.",
        "it": "La capacità di evolversi in diverse specie gli permette di adattarsi perfettamente a qualsiasi tipo di ambiente.",
        "de": "Um sich jeder Umgebung perfekt anpassen zu können, ist es in der Lage, sich zu verschiedenen Pokémon zu entwickeln.",
        "pt-br": "Sua capacidade de evoluir para muitas formas permite que se adapte fácil e perfeitamente a qualquer ambiente.",
        "zh-tw": "為了能瞬即適應環境的變化，這種寶可夢蘊含著許多種進化的可能性。",
        ja: "環境の 変化に すぐさま 合わせられるよう いくつもの 進化の 可能性を 秘めている。",
        ko: "환경 변화에 곧바로 적응할 수 있도록\n여러 형태로 진화할 수 있는\n가능성을 가지고 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                es: "Placaje",
                "fr": "Charge",
                "it": "Azione",
                "de": "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊",
                ja: "たいあたり",
                ko: "몸통박치기"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
