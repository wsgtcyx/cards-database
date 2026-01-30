import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Litwick",
        "fr": "Litwick",
        "es": "litwick",
        "it": "Litwick",
        "de": "Litwick",
        "pt-br": "Litwick",
        "zh-tw": "利特威克"
    },
    illustrator: "saino misaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "While shining a light and pretending to be a\nguide, it leeches off the life-force of any who\nfollow it.",
        "fr": "Tout en faisant briller une lumière et en faisant semblant d'être un\nguide, il draine la force vitale de quiconque\nsuivez-le.",
        "es": "Mientras ilumina una luz y pretende ser un\nguía, absorbe la fuerza vital de cualquiera que\nsíguelo.",
        "it": "Mentre accendi una luce e fingi di essere a\nguida, prosciuga la forza vitale di chiunque\nseguilo.",
        "de": "Während ich ein Licht strahle und vorgebe, ein zu sein\nFührer, es entzieht jedem die Lebenskraft\nFolge ihm.",
        "pt-br": "Enquanto brilha uma luz e finge ser um\nguia, ele suga a força vital de qualquer um que\nsiga-o.",
        "zh-tw": "一邊閃耀著光芒，一邊假裝自己是\n指導，它會吸取任何人的生命力\n跟隨它。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mumble",
                "fr": "Marmonner",
                "es": "Mascullar",
                "it": "Mumble",
                "de": "Murmeln",
                "pt-br": "Resmungar",
                "zh-tw": "咕噥"
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
