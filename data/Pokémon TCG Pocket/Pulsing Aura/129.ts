import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/129",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/129"
    },
    name: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [133],
    stage: "Basic",
    description: {
        en: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones.",
        fr: "Son code génétique est irrégulier. Il peut muter s'il est exposé aux radiations des pierres élémentaires.",
        es: "Su código genético es irregular. Puede mutar si se expone a la radiación de las piedras elementales.",
        it: "Il suo codice genetico è irregolare. Potrebbe mutare se esposto alle radiazioni delle pietre elementali.",
        de: "Sein genetischer Code ist unregelmäßig. Es kann mutieren, wenn es der Strahlung von Elementsteinen ausgesetzt wird.",
        "pt-br": "Seu código genético é irregular. Ele pode sofrer mutação se for exposto à radiação das pedras elementares.",
        "zh-tw": "它的遺傳密碼是不規則的。如果受到元素石的輻射，就有可能發生變異。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Jumping Kick",
                fr: "Coup Sauté",
                es: "Patada Saltadora",
                it: "Calcio Aereo",
                de: "Sprungtritt",
                "pt-br": "Voadora",
                "zh-tw": "跳踢"
            },
            effect: {
                en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 10 dégâts à 1 des Pokémon de votre adversaire.",
                es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 10 danni a 1 dei Pokémon del tuo avversario.",
                de: "Dieser Angriff fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只寶可夢造成 10 點傷害。"
            }
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
