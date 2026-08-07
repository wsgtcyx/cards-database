import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/214",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/214",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/214",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/214",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/214",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/214",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/214"
    },
    name: {
        en: "Clefairy",
        "fr": "Mélofée",
        "es": "Clefairy",
        "it": "Clefairy",
        "de": "Piepi",
        "pt-br": "Clefairy",
        "zh-tw": "皮皮"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "It is said that happiness will come to those who\nsee a gathering of Clefairy dancing under a\nfull moon.",
        "fr": "On dit que le bonheur viendra à ceux qui\nvoir un rassemblement de Mélofées dansant sous un\npleine lune.",
        "es": "Se dice que la felicidad llegará a aquellos que\nver una reunión de Clefairy bailando bajo un\nluna llena.",
        "it": "Si dice che la felicità arriverà a coloro che\nvedere un raduno di Clefairy che balla sotto a\nluna piena.",
        "de": "Es wird gesagt, dass diejenigen, die glücklich sind, glücklich werden\nSehen Sie eine Versammlung von Clefairy, die unter einem tanzt\nVollmond.",
        "pt-br": "Diz-se que a felicidade virá para aqueles que\nveja uma reunião de Clefairy dançando sob um\nlua cheia.",
        "zh-tw": "據說幸福會降臨到那些\n看到一群 Clefairy 在燈光下跳舞\n滿月。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Slap",
                "fr": "Gifler",
                "es": "Bofetada",
                "it": "Schiaffo",
                "de": "Schlagen",
                "pt-br": "Tapa",
                "zh-tw": "拍擊"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
