import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Duskull",
        "fr": "Crâne crépusculaire",
        "es": "cráneo oscuro",
        "it": "Teschio crepuscolare",
        "de": "Dämmerung",
        "pt-br": "Crepúsculo",
        "zh-tw": "夜骷顱",
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "Making itself invisible, it silently sneaks up to\nprey. It has the ability to slip through thick walls.",
        "fr": "Se rendant invisible, il se faufile silencieusement jusqu'à\nproie. Il a la capacité de se faufiler à travers des murs épais.",
        "es": "Haciéndose invisible, se acerca sigilosamente a\npresa. Tiene la capacidad de deslizarse a través de paredes gruesas.",
        "it": "Rendendosi invisibile, si avvicina silenziosamente\npreda. Ha la capacità di scivolare attraverso muri spessi.",
        "de": "Es macht sich unsichtbar und schleicht sich lautlos an ihn heran\nBeute. Es hat die Fähigkeit, durch dicke Wände zu schlüpfen.",
        "pt-br": "Tornando-se invisível, ele se aproxima silenciosamente\npresa. Tem a capacidade de deslizar através de paredes grossas.",
        "zh-tw": "它把自己隱藏起來，悄悄地潛入\n獵物。它具有穿過厚牆的能力。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ambush",
                "fr": "Embuscade",
                "es": "Emboscada",
                "it": "Agguato",
                "de": "Hinterhalt",
                "pt-br": "Emboscada",
                "zh-tw": "伏擊"
            },
            damage: 10,
            cost: ["Psychic"],
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
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
