import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Swanna",
        "fr": "Swanna",
        "es": "cisne",
        "it": "Swanna",
        "de": "Swanna",
        "pt-br": "Swanna",
        "zh-tw": "首席天鵝",
    },
    illustrator: "chibi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Ducklett",
        "fr": "Canard",
        "es": "patito",
        "it": "Ducklett",
        "de": "Ducklett",
        "pt-br": "Patinho",
        "zh-tw": "達克利特"
    },
    description: {
        en: "Despite their elegant appearance, they can flap\ntheir wings strongly and fly for thousands of miles.",
        "fr": "Malgré leur aspect élégant, ils peuvent battre\nleurs ailes sont fortes et volent sur des milliers de kilomètres.",
        "es": "A pesar de su aspecto elegante, pueden aletear\nsus alas con fuerza y vuelan miles de millas.",
        "it": "Nonostante il loro aspetto elegante, possono sbattere le ali\nle loro ali fortemente e volano per migliaia di miglia.",
        "de": "Trotz ihres eleganten Aussehens können sie flattern\nIhre Flügel sind stark und fliegen Tausende von Kilometern.",
        "pt-br": "Apesar de sua aparência elegante, eles podem bater\nsuas asas fortemente e voam por milhares de quilômetros.",
        "zh-tw": "儘管它們外表優雅，但它們可以拍打\n它們的翅膀有力，飛翔千里。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Feathery Cyclone",
                "fr": "Cyclone plumeux",
                "es": "Ciclón plumoso",
                "it": "Ciclone piumato",
                "de": "Gefiederter Zyklon",
                "pt-br": "Ciclone emplumado",
                "zh-tw": "羽毛旋風"
            },
            damage: 60,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
                "fr": "Déplacez toute l'énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
                "es": "Mueve toda la Energía de este Pokémon a 1 de tus Pokémon en Banca.",
                "it": "Sposta tutte le Energie da questo Pokémon a 1 dei tuoi Pokémon in panchina.",
                "de": "Verschiebe die gesamte Energie dieses Pokémon auf eines deiner Bank-Pokémon.",
                "pt-br": "Mova todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這只神奇寶貝的所有能量轉移到你後備的 1 只神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["ho-oh"]
};
export default card;
