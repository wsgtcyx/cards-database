import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/062",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/062"
    },
    name: {
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
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [819],
    stage: "Basic",
    description: {
        en: "No matter how much it stuffs its belly with food, it is always anxious about getting hungry again. So, it stashes berries in its cheeks and tail.",
        fr: "Peu importe à quel point il se gave de nourriture, il a toujours peur d’avoir à nouveau faim. Ainsi, il cache des baies dans ses joues et sa queue.",
        es: "Por mucho que se llene la barriga de comida, siempre está ansioso por volver a tener hambre. Entonces, esconde bayas en sus mejillas y cola.",
        it: "Non importa quanto si riempia la pancia di cibo, è sempre ansioso di avere di nuovo fame. Quindi nasconde le bacche nelle guance e nella coda.",
        de: "Egal, wie sehr es seinen Bauch mit Futter vollstopft, es hat immer Angst davor, wieder hungrig zu werden. Deshalb versteckt es Beeren in seinen Wangen und seinem Schwanz.",
        "pt-br": "Por mais que encha a barriga de comida, ele está sempre ansioso para voltar a ter fome. Então, ele esconde frutas nas bochechas e na cauda.",
        "zh-tw": "不管它肚子裡塞了多少食物，它總是擔心又會餓。所以，它把漿果藏在臉頰和尾巴裡。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
