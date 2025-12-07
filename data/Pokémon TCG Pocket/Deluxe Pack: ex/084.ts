import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Squirtle",
        "fr": "Carapuce",
        "es": "squirtle",
        "it": "Squirtle",
        "de": "Eichhörnchen",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "When it retracts its long neck into its shell, it\nsquirts out water with vigorous force.",
        "fr": "Lorsqu'il rentre son long cou dans sa coquille, il\nprojette de l'eau avec une force vigoureuse.",
        "es": "Cuando retrae su largo cuello dentro de su caparazón,\nLanza agua con fuerza vigorosa.",
        "it": "Quando ritrae il lungo collo nel guscio,\nschizza acqua con forza vigorosa.",
        "de": "Wenn es seinen langen Hals in seinen Panzer zurückzieht, ist es\nspritzt Wasser mit kräftiger Kraft heraus.",
        "pt-br": "Quando ele retrai o longo pescoço para dentro da concha, ele\nesguicha água com força vigorosa.",
        "zh-tw": "當它把長脖子縮進殼裡時\n用強力噴出水。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
