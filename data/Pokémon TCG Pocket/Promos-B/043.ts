import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/043",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/043",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/043",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/043",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/043"
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
    rarity: "None",
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
        "pt-br": "Ele armazena eletricidade em seu pelo. Ele emite faíscas por todo o corpo nas estações em que o ar está seco.",
        "zh-tw": "會在體毛中儲存靜電。\n在空氣乾燥的季節\n會從全身散發出火花。"
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
                "zh-tw": "突擊"
            },
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                fr: "Ce Pokémon s'inflige également 10 dégâts.",
                es: "Este Pokémon también se hace 10 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 10 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該寶可夢也會對其自身造成 10 點傷害。"
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
