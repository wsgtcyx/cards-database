import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/031",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/031",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/031"
    },
    name: {
        en: "Espurr",
        fr: "Psystigri",
        es: "Espurr",
        it: "Espurr",
        de: "Psiau",
        "pt-br": "Espurr",
        "zh-tw": "妙喵",
        ko: "냐스퍼",
        ja: "ニャスパー"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [677],
    stage: "Basic",
    description: {
        en: "Behind an Espurr's expressionless face is a frantic struggle to contain psychic power.",
        fr: "Il a l'air inexpressif, mais en réalité, i lutte de toutes ses forces pour contenir ses pouvoirs psychiques.",
        es: "Su semblante carece de expresión, pero en su interior está librando una lucha titánica por contener su poder psiquico.",
        it: "Il suo volto è inespressivo, ma dentro di sé fa sforzi enormi per reprimere i propri poteri psichici.",
        de: "Sein Gesicht ist ausdruckslos, aber innerlich bringt es enorme Anstrengung auf, um seine Psycho-Kräfte unter Kontrolle zu halten.",
        "pt-br": "Por trás do rosto inexpressivo de Espurr está uma luta tremenda para conter poder psíquico.",
        "zh-tw": "雖然看起來面無表情，但其實內心正非常努力地在控制自己的精神力量。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Beam",
                fr: "Rayon",
                es: "Transmisión",
                it: "Raggio",
                de: "Strahl",
                "pt-br": "Feixe",
                "zh-tw": "光束"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
