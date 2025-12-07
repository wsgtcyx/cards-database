import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Simisear",
        "fr": "Simisear",
        "es": "Simear",
        "it": "Simisear",
        "de": "Simisear",
        "pt-br": "Simisear",
        "zh-tw": "爆香猿",
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    evolveFrom: {
        en: "Pansear",
        "fr": "Panséar",
        "es": "Pansear",
        "it": "Pansear",
        "de": "Pansear",
        "pt-br": "Pansear",
        "zh-tw": "爆香猴",
    },
    description: {
        en: "When it gets excited, embers rise from its head\nand tail and it gets hot. For some reason, it\nloves sweets.",
        "fr": "Quand il s'excite, des braises sortent de sa tête\net la queue et il fait chaud. Pour une raison ou une autre,\naime les sucreries.",
        "es": "Cuando se excita, le salen brasas de la cabeza.\ny cola y se calienta. Por alguna razón,\nle encantan los dulces.",
        "it": "Quando si eccita, le braci si alzano dalla sua testa\ne la coda e fa caldo. Per qualche ragione, esso\nama i dolci.",
        "de": "Wenn es aufgeregt ist, steigt Glut aus seinem Kopf\nund Schwanz und es wird heiß. Aus irgendeinem Grund ist es\nliebt Süßigkeiten.",
        "pt-br": "Quando fica excitado, brasas sobem de sua cabeça\ne cauda e fica quente. Por alguma razão,\nadora doces.",
        "zh-tw": "當它興奮時，餘燼會從頭頂升起\n和尾巴，它會變熱。由於某種原因，它\n喜歡甜食。"
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
            cost: ["Fire", "Colorless"],
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
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
