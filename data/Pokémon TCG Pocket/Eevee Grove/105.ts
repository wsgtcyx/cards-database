import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Zapdos ex",
        "fr": "Zapdos ex",
        "es": "Zapdos ex",
        "it": "Zapdos es",
        "de": "Zapdos ex",
        "pt-br": "Zapdos ex",
        "zh-tw": "Zapdos 超級"
    },
    illustrator: "PLANETA Saito",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Peck",
                "fr": "Picorer",
                "es": "Picotear",
                "it": "Pecca",
                "de": "Picken",
                "pt-br": "Peck",
                "zh-tw": "啄"
            },
            damage: 20,
            cost: ["Lightning"]
        }, {
            name: {
                en: "Thundering Hurricane",
                "fr": "Ouragan tonitruant",
                "es": "Huracán atronador",
                "it": "Uragano tonante",
                "de": "Donnernder Hurrikan",
                "pt-br": "Furacão Trovejante",
                "zh-tw": "雷霆颶風"
            },
            damage: 50,
            cost: ["Lightning", "Lightning", "Lightning"],
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
