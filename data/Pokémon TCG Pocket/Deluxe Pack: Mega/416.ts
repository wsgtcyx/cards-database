import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/416",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/416",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/416",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/416",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/416",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/416",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/416"
    },
    name: {
        en: "Mega Gardevoir ex",
        fr: "Méga-Gardevoir-ex",
        es: "Mega-Gardevoir ex",
        it: "Mega Gardevoir-ex",
        de: "Mega-Guardevoir-ex",
        "pt-br": "Mega Gardevoir ex",
        "zh-tw": "超級沙奈朵ex",
        ja: "メガサーナイトex",
        ko: "메가가디안 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 210,
    types: [
        "Psychic"
    ],
    evolveFrom: {
        en: "Kirlia",
        fr: "Kirlia",
        es: "Kirlia",
        it: "Kirlia",
        de: "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "奇魯莉安",
        ja: "Kirlia",
        ko: "Kirlia"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Fantasia Force",
                fr: "Force Fantaisie",
                es: "Fuerza Fantástica",
                it: "Forza Fantastica",
                de: "Fantastische Kraft",
                "pt-br": "Força Fantasiosa",
                "zh-tw": "幻想之力",
                ja: "Fantasia Force",
                ko: "Fantasia Force"
            },
            damage: 110,
            cost: [
                "Psychic",
                "Psychic"
            ],
            effect: {
                en: "Take 3 {P} Energy from your Energy Zone and attach it to your {P} Pokémon in any way you like.",
                fr: "Prenez 3 Énergies {P} de votre zone Énergie et attachez‐les à vos Pokémon {P} comme il vous plaît.",
                es: "Une a tus Pokémon {P}, de la manera que desees, 3 Energías {P} de tu área de Energía.",
                it: "Prendi 3 Energie {P} dalla tua Zona Energia e assegnale ai tuoi Pokémon {P} nel modo che preferisci.",
                de: "Lege 3 {P}-Energien aus deinem Energiebereich beliebig an deine {P}-Pokémon an.",
                "pt-br": "Pegue 3 Energias {P} da sua Zona de Energia e ligue-as aos seus Pokémon {P} como desejar.",
                "zh-tw": "從自己的能量區抽出3個{P}能量,以任意方式附於{P}寶可夢身上。",
                ja: "Take 3 {P} Energy from your Energy Zone and attach it to your {P} Pokémon in any way you like.",
                ko: "Take 3 {P} Energy from your Energy Zone and attach it to your {P} Pokémon in any way you like."
            }
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
