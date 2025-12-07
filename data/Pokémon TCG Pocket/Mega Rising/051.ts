import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Gyarados",
        "fr": "Léviator",
        "es": "Gyarados",
        "it": "Gyarados",
        "de": "Gyarados",
        "pt-br": "Gyarados",
        "zh-tw": "暴鯉龍"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Magikarp",
        "fr": "Magikarpe",
        "es": "Magikarp",
        "it": "Magikarp",
        "de": "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王"
    },
    description: {
        en: "It appears whenever there is world conflict,\nburning down any place it travels through.",
        "fr": "Il apparaît chaque fois qu'il y a un conflit mondial,\nbrûlant n'importe quel endroit qu'il traverse.",
        "es": "Aparece cada vez que hay un conflicto mundial,\nquemando cualquier lugar por el que pase.",
        "it": "Appare ogni volta che c'è un conflitto mondiale,\nbruciando qualsiasi luogo attraversi.",
        "de": "Es erscheint immer dann, wenn es einen Weltkonflikt gibt,\nEs brennt jeden Ort nieder, durch den es reist.",
        "pt-br": "Aparece sempre que há conflito mundial,\nqueimando qualquer lugar por onde passa.",
        "zh-tw": "每當世界發生衝突時它就會出現，\n燒毀它所經過的任何地方。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Hammering Tail",
                "fr": "Queue martelante",
                "es": "Cola martilladora",
                "it": "Coda Martellante",
                "de": "Hämmernder Schwanz",
                "pt-br": "Cauda Martelando",
                "zh-tw": "錘擊尾巴"
            },
            damage: 100,
            cost: ["Water", "Water", "Water", "Colorless"],
            effect: {
                en: "Discard the top card of your opponent's deck.",
                "fr": "Défaussez la carte du dessus du deck de votre adversaire.",
                "es": "Descarta la carta superior del mazo de tu oponente.",
                "it": "Scarta la prima carta del mazzo del tuo avversario.",
                "de": "Wirf die oberste Karte des Decks deines Gegners ab.",
                "pt-br": "Descarte a carta do topo do baralho do seu oponente.",
                "zh-tw": "丟棄對手牌組頂牌。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
