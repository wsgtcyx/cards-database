import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/125",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/125",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/125",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/125",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/125"
    },
    name: {
        en: "Persian",
        "fr": "persan",
        "es": "persa",
        "it": "persiano",
        "de": "persisch",
        "pt-br": "persa",
        "zh-tw": "波斯語"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Meowth",
        "fr": "Miaouss",
        "es": "maullido",
        "it": "Miaoth",
        "de": "Miau",
        "pt-br": "Miau",
        "zh-tw": "喵喵"
    },
    description: {
        en: "It has a vicious temperament. Beware if it raises\nits tail straight up. This is a signal that it is about\nto pounce and bite.",
        "fr": "Il a un tempérament vicieux. Attention s'il augmente\nsa queue droite. C'est un signal qu'il s'agit\nbondir et mordre.",
        "es": "Tiene un temperamento vicioso. Cuidado si sube\nsu cola hacia arriba. Esta es una señal de que se trata de\npara saltar y morder.",
        "it": "Ha un temperamento vizioso. Attenzione se si alza\nla coda dritta. Questo è un segnale che si tratta\nbalzare e mordere.",
        "de": "Es hat ein bösartiges Temperament. Seien Sie vorsichtig, wenn es ansteigt\nsein Schwanz ist gerade nach oben. Das ist ein Signal dafür, dass es darum geht\nsich stürzen und beißen.",
        "pt-br": "Tem um temperamento cruel. Cuidado se isso aumentar\nsua cauda reta para cima. Este é um sinal de que se trata de\npara atacar e morder.",
        "zh-tw": "它有一種惡毒的氣質。小心如果它升高\n它的尾巴直立起來。這是一個信號，表明它是關於\n猛撲和咬。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 60,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
