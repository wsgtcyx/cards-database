import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Furret",
        "fr": "Furet",
        "es": "furret",
        "it": "Furret",
        "de": "Furret",
        "pt-br": "Furret",
        "zh-tw": "富雷特"
    },
    illustrator: "tetsuya koizumi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Sentret",
        "fr": "Sentret",
        "es": "Sentret",
        "it": "Sentret",
        "de": "Sentret",
        "pt-br": "Sentido",
        "zh-tw": "森特雷"
    },
    description: {
        en: "The mother puts its offspring to sleep by curling up\naround them. It corners foes with speed.",
        "fr": "La mère endort sa progéniture en se recroquevillant\nautour d'eux. Il coince les ennemis avec rapidité.",
        "es": "La madre pone a dormir a sus crías acurrucándose\nalrededor de ellos. Acorrala a los enemigos con velocidad.",
        "it": "La madre addormenta il piccolo rannicchiandosi\nintorno a loro. Mette all'angolo i nemici con velocità.",
        "de": "Die Mutter schläft ihren Nachwuchs ein, indem sie sich zusammenrollt\num sie herum. Es treibt Gegner schnell in die Enge.",
        "pt-br": "A mãe coloca seu filho para dormir enrolando-se\nao redor deles. Ele encurrala os inimigos com velocidade.",
        "zh-tw": "母親會蜷縮起來讓孩子入睡\n他們周圍。它以速度將敵人逼入絕境。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Tail Smash",
                "fr": "Fracas de queue",
                "es": "Golpe de cola",
                "it": "Colpo di coda",
                "de": "Schwanzschlag",
                "pt-br": "Quebra de cauda",
                "zh-tw": "尾部粉碎"
            },
            damage: 80,
            cost: ["Colorless"],
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
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
