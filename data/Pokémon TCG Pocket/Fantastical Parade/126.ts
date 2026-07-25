import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/126",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/126",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/126",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/126",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/126"
    },
    name: {
        en: "Kangaskhan",
        "fr": "Kangaskhan",
        "es": "Kangaskhan",
        "it": "Kangaskhan",
        "de": "Kangaschan",
        "pt-br": "Kangaskhan",
        "zh-tw": "坎加斯坎"
    },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    description: {
        en: "There are records of a lost human child being\nraised by a childless Kangaskhan.",
        "fr": "Il existe des archives d'un enfant humain perdu\nélevé par un Kangaskhan sans enfant.",
        "es": "Hay registros de un niño humano perdido.\ncriado por un Kangaskhan sin hijos.",
        "it": "Ci sono registrazioni di un bambino umano perduto\ncresciuto da un Kangaskhan senza figli.",
        "de": "Es gibt Aufzeichnungen über ein verlorenes menschliches Kind\naufgezogen von einem kinderlosen Kangaskhan.",
        "pt-br": "Existem registros de uma criança humana perdida sendo\ncriado por um Kangaskhan sem filhos.",
        "zh-tw": "有記錄稱人類兒童失踪\n由沒有孩子的坎加斯汗撫養長大。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Steady Punch",
                "fr": "Coup de poing constant",
                "es": "Golpe constante",
                "it": "Pugno costante",
                "de": "Stetiger Schlag",
                "pt-br": "Soco constante",
                "zh-tw": "穩定出拳"
            },
            damage: 60,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
