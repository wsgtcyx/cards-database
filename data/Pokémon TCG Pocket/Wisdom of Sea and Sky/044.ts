import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Magikarp",
        "fr": "Magikarpe",
        "es": "Magikarp",
        "it": "Magikarp",
        "de": "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    description: {
        en: "An underpowered, pathetic Pokémon. It may\njump high on rare occasions but never more\nthan seven feet.",
        "fr": "Un Pokémon pathétique et sous-alimenté. Il se peut\nsauter haut en de rares occasions mais jamais plus\nplus de sept pieds.",
        "es": "Un Pokémon patético y con pocos poderes. puede\nsaltar alto en raras ocasiones pero nunca más\nde siete pies.",
        "it": "Un Pokémon sottodimensionato e patetico. Potrebbe\nsaltare in alto in rare occasioni ma mai di più\npiù di sette piedi.",
        "de": "Ein schwaches, erbärmliches Pokémon. Es kann sein\nSpringe in seltenen Fällen hoch, aber nie öfter\nals sieben Fuß.",
        "pt-br": "Um Pokémon patético e pouco poderoso. Pode\npular alto em raras ocasiões, mas nunca mais\ndo que sete pés.",
        "zh-tw": "力量不足、可憐的神奇寶貝。它可能\n偶爾會跳得很高，但絕不會更多\n超過七英尺。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Splashing Dodge",
                "fr": "Esquive éclaboussante",
                "es": "Esquivar chapoteando",
                "it": "Schivata schizzata",
                "de": "Spritzender Dodge",
                "pt-br": "Salpicos de esquiva",
                "zh-tw": "潑水道奇"
            },
            damage: 10,
            cost: ["Water"],
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                "es": "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                "it": "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                "de": "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一回合中，阻止對該神奇寶貝造成的所有攻擊傷害及其效果。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
