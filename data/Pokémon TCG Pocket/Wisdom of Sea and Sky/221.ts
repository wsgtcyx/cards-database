import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Mankey",
        "fr": "Mankey",
        "es": "mankey",
        "it": "Mankey",
        "de": "Mankey",
        "pt-br": "Mankey",
        "zh-tw": "猴怪",
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 50,
    types: ["Fighting"],
    description: {
        en: "It lives in groups in the treetops. If it loses sight of\nits group, it becomes infuriated by its loneliness.",
        "fr": "Il vit en groupe à la cime des arbres. S'il perd de vue\nson groupe, il devient furieux de sa solitude.",
        "es": "Vive en grupos en las copas de los árboles. Si pierde de vista\nsu grupo, se enfurece por su soledad.",
        "it": "Vive in gruppi sulle cime degli alberi. Se lo perde di vista\nsuo gruppo, si infuria per la sua solitudine.",
        "de": "Er lebt in Gruppen in den Baumwipfeln. Wenn es aus den Augen verliert\nseiner Gruppe wird es wütend über seine Einsamkeit.",
        "pt-br": "Vive em grupos nas copas das árvores. Se perder de vista\nseu grupo, fica furioso com sua solidão.",
        "zh-tw": "它成群生活在樹頂。如果它失去了視線\n它的群體，它因孤獨而變得憤怒。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Focus Fist",
                "fr": "Poing de concentration",
                "es": "Puño de enfoque",
                "it": "Concentrarsi sul pugno",
                "de": "Fokusfaust",
                "pt-br": "Punho Foco",
                "zh-tw": "聚焦拳頭"
            },
            damage: 50,
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
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
