import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/260",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/260",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/260",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/260",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/260",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/260",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/260"
    },
    name: {
        en: "Zapdos ex",
        fr: "Électhor-ex",
        es: "Zapdos ex",
        it: "Zapdos-ex",
        de: "Zapdos-ex",
        'pt-br': "Zapdos ex",
        ko: "썬더 ex",
        "zh-tw": "閃電鳥ex",
    },
    illustrator: "PLANETA Saito",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
        cost: ["Lightning"],

        name: {
            en: "Peck",
            fr: "Picpic",
            es: "Picotazo",
            it: "Beccata",
            de: "Picken",
            "pt-br": "Bicada",
            "zh-tw": "啄"
        },

        damage: "20"
    }, {
        cost: ["Lightning", "Lightning", "Lightning"],

        name: {
            en: "Thundering Hurricane",
            fr: "Rafale d'Éclairs",
            es: "Huracán Atronador",
            it: "Uragano Tonante",
            de: "Donnernder Orkan",
            "pt-br": "Furacão Trovejante",
            "zh-tw": "颶風雷電"
        },

        effect: {
            en: "Flip 4 coins. This attack does 50 damage for each heads.",
            fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
            es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
            it: "Lancia 4 monete. Questa mossa infligge 50 danni per ogni testa.",
            de: "Wirf 4 Münzen. Diese Attacke fügt für jede Kopfseite 50 Schadenspunkte zu.",
            "pt-br": "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
            "zh-tw": "擲4次硬幣，造成正面出現的次數×50點傷害。"
        },

        damage: "50×"
    }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Star",
    boosters: ["pikachu"]
};
export default card;
