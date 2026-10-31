import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/022",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/022",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/022",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/022",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/022",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/022",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/022",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/022"
    },
    name: {
        en: "Popplio",
        "fr": "Otaquin",
        "es": "Popplio",
        "it": "Popplio",
        "de": "Robball",
        "pt-br": "Popplio",
        "zh-tw": "球球海獅",
        ja: "アシマリ",
        ko: "누리공",
    },
    illustrator: "match",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "The balloons it inflates with its nose grow\nlarger and larger as it practices day by day.",
        "fr": "Les ballons qu'il gonfle avec son nez grandissent\nde plus en plus grand à mesure qu'il s'entraîne jour après jour.",
        "es": "Los globos que infla con su nariz crecen\nmás y más grande a medida que se practica día a día.",
        "it": "I palloncini che gonfia con il naso crescono\nsempre più grande man mano che si esercita giorno dopo giorno.",
        "de": "Die Ballons, die es mit seiner Nase aufbläst, wachsen\ngrößer und größer, je mehr es Tag für Tag praktiziert.",
        "pt-br": "Os balões que ele infla com o nariz crescem\ncada vez maior à medida que pratica dia após dia.",
        "zh-tw": "它用鼻子吹的氣球長大了\n隨著它日復一日的練習，它變得越來越大。",
        ja: "鼻で 膨らませる バルーンは 日々 練習を 重ねることで 少しずつ 大きく なっていく。",
        ko: "코로 부풀리는 벌룬은\n매일 연습을 반복하면서\n조금씩 커진다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Watering",
                "fr": "Arrosage",
                "es": "Riego",
                "it": "Irrigazione",
                "de": "Bewässerung",
                "pt-br": "Rega",
                "zh-tw": "澆水",
                ja: "みずまき",
                ko: "물끼얹기"
            },
            damage: 30,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
