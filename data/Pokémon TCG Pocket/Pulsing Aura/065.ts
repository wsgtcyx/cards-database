import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/065",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/065",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/065",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/065",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/065",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/065"
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
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [677],
    stage: "Basic",
    description: {
        en: "Behind an Espurr’s expressionless face is a frantic struggle to contain psychic power.",
        fr: "Derrière le visage inexpressif d’un Psystigri se cache une lutte effrénée pour contenir le pouvoir psychique.",
        es: "Detrás del rostro inexpresivo de un Espurr hay una lucha frenética por contener el poder psíquico.",
        it: "Dietro il volto inespressivo di uno Espurr c'è una lotta frenetica per contenere il potere psichico.",
        de: "Hinter dem ausdruckslosen Gesicht eines Psiau verbirgt sich ein verzweifelter Kampf um die Eindämmung der psychischen Kraft.",
        "pt-br": "Por trás do rosto inexpressivo de Espurr está uma luta frenética para conter o poder psíquico.",
        "zh-tw": "妙喵面無表情的臉孔背後，是一場遏制靈能的瘋狂鬥爭。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Mumble",
                fr: "Murmure",
                es: "Farfullar",
                it: "Borbottio",
                de: "Grummeln",
                "pt-br": "Resmungo",
                "zh-tw": "囈語"
            },
            damage: 20
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
