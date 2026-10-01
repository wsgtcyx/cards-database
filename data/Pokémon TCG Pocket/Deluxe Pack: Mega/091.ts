import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/091",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/091",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/091",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/091",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/091",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/091",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/091"
    },
    name: {
        en: "Electrike",
        fr: "Dynavolt",
        es: "Electrike",
        it: "Electrike",
        de: "Frizelbliz",
        "pt-br": "Electrike",
        "zh-tw": "落雷獸",
        ja: "ラクライ",
        ko: "썬더라이"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Lightning"
    ],
    dexId: [
        309
    ],
    stage: "Basic",
    description: {
        en: "It stores electricity in its fur. It gives off sparks from all over its body in seasons when the air is dry.",
        fr: "L'électricité statique s'accumule dans sa fourrure. Par temps sec, elle dégage des étincelles.",
        es: "Almacena electricidad estática en su pelaje. En estaciones secas, suelta chispas por todo el cuerpo.",
        it: "Accumula elettricità statica nella pelliccia. Nella stagione secca, il suo corpo sprizza scintille.",
        de: "Es speichert statische Elektrizität in seinem Fell. In Jahreszeiten mit trockener Luft sprüht sein ganzer Körper Funken.",
        "pt-br": "Armazena eletricidade em seu pelo. Dispara faíscas de seu corpo para todos os lados quando o ar está seco.",
        "zh-tw": "會在體毛中儲存靜電。在空氣乾燥的季節會從全身散發出火花。",
        ja: "It stores electricity in its fur. It gives off sparks from all over its body in seasons when the air is dry.",
        ko: "It stores electricity in its fur. It gives off sparks from all over its body in seasons when the air is dry."
    },
    attacks: [
        {
            cost: [
                "Lightning"
            ],
            name: {
                en: "Quick Attack",
                fr: "Vive-Attaque",
                es: "Ataque Rápido",
                it: "Attacco Rapido",
                de: "Ruckzuckhieb",
                "pt-br": "Ataque Rápido",
                "zh-tw": "電光一閃",
                ja: "Quick Attack",
                ko: "Quick Attack"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。",
                ja: "Flip a coin. If heads, this attack does 30 more damage.",
                ko: "Flip a coin. If heads, this attack does 30 more damage."
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
