import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Shuckle ex",
        "fr": "Ex-rire",
        "es": "Shuckle ex",
        "it": "Shuckle es",
        "de": "Shuckle ex",
        "pt-br": "Shuckle ex",
        "zh-tw": "卸扣超級"
    },
    illustrator: "PLANETA Mochizuki",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Grass"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Solid Shell",
                "fr": "Coque solide",
                "es": "Carcasa sólida",
                "it": "Guscio solido",
                "de": "Solide Schale",
                "pt-br": "Casca Sólida",
                "zh-tw": "實心外殼"
            },
            effect: {
                en: "This Pokémon takes −20 damage from attacks.",
                "fr": "Ce Pokémon subit -20 dégâts des attaques.",
                "es": "Este Pokémon recibe −20 de daño por ataques.",
                "it": "Questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Dieses Pokémon erleidet −20 Schaden durch Angriffe.",
                "pt-br": "Este Pokémon sofre -20 de dano de ataques.",
                "zh-tw": "這只神奇寶貝受到的攻擊傷害為 -20。"
            }
        }],
    attacks: [{
            name: {
                en: "Triple Slap",
                "fr": "Triple claque",
                "es": "triple bofetada",
                "it": "Triplo schiaffo",
                "de": "Dreifacher Schlag",
                "pt-br": "Tapa Triplo",
                "zh-tw": "三重耳光"
            },
            damage: 20,
            cost: ["Grass"],
            effect: {
                en: "Flip 3 coins. This attack does 20 damage for each heads.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                "es": "Lanza 3 monedas. Este ataque hace 20 daños por cada cabeza.",
                "it": "Lancia 3 monete. Questo attacco infligge 20 danni per ogni testa.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
