import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/098"
    },
    name: {
        en: "Galarian Zigzagoon",
        "fr": "Zigzagoon galarien",
        "es": "Zigzagoon de Galar",
        "it": "Zigzagoon di Galar",
        "de": "Galarischer Zickzack",
        "pt-br": "Ziguezague Galariano",
        "zh-tw": "加拉利安之字形"
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "Thought to be the oldest form of Zigzagoon,\nit moves in zigzags and wreaks havoc upon\nits surroundings.",
        "fr": "Considéré comme la forme la plus ancienne de Zigzagoon,\nil se déplace en zigzags et fait des ravages\nses environs.",
        "es": "Se cree que es la forma más antigua de Zigzagoon,\nse mueve en zigzag y causa estragos\nsus alrededores.",
        "it": "Pensato per essere la forma più antica di Zigzagoon,\nsi muove a zigzag e semina il caos\ni suoi dintorni.",
        "de": "Gilt als die älteste Form des Zickzacks.\nes bewegt sich im Zickzack und richtet verheerende Schäden an\nseine Umgebung.",
        "pt-br": "Considerada a forma mais antiga de Zigzagoon,\nele se move em ziguezagues e causa estragos\nseu entorno.",
        "zh-tw": "被認為是 Zigzagoon 最古老的形式，\n它以之字形移動並造成嚴重破壞\n它的周圍環境。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dig Claws",
                "fr": "Creuser des griffes",
                "es": "Cavar garras",
                "it": "Scavare gli artigli",
                "de": "Krallen graben",
                "pt-br": "Cavar Garras",
                "zh-tw": "挖爪"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
