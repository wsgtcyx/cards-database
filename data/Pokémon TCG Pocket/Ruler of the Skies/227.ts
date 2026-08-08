import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/227",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/227",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/227",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/227",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/227",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/227",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/227"
    },
    name: {
        en: "Mega Gardevoir ex",
        fr: "Méga-Gardevoir-ex",
        es: "Mega-Gardevoir ex",
        it: "Mega Gardevoir-ex",
        de: "Mega-Guardevoir-ex",
        "pt-br": "Mega Gardevoir ex",
        "zh-tw": "超級沙奈朵ex",
        ko: "메가가디안 ex",
        ja: "メガサーナイトex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 210,
    types: ["Psychic"],
    dexId: [282],
    evolveFrom: {
        en: "Kirlia",
        fr: "Kirlia",
        es: "Kirlia",
        it: "Kirlia",
        de: "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "奇魯莉安",
        ko: "킬리아",
        ja: "キルリア"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Fantasia Force",
                fr: "Force Fantaisie",
                es: "Fuerza Fantástica",
                it: "Forza Fantasia",
                de: "Fantasia Force",
                "pt-br": "Força Fantasiosa",
                "zh-tw": "幻想之力"
            },
            effect: {
                en: "Take 3 {P} Energy from your Energy Zone and attach it to your {P} Pokémon in any way you like.",
                fr: "Prenez 3 Énergies {P} de votre zone Énergie et attachez‐les à vos Pokémon {P} comme il vous plaît.",
                es: "Une a tus Pokémon {P}, de la manera que desees, 3 Energías {P} de tu área de Energía.",
                it: "Prendi 3 Energie {P} dalla tua Zona Energetica e assegnale ai tuoi Pokémon {P} nel modo che preferisci.",
                de: "Nimm 3 {P}-Energie aus deiner Energiezone und lege sie auf beliebige Weise an dein {P}-Pokémon an.",
                "pt-br": "Pegue 3 Energias {P} da sua Zona de Energia e ligue-as aos seus Pokémon {P} como desejar.",
                "zh-tw": "從自己的能量區抽出3個{P}能量,以任意方式附於{P}寶可夢身上。"
            },
            damage: 110
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
