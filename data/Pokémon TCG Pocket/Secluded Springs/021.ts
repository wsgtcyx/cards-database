import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/021",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/021",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/021",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/021",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/021",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/021"
    },
    name: {
        en: "Feebas",
        "fr": "Barpau",
        "es": "Feebas",
        "it": "Feebas",
        "de": "Barschwa",
        "pt-br": "Feebas",
        "zh-tw": "醜醜魚",
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    description: {
        en: "Although unattractive and unpopular, this\nPokémon's marvelous vitality has made it a\nsubject of research.",
        "fr": "Bien que peu attrayant et impopulaire, ce\nLa merveilleuse vitalité de Pokémon en a fait un\nsujet de recherche.",
        "es": "Aunque poco atractivo e impopular, este\nLa maravillosa vitalidad de Pokémon lo ha convertido en un\ntema de investigación.",
        "it": "Sebbene poco attraente e impopolare, questo\nLa meravigliosa vitalità dei Pokémon lo ha reso un\noggetto di ricerca.",
        "de": "Dies ist zwar unattraktiv und unbeliebt\nDie wunderbare Vitalität von Pokémon hat es zu einem gemacht\nGegenstand der Forschung.",
        "pt-br": "Embora pouco atraente e impopular, este\nA maravilhosa vitalidade do Pokémon tornou-o um\nobjeto de pesquisa.",
        "zh-tw": "儘管沒有吸引力且不受歡迎，但這\n神奇寶貝神奇的生命力使其成為\n研究課題。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Leap Out",
                "fr": "Sautez",
                "es": "Saltar",
                "it": "Salta fuori",
                "de": "Spring raus",
                "pt-br": "Salte",
                "zh-tw": "跳出"
            },
            cost: ["Water"],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                "fr": "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                "es": "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                "it": "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                "de": "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此神奇寶貝與你的 1 個替補神奇寶貝交換。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
