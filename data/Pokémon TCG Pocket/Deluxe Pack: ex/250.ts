import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Alolan Diglett",
        "fr": "Alolan Diglett",
        "es": "Diglett de Alola",
        "it": "Diglett di Alola",
        "de": "Alolan Diglett",
        "pt-br": "Alola Diglett",
        "zh-tw": "阿羅拉地鼠",
    },
    illustrator: "Megumi Mizutani",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    description: {
        en: "The metal-rich geology of this Pokémon's habitat\ncaused it to develop steel whiskers on its head.",
        "fr": "La géologie riche en métaux de l'habitat de ce Pokémon\nlui a fait développer des moustaches d'acier sur la tête.",
        "es": "La geología rica en metales del hábitat de este Pokémon\nle hizo desarrollar bigotes de acero en la cabeza.",
        "it": "La geologia ricca di metalli dell'habitat di questo Pokémon\ngli ha fatto sviluppare baffi d'acciaio sulla testa.",
        "de": "Die metallreiche Geologie des Lebensraums dieses Pokémon\nverursachte, dass es stählerne Barthaare auf seinem Kopf entwickelte.",
        "pt-br": "A geologia rica em metais do habitat deste Pokémon\nfez com que desenvolvesse bigodes de aço em sua cabeça.",
        "zh-tw": "該神奇寶貝棲息地富含金屬的地質\n導致它的頭上長出了鋼須。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Happened to Headbutt",
                "fr": "C'est arrivé à un coup de tête",
                "es": "Le pasó al cabezazo",
                "it": "È successo a Testata",
                "de": "Ist beim Kopfstoß passiert",
                "pt-br": "Aconteceu com cabeçada",
                "zh-tw": "發生了頭撞事件"
            },
            damage: 40,
            cost: ["Metal"],
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
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
