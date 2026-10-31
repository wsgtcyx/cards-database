import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/264",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/264",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/264",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/264",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/264",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/264",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/264",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/264",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/264"
    },
    name: {
        en: "Torchic",
        fr: "Poussifeu",
        es: "Torchic",
        it: "Torchic",
        de: "Flemmli",
        "pt-br": "Torchic",
        "zh-tw": "火稚雞",
        ja: "アチャモ",
        ko: "아차모"
    },
    illustrator: "GOSSAN",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fire"
    ],
    description: {
        en: "A fire burns inside, so it feels very warm to hug.\nIt launches fireballs of 1,800 degrees Fahrenheit.",
        fr: "Ses câlins réchauffent car il renferme une fournaise. Il envoie des boules de feu à 1 000 °C.",
        es: "En su interior arde una llama que mantiene su cuerpo caliente. Tira bolas de fuego a 1000 °C.",
        it: "Nel suo corpo brucia una fiamma e abbracciandolo si avverte calore. Lancia palle di fuoco a 1.000 °C.",
        de: "In seinem Inneren lodert ein Feuer. Es schleudert 1000 °C heiße Feuerbälle.",
        "pt-br": "Um fogo queima em seu interior. Por isso, abraçá-lo é tão quente. Lança bolas de fogo de mais de 900 °C.",
        "zh-tw": "因為體內燃燒著火焰，所以抱在懷裡非常溫暖。能噴出1000度的火球。",
        ja: "体内で 炎が 燃えているので 抱きしめると とても 温かい。 １０００度の 火の玉を 飛ばす。",
        ko: "체내에 불꽃이 타오르고 있어\n껴안으면 무척 따뜻하다.\n1000도의 불구슬을 날린다."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄",
                ja: "つつく",
                ko: "쪼기"
            },
            damage: 20,
            cost: [
                "Fire"
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
