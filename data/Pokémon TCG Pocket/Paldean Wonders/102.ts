import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/102",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/102"
    },
    name: {
        en: "Chien-Pao",
        fr: "Baojian",
        es: "Chien-Pao",
        it: "Chien-Pao",
        de: "Baojian",
        "pt-br": "Chien-Pao",
        "zh-tw": "古劍豹",
        pt: "Chien-Pao"
    },
    suffix: "EX",
    illustrator: "aky CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    dexId: [1002],
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Icicle",
                fr: "Concrétion Glacée",
                es: "Témpano",
                it: "Stalattite",
                de: "Eiszapfen",
                "pt-br": "Sincelo",
                "zh-tw": "冰柱",
                'es-mx': "Témpano de Hielo",
                pt: "Pingente de Gelo"
            },
            damage: "20",
            cost: ["Water"],
        },
        {
            name: {
                en: "Diving Icicles",
                "fr": "Glaçons de plongée",
                "es": "Carámbanos de buceo",
                "it": "Ghiaccioli subacquei",
                "de": "Tauchende Eiszapfen",
                "pt-br": "Pingentes de mergulho",
                "zh-tw": "潛水冰柱"
            },
            cost: ["Water", "Water", "Water"],
            effect: {
                en: "Discard all Water Energy from this Pokémon. This attack does 130 damage to 1 of your opponent's Pokémon.",
                "fr": "Défaussez toute l'Énergie Eau de ce Pokémon. Cette attaque inflige 130 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Descarta toda la Energía Agua de este Pokémon. Este ataque hace 130 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Scarta tutte le Energie Water assegnate a questo Pokémon. Questo attacco infligge 130 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Lege alle Wasser-Energien dieses Pokémon ab. Dieser Angriff fügt 1 Pokémon deines Gegners 130 Schadenspunkte zu.",
                "pt-br": "Descarte toda a Energia Water deste Pokémon. Este ataque causa 130 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "丟棄該寶可夢的所有水能量。這次攻擊對對手的 1 隻寶可夢造成 130 點傷害。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
