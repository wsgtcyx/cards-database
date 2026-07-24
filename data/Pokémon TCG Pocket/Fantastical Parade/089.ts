import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/089"
    },
    name: {
        en: "Tyrunt",
        "fr": "tyran",
        "es": "tirano",
        "it": "Tyrunt",
        "de": "Tyrunt",
        "pt-br": "Tirano",
        "zh-tw": "泰倫特"
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Jaw Fossil",
        "fr": "Fossile de mâchoire",
        "es": "Fósil de mandíbula",
        "it": "Mascella fossile",
        "de": "Kieferfossil",
        "pt-br": "Fóssil de mandíbula",
        "zh-tw": "下頜化石"
    },
    description: {
        en: "This Pokémon is selfish and likes to be pampered.\nIt can also inflict grievous wounds on its Trainer\njust by playing around.",
        "fr": "Ce Pokémon est égoïste et aime se faire dorloter.\nIl peut également infliger de graves blessures à son dresseur.\njuste en jouant.",
        "es": "Este Pokémon es egoísta y le gusta que lo mimen.\nTambién puede infligir heridas graves a su entrenador.\nsimplemente jugando.",
        "it": "Questo Pokémon è egoista e ama essere coccolato.\nPuò anche infliggere gravi ferite al suo Allenatore\nsemplicemente giocando.",
        "de": "Dieses Pokémon ist egoistisch und lässt sich gerne verwöhnen.\nEs kann seinem Trainer auch schwere Wunden zufügen\neinfach durch Herumspielen.",
        "pt-br": "Este Pokémon é egoísta e gosta de ser mimado.\nEle também pode causar ferimentos graves em seu Treinador\napenas brincando.",
        "zh-tw": "這只神奇寶貝很自私，喜歡被寵愛。\n它還可以對其訓練師造成嚴重傷害\n只是玩玩而已。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Hammer In",
                "fr": "Marteler",
                "es": "Martillo adentro",
                "it": "Martella dentro",
                "de": "Einschlagen",
                "pt-br": "Martelo",
                "zh-tw": "錘入"
            },
            damage: 60,
            cost: ["Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
