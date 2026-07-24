import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/026"
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
    illustrator: "Akira Komayama",
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
        "pt-br": "Ele armazena eletricidade em seu pelo. Ele emite faíscas por todo o corpo nas estações em que o ar está seco.",
        "zh-tw": "會在體毛中儲存靜電。\n在空氣乾燥的季節\n會從全身散發出火花。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Quick Attack",
                fr: "Vive-Attaque",
                es: "Ataque Rápido",
                it: "Attacco Rapido",
                de: "Ruckzuckhieb",
                "pt-br": "Ataque Rápido",
                "zh-tw": "電光一閃"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            },
            damage: "10+"
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
