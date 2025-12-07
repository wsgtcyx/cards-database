import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Mantine",
        "fr": "Mantine",
        "es": "mantina",
        "it": "Mantine",
        "de": "Mantine",
        "pt-br": "Mantine",
        "zh-tw": "曼丁"
    },
    illustrator: "0313",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    description: {
        en: "While elegantly swimming in the sea, it ignores\nRemoraid that cling to its fins seeking food scraps.",
        "fr": "Tout en nageant élégamment dans la mer, il ignore\nRémoraide qui s'accroche à ses nageoires à la recherche de restes de nourriture.",
        "es": "Mientras nada elegantemente en el mar, ignora\nRemoraide que se aferra a sus aletas en busca de restos de comida.",
        "it": "Mentre nuota elegantemente nel mare, ignora\nRemoraid che si aggrappa alle sue pinne alla ricerca di avanzi di cibo.",
        "de": "Während es elegant im Meer schwimmt, ignoriert es es\nRemoraid, das sich an seinen Flossen festklammert und nach Essensresten sucht.",
        "pt-br": "Enquanto nada elegantemente no mar, ignora\nRemoraid que se agarra às barbatanas em busca de restos de comida.",
        "zh-tw": "它在海裡優雅地游泳的同時，卻忽略了\n粘魚會緊貼鰭尋找食物殘渣。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dive",
                "fr": "Plonger",
                "es": "Bucear",
                "it": "Tuffo",
                "de": "Tauchen",
                "pt-br": "Mergulho",
                "zh-tw": "潛水"
            },
            damage: 80,
            cost: ["Water", "Water", "Water", "Colorless"],
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
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
