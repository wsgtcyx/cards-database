import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Spearow",
        "fr": "Lance",
        "es": "lanza",
        "it": "Spearow",
        "de": "Speer",
        "pt-br": "Lança",
        "zh-tw": "烈雀",
    },
    illustrator: "tetsuya koizumi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "Its reckless nature leads it to stand up to\nothers—even large Pokémon—if it has to protect\nits territory.",
        "fr": "Sa nature imprudente l'amène à tenir tête\nd'autres, même les gros Pokémon, s'il doit protéger\nson territoire.",
        "es": "Su carácter imprudente le lleva a hacer frente a\notros, incluso Pokémon grandes, si tiene que protegerlos.\nsu territorio.",
        "it": "La sua natura spericolata lo porta a resistere\naltri, anche Pokémon di grandi dimensioni, se deve proteggere\nil suo territorio.",
        "de": "Seine rücksichtslose Natur führt dazu, dass es sich widersetzt\nandere – sogar große Pokémon – wenn es schützen muss\nsein Territorium.",
        "pt-br": "A sua natureza imprudente leva-o a enfrentar\noutros – até mesmo Pokémon grandes – se for necessário proteger\nseu território.",
        "zh-tw": "它魯莽的本性使它能夠挺身而出\n其他——甚至是大型神奇寶貝——如果它必須保護的話\n它的領土。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Glide",
                "fr": "Glisser",
                "es": "Planeo",
                "it": "Scivolare",
                "de": "Gleiten",
                "pt-br": "Deslizar",
                "zh-tw": "滑行"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
