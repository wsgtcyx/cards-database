import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Kartana",
        "fr": "Kartana",
        "es": "kartana",
        "it": "Kartana",
        "de": "Kartana",
        "pt-br": "Kartana",
        "zh-tw": "紙御劍",
    },
    illustrator: "nagimiso",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "This Ultra Beast's body, which is as thin\nas paper, is like a sharpened sword.",
        "fr": "Le corps de cette Ultra Beast, qui est aussi mince\ncomme le papier, c'est comme une épée aiguisée.",
        "es": "El cuerpo de esta Ultra Bestia, que es tan delgado\ncomo el papel, es como una espada afilada.",
        "it": "Il corpo di questa Ultracreatura, che è altrettanto magro\ncome la carta, è come una spada affilata.",
        "de": "Der Körper dieses Ultra-Biests ist genauso dünn\nwie Papier, ist wie ein geschärftes Schwert.",
        "pt-br": "O corpo desta Ultra Besta, que é tão fino\ncomo papel, é como uma espada afiada.",
        "zh-tw": "這究極異獸的身體，也是如此纖細\n如紙，如鋒利的劍。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Thrash Metal",
                "fr": "Thrash métal",
                "es": "metal",
                "it": "Thrashmetal",
                "de": "Thrash Metal",
                "pt-br": "Trashmetal",
                "zh-tw": "鞭打金屬"
            },
            damage: 40,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
