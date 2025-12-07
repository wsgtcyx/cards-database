import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Delcatty",
        "fr": "Delcatty",
        "es": "Delcatty",
        "it": "Delcatty",
        "de": "Delcatty",
        "pt-br": "Delcatty",
        "zh-tw": "優雅貓",
    },
    illustrator: "0313",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Skitty",
        "fr": "Minou",
        "es": "Skitty",
        "it": "Skitty",
        "de": "Skitty",
        "pt-br": "Skitty",
        "zh-tw": "向尾喵",
    },
    description: {
        en: "It dislikes dirty places. It often searches for a\ncomfortable place in which to groom itself.",
        "fr": "Il n'aime pas les endroits sales. Il recherche souvent un\nendroit confortable pour se toiletter.",
        "es": "No le gustan los lugares sucios. A menudo busca un\nlugar cómodo para arreglarse.",
        "it": "Non ama i luoghi sporchi. Spesso cerca a\nluogo confortevole in cui pulirsi.",
        "de": "Es mag keine schmutzigen Orte. Es wird oft nach a gesucht\nbequemer Ort, an dem man sich pflegen kann.",
        "pt-br": "Não gosta de lugares sujos. Muitas vezes procura por um\nlugar confortável para se preparar.",
        "zh-tw": "它不喜歡骯髒的地方。它經常搜索一個\n舒適的地方來打扮自己。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Energy Assist",
                "fr": "Assistance énergétique",
                "es": "Asistencia energética",
                "it": "Assistenza energetica",
                "de": "Energieunterstützung",
                "pt-br": "Assistência Energética",
                "zh-tw": "能量輔助"
            },
            damage: 30,
            cost: ["Colorless"],
            effect: {
                en: "Take a {C} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                "fr": "Prenez une Énergie {C} de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Banc.",
                "es": "Toma una Energía {C} de tu Zona de Energía y únela a 1 de tus Pokémon en Banca.",
                "it": "Prendi un'Energia {C} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon in panchina.",
                "de": "Nimm eine {C}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Pegue uma Energia {C} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從你的能量區取出一個 {C} 能量並將其附加到你的 1 個後備神奇寶貝身上。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
