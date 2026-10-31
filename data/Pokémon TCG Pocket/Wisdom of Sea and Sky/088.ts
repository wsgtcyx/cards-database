import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/088",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/088",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/088",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/088",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/088",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/088",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/088",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/088",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/088"
    },
    name: {
        en: "Snubbull",
        "fr": "Snubbull",
        "es": "Snubbull",
        "it": "Snubbull",
        "de": "Snubbull",
        "pt-br": "Snubbull",
        "zh-tw": "布魯",
        ja: "ブルー",
        ko: "블루",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "It grows close to others easily and is also easily\nspoiled. The disparity between its face and its\nactions makes many young people wild about it.",
        "fr": "Il se rapproche facilement des autres et est également facilement\ngâté. La disparité entre son visage et son\nces actions rendent de nombreux jeunes fous.",
        "es": "Se acerca fácilmente a los demás y también es fácilmente\nestropeado. La disparidad entre su rostro y su\nacciones enloquecen a muchos jóvenes.",
        "it": "Cresce facilmente vicino agli altri ed è anche facile\nviziato. La disparità tra il suo volto e il suo\nazioni fanno impazzire molti giovani.",
        "de": "Es wächst leicht in die Nähe anderer und wächst auch leicht\nverwöhnt. Die Ungleichheit zwischen seinem Gesicht und seinem\nAktionen machen viele junge Leute wild.",
        "pt-br": "Ele se aproxima facilmente dos outros e também é facilmente\nestragado. A disparidade entre seu rosto e seu\nações deixam muitos jovens loucos por isso.",
        "zh-tw": "它很容易與他人親近，也很容易\n被寵壞了。臉和身材的差距\n行動讓不少年輕人為之瘋狂。",
        ja: "よく 懐いて よく 甘える。 その 仕草と 顔の ギャップで 若い 女性は メロメロらしい。",
        ko: "금방 따르고 금방 응석을 부린다.\n하는 행동과 생김새의 격차 때문에\n젊은 여성은 헤롱헤롱하는 듯하다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存",
                ja: "ぶつかる",
                ko: "부딪치기"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
