import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Moltres",
        "fr": "Sulfura",
        "es": "Moltres",
        "it": "Moltres",
        "de": "Moltres",
        "pt-br": "Moltres",
        "zh-tw": "莫爾特雷斯"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    description: {
        en: "It's one of the legendary bird Pokémon. When\nMoltres flaps its flaming wings, they glimmer with\na dazzling red glow.",
        "fr": "C'est l'un des Pokémon oiseaux légendaires. Quand\nMoltres bat ses ailes enflammées, elles brillent de\nune lueur rouge éblouissante.",
        "es": "Es uno de los Pokémon pájaro legendarios. cuando\nMoltres bate sus alas llameantes, brillan con\nun resplandor rojo deslumbrante.",
        "it": "È uno dei leggendari Pokémon uccello. Quando\nMoltres sbatte le sue ali fiammeggianti, che luccicano\nun abbagliante bagliore rosso.",
        "de": "Es ist eines der legendären Vogel-Pokémon. Wann\nMoltres schlägt mit seinen flammenden Flügeln, sie schimmern\nein blendendes rotes Leuchten.",
        "pt-br": "É um dos lendários Pokémon pássaros. Quando\nMoltres bate suas asas flamejantes, elas brilham com\num brilho vermelho deslumbrante.",
        "zh-tw": "是傳說中的鳥神奇寶貝之一。當\n莫爾特雷斯拍打著燃燒的翅膀，它們閃爍著光芒\n耀眼的紅光。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sky Attack",
                "fr": "Attaque du ciel",
                "es": "Ataque al cielo",
                "it": "Attacco al cielo",
                "de": "Himmelsangriff",
                "pt-br": "Ataque Celestial",
                "zh-tw": "天空攻擊"
            },
            damage: 130,
            cost: ["Fire", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                "fr": "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                "es": "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                "it": "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
