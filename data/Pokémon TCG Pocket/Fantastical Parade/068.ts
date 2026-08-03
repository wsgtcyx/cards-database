import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/068",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/068",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/068",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/068",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/068",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/068"
    },
    name: {
        en: "Lampent",
        "fr": "Mélancolux",
        "es": "Lampent",
        "it": "Lampent",
        "de": "Laternecto",
        "pt-br": "Lampent",
        "zh-tw": "燈火幽靈"
    },
    illustrator: "MAHOU",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Litwick",
        "fr": "Litwick",
        "es": "litwick",
        "it": "Litwick",
        "de": "Litwick",
        "pt-br": "Litwick",
        "zh-tw": "利特威克"
    },
    description: {
        en: "The spirits it absorbs fuel its baleful fire. It hangs\naround hospitals waiting for people to pass on.",
        "fr": "Les esprits qu’il absorbe alimentent son feu funeste. Ça pend\nautour des hôpitaux en attendant que les gens décèdent.",
        "es": "Los espíritus que absorbe alimentan su fuego siniestro. Se cuelga\nalrededor de los hospitales esperando que la gente fallezca.",
        "it": "Gli spiriti che assorbe alimentano il suo fuoco funesto. Si blocca\nintorno agli ospedali in attesa che le persone muoiano.",
        "de": "Die Geister, die es aufnimmt, schüren sein unheilvolles Feuer. Es hängt\nrund um Krankenhäuser, die darauf warten, dass Menschen weitergeben.",
        "pt-br": "Os espíritos que absorve alimentam seu fogo sinistro. Ele trava\nem torno de hospitais esperando que as pessoas falecessem.",
        "zh-tw": "它吸收的靈魂助長了它的惡火。它掛了\n醫院周圍等待著人們過去。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Petty Grudge",
                "fr": "Petite rancune",
                "es": "Pequeño rencor",
                "it": "Piccolo rancore",
                "de": "Kleiner Groll",
                "pt-br": "Rancor mesquinho",
                "zh-tw": "小怨恨"
            },
            damage: 30,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
