import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/131"
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
                fr: "Coup de queue",
                es: "Rap de cola",
                it: "Rap di coda",
                de: "Tail Rap",
                "pt-br": "Rap de cauda",
                "zh-tw": "擺尾拍打"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 20 daños por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
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
