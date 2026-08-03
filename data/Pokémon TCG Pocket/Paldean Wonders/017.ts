import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/017",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/017",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/017",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/017",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/017",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/017"
    },
    name: {
        en: "Crocalor",
        fr: "Crocogril",
        es: "Crocalor",
        it: "Crocalor",
        de: "Lokroko",
        "pt-br": "Crocalor",
        "zh-tw": "炙燙鱷",
        pt: "Crocalor"
    },
    illustrator: "kantaro",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    dexId: [910],
    evolveFrom: {
        en: "Fuecoco",
        fr: "Chochodile",
        es: "Fuecoco",
        it: "Fuecoco",
        de: "Krokel",
        "pt-br": "Fuecoco",
        "zh-tw": "呆火鱷",
        pt: "Fuecoco"
    },
    description: {
        en: "The valve in Crocalor's flame sac is closely connected to its vocal cords. This Pokémon utters a guttural cry as it spews flames every which way.",
        "fr": "La valve du sac de flamme de Crocogril est étroitement connectée à ses cordes vocales. Ce Pokémon pousse un cri guttural en crachant des flammes dans tous les sens.",
        "es": "La válvula en el saco de llamas de Crocalor está estrechamente conectada a sus cuerdas vocales. Este Pokémon lanza un grito gutural mientras arroja llamas por todos lados.",
        "it": "La valvola nella sacca fiammeggiante di Crocalor è strettamente collegata alle sue corde vocali. Questo Pokémon emette un grido gutturale mentre sputa fiamme in ogni direzione.",
        "de": "Das Ventil im Flammensack von Lokroko ist eng mit seinen Stimmbändern verbunden. Dieses Pokémon stößt einen kehligen Schrei aus, während es in alle Richtungen Flammen spuckt.",
        "pt-br": "A válvula no saco de chamas do Crocalor está intimamente ligada às cordas vocais. Este Pokémon emite um grito gutural enquanto cospe chamas em todas as direções.",
        "zh-tw": "炙燙鱷 火焰囊中的閥門與其聲帶緊密相連。這隻寶可夢一邊發出喉嚨般的叫聲，一邊向四周噴出火焰。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Morder",
                "zh-tw": "咬",
                pt: "Mordida",
                'es-mx': "Mordida"
            },
            damage: 50,
            cost: ["Fire", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
