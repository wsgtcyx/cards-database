import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Staraptor",
        "fr": "Étouraptor",
        "es": "Staraptor",
        "it": "Staraptor",
        "de": "Staraptor",
        "pt-br": "Staraptor",
        "zh-tw": "姆克鷹"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    evolveFrom: {
        en: "Staravia",
        "fr": "Étourvol",
        "es": "Staravia",
        "it": "Staravia",
        "de": "Staravia",
        "pt-br": "Staravia",
        "zh-tw": "姆克鳥"
    },
    description: {
        en: "It never stops attacking even if it is injured.\nIt fusses over the shape of its comb.",
        "fr": "Il n'arrête jamais d'attaquer même s'il est blessé.\nIl s'inquiète de la forme de son peigne.",
        "es": "Nunca deja de atacar incluso si está herido.\nSe preocupa por la forma de su peine.",
        "it": "Non smette mai di attaccare anche se è ferito.\nSi preoccupa della forma del suo pettine.",
        "de": "Es hört nie auf anzugreifen, selbst wenn es verletzt ist.\nEs macht sich Gedanken über die Form seines Kamms.",
        "pt-br": "Ele nunca para de atacar, mesmo que esteja ferido.\nEle se preocupa com o formato do pente.",
        "zh-tw": "即使受傷也不會停止攻擊。\n它對梳子的形狀很在意。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Hurricane Wing",
                "fr": "Aile d'ouragan",
                "es": "Ala de huracán",
                "it": "Ala dell'uragano",
                "de": "Hurrikanflügel",
                "pt-br": "Asa do furacão",
                "zh-tw": "颶風之翼"
            },
            damage: 50,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip 4 coins. This attack does 50 damage for each heads.",
                "fr": "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque tête.",
                "es": "Lanza 4 monedas. Este ataque hace 50 daños por cada cabeza.",
                "it": "Lancia 4 monete. Questo attacco infligge 50 danni per ogni testa.",
                "de": "Wirf 4 Münzen. Dieser Angriff verursacht 50 Schaden pro Kopf.",
                "pt-br": "Jogue 4 moedas. Este ataque causa 50 de dano para cada cabeça.",
                "zh-tw": "翻轉 4 個硬幣。這次攻擊對每個頭造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
