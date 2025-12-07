import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Skiddo",
        "fr": "Skiddo",
        "es": "patinar",
        "it": "Scivola",
        "de": "Skiddo",
        "pt-br": "Skiddo",
        "zh-tw": "斯基多"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    description: {
        en: "As long as it has sunlight and water, Skiddo can\nmake energy with the leaves on its body, allowing\nit to live on rocky mountains barren of food.",
        "fr": "Tant qu'il y a du soleil et de l'eau, Skiddo peut\nfabriquer de l'énergie avec les feuilles de son corps, permettant\nvivre sur des montagnes rocheuses dépourvues de nourriture.",
        "es": "Mientras tenga luz solar y agua, Skiddo puede\nproducir energía con las hojas de su cuerpo, permitiendo\nvivir en montañas rocosas desprovistas de alimento.",
        "it": "Finché ha luce solare e acqua, Skiddo può farlo\nprodurre energia con le foglie sul suo corpo, permettendo\nvivere su montagne rocciose prive di cibo.",
        "de": "Solange es Sonnenlicht und Wasser gibt, kann Skiddo\nEnergie mit den Blättern an seinem Körper erzeugen und so ermöglichen\nes ist, auf felsigen Bergen zu leben, in denen es keine Nahrung gibt.",
        "pt-br": "Contanto que tenha luz solar e água, Skiddo pode\nproduzir energia com as folhas do seu corpo, permitindo\nviver em montanhas rochosas sem comida.",
        "zh-tw": "只要有陽光和水，斯基多就可以\n用身體上的葉子產生能量，允許\n它生活在貧瘠的落基山脈上。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Razor Leaf",
                "fr": "Feuille de rasoir",
                "es": "Hoja de afeitar",
                "it": "Foglia di rasoio",
                "de": "Rasiermesserblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "剃刀葉"
            },
            damage: 30,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
