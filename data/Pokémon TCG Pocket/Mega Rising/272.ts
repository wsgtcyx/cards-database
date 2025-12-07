import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Pinsir ex",
        "fr": "Méga Pinsir ex",
        "es": "Mega Pinsir ex",
        "it": "Mega Pinsir ex",
        "de": "Mega Pinsir ex",
        "pt-br": "Mega Pinsir ex",
        "zh-tw": "超級品西爾超級"
    },
    illustrator: "Krgc",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 170,
    types: ["Grass"],
    description: {
        en: "The influence of Mega Evolution leaves it in a\nstate of constant excitement. It pierces enemies\nwith its two large horns before shredding them.",
        "fr": "L'influence de Mega Evolution le laisse dans un\nétat d’excitation constante. Il transperce les ennemis\navec ses deux grosses cornes avant de les déchiqueter.",
        "es": "La influencia de la Mega Evolución lo deja en un\nestado de excitación constante. Atraviesa a los enemigos\ncon sus dos grandes cuernos antes de desmenuzarlos.",
        "it": "L'influenza della Mega Evoluzione lo lascia in a\nstato di continua eccitazione. Trafigge i nemici\ncon le sue due grandi corna prima di triturarle.",
        "de": "Der Einfluss von Mega Evolution lässt es in einem\nZustand ständiger Aufregung. Es durchdringt Feinde\nmit seinen zwei großen Hörnern, bevor er sie zerfetzt.",
        "pt-br": "A influência da Mega Evolução deixa-o em uma\nestado de excitação constante. Ele perfura os inimigos\ncom seus dois grandes chifres antes de triturá-los.",
        "zh-tw": "超級進化的影響使其陷入了困境\n持續興奮的狀態。它刺穿敵人\n用它的兩個大角，然後將它們撕碎。"
    },
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Critical Scissors",
                "fr": "Ciseaux critiques",
                "es": "Tijeras críticas",
                "it": "Forbici critiche",
                "de": "Kritische Schere",
                "pt-br": "Tesoura Crítica",
                "zh-tw": "關鍵剪刀"
            },
            damage: 80,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 70 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 70 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 70 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 70 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 70 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 70 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 70 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
