import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/049",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/049",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/049",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/049",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/049"
    },
    name: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ja: "カルボウ",
        ko: "카르본"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fire"
    ],
    dexId: [
        935
    ],
    description: {
        en: "Its firepower increases when it fights, reaching over 1,800 degrees Fahrenheit. It likes berries that are rich in fat.",
        fr: "Ses puissantes flammes atteignent les 1 000 °C lorsqu'il se bat. Il aime les Baies riches en matières grasses.",
        es: "Sus potentes llamas alcanzan los 1000°C cuando combate. Siente predilección por las bayas con un alto contenido graso.",
        it: "La sua energia termica aumenta di intensità durante le lotte, raggiungendo i 1.000 °C. Adora le bacche ricche di grassi.",
        de: "Im Kampf erreichen seine Flammen Temperaturen von bis zu 1000 °C. Es hat eine Vorliebe für Beeren mit hohem Fettgehalt.",
        "pt-br": "Seu poder de fogo aumenta quando batalha, atingindo mais de 1.000 °C. Gosta de frutas ricas em gordura.",
        "zh-tw": "在進入戰鬥狀態後，火力會上升至攝氏1000度。喜歡吃油脂含量高的樹果。",
        ja: "戦いになると 火力が 上がり 摂氏1000度に 達する。 油分の多い 木の実を 好む。",
        ko: "Its firepower increases when it fights, reaching over 1,800 degrees Fahrenheit. It likes berries that are rich in fat."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Punch",
                fr: "Koud'Poing",
                es: "Puño",
                it: "Pugno",
                de: "Boxhieb",
                "pt-br": "Soco",
                "zh-tw": "出拳",
                ko: "펀치",
                ja: "パンチ"
            },
            damage: 10,
            cost: [
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
