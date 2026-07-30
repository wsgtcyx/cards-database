import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/044"
    },
    name: {
        en: "Samurott",
        fr: "Clamiral",
        es: "Samurott",
        it: "Samurott",
        de: "Admurai",
        "pt-br": "Samurott",
        "zh-tw": "大劍鬼",
        ko: "대검귀",
        ja: "ダイケンキ"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    dexId: [503],
    evolveFrom: {
        en: "Dewott",
        fr: "Mateloutre",
        es: "Dewott",
        it: "Dewott",
        de: "Zwottronin",
        "pt-br": "Dewott",
        "zh-tw": "雙刃丸",
        ko: "쌍검자비",
        ja: "フタチマル"
    },
    stage: "Stage2",
    description: {
        en: "Samurott leads its group strictly. Those who do not follow its rules receive a merciless thrashing."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Stance"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may prevent all damage from—and effects of—attacks from your opponent's Pokémon done to this Pokémon until the end of your opponent's next turn."
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Pike",
                fr: "Javelot",
                es: "Lanza",
                it: "Picca",
                de: "Langspieß",
                "pt-br": "Lança",
                "zh-tw": "長槍"
            },
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige également 20 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 20 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                de: "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只寶可夢造成 20 點傷害。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
