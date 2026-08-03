import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/132",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/132",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/132",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/132",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/132",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/132"
    },
    name: {
        en: "Taillow",
        "fr": "Queue",
        "es": "cola",
        "it": "Taillow",
        "de": "Taillow",
        "pt-br": "Rabo",
        "zh-tw": "尾洛"
    },
    illustrator: "Ayaka Yoshida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "It dislikes cold seasons. They migrate to other\nlands in search of warmth, flying over 180 miles\na day.",
        "fr": "Il n'aime pas les saisons froides. Ils migrent vers d'autres\natterrit à la recherche de chaleur et survole plus de 180 milles\nun jour.",
        "es": "No le gustan las estaciones frías. migran a otros\nAterriza en busca de calor, volando a más de 180 millas.\nun día.",
        "it": "Non ama le stagioni fredde. Migrano verso altri\natterra in cerca di calore, volando per oltre 180 miglia\nun giorno.",
        "de": "Es mag keine kalten Jahreszeiten. Sie wandern zu anderen\nlandet auf der Suche nach Wärme und fliegt über 180 Meilen\nein Tag.",
        "pt-br": "Não gosta de estações frias. Eles migram para outros\npousa em busca de calor, voando mais de 180 milhas\num dia.",
        "zh-tw": "它不喜歡寒冷的季節。他們遷移到其他地方\n著陸尋找溫暖，飛行超過 180 英里\n一天。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Peck",
                "fr": "Picorer",
                "es": "Picotear",
                "it": "Pecca",
                "de": "Picken",
                "pt-br": "Peck",
                "zh-tw": "啄"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
