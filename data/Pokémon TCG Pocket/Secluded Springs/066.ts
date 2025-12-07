import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Fletchling",
        "fr": "Empennage",
        "es": "Fletchling",
        "it": "Fletchling",
        "de": "Fletchling",
        "pt-br": "Fletchling",
        "zh-tw": "小箭雀",
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "This Pokémon is normally calm, but once it enters battle,\nits hormonal balance changes and it becomes aggressive.",
        "fr": "Ce Pokémon est normalement calme, mais une fois qu'il entre en combat,\nson équilibre hormonal change et il devient agressif.",
        "es": "Este Pokémon normalmente está tranquilo, pero una vez que entra en batalla,\nsu equilibrio hormonal cambia y se vuelve agresivo.",
        "it": "Questo Pokémon normalmente è calmo, ma una volta entrato in battaglia,\nil suo equilibrio ormonale cambia e diventa aggressivo.",
        "de": "Dieses Pokémon ist normalerweise ruhig, aber sobald es in den Kampf eintritt,\nsein Hormonhaushalt verändert sich und es wird aggressiv.",
        "pt-br": "Este Pokémon normalmente é calmo mas quando entra em batalha\nseu equilíbrio hormonal muda e ele se torna agressivo.",
        "zh-tw": "這只寶可夢平時很冷靜，但一旦進入戰鬥，\n它的荷爾蒙平衡發生變化，變得具有攻擊性。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Quick Attack",
                "fr": "Attaque rapide",
                "es": "Ataque rápido",
                "it": "Attacco rapido",
                "de": "Schneller Angriff",
                "pt-br": "Ataque Rápido",
                "zh-tw": "快速攻擊"
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
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
