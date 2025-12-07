import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Celebi ex",
        "fr": "Ex de Célébi",
        "es": "ex celebridad",
        "it": "Celebi ex",
        "de": "Celebi ex",
        "pt-br": "Celebi ex",
        "zh-tw": "雪拉比超級"
    },
    illustrator: "PLANETA CG Works",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Powerful Bloom",
                "fr": "Floraison puissante",
                "es": "Floración poderosa",
                "it": "Fioritura potente",
                "de": "Kraftvolle Blüte",
                "pt-br": "Flor poderosa",
                "zh-tw": "強力綻放"
            },
            damage: 50,
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.",
                "fr": "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 50 dégâts pour chaque tête.",
                "es": "Lanza una moneda por cada Energía unida a este Pokémon. Este ataque hace 50 daños por cada cabeza.",
                "it": "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 50 danni per ogni testa.",
                "de": "Wirf eine Münze für jede an dieses Pokémon angelegte Energie. Dieser Angriff verursacht 50 Schaden pro Kopf.",
                "pt-br": "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 50 de dano para cada cabeça.",
                "zh-tw": "為該神奇寶貝所附加的每個能量拋一枚硬幣。這次攻擊對每個頭造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Shiny"
};
export default card;
