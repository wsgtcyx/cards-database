import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/020",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/020",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/020"
    },
    name: {
        en: "Salandit",
        fr: "Tritox",
        es: "Salandit",
        "pt-br": "Salandit",
        "zh-tw": "夜盜火蜥",
        ja: "ヤトウモリ",
        ko: "야도뇽",
        it: "Salandit",
        de: "Molunk"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 50,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Flare",
                fr: "Flamboiement",
                es: "Llama",
                it: "Fiammata",
                de: "Flackern",
                "pt-br": "Chama",
                "zh-tw": "火焰",
                ja: "Flare",
                ko: "Flare"
            },
            cost: [
                "Fire"
            ],
            damage: 30
        }
    ],
    abilities: [],
    description: {
        en: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
        fr: "Il provoque ses proies afin de les attirer dans d’étroites zones rocheuses, puis il les étourdit avec son gaz toxique avant de les achever.",
        es: "Provoca a sus presas para conducirlas a zonas rocosas y estrechas, donde las aturde con un gas venenoso antes de acabar con ellas.",
        it: "Provoca le sue prede e le attira in stretti luoghi rocciosi, per poi stordirle con il suo gas velenoso e abbatterle.",
        de: "Es provoziert seine Beute und lockt sie in enge Felsspalten, wo es sie dann mit Giftgas ins Taumeln bringt und erlegt.",
        "pt-br": "Provoca suas presas e as atrai para áreas estreitas e rochosas. Em seguida, espirra sobre elas um gás tóxico para deixá-las atordoadas e dar o bote.",
        "zh-tw": "會將獵物誘引進狹窄的岩縫裡，然後噴出能讓獵物頭暈的毒瓦斯使其昏倒。",
        ja: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
        ko: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down."
    }
};

export default card;
