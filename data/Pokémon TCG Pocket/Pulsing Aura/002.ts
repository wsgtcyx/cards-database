import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/002",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/002"
    },
    name: {
        en: "Tangrowth",
        fr: "Bouldeneu",
        es: "Tangrowth",
        it: "Tangrowth",
        de: "Tangoloss",
        "pt-br": "Tangrowth",
        "zh-tw": "巨蔓藤",
        ko: "덩쿠림보",
        ja: "モジャンボ"
    },
    illustrator: "nagimiso",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    dexId: [465],
    evolveFrom: {
        en: "Tangela",
        fr: "Saquedeneu",
        es: "Tangela",
        it: "Tangela",
        de: "Tangela",
        "pt-br": "Tangela",
        "zh-tw": "蔓藤怪",
        ko: "덩쿠리",
        ja: "モンジャラ"
    },
    stage: "Stage1",
    description: {
        en: "Vine growth is accelerated for Tangrowth living in warm climates. If the vines grow long, Tangrowth shortens them by tearing parts of them off.",
        fr: "Ses lianes poussent plus rapidement s’il vit\nsous un climat chaud. Quand elles deviennent\ntrop longues, il se les coupe.",
        es: "Las lianas le crecen más rápidamente si vive\nen regiones cálidas. Cuando alcanzan cierta\nlongitud, se las corta.",
        it: "Più il territorio in cui vive è caldo, più le sue liane\ncrescono velocemente. Quando si allungano\ntroppo, le taglia per accorciarle.",
        de: "Je wärmer sein Lebensraum ist, desto schneller\nwachsen seine Ranken. Werden sie zu lang,\nkürzt Tangoloss sie, indem es sie abreißt.",
        "pt-br": "O crescimento da videira é acelerado para Tangrowth que vivem em climas quentes. Se as vinhas crescerem muito, Tangrowth as encurta, arrancando partes delas.",
        "zh-tw": "棲息的地方越溫暖，藤蔓就會\n長得越快。當藤蔓變得太長時，\n就會自己扯斷它來調整長度。"
    },
    attacks: [
        {
            cost: ["Grass", "Grass", "Colorless"],
            name: {
                en: "Vine Whip",
                fr: "Fouet Lianes",
                es: "Látigo Cepa",
                it: "Frustata",
                de: "Rankenhieb",
                "pt-br": "Chicote de Vinha",
                "zh-tw": "藤鞭"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
