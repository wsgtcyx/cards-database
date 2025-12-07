import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Panpour",
        "fr": "Panpour",
        "es": "panpur",
        "it": "Panpour",
        "de": "Panpour",
        "pt-br": "Panpour",
        "zh-tw": "冷水猴",
    },
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "The water stored inside the tuft on its head is full of\nnutrients. Plants that receive its water grow large.",
        "fr": "L'eau stockée à l'intérieur de la touffe sur sa tête est pleine de\nnutriments. Les plantes qui reçoivent son eau grandissent.",
        "es": "El agua almacenada dentro del mechón de su cabeza está llena de\nnutrientes. Las plantas que reciben su agua crecen grandes.",
        "it": "L'acqua immagazzinata all'interno del ciuffo sulla sua testa è piena di\nnutrienti. Le piante che ricevono la sua acqua diventano grandi.",
        "de": "Das im Büschel auf seinem Kopf gespeicherte Wasser ist voll\nNährstoffe. Pflanzen, die das Wasser aufnehmen, werden groß.",
        "pt-br": "A água armazenada dentro do tufo em sua cabeça está cheia de\nnutrientes. As plantas que recebem sua água crescem grandes.",
        "zh-tw": "它頭上的絨毛里儲存的水充滿了\n營養素。吸收水分的植物會長得很大。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Beat",
                "fr": "Battre",
                "es": "Derrotar",
                "it": "Colpo",
                "de": "Schlagen",
                "pt-br": "Bater",
                "zh-tw": "打"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
