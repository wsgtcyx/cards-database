import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Cosmog",
        "fr": "Cosmog",
        "es": "cosmog",
        "it": "Cosmog",
        "de": "Kosmog",
        "pt-br": "Cosmog",
        "zh-tw": "科斯莫古",
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "Even though its helpless, gaseous body can be blown\naway by the slightest breeze, it doesn't seem to care.",
        "fr": "Même si son corps gazeux impuissant peut être soufflé\nà la moindre brise, il n'a pas l'air de s'en soucier.",
        "es": "Aunque su indefenso cuerpo gaseoso puede volar\nlejos por la más mínima brisa, no parece importarle.",
        "it": "Anche se il suo corpo indifeso e gassoso può essere fatto esplodere\nlontano dalla minima brezza, non sembra preoccuparsene.",
        "de": "Auch wenn sein hilfloser, gasförmiger Körper in die Luft gesprengt werden kann\nweg von der geringsten Brise, es scheint ihm egal zu sein.",
        "pt-br": "Mesmo que seu corpo indefeso e gasoso possa ser explodido\nafastado pela mais leve brisa, ele não parece se importar.",
        "zh-tw": "縱然無助，氣體可吹\n微風吹過，它似乎並不在意。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Teleport",
                "fr": "Téléportation",
                "es": "Teletransportarse",
                "it": "Teletrasporto",
                "de": "Teleportieren",
                "pt-br": "Teleporte",
                "zh-tw": "傳送"
            },
            cost: ["Colorless"],
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
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
