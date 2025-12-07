import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Wooper",
        "fr": "Wooper",
        "es": "Wooper",
        "it": "Wooper",
        "de": "Wooper",
        "pt-br": "Wooper",
        "zh-tw": "烏波",
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "This Pokémon lives in cold water. It will leave the\nwater to search for food when it gets cold outside.",
        "fr": "Ce Pokémon vit dans l'eau froide. Il quittera le\nde l'eau pour chercher de la nourriture quand il fait froid dehors.",
        "es": "Este Pokémon vive en agua fría. Dejará el\nagua para buscar comida cuando hace frío afuera.",
        "it": "Questo Pokémon vive nell'acqua fredda. Lascerà il\nacqua per cercare il cibo quando fuori fa freddo.",
        "de": "Dieses Pokémon lebt in kaltem Wasser. Es wird das verlassen\nWasser zur Nahrungssuche, wenn es draußen kalt wird.",
        "pt-br": "Este Pokémon vive em água fria. Vai deixar o\nágua para procurar comida quando fica frio lá fora.",
        "zh-tw": "這只神奇寶貝生活在冷水中。它將留下\n當外面變冷時，可以用水來尋找食物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rain Splash",
                "fr": "Éclaboussure de pluie",
                "es": "Salpicaduras de lluvia",
                "it": "Spruzzi di pioggia",
                "de": "Regenspritzer",
                "pt-br": "Respingo de chuva",
                "zh-tw": "雨濺"
            },
            damage: 30,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
