import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/109",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/109"
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
    illustrator: "Eri Yamaki",
    rarity: "One Diamond",
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
                en: "Flap",
                fr: "Battement",
                es: "Aleteo",
                it: "Alabattito",
                de: "Flattern",
                "pt-br": "Asa",
                "zh-tw": "羽擊"
            },
            damage: 20
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
