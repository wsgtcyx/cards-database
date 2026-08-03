import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/144",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/144",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/144",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/144",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/144",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/144",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/144"
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
    illustrator: "Yukihiro Tada",
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
                en: "Whimsy Tackle",
                fr: "Charge Bizarre",
                es: "Placaje Caprichoso",
                it: "Capriccioazione",
                de: "Launischer Tackle",
                "pt-br": "Investida Fantástica",
                "zh-tw": "胡思亂撞"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            },
            damage: 80
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
