import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/043/2ad1817fbee0967d",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/043/2ad1817fbee0967d",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/043/2ad1817fbee0967d",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/043/2ad1817fbee0967d",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/043/2ad1817fbee0967d",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/043/2ad1817fbee0967d",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/043/2ad1817fbee0967d",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/043/2ad1817fbee0967d",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/043/2ad1817fbee0967d"
    },
    name: {
        en: "Electrike",
        fr: "Dynavolt",
        es: "Electrike",
        it: "Electrike",
        de: "Frizelbliz",
        "pt-br": "Electrike",
        "zh-tw": "落雷獸",
        ko: "썬더라이",
        ja: "ラクライ"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [309],
    stage: "Basic",
    description: {
        en: "It stores electricity in its fur. It gives off sparks from all over its body in seasons when the air is dry.",
        fr: "L’électricité statique s’accumule dans sa fourrure.\nPar temps sec, elle dégage des étincelles.",
        es: "Almacena electricidad estática en su pelaje.\nEn estaciones secas, suelta chispas por todo\nel cuerpo.",
        it: "Accumula elettricità statica nella pelliccia. Nella\nstagione secca, il suo corpo sprizza scintille.",
        de: "Es speichert statische Elektrizität in seinem Fell.\nIn Jahreszeiten mit trockener Luft sprüht sein\nganzer Körper Funken.",
        "pt-br": "Armazena eletricidade em seu pelo. Dispara faíscas de seu corpo para todos os lados quando o ar está seco.",
        "zh-tw": "會在體毛中儲存靜電。\n在空氣乾燥的季節\n會從全身散發出火花。",
        ja: "静電気を 体毛に 溜める。 空気の 乾燥した 季節には 全身から 火花を 散らす。",
        ko: "정전기를 털에 모은다.\n공기가 건조한 계절에는\n전신에서 스파크를 뿌린다."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Reckless Charge",
                fr: "Attaque Imprudente",
                es: "Carga Descuidada",
                it: "Carica Avventata",
                de: "Waghalsiger Sturmangriff",
                "pt-br": "Carga Indomável",
                "zh-tw": "突擊",
                ja: "とつげき",
                ko: "돌격"
            },
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
                es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 10 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到10點傷害。",
                ja: "このポケモンにも10ダメージ。",
                ko: "이 포켓몬에게도 10데미지를 준다."
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
    retreat: 1,
    boosters: ["vol6"]
};

export default card;
