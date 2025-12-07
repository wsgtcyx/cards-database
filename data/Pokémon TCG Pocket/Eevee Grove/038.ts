import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Barboach",
        "fr": "Barboach",
        "es": "barboach",
        "it": "Barboach",
        "de": "Barboach",
        "pt-br": "Barboach",
        "zh-tw": "泥泥鰍",
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "Its two whiskers provide a sensitive radar. Even in\nmuddy waters, it can detect its prey's location.",
        "fr": "Ses deux moustaches constituent un radar sensible. Même dans\neaux boueuses, il peut détecter l'emplacement de ses proies.",
        "es": "Sus dos bigotes proporcionan un radar sensible. Incluso en\nEn aguas turbias, puede detectar la ubicación de su presa.",
        "it": "I suoi due baffi forniscono un radar sensibile. Anche dentro\nacque fangose, può rilevare la posizione della sua preda.",
        "de": "Seine beiden Whisker sorgen für ein empfindliches Radar. Sogar in\nIn schlammigen Gewässern kann es den Standort seiner Beute erkennen.",
        "pt-br": "Seus dois bigodes fornecem um radar sensível. Mesmo em\náguas lamacentas, ele pode detectar a localização de sua presa.",
        "zh-tw": "它的兩根鬍鬚提供了靈敏的雷達。即使在\n渾水中，它可以探測獵物的位置。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mud Shot",
                "fr": "Tir de boue",
                "es": "Tiro de barro",
                "it": "Colpo di fango",
                "de": "Schlammschuss",
                "pt-br": "Tiro de lama",
                "zh-tw": "泥彈"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
