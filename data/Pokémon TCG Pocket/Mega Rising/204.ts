import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Rufflet",
        "fr": "Volant",
        "es": "Volante",
        "it": "Volant",
        "de": "Rüschen",
        "pt-br": "Babado",
        "zh-tw": "魯夫萊特"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "With its sharp claws, this Pokémon pierces its\nprey, and then it pecks at them. Although it also\nconsumes berries, it's a carnivore at heart.",
        "fr": "Avec ses griffes acérées, ce Pokémon lui transperce\nproie, puis il les picote. Même si c'est aussi\nconsomme des baies, c'est un carnivore dans l'âme.",
        "es": "Con sus afiladas garras, este Pokémon perfora su\npresa, y luego los picotea. Aunque también\nconsume bayas, es un carnívoro de corazón.",
        "it": "Con i suoi artigli affilati, questo Pokémon lo trafigge\npreda, e poi li becca. Anche se anche\nconsuma bacche, è un carnivoro in fondo.",
        "de": "Mit seinen scharfen Krallen durchbohrt dieses Pokémon seine\nBeute, und dann pickt es nach ihnen. Obwohl es auch\nisst Beeren, ist im Herzen ein Fleischfresser.",
        "pt-br": "Com suas garras afiadas, este Pokémon perfura seus\npresa, e então ele os bica. Embora também\nconsome frutas vermelhas, é um carnívoro de coração.",
        "zh-tw": "這只神奇寶貝用鋒利的爪子刺穿自己的身體\n獵物，然後啄食它們。雖然這也\n以漿果為食，本質上是肉食動物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Wing Attack",
                "fr": "Attaque d'aile",
                "es": "Ataque de ala",
                "it": "Attacco d'ala",
                "de": "Flügelangriff",
                "pt-br": "Ataque de asa",
                "zh-tw": "翼攻擊"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
