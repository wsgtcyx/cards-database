import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/057",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/057"
    },
    name: {
        en: "Eelektrik",
        fr: "Lampéroie",
        es: "Eelektrik",
        it: "Eelektrik",
        de: "Zapplalek",
        "pt-br": "Eelektrik",
        "zh-tw": "麻麻鰻",
        ko: "저리릴",
        ja: "シビビール"
    },
    illustrator: "NC Empire",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    dexId: [603],
    evolveFrom: {
        en: "Tynamo",
        fr: "Anchwatt",
        es: "Tynamo",
        it: "Tynamo",
        de: "Zapplardin",
        "pt-br": "Tynamo",
        "zh-tw": "麻麻小魚",
        ko: "저리어",
        ja: "シビシラス"
    },
    stage: "Stage1",
    description: {
        en: "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.",
        fr: "Un Pokémon doté d’un gros appétit. Il paralyse ses proies\navec des décharges électriques avant de les manger.",
        es: "Pokémon de apetito voraz. En cuanto encuentra una presa, la\nparaliza con electricidad y la engulle.",
        it: "Pokémon dal grande appetito. Quando attacca, immobilizza\nil nemico paralizzandolo con l’elettricità.",
        de: "Hat es seine Beute erspäht, lähmt es sie mit Elektrizität und\nverspeist sie anschließend.",
        "pt-br": "Esses Pokémon possuem um enorme apetite. Ao avistarem suas presas, eles atacam e usam eletricidade para paralisá-las.",
        "zh-tw": "食慾旺盛的寶可夢。\n一發現獵物就會發動襲擊，\n用電流使其麻痺後大快朵頤。"
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                "pt-br": "Cabeçada",
                "zh-tw": "頭錘"
            },
            damage: 50
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
