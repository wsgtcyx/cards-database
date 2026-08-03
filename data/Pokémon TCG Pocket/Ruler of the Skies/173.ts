import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/173",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/173",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/173",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/173",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/173"
    },
    name: {
        en: "Vullaby",
        fr: "Vostourno",
        es: "Vullaby",
        it: "Vullaby",
        de: "Skallyk",
        "pt-br": "Vullaby",
        "zh-tw": "禿鷹丫頭",
        ko: "벌차이",
        ja: "バルチャイ"
    },
    illustrator: "Rianti Hidayat",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [629],
    stage: "Basic",
    description: {
        en: "Its healthy appetite leads to visible growth spurts. It often has to replace the bones it wears as its size increases.",
        fr: "Ce petit est en pleine croissance et forcit à vue\nd’œil. Il doit donc régulièrement changer le crâne\nqui lui sert de culotte.",
        es: "Demuestra un voraz apetito y aumenta de\ntamaño a vista de ojo. Su continuo crecimiento\nle obliga a cambiar varias veces de cráneo.",
        it: "Ha un grande appetito e cresce a vista d’occhio.\nMan mano che la sua taglia aumenta, deve\ncambiare il teschio che indossa.",
        de: "Durch seinen ständigen Appetit hat Skallyk\nfortlaufend Wachstumsschübe. Deshalb muss\nes seine Schädelwindel immerzu auswechseln.",
        "pt-br": "Seu apetite saudável leva a surtos de crescimento visíveis. Freqüentemente, ele precisa substituir os ossos que usa à medida que seu tamanho aumenta.",
        "zh-tw": "正處於食慾旺盛的發育期。\n為了配合身體的成長，\n會多次更換所穿的骨頭。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Run Around",
                fr: "Course Effrénée",
                es: "Correr Alrededor",
                it: "Corri in giro",
                de: "Herumlaufen",
                "pt-br": "Zoar",
                "zh-tw": "雀躍"
            },
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                de: "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這隻寶可夢與備戰寶可夢互換。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
