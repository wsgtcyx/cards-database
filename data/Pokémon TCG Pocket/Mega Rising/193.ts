import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Skitty",
        "fr": "Minou",
        "es": "Skitty",
        "it": "Skitty",
        "de": "Skitty",
        "pt-br": "Skitty",
        "zh-tw": "斯基蒂"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "It shows its cute side by chasing its own tail\nuntil it gets dizzy.",
        "fr": "Il montre son côté mignon en poursuivant sa propre queue\njusqu'à ce qu'il ait le vertige.",
        "es": "Muestra su lado lindo persiguiéndose su propia cola.\nhasta marearse.",
        "it": "Mostra il suo lato carino rincorrendosi la coda\nfino ad avere le vertigini.",
        "de": "Es zeigt seine süße Seite, indem es seinem eigenen Schwanz nachjagt\nbis es schwindelig wird.",
        "pt-br": "Ele mostra seu lado fofo perseguindo o próprio rabo\naté ficar tonto.",
        "zh-tw": "它追逐自己的尾巴，展現可愛的一面\n直到頭暈。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Play Rough",
                "fr": "Jouer brutalement",
                "es": "jugar duro",
                "it": "Gioca in modo duro",
                "de": "Rau spielen",
                "pt-br": "Jogue duro",
                "zh-tw": "玩粗暴"
            },
            damage: 10,
            cost: ["Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
