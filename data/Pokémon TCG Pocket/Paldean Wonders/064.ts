import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/064",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/064",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/064",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/064",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/064"
    },
    name: {
        en: "Paldean Wooper",
        fr: "Axoloto de Paldea",
        es: "Wooper de Paldea",
        it: "Wooper di Paldea",
        de: "Paldea-Felino",
        "pt-br": "Wooper",
        "zh-tw": "帕底亞 烏波",
        'es-mx': "Wooper de Paldea",
        pt: "Wooper de Paldea"
    },
    illustrator: "Pani Kobayashi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [194],
    description: {
        en: "It's dangerous for Wooper to travel alone. They line up in groups of three or four and help each other as they walk around the wetlands.",
        "fr": "Il est dangereux pour Wooper de voyager seul. Ils s'alignent en groupes de trois ou quatre et s'entraident tout en se promenant dans les zones humides.",
        "es": "Es peligroso para Wooper viajar solo. Se forman en grupos de tres o cuatro y se ayudan mutuamente mientras caminan por los humedales.",
        "it": "È pericoloso per Wooper viaggiare da solo. Si allineano in gruppi di tre o quattro e si aiutano a vicenda mentre camminano nelle zone umide.",
        "de": "Für Wooper ist es gefährlich, alleine zu reisen. Sie stellen sich in Dreier- oder Vierergruppen auf und helfen sich gegenseitig, während sie durch die Feuchtgebiete laufen.",
        "pt-br": "É perigoso para Wooper viajar sozinho. Eles se alinham em grupos de três ou quatro e ajudam uns aos outros enquanto caminham pelos pântanos.",
        "zh-tw": "伍珀獨自旅行很危險。它們三、四人一組，在濕地裡行走時互相幫助。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Flop",
                fr: "Flop",
                "es": "Fracaso",
                "it": "Flop",
                de: "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌"
            },
            damage: "40",
            cost: ["Darkness", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
