import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Applin",
        "fr": "Candidature",
        "es": "aplicación",
        "it": "Applin",
        "de": "Applin",
        "pt-br": "Aplicativo",
        "zh-tw": "阿普林"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Grass"],
    description: {
        en: "It grows by eating the flesh of an apple.\nApplin uses its own body fluid to strengthen\nthe apple's skin and prevent it from rotting.",
        "fr": "Il pousse en mangeant la chair d'une pomme.\nApplin utilise son propre fluide corporel pour renforcer\nla peau de la pomme et l'empêcher de pourrir.",
        "es": "Crece comiendo la pulpa de una manzana.\nApplin utiliza su propio fluido corporal para fortalecer\nla piel de la manzana y evitar que se pudra.",
        "it": "Cresce mangiando la polpa di una mela.\nApplin utilizza i propri fluidi corporei per rafforzarsi\nla buccia della mela ed evitare che marcisca.",
        "de": "Es wächst, indem es das Fruchtfleisch eines Apfels isst.\nZur Kräftigung nutzt Applin seine eigene Körperflüssigkeit\ndie Schale des Apfels und verhindern, dass er verrottet.",
        "pt-br": "Ela cresce comendo a polpa de uma maçã.\nApplin usa seu próprio fluido corporal para fortalecer\na casca da maçã e evitar que apodreça.",
        "zh-tw": "它通過吃蘋果肉來生長。\n阿普林利用自身的體液來強化\n蘋果皮並防止其腐爛。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
