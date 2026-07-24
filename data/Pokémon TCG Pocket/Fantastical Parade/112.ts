import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/112"
    },
    name: {
        en: "Mawile",
        "fr": "Mawile",
        "es": "mawile",
        "it": "Mawile",
        "de": "Mawile",
        "pt-br": "Mawile",
        "zh-tw": "馬維勒"
    },
    illustrator: "kurumitsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    description: {
        en: "It chomps with its gaping mouth. Its huge jaws are\nactually steel horns that have been transformed.",
        "fr": "Il ronge avec sa gueule béante. Ses énormes mâchoires sont\nen fait des cornes en acier qui ont été transformées.",
        "es": "Muerde con la boca abierta. Sus enormes mandíbulas son\nen realidad cuernos de acero que han sido transformados.",
        "it": "Mastica con la bocca spalancata. Le sue enormi mascelle lo sono\nin realtà corni d'acciaio che sono stati trasformati.",
        "de": "Es kaut mit aufgerissenem Maul. Seine riesigen Kiefer sind\neigentlich umgestaltete Stahlhörner.",
        "pt-br": "Ele mastiga com a boca aberta. Suas enormes mandíbulas são\nna verdade, chifres de aço que foram transformados.",
        "zh-tw": "它張開嘴咀嚼食物。它巨大的下巴是\n實際上是經過改造的鋼角。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Cavernous Chomp",
                "fr": "Chomp caverneux",
                "es": "Mordisco cavernoso",
                "it": "Masticatore cavernoso",
                "de": "Höhlenfresser",
                "pt-br": "Mordida Cavernosa",
                "zh-tw": "海綿狀咀嚼物"
            },
            damage: 50,
            cost: ["Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
