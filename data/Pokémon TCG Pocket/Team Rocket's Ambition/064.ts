import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/064",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/064",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/064",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/064",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/064",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/064"
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
    illustrator: "Orca",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [676],
    stage: "Basic",
    description: {
        en: "Left alone, its fur will grow longer and longer, but it will only allow someone it trusts to cut it.",
        fr: "Sa fourrure pousse indéfiniment, mais il refuse de se faire couper la toison par une personne en qui il n'a pas confiance.",
        es: "El pelo le crece sin cesar, pero solo deja que se lo corten aquellos de quienes se fia plenamente.",
        it: "Se non viene tagliato, il suo pelo continua a crescere a dismisura. Si lascia tosare solamente dalle persone di cui si fida.",
        de: "Trimmt man sein Fell nicht regelmäßig. wächst es ohne Unterlass. Allerdings lässt es sich nur von jemandem frisieren, dem es traut.",
        "pt-br": "Se ninguém interferir, os seus pelos crescem cada vez mais longos. Apenas alguém em quem confia poderá apará-los.",
        "zh-tw": "如果放著不管，體毛就會不斷變長，但牠只允許信賴的人幫自己修剪。"
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
                "pt-br": "Camada de Pelos",
                "zh-tw": "毛皮大衣"
            },
            effect: {
                en: "This Pokémon takes -20 damage from attacks.",
                fr: "Ce Pokémon subit - 20 dégâts provenant des attaques.",
                es: "Los ataques hacen -20 puntos de daño a este Pokémon.",
                it: "Questo Pokémon subisce -20 danni dagli attacchi.",
                de: "Diesem Pokémon werden durch Attacken - 20 Schadenspunkte zugefügt.",
                "pt-br": "Este Pokémon recebe -20 pontos de dano de ataques.",
                "zh-tw": "這隻寶可夢受到招式的傷害-20點。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Continuous Steps",
                fr: "Pas Continus",
                es: "Pasos Incesantes",
                it: "Passi Regolari",
                de: "Dauerschritte",
                "pt-br": "Passos Contínuos",
                "zh-tw": "連續舞步"
            },
            effect: {
                en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
                "zh-tw": "擲硬幣直到出現反面,造成正面出現的次數×30點傷害。"
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
    retreat: 1
};

export default card;
