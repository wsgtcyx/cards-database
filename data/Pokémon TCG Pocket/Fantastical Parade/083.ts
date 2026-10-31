import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/083",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/083",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/083",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/083",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/083",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/083",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/083",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/083",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/083"
    },
    name: {
        en: "Meditite",
        "fr": "Méditikka",
        "es": "Meditite",
        "it": "Meditite",
        "de": "Meditie",
        "pt-br": "Meditite",
        "zh-tw": "瑪沙那",
        ja: "アサナン",
        ko: "요가랑"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It meditates to heighten its inner energy and to\nfloat in the air. It eats one berry a day.",
        "fr": "Il médite pour accroître son énergie intérieure et\nflotter dans les airs. Il mange une baie par jour.",
        "es": "Medita para aumentar su energía interior y\nflotar en el aire. Come una baya al día.",
        "it": "Medita per aumentare la sua energia interiore e per\nfluttuare nell'aria. Mangia una bacca al giorno.",
        "de": "Es meditiert, um seine innere Energie zu steigern und zu stärken\nin der Luft schweben. Es frisst eine Beere pro Tag.",
        "pt-br": "Ele medita para aumentar sua energia interior e para\nflutuar no ar. Come uma baga por dia.",
        "zh-tw": "它通過冥想來增強內在能量並\n漂浮在空中。它每天吃一個漿果。",
        ja: "瞑想で 精神エネルギーを 高めて 空中に 浮かぶ。 1日に 1個 木の実を 食べる。",
        ko: "명상으로 정신력을 높여 공중에 뜬다.\n하루에 나무열매 하나만 먹는다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Smack",
                "fr": "Claque",
                "es": "Golpe",
                "it": "Schiaffo",
                "de": "Klatschen",
                "pt-br": "Bater",
                "zh-tw": "斯馬克",
                ja: "ひらてうち",
                ko: "수벽치기"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
