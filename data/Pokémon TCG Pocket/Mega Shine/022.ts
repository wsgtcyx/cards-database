import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/022",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/022",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/022",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/022",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/022",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/022"
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
    illustrator: "Ryuta Fuse",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
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
            cost: ["Lightning"],
            name: {
                en: "Static Shock",
                fr: "Choc Statique",
                es: "Impacto Estático",
                it: "Shock Statico",
                de: "Statischer Schock",
                "pt-br": "Choque de Estática",
                "zh-tw": "劈哩啪啦"
            },
            damage: 10
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
