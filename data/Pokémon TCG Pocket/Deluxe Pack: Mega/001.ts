import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/001",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/001",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/001",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/001"
    },
    name: {
        en: "Bulbasaur",
        fr: "Bulbizarre",
        es: "Bulbasaur",
        it: "Bulbasaur",
        de: "Bisasam",
        "pt-br": "Bulbasaur",
        "zh-tw": "妙蛙種子",
        ja: "フシギダネ",
        ko: "이상해씨"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    description: {
        en: "While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow.",
        fr: "Au début de sa vie, il se nourrit des nutriments accumulés dans la graine sur son dos. Cela lui permet de grandir.",
        es: "Desde que nace, crece alimentándose de los nutrientes que contiene la semilla de su lomo.",
        it: "Dopo la nascita, per un periodo di tempo cresce assorbendo i nutrienti stipati nel bulbo sul dorso.",
        de: "Nach der Geburt nutzt es für eine Weile die Nährstoffe im Samen auf seinem Rücken, um zu wachsen.",
        "pt-br": "Durante sua juventude, usa os nutrientes armazenados na semente em suas costas para crescer.",
        "zh-tw": "在出生後的一段時間內，牠會吸收背上種子裡儲存著的營養成長。",
        ja: "While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow.",
        ko: "While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊",
                ja: "Tackle",
                ko: "Tackle"
            },
            damage: 20,
            cost: [
                "Grass"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
