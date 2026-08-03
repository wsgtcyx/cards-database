import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/056",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/056",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/056",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/056"
    },
    name: {
        en: "Mega Heracross ex",
        fr: "Méga-Scarhino-ex",
        es: "Mega-Heracross ex",
        it: "Mega Heracross-ex",
        de: "Mega-Skaraborn-ex",
        "pt-br": "Mega Heracross ex",
        "zh-tw": "超級赫拉克羅斯ex",
        ko: "메가헤라크로스 ex",
        ja: "メガヘラクロスex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "None",
    category: "Pokemon",
    hp: 180,
    types: ["Grass"],
    dexId: [214],
    stage: "Basic",
    attacks: [
        {
            cost: ["Grass", "Grass", "Grass", "Colorless"],
            name: {
                en: "Dynamic Horn",
                fr: "Corne Dynamique",
                es: "Cornada Dinámica",
                it: "Cornata Dinamica",
                de: "Dynamisches Horn",
                "pt-br": "Chifre Dinâmico",
                "zh-tw": "強力角擊"
            },
            effect: {
                en: "Flip a coin. If tails, this Pokémon also does 60 damage to itself.",
                fr: "Lancez une pièce de monnaie. Si c'est pile, ce Pokémon s'inflige également 60 dégâts.",
                es: "Lanza una moneda. Si sale cruz, este Pokémon también se hace 60 puntos de daño a sí mismo.",
                it: "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 60 danni a se stesso.",
                de: "Wirf eine Münze. Bei „Zahl“ fügt sich dieses Pokémon außerdem selbst 60 Schadenspunkte zu.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este Pokémon também causa 60 de dano a si mesmo.",
                "zh-tw": "拋一枚硬幣。如果是反面，这只神奇宝贝也会对自己造成 60 点伤害。"
            },
            damage: 170
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol8"]
};

export default card;
