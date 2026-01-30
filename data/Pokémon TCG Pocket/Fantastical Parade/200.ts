import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Gigalith ex",
        "fr": "Gigalithe ex",
        "es": "ex gigalito",
        "it": "Gigalite es",
        "de": "Gigalith ex",
        "pt-br": "Gigalito ex",
        "zh-tw": "吉加利斯前"
    },
    illustrator: "Takumi Wada",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 190,
    types: ["Fighting"],
    evolveFrom: {
        en: "Boldore",
        "fr": "Boldoré",
        "es": "Boldoré",
        "it": "Boldore",
        "de": "Boldore",
        "pt-br": "Boldoré",
        "zh-tw": "博爾多雷"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Megaton Cannon",
                "fr": "Canon mégatonne",
                "es": "Cañón megatón",
                "it": "Cannone Megatone",
                "de": "Megaton-Kanone",
                "pt-br": "Canhão Megaton",
                "zh-tw": "百萬噸級大砲"
            },
            cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
            effect: {
                en: "This attack does 140 damage to 1 of your opponent's Pokémon. During your next turn, this Pokémon can't attack.",
                "fr": "Cette attaque inflige 140 dégâts à 1 des Pokémon de votre adversaire. Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                "es": "Este ataque hace 140 puntos de daño a 1 de los Pokémon de tu rival. Durante tu próximo turno, este Pokémon no puede atacar.",
                "it": "Questo attacco infligge 140 danni a 1 dei Pokémon del tuo avversario. Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 140 Schadenspunkte zu. Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Este ataque causa 140 pontos de dano a 1 dos Pokémon do seu oponente. Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 140 點傷害。在你的下一個回合中，這只神奇寶貝無法攻擊。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4
};
export default card;
