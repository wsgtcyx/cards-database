import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/096"
    },
    name: {
        en: "Galarian Linoone",
        fr: "Linéon de Galar",
        es: "Linoone de Galar",
        it: "Linoone di Galar",
        de: "Galar-Geradaks",
        "pt-br": "Linoone de Galar",
        "zh-tw": "伽勒爾的伽勒爾 直衝熊",
        ko: "가라르 가라르 직구리",
        ja: "ガラル ガラル マッスグマ"
    },
    illustrator: "sowsow",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    evolveFrom: {
        en: "Galarian Zigzagoon",
        fr: "Zigzaton de Galar",
        es: "Zigzagoon de Galar",
        it: "Zigzagoon di Galar",
        de: "Galar-Zigzachs",
        "pt-br": "Zigzagoon de Galar",
        "zh-tw": "伽勒爾的伽勒爾 蛇紋熊",
        ko: "가라르 가라르 지그제구리",
        ja: "ガラル ガラル ジグザグマ"
    },
    stage: "Stage1",
    description: {
        en: "This very aggressive Pokémon will recklessly challenge opponents stronger than itself."
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Night Slash",
                fr: "Tranche-Nuit",
                es: "Tajo Umbrío",
                it: "Nottesferza",
                de: "Nachthieb",
                "pt-br": "Talho Noturno",
                "zh-tw": "暗襲要害"
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
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
