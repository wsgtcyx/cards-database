import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/047",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/047",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/047",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/047",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/047",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/047",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/047"
    },
    name: {
        en: "Croconaw",
        "fr": "Crocrodil",
        "es": "Croconaw",
        "it": "Croconaw",
        "de": "Tyracroc",
        "pt-br": "Croconaw",
        "zh-tw": "藍鱷",
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Totodile",
        "fr": "Kaiminus",
        "es": "Totodile",
        "it": "Totodile",
        "de": "Karnimani",
        "pt-br": "Totodile",
        "zh-tw": "小鋸鱷",
    },
    description: {
        en: "If it loses a fang, a new one grows back in its\nplace. There are always 48 fangs lining its mouth.",
        "fr": "S'il perd un croc, un nouveau repousse dans son\nlieu. Il y a toujours 48 crocs qui bordent sa bouche.",
        "es": "Si pierde un colmillo, le vuelve a crecer uno nuevo.\nlugar. Siempre hay 48 colmillos recubriendo su boca.",
        "it": "Se perde una zanna, ne ricresce una nuova\nposto. Ci sono sempre 48 zanne nella sua bocca.",
        "de": "Verliert es einen Fangzahn, wächst ein neuer nach\nOrt. In seinem Maul sind immer 48 Reißzähne zu sehen.",
        "pt-br": "Se perder uma presa, uma nova crescerá novamente em seu\nlugar. Sempre há 48 presas em sua boca.",
        "zh-tw": "如果它失去了一顆獠牙，新的獠牙就會長出來\n地方。它的嘴裡總是有48顆尖牙。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 40,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
