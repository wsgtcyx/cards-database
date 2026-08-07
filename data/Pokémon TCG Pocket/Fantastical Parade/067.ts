import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/067",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/067",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/067",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/067",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/067",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/067",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/067"
    },
    name: {
        en: "Litwick",
        "fr": "Funécire",
        "es": "Litwick",
        "it": "Litwick",
        "de": "Lichtel",
        "pt-br": "Litwick",
        "zh-tw": "燭光靈"
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
