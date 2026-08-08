import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/183",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/183",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/183",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/183",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/183",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/183",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/183"
    },
    name: {
        en: "Wailord ex",
        fr: "Wailord-ex",
        es: "Wailord ex",
        it: "Wailord-ex",
        de: "Wailord-ex",
        "pt-br": "Wailord ex",
        "zh-tw": "吼鯨王ex",
        ko: "고래왕 ex",
        ja: "ホエルオーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 250,
    types: ["Water"],
    dexId: [321],
    evolveFrom: {
        en: "Wailmer",
        fr: "Wailmer",
        es: "Wailmer",
        it: "Wailmer",
        de: "Wailmer",
        "pt-br": "Wailmer",
        "zh-tw": "吼吼鯨",
        ko: "고래왕자",
        ja: "ホエルコ"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Water", "Water", "Water", "Water"],
            name: {
                en: "Wondrous Waves",
                fr: "Éclaboussure Miracle",
                es: "Olas Milagrosas",
                "pt-br": "Ondas Encantadas",
                "zh-tw": "奇跡鯨濤"
            },
            effect: {
                en: "This Pokémon recovers from all Special Conditions.",
                fr: "Ce Pokémon guérit de tous les États Spéciaux.",
                es: "Este Pokémon se recupera de todas las Condiciones Especiales.",
                "pt-br": "Este Pokémon se recupera de todas as Condições Especiais.",
                "zh-tw": "將這隻寶可夢的特殊狀態全部恢復。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
