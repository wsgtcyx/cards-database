import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Tinkaton ex",
        "fr": "Tinkaton ex",
        "es": "Tinkatón ex",
        "it": "Tinkaton es",
        "de": "Tinkaton ex",
        "pt-br": "Ex-Tinkaton",
        "zh-tw": "廷卡頓EX"
    },
    illustrator: "PLANETA Mochizuki",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: ["Metal"],
    evolveFrom: {
        en: "Tinkatuff",
        "fr": "Tinkatuff",
        "es": "Tinkatuff",
        "it": "Tinkatuff",
        "de": "Tinkatuff",
        "pt-br": "Tinkatuff",
        "zh-tw": "廷卡塔夫"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Terrific Thumping",
                "fr": "Des coups formidables",
                "es": "tremendo golpe",
                "it": "Colpo formidabile",
                "de": "Tolles Pochen",
                "pt-br": "Batida incrível",
                "zh-tw": "很棒的重擊"
            },
            damage: 80,
            cost: ["Metal", "Metal", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 80 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 80 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 80 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 80 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 80 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
