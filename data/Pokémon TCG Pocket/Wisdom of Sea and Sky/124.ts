import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Skarmory ex",
        "fr": "Ex-Airmure",
        "es": "Skarmory ex",
        "it": "Skarmory es",
        "de": "Skarmory ex",
        "pt-br": "Skarmory ex",
        "zh-tw": "斯卡莫里前任"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Steel Wing",
                "fr": "Aile en acier",
                "es": "Ala de acero",
                "it": "Ala d'acciaio",
                "de": "Stahlflügel",
                "pt-br": "Asa de Aço",
                "zh-tw": "鋼翼"
            },
            damage: 70,
            cost: ["Metal", "Metal"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -20 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -20 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −20 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -20 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-20。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
