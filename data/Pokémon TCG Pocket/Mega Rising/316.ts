import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
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
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
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
                en: "Super Fang",
                "fr": "Super Croc",
                "es": "Súper colmillo",
                "it": "Super Zanna",
                "de": "Super Fang",
                "pt-br": "Super Presa",
                "zh-tw": "超級尖牙"
            },
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Halve your opponent's Active Pokémon's remaining HP, rounded down.",
                "fr": "Réduisez de moitié les PV restants du Pokémon Actif de votre adversaire, arrondis à l'inférieur.",
                "es": "Reduce a la mitad los HP restantes del Pokémon Activo de tu rival, redondeando hacia abajo.",
                "it": "Dimezza i PS rimanenti del Pokémon attivo del tuo avversario, arrotondati per difetto.",
                "de": "Halbiere die verbleibenden HP des Aktiven Pokémon deines Gegners, abgerundet.",
                "pt-br": "Reduza pela metade o HP restante do Pokémon Ativo do seu oponente, arredondado para baixo.",
                "zh-tw": "將對手的活躍寶可夢的剩餘生命值減半，向下舍入。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
