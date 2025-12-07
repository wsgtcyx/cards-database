import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Pachirisu",
        "fr": "Pachirisu",
        "es": "pachirisu",
        "it": "Pachirisu",
        "de": "Pachirisu",
        "pt-br": "Pachirisu",
        "zh-tw": "帕奇利茲"
    },
    illustrator: "imoniii",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "It's one of the kinds of Pokémon with electric\ncheek pouches. It shoots charges from its tail.",
        "fr": "C'est l'un des types de Pokémon dotés d'électricité\npoches pour les joues. Il tire des charges depuis sa queue.",
        "es": "Es uno de los tipos de Pokémon con electricidad.\nbolsas en las mejillas. Dispara cargas desde su cola.",
        "it": "È uno dei tipi di Pokémon con l'elettricità\ntasche per le guance. Spara cariche dalla coda.",
        "de": "Es ist eine der Pokémon-Arten mit Elektrizität\nBackentaschen. Es schießt Ladungen aus seinem Schwanz.",
        "pt-br": "É um dos tipos de Pokémon com eletricidade\nbolsas nas bochechas. Ele atira cargas com sua cauda.",
        "zh-tw": "它是帶有電力的神奇寶貝之一\n頰袋。它從尾巴發射電荷。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Plasma",
                "fr": "Plasma",
                "es": "Plasma",
                "it": "Plasma",
                "de": "Plasma",
                "pt-br": "Plasma",
                "zh-tw": "電漿"
            },
            damage: 10,
            cost: ["Lightning"],
            effect: {
                en: "Take a {L} Energy from your Energy Zone and attach it to 1 of your Benched {L} Pokémon.",
                "fr": "Prenez une Énergie {L} de votre Zone d'Énergie et attachez-la à 1 de vos Pokémon {L} de Banc.",
                "es": "Toma una Energía {L} de tu Zona de Energía y únela a 1 de tus Pokémon {L} en Banca.",
                "it": "Prendi un'Energia {L} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon {L} in panchina.",
                "de": "Nimm eine {L}-Energie aus deiner Energiezone und lege sie an eines deiner {L}-Pokémon auf deiner Bank an.",
                "pt-br": "Pegue uma Energia {L} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon {L} no Banco.",
                "zh-tw": "從你的能量區取出一個 {L} 能量並將其附加到你後備的 1 個 {L} 神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
