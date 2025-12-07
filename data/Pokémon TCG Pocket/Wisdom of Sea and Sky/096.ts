import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Swinub",
        "fr": "Swinub",
        "es": "Swinub",
        "it": "Swinub",
        "de": "Swinub",
        "pt-br": "Swinub",
        "zh-tw": "斯威努布"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "It rubs its snout on the ground to find and dig up\nfood. It sometimes discovers hot springs.",
        "fr": "Il frotte son museau contre le sol pour trouver et déterrer\nnourriture. Il découvre parfois des sources chaudes.",
        "es": "Frota el hocico en el suelo para encontrar y desenterrar.\ncomida. A veces descubre fuentes termales.",
        "it": "Strofina il muso sul terreno per trovare e scavare\ncibo. A volte scopre sorgenti termali.",
        "de": "Es reibt seine Schnauze über den Boden, um es zu finden und auszugraben\nEssen. Manchmal entdeckt es heiße Quellen.",
        "pt-br": "Ele esfrega o focinho no chão para encontrar e desenterrar\ncomida. Às vezes descobre fontes termais.",
        "zh-tw": "它用鼻子在地上摩擦來尋找和挖掘\n食物。有時它會發現溫泉。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mud-Slap",
                "fr": "Gifle de boue",
                "es": "Bofetada de barro",
                "it": "Schiaffo di fango",
                "de": "Schlammklatsch",
                "pt-br": "Tapa de lama",
                "zh-tw": "拍泥"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
