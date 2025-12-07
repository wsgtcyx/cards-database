import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Watchog",
        "fr": "Chien de garde",
        "es": "vigilante",
        "it": "Watchog",
        "de": "Watchog",
        "pt-br": "Vigia",
        "zh-tw": "沃托格"
    },
    illustrator: "MAHOU",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Patrat",
        "fr": "Patrat",
        "es": "patrat",
        "it": "Patrat",
        "de": "Patrat",
        "pt-br": "Patrat",
        "zh-tw": "帕特拉特"
    },
    description: {
        en: "When they see an enemy, their tails stand high,\nand they spit the seeds of berries stored in their\ncheek pouches.",
        "fr": "Quand ils voient un ennemi, ils ont la queue haute,\net ils crachent les graines des baies stockées dans leur\npoches pour les joues.",
        "es": "Cuando ven un enemigo, levantan la cola,\ny escupen las semillas de las bayas almacenadas en sus\nbolsas en las mejillas.",
        "it": "Quando vedono un nemico, tengono alta la coda,\ne sputano i semi delle bacche conservate nelle loro\ntasche per le guance.",
        "de": "Wenn sie einen Feind sehen, strecken sie ihren Schwanz hoch,\nund sie spucken die Samen der in ihnen gelagerten Beeren aus\nBackentaschen.",
        "pt-br": "Quando eles veem um inimigo, suas caudas ficam erguidas,\ne cuspiram as sementes das frutas armazenadas em seus\nbolsas nas bochechas.",
        "zh-tw": "當它們看到敵人時，它們的尾巴會高高豎起，\n他們吐出儲存在他們的漿果中的種子\n頰袋。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Biting Fang",
                "fr": "Croc mordant",
                "es": "Colmillo mordedor",
                "it": "Zanna mordace",
                "de": "Beißender Fangzahn",
                "pt-br": "Mordendo Presa",
                "zh-tw": "咬牙方"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 40 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 40 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 40 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
