import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/138",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/138",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/138",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/138",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/138"
    },
    name: {
        en: "Tranquill",
        fr: "Colombeau",
        es: "Tranquill",
        it: "Tranquill",
        de: "Navitaub",
        "pt-br": "Tranquill",
        "zh-tw": "咕咕鴿",
        ko: "유토브",
        ja: "ハトーボー"
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    dexId: [520],
    evolveFrom: {
        en: "Pidove",
        fr: "Poichigeon",
        es: "Pidove",
        it: "Pidove",
        de: "Dusselgurr",
        "pt-br": "Pidove",
        "zh-tw": "豆豆鴿",
        ko: "콩둘기",
        ja: "マメパト"
    },
    stage: "Stage1",
    description: {
        en: "These bright Pokémon have acute memories. Apparently delivery workers often choose them as their partners.",
        fr: "Il est intelligent et possède une bonne mémoire.\nOn raconte que les livreurs le choisissent souvent\ncomme partenaire.",
        es: "Posee una mente ágil y muy buena memoria.\nTal vez por eso muchos repartidores lo eligen\ncomo compañero.",
        it: "Pokémon intelligente, dotato di una memoria\ndi ferro. Sembra che molti fattorini lo scelgano\ncome compagno.",
        de: "Es ist clever und hat ein gutes Gedächtnis.\nAnscheinend wird es von vielen Lieferanten als\nPartner ausgewählt.",
        "zh-tw": "頭腦聰明且記性很好。\n似乎有許多快遞員\n將牠選為自己的搭檔。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Speed Dive",
                fr: "Plongée Rapide",
                es: "Picado Rápido",
                it: "Immersione Rapida",
                de: "Tempohechtsprung",
                "pt-br": "Mergulho Veloz",
                "zh-tw": "高速飛行"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
