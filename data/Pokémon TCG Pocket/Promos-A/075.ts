import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/075",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-A/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-A/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-A/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-A/075",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-A/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/075"
    },
    name: {
        en: "Kartana",
        es: "Kartana",
        "fr": "Kartana",
        "it": "Kartana",
        "de": "Kartana",
        "pt-br": "Kartana",
        "zh-tw": "紙御劍",
    },
    illustrator: "Hasuno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "This Ultra Beast's body, which is as thin\nas paper, is like a sharpened sword.",
        es: "El cuerpo de este Ultraente es fino como el papel\ny tan cortante como una espada recién afilada",
        "fr": "Le corps de cette Ultra Beast, qui est aussi mince\ncomme le papier, c'est comme une épée aiguisée.",
        "it": "Il corpo di questa Ultracreatura, che è altrettanto magro\ncome la carta, è come una spada affilata.",
        "de": "Der Körper dieses Ultra-Biests ist genauso dünn\nwie Papier, ist wie ein geschärftes Schwert.",
        "pt-br": "O corpo desta Ultra Besta, que é tão fino\ncomo papel, é como uma espada afiada.",
        "zh-tw": "這究極異獸的身體，也是如此纖細\n如紙，如鋒利的劍。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Thrash Metal",
                es: "Thrash Metal",
                "fr": "Thrash métal",
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
    retreat: 1,
    boosters: ["vol9"]
};
export default card;
