import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/227"
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
                fr: "Force fantastique",
                es: "Fuerza de fantasía",
                it: "Forza Fantasia",
                de: "Fantasia Force",
                "pt-br": "Força Fantasia",
                "zh-tw": "幻想之力"
            },
            effect: {
                en: "Take 3 {P} Energy from your Energy Zone and attach it to your {P} Pokémon in any way you like.",
                fr: "Prenez 3 {P} Énergie de votre Zone d'Énergie et attachez-les à votre {P} Pokémon comme vous le souhaitez.",
                es: "Toma 3 Energías {P} de tu Zona de Energía y únelas a tu Pokémon {P} de la forma que quieras.",
                it: "Prendi 3 Energie {P} dalla tua Zona Energetica e assegnale ai tuoi Pokémon {P} nel modo che preferisci.",
                de: "Nimm 3 {P}-Energie aus deiner Energiezone und lege sie auf beliebige Weise an dein {P}-Pokémon an.",
                "pt-br": "Pegue 3 {P} Energias da sua Zona de Energia e ligue-as aos seus {P} Pokémon da maneira que desejar.",
                "zh-tw": "從你的能量區取出 3 個 {P} 能量，並以你喜歡的任何方式將其附加到你的 {P} 寶可夢上。"
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
