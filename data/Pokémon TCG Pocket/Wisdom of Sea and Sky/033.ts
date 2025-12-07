import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Entei",
        "fr": "Entéi",
        "es": "entei",
        "it": "Entei",
        "de": "Entei",
        "pt-br": "Entei",
        "zh-tw": "延亭"
    },
    illustrator: "kodama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fire"],
    description: {
        en: "A Pokémon that races across the land. It is said\nthat one is born every time a new volcano appears.",
        "fr": "Un Pokémon qui court à travers le pays. On dit\ncelui-là naît à chaque fois qu'un nouveau volcan apparaît.",
        "es": "Un Pokémon que corre por la tierra. se dice\nese nace cada vez que aparece un nuevo volcán.",
        "it": "Un Pokémon che corre per tutto il territorio. Si dice\nquello nasce ogni volta che appare un nuovo vulcano.",
        "de": "Ein Pokémon, das durch das Land rast. Es heißt\ndass man jedes Mal geboren wird, wenn ein neuer Vulkan auftaucht.",
        "pt-br": "Um Pokémon que corre pela terra. É dito\naquele nasce toda vez que surge um novo vulcão.",
        "zh-tw": "在陸地上奔跑的寶可夢。據說\n每當一座新火山出現時，這個火山就會誕生。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Strong Flare",
                "fr": "Forte fusée éclairante",
                "es": "Llamarada fuerte",
                "it": "Forte chiarore",
                "de": "Starkes Aufflackern",
                "pt-br": "Sinalizador Forte",
                "zh-tw": "強耀斑"
            },
            damage: 110,
            cost: ["Fire", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, discard 2 random Energy from this Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est pile, défaussez 2 Énergies aléatoires de ce Pokémon.",
                "es": "Lanza una moneda. Si sale cruz, descarta 2 Energías aleatorias de este Pokémon.",
                "it": "Lancia una moneta. Se esce croce, scarta due Energie casuali assegnate a questo Pokémon.",
                "de": "Wirf eine Münze. Bei „Zahl“ wirf 2 zufällige Energien von diesem Pokémon ab.",
                "pt-br": "Jogue uma moeda. Se sair coroa, descarte 2 Energias aleatórias deste Pokémon.",
                "zh-tw": "拋一枚硬幣。如果出現反面，則丟棄該神奇寶貝的 2 個隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
