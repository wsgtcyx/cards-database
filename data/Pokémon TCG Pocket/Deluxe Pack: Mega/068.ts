import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/068",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/068",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/068",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/068",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/068",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/068",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/068"
    },
    name: {
        en: "Wailord ex",
        fr: "Wailord-ex",
        es: "Wailord ex",
        it: "Wailord-ex",
        de: "Wailord-ex",
        "pt-br": "Wailord ex",
        "zh-tw": "吼鯨王ex",
        ja: "ホエルオーex",
        ko: "고래왕 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 250,
    types: [
        "Water"
    ],
    dexId: [
        321
    ],
    evolveFrom: {
        en: "Wailmer",
        fr: "Wailmer",
        es: "Wailmer",
        it: "Wailmer",
        de: "Wailmer",
        "pt-br": "Wailmer",
        "zh-tw": "吼吼鯨",
        ja: "Wailmer",
        ko: "Wailmer"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Water",
                "Water",
                "Water",
                "Water"
            ],
            name: {
                en: "Wondrous Waves",
                fr: "Éclaboussure Miracle",
                es: "Olas Milagrosas",
                de: "Wunderwellen",
                "pt-br": "Ondas Encantadas",
                "zh-tw": "奇跡鯨濤",
                it: "Onde Prodigiose",
                ja: "Wondrous Waves",
                ko: "Wondrous Waves"
            },
            effect: {
                en: "This Pokémon recovers from all Special Conditions.",
                fr: "Ce Pokémon guérit de tous les États Spéciaux.",
                es: "Este Pokémon se recupera de todas las Condiciones Especiales.",
                de: "Dieses Pokémon erholt sich von allen Speziellen Zuständen.",
                "pt-br": "Este Pokémon se recupera de todas as Condições Especiais.",
                "zh-tw": "將這隻寶可夢的特殊狀態全部恢復。",
                it: "Questo Pokémon guarisce da tutte le condizioni speciali.",
                ja: "This Pokémon recovers from all Special Conditions.",
                ko: "This Pokémon recovers from all Special Conditions."
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
