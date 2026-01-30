import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Pumpkaboo",
        "fr": "Citrouille",
        "es": "calabaza",
        "it": "Pumpkaboo",
        "de": "Kürbis",
        "pt-br": "Abóbora",
        "zh-tw": "南瓜布"
    },
    illustrator: "Mousho",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "The light that streams out from the holes in the\npumpkin can hypnotize and control the people\nand Pokémon that see it.",
        "fr": "La lumière qui sort des trous du\nla citrouille peut hypnotiser et contrôler les gens\net les Pokémon qui le voient.",
        "es": "La luz que sale por los agujeros del\nLa calabaza puede hipnotizar y controlar a las personas.\ny Pokémon que lo ven.",
        "it": "La luce che esce dai fori del\nla zucca può ipnotizzare e controllare le persone\ne i Pokémon che lo vedono.",
        "de": "Das Licht, das aus den Löchern im\nKürbis kann Menschen hypnotisieren und kontrollieren\nund Pokémon, die es sehen.",
        "pt-br": "A luz que sai dos buracos do\nabóbora pode hipnotizar e controlar as pessoas\ne Pokémon que o veem.",
        "zh-tw": "光線從孔洞中射出\n南瓜可以催眠和控制人\n以及看到它的神奇寶貝。"
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
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
