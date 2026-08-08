import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/131",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/131",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/131",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/131",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/131",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/131",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/131"
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
        en: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Tail Rap",
                fr: "Frap'Keu",
                es: "Coleada",
                it: "Rap di coda",
                de: "Tail Rap",
                "pt-br": "Batida de Cauda",
                "zh-tw": "擺尾拍打"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。"
            },
            damage: "20x"
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
