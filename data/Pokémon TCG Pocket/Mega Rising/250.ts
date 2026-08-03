import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/250",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/250",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/250",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/250",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/250",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/250"
    },
    name: {
        en: "Rufflet",
        "fr": "Furaiglon",
        "es": "Rufflet",
        "it": "Rufflet",
        "de": "Geronimatz",
        "pt-br": "Rufflet",
        "zh-tw": "毛頭小鷹",
    },
    illustrator: "Saboteri",
    rarity: "One Star",
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
