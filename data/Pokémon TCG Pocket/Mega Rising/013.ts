import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/013",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/013",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/013",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/013",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/013",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/013",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/013"
    },
    name: {
        en: "Pansage",
        "fr": "Feuillajou",
        "es": "Pansage",
        "it": "Pansage",
        "de": "Vegimak",
        "pt-br": "Pansage",
        "zh-tw": "花椰猴",
    },
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It's good at finding berries and gathers them from\nall over. It's kind enough to share them\nwith friends.",
        "fr": "Il est doué pour trouver des baies et les récolter\npartout. C'est assez gentil de les partager\navec des amis.",
        "es": "Es bueno para encontrar bayas y recogerlas de\npor todas partes. Es tan amable de compartirlos.\ncon amigos.",
        "it": "È bravo a trovare le bacche e a raccoglierle\ndappertutto. È così gentile condividerli\ncon gli amici.",
        "de": "Es ist gut darin, Beeren zu finden und sie zu pflücken\nüberall. Es ist so nett, sie zu teilen\nmit Freunden.",
        "pt-br": "É bom em encontrar frutas e colhê-las\ntudo acabado. É gentil o suficiente compartilhá-los\ncom amigos.",
        "zh-tw": "它擅長尋找漿果並從中收集它們\n一切都結束了。很高興分享它們\n和朋友們。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Beat",
                "fr": "Battre",
                "es": "Derrotar",
                "it": "Colpo",
                "de": "Schlagen",
                "pt-br": "Bater",
                "zh-tw": "打"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
