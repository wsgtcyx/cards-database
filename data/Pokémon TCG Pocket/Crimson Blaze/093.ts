import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Cloyster",
        "fr": "Crustabri",
        "es": "Cloyster",
        "it": "Cloyster",
        "de": "Austos",
        "pt-br": "Cloyster",
        "zh-tw": "刺甲貝"
    },
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    evolveFrom: {
        en: "Shellder",
        "fr": "Kokiyas",
        "es": "Shellder",
        "it": "Shellder",
        "de": "Muschas",
        "pt-br": "Shellder",
        "zh-tw": "大舌貝"
    },
    description: {
        en: "Cloyster that live in seas with harsh tidal currents\ngrow large, sharp spikes on their shells.",
        "fr": "Cloyster qui vit dans des mers aux courants de marée violents\npoussent de grosses pointes pointues sur leur coquille.",
        "es": "Cloyster que vive en mares con fuertes corrientes de marea.\nles crecen espinas grandes y afiladas en sus caparazones.",
        "it": "Cloyster che vive in mari con forti correnti di marea\nsviluppano punte grandi e affilate sui loro gusci.",
        "de": "Cloyster, die in Meeren mit starken Gezeitenströmungen leben\nAuf ihrem Panzer wachsen große, scharfe Stacheln.",
        "pt-br": "Cloyster que vive em mares com fortes correntes de maré\ncrescem pontas grandes e afiadas em suas conchas.",
        "zh-tw": "生活在潮汐洶湧的海洋中的梭蚌\n它們的殼上長出又大又尖的尖刺。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Guard Press",
                "fr": "Presse de garde",
                "es": "Prensa de guardia",
                "it": "Stampa della Guardia",
                "de": "Gardepresse",
                "pt-br": "Imprensa da Guarda",
                "zh-tw": "守衛壓力機"
            },
            damage: 50,
            cost: ["Water", "Water"],
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
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
