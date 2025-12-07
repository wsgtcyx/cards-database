import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Corsola",
        "fr": "Corsola",
        "es": "Corsola",
        "it": "Corsola",
        "de": "Corsola",
        "pt-br": "Corsola",
        "zh-tw": "太陽珊瑚",
    },
    illustrator: "Mékayu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "It will regrow any branches that break off its\nhead. People keep particularly beautiful Corsola\nbranches as charms to promote safe childbirth.",
        "fr": "Il repoussera toutes les branches qui se détachent\ntête. Les gens gardent une Corsola particulièrement belle\nbranches comme charmes pour favoriser un accouchement en toute sécurité.",
        "es": "Volverá a crecer cualquier rama que se rompa\ncabeza. La gente mantiene Corsola particularmente hermosa.\nramas como amuletos para promover un parto seguro.",
        "it": "Farà ricrescere tutti i rami che si staccano\ntesta. Le persone mantengono Corsola particolarmente bella\nrami come amuleti per favorire un parto sicuro.",
        "de": "Abgebrochene Zweige wachsen nach\nKopf. Die Menschen halten Corsola besonders schön\nZweige als Anhänger zur Förderung einer sicheren Geburt.",
        "pt-br": "Ele irá regenerar quaisquer galhos que se quebrem\ncabeça. As pessoas mantêm Corsola particularmente bonita\nramos como amuletos para promover um parto seguro.",
        "zh-tw": "它會重新長出任何折斷的樹枝\n頭。人們養的科索拉特別漂亮\n樹枝作為護身符，促進安全分娩。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Find a Friend",
                "fr": "Trouver un ami",
                "es": "encontrar un amigo",
                "it": "Trova un amico",
                "de": "Finde einen Freund",
                "pt-br": "Encontre um amigo",
                "zh-tw": "找朋友"
            },
            cost: ["Colorless"],
            effect: {
                en: "Put a random Pokémon from your deck into your hand.",
                "fr": "Mettez un Pokémon aléatoire de votre deck dans votre main.",
                "es": "Pon un Pokémon aleatorio de tu mazo en tu mano.",
                "it": "Metti nella tua mano un Pokémon casuale dal tuo mazzo.",
                "de": "Nimm ein zufälliges Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque um Pokémon aleatório do seu baralho na sua mão.",
                "zh-tw": "從你的牌組中隨機將一隻神奇寶貝放入你的手牌。"
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
