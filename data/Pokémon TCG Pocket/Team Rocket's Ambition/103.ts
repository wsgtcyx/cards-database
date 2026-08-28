import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/103",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/103",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/103",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/103",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/103",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/103",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/103"
    },
    name: {
        en: "Taillow",
        fr: "Nirondelle",
        es: "Taillow",
        it: "Taillow",
        de: "Schwalbini",
        "pt-br": "Taillow",
        "zh-tw": "傲骨燕",
        ko: "테일로",
        ja: "スバメ"
    },
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [276],
    stage: "Basic",
    description: {
        en: "It dislikes cold seasons. They migrate to other lands in search of warmth, flying over 180 miles a day.",
        fr: "Nirondelle ne supporte pas les saisons froides. Il vole vers d'autres terres à la recherche de chaleur et peut ainsi parcourir 300 km par jour.",
        es: "No le gustan las bajas temperaturas. En las estaciones frías se recorre casi 300 km al dia en busca de zonas cálidas.",
        it: "Non ama il freddo. In inverno emigra verso regioni calde, viaggiando a una velocità di 300 km al giorno.",
        de: "Es mag die kalte Jahreszeit nicht. Daher legt es auf der Suche nach wärmeren Gefilden mehr als 300 km am Tag zurück.",
        "pt-br": "Detesta estações frias. Eles migram para outras terras em busca de calor, voando mais de 280 km em um dia.",
        "zh-tw": "不擅長應付寒冷的季節。為了尋找溫暖的地帶，會1天飛上300公里的距離。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄"
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
