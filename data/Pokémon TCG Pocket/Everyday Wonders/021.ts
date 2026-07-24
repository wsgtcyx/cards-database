import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/021"
    },
    name: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ko: "피카츄",
        ja: "ピカチュウ"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [25],
    stage: "Basic",
    description: {
        en: "When several of these Pokémon gather, their electricity can build and cause lightning storms.",
        fr: "Lorsque plusieurs de ces Pokémon se rassemblent, leur électricité peut se développer et provoquer des orages.",
        es: "Cuando varios de estos Pokémon se reúnen, su electricidad puede acumularse y provocar tormentas eléctricas.",
        it: "Quando molti di questi Pokémon si riuniscono, la loro elettricità può accumularsi e causare tempeste di fulmini.",
        de: "Wenn sich mehrere dieser Pokémon versammeln, kann sich ihre Elektrizität aufbauen und Gewitter auslösen.",
        "pt-br": "Quando vários desses Pokémon se reúnem, sua eletricidade pode aumentar e causar tempestades com raios.",
        "zh-tw": "當這些寶可夢聚集在一起時，它們的電力就會累積並引發閃電風暴。"
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Electro Ball",
                fr: "Boule Élek",
                es: "Bola Voltio",
                it: "Energisfera",
                de: "Elektroball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電球"
            },
            damage: 40
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
