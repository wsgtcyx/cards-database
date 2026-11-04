import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/035/0483ef193ec682e1",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/035/0483ef193ec682e1",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/035/0483ef193ec682e1",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/035/0483ef193ec682e1",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/035/0483ef193ec682e1",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/035/0483ef193ec682e1",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/035/0483ef193ec682e1",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/035/0483ef193ec682e1",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/035/0483ef193ec682e1"
    },
    name: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ko: "카르본",
        ja: "カルボウ"
    },
    illustrator: "Oswaldo KATO",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [935],
    stage: "Basic",
    description: {
        en: "Its firepower increases when it fights, reaching over 1,800 degrees Fahrenheit. It likes berries that are rich in fat.",
        fr: "Ses puissantes flammes atteignent les 1 000 °C lorsqu'il se bat. Il aime les Baies riches en matières grasses.",
        es: "Sus potentes llamas alcanzan los 1000 °C cuando combate. Siente predilección por las bayas con un alto contenido graso.",
        it: "La sua energia termica aumenta di intensità durante le lotte, raggiungendo i 1.000 °C. Adora le bacche ricche di grassi.",
        de: "Im Kampf erreichen seine Flammen Temperaturen von bis zu 1000 °C. Es hat eine Vorliebe für Beeren mit hohem Fettgehalt.",
        "pt-br": "Seu poder de fogo aumenta quando batalha, atingindo mais de 1.000 °C. Gosta de frutas ricas em gordura.",
        "zh-tw": "在進入戰鬥狀態後，火力會上升至超過1000度。喜歡吃油脂含量高的樹果。",
        ja: "戦いになると 火力が 上がり 摂氏1000度に 達する。 油分の多い 木の実を 好む。",
        ko: "싸움을 시작하면 화력이 상승하여\n섭씨 1000도에 이르게 된다.\n기름기가 많은 나무열매를 좋아한다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Punch",
                fr: "Koud'Poing",
                es: "Puño",
                it: "Pugno",
                de: "Boxhieb",
                "pt-br": "Soco",
                "zh-tw": "出拳",
                ja: "パンチ",
                ko: "펀치"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol5"]
};

export default card;
