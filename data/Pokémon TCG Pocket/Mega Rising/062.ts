import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Simipour",
        "fr": "Simipour",
        "es": "Simipour",
        "it": "Simipour",
        "de": "Simipour",
        "pt-br": "Simipour",
        "zh-tw": "冷水猿",
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    evolveFrom: {
        en: "Panpour",
        "fr": "Panpour",
        "es": "panpur",
        "it": "Panpour",
        "de": "Panpour",
        "pt-br": "Panpour",
        "zh-tw": "潘普爾"
    },
    description: {
        en: "It prefers places with clean water. When its tuft runs\nlow, it replenishes it by siphoning up water with\nits tail.",
        "fr": "Il préfère les endroits avec de l'eau propre. Quand sa touffe coule\nbas, il le reconstitue en siphonnant l'eau avec\nsa queue.",
        "es": "Prefiere lugares con agua limpia. Cuando su penacho corre\nbaja, la repone extrayendo agua con\nsu cola.",
        "it": "Preferisce luoghi con acqua pulita. Quando il suo ciuffo cola\nbasso, lo riempie aspirando l'acqua con\nla sua coda.",
        "de": "Es bevorzugt Orte mit sauberem Wasser. Wenn sein Büschel läuft\nniedrig ist, füllt es ihn wieder auf, indem es Wasser mit ansaugt\nsein Schwanz.",
        "pt-br": "Prefere locais com água limpa. Quando seu tufo corre\nbaixo, ele o reabastece sugando água com\nsua cauda.",
        "zh-tw": "它更喜歡有乾淨水源的地方。當它的簇絨運行時\n低，它通過吸水來補充它\n它的尾巴。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fury Swipes",
                "fr": "Coups de fureur",
                "es": "Golpes de furia",
                "it": "Colpi di furia",
                "de": "Wut-Swipes",
                "pt-br": "Golpes de Fúria",
                "zh-tw": "狂怒橫掃"
            },
            damage: 40,
            cost: ["Water", "Colorless"],
            effect: {
                en: "Flip 3 coins. This attack does 40 damage for each heads.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque tête.",
                "es": "Lanza 3 monedas. Este ataque hace 40 daños por cada cabeza.",
                "it": "Lancia 3 monete. Questo attacco infligge 40 danni per ogni testa.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 40 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 40 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
