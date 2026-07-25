import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/061",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/061",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/061",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/061",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/061",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/061"
    },
    name: {
        en: "Furfrou",
        fr: "Couafarel",
        es: "Furfrou",
        it: "Furfrou",
        de: "Coiffwaff",
        "pt-br": "Furfrou",
        "zh-tw": "多麗米亞",
        ko: "트리미앙",
        ja: "トリミアン"
    },
    illustrator: "osare",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [676],
    stage: "Basic",
    description: {
        en: "Left alone, its fur will grow longer and longer, but it will only allow someone it trusts to cut it.",
        fr: "Sa fourrure pousse indéfiniment, mais il refuse\nde se faire couper la toison par une personne\nen qui il n’a pas confiance.",
        es: "El pelo le crece sin cesar, pero solo deja que se\nlo corten aquellos de quienes se fía plenamente.",
        it: "Se non viene tagliato, il suo pelo continua\na crescere a dismisura. Si lascia tosare\nsolamente dalle persone di cui si fida.",
        de: "Trimmt man sein Fell nicht regelmäßig, wächst es\nohne Unterlass. Allerdings lässt es sich nur von\njemandem frisieren, dem es traut.",
        "pt-br": "Deixado sozinho, seu pelo crescerá cada vez mais, mas só permitirá que alguém de sua confiança o corte.",
        "zh-tw": "如果放著不管，體毛就會\n不斷變長，但牠只允許\n信賴的人幫自己修剪。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Fur Coat",
                fr: "Toison Épaisse",
                es: "Pelaje Recio",
                it: "Foltopelo",
                de: "Fellkleid",
                "pt-br": "Casaco de pele",
                "zh-tw": "毛皮大衣"
            },
            effect: {
                en: "This Pokémon takes -20 damage from attacks.",
                fr: "Ce Pokémon subit - 20 dégâts provenant des attaques.",
                es: "Los ataques hacen -20 puntos de daño a este Pokémon.",
                it: "Questo Pokémon subisce -20 danni dagli attacchi.",
                de: "Diesem Pokémon werden durch Attacken - 20 Schadenspunkte zugefügt.",
                "pt-br": "Este Pokémon recebe -20 pontos de dano de ataques.",
                "zh-tw": "該寶可夢受到的攻擊傷害為 -20。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Double Headbutt",
                fr: "Double coup de tête",
                es: "Doble cabezazo",
                it: "Doppia testata",
                de: "Doppelter Kopfstoß",
                "pt-br": "Cabeçada Dupla",
                "zh-tw": "二連頭錘"
            },
            effect: {
                en: "Flip 2 coins. This attack does 30 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 30 daños por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 30 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 30 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 30 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 30 點傷害。"
            },
            damage: "30x"
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
