import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Chansey",
        "fr": "Chansey",
        "es": "Chansey",
        "it": "Chansey",
        "de": "Chansey",
        "pt-br": "Chansey",
        "zh-tw": "錢西"
    },
    illustrator: "miki kudo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "This kindly Pokémon lays highly nutritious eggs\nand shares them with injured Pokémon or people.",
        "fr": "Ce gentil Pokémon pond des œufs très nutritifs\net les partage avec des Pokémon ou des personnes blessés.",
        "es": "Este amable Pokémon pone huevos muy nutritivos\ny los comparte con Pokémon o personas heridas.",
        "it": "Questo Pokémon gentile depone uova altamente nutrienti\ne li condivide con Pokémon o persone feriti.",
        "de": "Dieses freundliche Pokémon legt sehr nahrhafte Eier\nund teilt sie mit verletzten Pokémon oder Menschen.",
        "pt-br": "Este gentil Pokémon põe ovos altamente nutritivos\ne os compartilha com Pokémon ou pessoas feridas.",
        "zh-tw": "這只善良的神奇寶貝會產下營養豐富的蛋\n並與受傷的神奇寶貝或人分享。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Scrunch",
                "fr": "Froisser",
                "es": "Crujir",
                "it": "Scrunch",
                "de": "Knirschen",
                "pt-br": "Amassar",
                "zh-tw": "緊縮"
            },
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts infligés à ce Pokémon par les attaques.",
                "es": "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño que los ataques le hagan a este Pokémon.",
                "it": "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi.",
                "de": "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden, der diesem Pokémon durch Angriffe zugefügt wird.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos causados ​​a este Pokémon por ataques.",
                "zh-tw": "拋一枚硬幣。如果正面，則在對手的下一個回合中，阻止攻擊對該神奇寶貝造成的所有傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
