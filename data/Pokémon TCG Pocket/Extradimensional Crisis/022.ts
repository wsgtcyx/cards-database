import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Clefairy",
        "fr": "Cléfée",
        "es": "Clefairy",
        "it": "Clefairy",
        "de": "Clefairy",
        "pt-br": "Clefairy",
        "zh-tw": "皮皮",
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
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
                en: "Pound",
                "fr": "Livre",
                "es": "Libra",
                "it": "Libbra",
                "de": "Pfund",
                "pt-br": "Libra",
                "zh-tw": "磅"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
