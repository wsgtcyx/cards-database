import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Bulbasaur",
        "fr": "Bulbizarre",
        "es": "bulbasaur",
        "it": "Bulbasauro",
        "de": "Bisasam",
        "pt-br": "Bulbasauro",
        "zh-tw": "妙蛙種子"
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "There is a plant seed on its back right from the\nday this Pokémon is born. The seed slowly\ngrows larger.",
        "fr": "Il y a une graine de plante sur son dos, directement du\njour où ce Pokémon est né. La graine lentement\ngrandit.",
        "es": "Hay una semilla de planta en su parte posterior desde el\nDía en que nace este Pokémon. La semilla lentamente\nse hace más grande.",
        "it": "C'è un seme di pianta sul dorso proprio dal\ngiorno in cui questo Pokémon è nato. Il seme lentamente\ndiventa più grande.",
        "de": "Auf der Rückseite befindet sich ein Pflanzensamen\nTag, an dem dieses Pokémon geboren wird. Der Samen langsam\nwird größer.",
        "pt-br": "Há uma semente de planta em suas costas, desde o\ndia em que este Pokémon nasce. A semente lentamente\nfica maior.",
        "zh-tw": "它的背上有一粒植物種子\n這只神奇寶貝誕生的那一天。種子慢慢地\n變大。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Vine Whip",
                "fr": "Fouet de vigne",
                "es": "Látigo de vid",
                "it": "Frusta di vite",
                "de": "Weinpeitsche",
                "pt-br": "Chicote de videira",
                "zh-tw": "藤鞭"
            },
            damage: 40,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
