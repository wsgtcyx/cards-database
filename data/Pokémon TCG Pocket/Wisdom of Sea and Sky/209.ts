import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/209",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/209",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/209",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/209",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/209",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/209",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/209"
    },
    name: {
        en: "Skarmory ex",
        "fr": "Airmure-ex",
        "es": "Skarmory ex",
        "it": "Skarmory-ex",
        "de": "Panzaeron-ex",
        "pt-br": "Skarmory ex",
        "zh-tw": "盔甲鳥ex",
    },
    illustrator: "toriyufu",
    rarity: "Two Star",
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
