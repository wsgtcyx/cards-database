import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Mienfoo",
        "fr": "Mienfoo",
        "es": "Mienfoo",
        "it": "Mienfoo",
        "de": "Mienfoo",
        "pt-br": "Mienfoo",
        "zh-tw": "功夫鼬",
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "In one minute, a well-trained Mienfoo can chop\nwith its arms more than 100 times.",
        "fr": "En une minute, un Mienfoo bien entraîné peut hacher\navec ses bras plus de 100 fois.",
        "es": "En un minuto, un Mienfoo bien entrenado puede cortar\ncon sus brazos más de 100 veces.",
        "it": "In un minuto, un Mienfoo ben addestrato può tagliare\ncon le sue braccia più di 100 volte.",
        "de": "In einer Minute kann ein gut trainierter Mienfoo hacken\nmit seinen Armen mehr als 100 Mal.",
        "pt-br": "Em um minuto, um Mienfoo bem treinado pode cortar\ncom os braços mais de 100 vezes.",
        "zh-tw": "一分鐘內，訓練有素的 Mienfoo 就可以砍\n手臂轉動超過100次。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Kick Shot",
                "fr": "Coup de pied",
                "es": "Tiro de patada",
                "it": "Colpo di calcio",
                "de": "Kick-Shot",
                "pt-br": "Chute",
                "zh-tw": "踢球"
            },
            damage: 40,
            cost: ["Fighting"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                "fr": "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                "es": "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                "it": "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
