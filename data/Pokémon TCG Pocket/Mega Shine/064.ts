import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/064",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/064",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/064",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/064",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/064"
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
    illustrator: "Hitoshi Ariga",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
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
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Quick Blow",
                fr: "Coup d'Poing Éclair",
                es: "Golpe Rápido",
                it: "Colpo Veloce",
                de: "Schnellschlag",
                "pt-br": "Golpe Rápido",
                "zh-tw": "快速攻擊"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 20 daños más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 20 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊會造成 20 點額外傷害。"
            },
            damage: "40+"
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
