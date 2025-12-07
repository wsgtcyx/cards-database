import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Lickilicky ex",
        "fr": "Ex-Lickilicky",
        "es": "ex lamiendo",
        "it": "Lickilicky ex",
        "de": "Leckerer Ex",
        "pt-br": "Ex Lickilicky",
        "zh-tw": "舔舔EX"
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 160,
    types: ["Colorless"],
    evolveFrom: {
        en: "Lickitung",
        "fr": "Léchage",
        "es": "lamiendo",
        "it": "Lickitung",
        "de": "Lecken",
        "pt-br": "Lickitung",
        "zh-tw": "利基通"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Licking Fury",
                "fr": "Lécher la fureur",
                "es": "lamiendo furia",
                "it": "Furia leccata",
                "de": "Wut lecken",
                "pt-br": "Lambendo Fúria",
                "zh-tw": "舔怒"
            },
            damage: 100,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
                "fr": "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque tête.",
                "es": "Lanza una moneda hasta que obtengas cruz. Este ataque hace 40 daños más por cada cabeza.",
                "it": "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni in più per ogni testa.",
                "de": "Wirf eine Münze, bis du „Zahl“ erhältst. Dieser Angriff verursacht 40 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue uma moeda até obter coroa. Este ataque causa mais 40 danos para cada cabeça.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["ho-oh"]
};
export default card;
