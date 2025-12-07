import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Hitmonchan ex",
        "fr": "Hitmonchan ex",
        "es": "Hitmonchan ex",
        "it": "Hitmonchan es",
        "de": "Hitmonchan ex",
        "pt-br": "Ex-Hitmonchan",
        "zh-tw": "希特蒙醬前任"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Quick Straight",
                "fr": "Ligne droite rapide",
                "es": "Recta rápida",
                "it": "Dritto veloce",
                "de": "Schnell geradeaus",
                "pt-br": "Direto rápido",
                "zh-tw": "快速直行"
            },
            damage: 50,
            cost: ["Fighting"],
            effect: {
                en: "This attack's damage isn't affected by Weakness.",
                "fr": "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
                "es": "El daño de este ataque no se ve afectado por la debilidad.",
                "it": "Il danno di questo attacco non è influenzato dalla debolezza.",
                "de": "Der Schaden dieses Angriffs wird durch Schwäche nicht beeinflusst.",
                "pt-br": "O dano deste ataque não é afetado pela Fraqueza.",
                "zh-tw": "該攻擊的傷害不受虛弱影響。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
