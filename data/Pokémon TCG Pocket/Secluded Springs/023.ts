import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Mantyke",
        "fr": "Mantyke",
        "es": "Mantyke",
        "it": "Mantyke",
        "de": "Mantyke",
        "pt-br": "Mantyke",
        "zh-tw": "曼蒂克"
    },
    illustrator: "Shibuzoh.",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    description: {
        en: "It's highly friendly and easily tamed. Tours that\ntake people swimming with Mantyke are a\nsuper-popular beach activity.",
        "fr": "Il est très amical et facile à apprivoiser. Des visites qui\nemmenez les gens nager avec Mantyke sont un\nactivité de plage très populaire.",
        "es": "Es muy amigable y fácilmente domesticable. Tours que\nllevar a la gente a nadar con Mantyke es una\nactividad de playa súper popular.",
        "it": "È molto amichevole e facilmente addomesticabile. Lo visita\nportare le persone a nuotare con Mantyke sono a\nattività in spiaggia super popolare.",
        "de": "Es ist sehr freundlich und leicht zu zähmen. Touren das\nNehmen Sie Leute mit, die mit Mantyke schwimmen gehen\näußerst beliebte Strandaktivität.",
        "pt-br": "É altamente amigável e facilmente domesticado. Passeios que\nlevar as pessoas para nadar com Mantyke é um\natividade de praia super popular.",
        "zh-tw": "它非常友好並且很容易被馴服。旅行團\n帶著 Mantyke 一起游泳的人是\n超受歡迎的海灘活動。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Splashy Toss",
                "fr": "Lancer éclaboussant",
                "es": "Lanzamiento salpicado",
                "it": "Lancio Spruzzato",
                "de": "Spritziger Wurf",
                "pt-br": "Lançamento chamativo",
                "zh-tw": "潑濺投擲"
            },
            effect: {
                en: "Take a {W} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon.",
                "fr": "Prenez une Énergie {W} de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Base de Banc.",
                "es": "Toma una Energía {W} de tu Zona de Energía y únela a 1 de tus Pokémon Básicos en Banca.",
                "it": "Prendi un'Energia {W} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon Base in panchina.",
                "de": "Nimm eine {W}-Energie aus deiner Energiezone und lege sie an eines deiner Basis-Pokémon auf deiner Bank an.",
                "pt-br": "Pegue uma Energia {W} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon Básicos no Banco.",
                "zh-tw": "從你的能量區取出一個 {W} 能量並將其附加到你後備的 1 只基礎神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 0
};
export default card;
