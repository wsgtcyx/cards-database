import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Carracosta",
        "fr": "Carracosta",
        "es": "Carracosta",
        "it": "Carracosta",
        "de": "Carracosta",
        "pt-br": "Carracosta",
        "zh-tw": "卡拉科斯塔"
    },
    illustrator: "match",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    evolveFrom: {
        en: "Tirtouga",
        "fr": "Tirtouga",
        "es": "Tirtuga",
        "it": "Tirtouga",
        "de": "Tirtouga",
        "pt-br": "Tirtouga",
        "zh-tw": "特爾圖​​加"
    },
    description: {
        en: "This Pokémon emerges from the water in search\nof prey despite the fact that it moves more\nslowly on land.",
        "fr": "Ce Pokémon sort de l'eau à la recherche\nde proie malgré le fait qu'elle bouge plus\nlentement sur terre.",
        "es": "Este Pokémon emerge del agua en busca\nde presa a pesar de que se mueve más\nlentamente en tierra.",
        "it": "Questo Pokémon emerge dall'acqua in cerca\ndi preda nonostante si muova di più\nlentamente a terra.",
        "de": "Dieses Pokémon taucht auf der Suche aus dem Wasser auf\nder Beute trotz der Tatsache, dass es sich mehr bewegt\nlangsam an Land.",
        "pt-br": "Este Pokémon emerge da água em busca\nde presa, apesar de se mover mais\nlentamente em terra.",
        "zh-tw": "這只神奇寶貝從水中浮出來尋找\n儘管事實上它移動得更多\n慢慢地在陸地上。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Blocking Shell",
                "fr": "Coque de blocage",
                "es": "Carcasa de bloqueo",
                "it": "Blocco della Shell",
                "de": "Blockierende Shell",
                "pt-br": "Bloqueio de shell",
                "zh-tw": "阻塞外殼"
            },
            damage: 100,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn.",
                "fr": "Prévenez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de base lors du prochain tour de votre adversaire.",
                "es": "Evita todo el daño que le hagan a este Pokémon los ataques de Pokémon Básicos durante el próximo turno de tu rival.",
                "it": "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base durante il prossimo turno del tuo avversario.",
                "de": "Verhindere im nächsten Zug deines Gegners jeglichen Schaden, der diesem Pokémon durch Angriffe von Basis-Pokémon zugefügt wird.",
                "pt-br": "Previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos durante o próximo turno do seu oponente.",
                "zh-tw": "防止對手下回合中基礎寶可夢的攻擊對該寶可夢造成的所有傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
