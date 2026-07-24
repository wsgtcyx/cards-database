import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/212",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/212"
    },
    name: {
        en: "Zubat",
        fr: "Nosferapti",
        es: "Zubat",
        it: "Zubat",
        de: "Zubat",
        "pt-br": "Zubat",
        "zh-tw": "超音蝠",
        ko: "주뱃",
        ja: "ズバット"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 50,
    types: ["Darkness"],
    dexId: [41],
    stage: "Basic",
    description: {
        en: "Zubat live in caves, down where the sun’s light won’t reach. In the morning, they gather together to keep each other warm as they sleep.",
        fr: "Ils vivent dans les grottes où la lumière du jour\nne perce jamais. Le matin, ils se blottissent les uns\ncontre les autres pour se réchauffer et dormir.",
        es: "Habitan en cuevas donde no llegan los rayos del\nsol. De día, se acurrucan unos junto a otros para\nentrar en calor mientras duermen.",
        it: "Vive in grotte mai rischiarate dalla luce del sole.\nQuando si fa giorno, si raggruppa con i suoi\nsimili per scaldarsi mentre dorme.",
        de: "Zubat leben tief in Höhlen, wo das Sonnenlicht\nsie nicht erreicht. Bei Tagesanbruch rücken sie\nzusammen, um sich im Schlaf zu wärmen.",
        "pt-br": "Zubat vivem em cavernas, onde a luz do sol não alcança. De manhã, eles se reúnem para se aquecerem enquanto dormem.",
        "zh-tw": "棲息在陽光照射不到的洞窟裡。\n到了早上就會和夥伴相聚，\n一邊互相取暖一邊睡覺。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Spin Turn",
                fr: "Tournoyer",
                es: "Giro y Vuelta",
                it: "Girotondo",
                de: "Absatzdreher",
                "pt-br": "Volta Giratória",
                "zh-tw": "旋轉迴旋"
            },
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                de: "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此寶可夢與你的 1 個備戰寶可夢交換。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
