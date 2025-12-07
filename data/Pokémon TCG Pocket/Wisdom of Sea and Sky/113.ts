import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Murkrow",
        "fr": "Murkrow",
        "es": "Murkrow",
        "it": "Murkrow",
        "de": "Murkrow",
        "pt-br": "Murkrow",
        "zh-tw": "黑暗鴉",
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "Feared and loathed by many, it is believed to\nbring misfortune to all those who see it at night.",
        "fr": "Craint et détesté par beaucoup, on pense qu'il\napportez le malheur à tous ceux qui le voient la nuit.",
        "es": "Temido y odiado por muchos, se cree que\ntrae desgracia a todos los que la ven de noche.",
        "it": "Si ritiene che sia temuto e odiato da molti\nportare sfortuna a tutti coloro che lo vedono di notte.",
        "de": "Es wird angenommen, dass es von vielen gefürchtet und verabscheut wird\nBring Unglück über alle, die es nachts sehen.",
        "pt-br": "Temido e odiado por muitos, acredita-se que\ntraga infortúnio a todos aqueles que o vêem à noite.",
        "zh-tw": "人們相信它受到許多人的恐懼和厭惡\n給夜間看到它的人帶來不幸。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Astonish",
                "fr": "Étonner",
                "es": "Asombrar",
                "it": "Stupire",
                "de": "Erstaunen",
                "pt-br": "Surpreender",
                "zh-tw": "震驚"
            },
            cost: ["Darkness"],
            effect: {
                en: "Flip a coin. If heads, your opponent reveals a random card from their hand and shuffles it into their deck.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, votre adversaire révèle une carte aléatoire de sa main et la mélange dans son deck.",
                "es": "Lanza una moneda. Si sale cara, tu oponente revela una carta aleatoria de su mano y la baraja en su mazo.",
                "it": "Lancia una moneta. Se esce testa, il tuo avversario rivela una carta casuale dalla sua mano e la mescola nel suo mazzo.",
                "de": "Wirf eine Münze. Bei „Kopf“ deckt dein Gegner eine zufällige Karte aus seiner Hand auf und mischt sie in sein Deck.",
                "pt-br": "Jogue uma moeda. Se der cara, seu oponente revela uma carta aleatória de sua mão e a embaralha em seu baralho.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則對手從手中隨機展示一張牌並將其洗入牌庫。"
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
