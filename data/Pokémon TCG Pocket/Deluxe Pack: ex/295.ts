import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Bidoof",
        "fr": "Bidoof",
        "es": "Bidoof",
        "it": "Bidoof",
        "de": "Bidoof",
        "pt-br": "Bidoof",
        "zh-tw": "大牙狸",
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "With nerves of steel, nothing can perturb it. It is\nmore agile and active than it appears.",
        "fr": "Avec des nerfs d’acier, rien ne peut la perturber. C'est\nplus agile et actif qu’il n’y paraît.",
        "es": "Con nervios de acero, nada puede perturbarlo. es\nmás ágil y activo de lo que parece.",
        "it": "Con nervi d’acciaio, nulla può turbarlo. Lo è\npiù agile e attivo di quanto sembri.",
        "de": "Mit Nerven aus Stahl kann es nichts aus der Ruhe bringen. Es ist\nagiler und aktiver als es scheint.",
        "pt-br": "Com nervos de aço, nada pode perturbá-lo. É\nmais ágil e ativo do que parece.",
        "zh-tw": "有著鋼鐵般的意志，沒有什麼可以擾亂它。它是\n比看上去更加敏捷和活躍。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
