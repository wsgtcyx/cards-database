import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Dialga ex",
        "fr": "Dialga ex",
        "es": "ex dialga",
        "it": "Dialga ex",
        "de": "Dialga ex",
        "pt-br": "Dialga ex",
        "zh-tw": "帝牙盧卡EX"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Metal"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Metallic Turbo",
                "fr": "Turbo métallique",
                "es": "Turbo metálico",
                "it": "Turbo metallizzato",
                "de": "Metallischer Turbo",
                "pt-br": "Turbo Metálico",
                "zh-tw": "金屬渦輪"
            },
            damage: 30,
            cost: ["Metal", "Metal"],
            effect: {
                en: "Take 2 {M} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                "fr": "Prenez 2 {M} Énergie de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Banc.",
                "es": "Toma 2 {M} de Energía de tu Zona de Energía y únelas a 1 de tus Pokémon en Banca.",
                "it": "Prendi 2 Energie {M} dalla tua Zona Energetica e assegnale a 1 dei tuoi Pokémon in panchina.",
                "de": "Nimm 2 {M}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Pegue 2 {M} Energias da sua Zona de Energia e ligue-as a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從你的能量區獲取 2 {M} 能量並將其附加到你的 1 只後備神奇寶貝身上。"
            }
        }, {
            name: {
                en: "Heavy Impact",
                "fr": "Fort impact",
                "es": "Impacto pesado",
                "it": "Impatto pesante",
                "de": "Schwerer Aufprall",
                "pt-br": "Impacto Pesado",
                "zh-tw": "重擊"
            },
            damage: 100,
            cost: ["Metal", "Metal", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
