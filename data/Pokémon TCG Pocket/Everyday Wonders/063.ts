import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/063"
    },
    name: {
        en: "Greedent",
        fr: "Rongrigou",
        es: "Greedent",
        it: "Greedent",
        de: "Schlaraffel",
        "pt-br": "Greedent",
        "zh-tw": "藏飽栗鼠",
        ko: "요씽리스",
        ja: "ヨクバリス"
    },
    illustrator: "sui",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Colorless"],
    dexId: [820],
    evolveFrom: {
        en: "Skwovet",
        fr: "Rongourmand",
        es: "Skwovet",
        it: "Skwovet",
        de: "Raffel",
        "pt-br": "Skwovet",
        "zh-tw": "貪心栗鼠",
        ko: "탐리스",
        ja: "ホシガリス"
    },
    stage: "Stage1",
    description: {
        en: "This Pokémon makes off with heaps of fallen berries by wrapping them in its tail, which is roughly twice the length of its body.",
        fr: "Ce Pokémon s'enfuit avec des tas de baies tombées en les enroulant dans sa queue, qui fait environ deux fois la longueur de son corps.",
        es: "Este Pokémon se lleva montones de bayas caídas envolviéndolas en su cola, que mide aproximadamente el doble de la longitud de su cuerpo.",
        it: "Questo Pokémon scappa con i mucchi di bacche cadute avvolgendole nella coda, che è lunga circa il doppio del suo corpo.",
        de: "Dieses Pokémon macht sich mit Haufen heruntergefallener Beeren auf den Weg, indem es sie in seinen Schwanz einwickelt, der etwa doppelt so lang ist wie sein Körper.",
        "pt-br": "Este Pokémon foge de montes de frutas caídas, enrolando-as em sua cauda, ​​que tem aproximadamente o dobro do comprimento de seu corpo.",
        "zh-tw": "這隻寶可夢用它的尾巴捲住掉落的漿果，大約是它身體長度的兩倍，從而將它們帶走。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Collapse",
                fr: "Effondrement",
                es: "Colapso",
                it: "Collassare",
                de: "Kollaps",
                "pt-br": "Colapso",
                "zh-tw": "倒下"
            },
            effect: {
                en: "This Pokémon is now Asleep.",
                fr: "Ce Pokémon est maintenant endormi.",
                es: "Este Pokémon ahora está Dormido.",
                it: "Questo Pokémon è addormentato.",
                de: "Dieses Pokémon schläft jetzt.",
                "pt-br": "Este Pokémon agora está dormindo.",
                "zh-tw": "這只寶可夢現在已經睡著了。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
