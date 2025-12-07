import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Alolan Grimer",
        "fr": "Alolan Grimer",
        "es": "Grimer de Alola",
        "it": "Grimer di Alola",
        "de": "Alolan Grimer",
        "pt-br": "Alola Grimer",
        "zh-tw": "阿羅拉臭泥",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    description: {
        en: "There are a hundred or so of them living in\nAlola's waste-disposal site. They're all hard\nworkers who eat a lot of trash.",
        "fr": "Ils sont une centaine à vivre à\nDécharge d'Alola. Ils sont tous durs\ndes travailleurs qui mangent beaucoup de déchets.",
        "es": "Hay un centenar de ellos viviendo en\nSitio de eliminación de desechos de Alola. son todos duros\ntrabajadores que comen mucha basura.",
        "it": "Ci vivono un centinaio o giù di lì\nIl sito di smaltimento dei rifiuti di Alola. Sono tutti difficili\nlavoratori che mangiano molta spazzatura.",
        "de": "Etwa hundert von ihnen leben hier\nAlolas Mülldeponie. Sie sind alle hart\nArbeiter, die viel Müll essen.",
        "pt-br": "Há cerca de uma centena deles vivendo em\nLocal de eliminação de resíduos de Alola. Eles são todos difíceis\ntrabalhadores que comem muito lixo.",
        "zh-tw": "他們大約有一百多人居住在\n阿羅拉的垃圾處理場。他們都很難\n吃大量垃圾的工人。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sludge Toss",
                "fr": "Lancer des boues",
                "es": "Lanzamiento de lodos",
                "it": "Lancio dei fanghi",
                "de": "Schlammwurf",
                "pt-br": "Lançamento de lama",
                "zh-tw": "污泥拋擲"
            },
            damage: 30,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
