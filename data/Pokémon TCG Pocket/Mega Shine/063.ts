import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/063",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/063",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/063",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/063",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/063"
    },
    name: {
        en: "Cinccino",
        fr: "Pashmilla",
        es: "Cinccino",
        it: "Cinccino",
        de: "Chillabell",
        "pt-br": "Cinccino",
        "zh-tw": "奇諾栗鼠",
        ko: "치라치노",
        ja: "チラチーノ"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [573],
    evolveFrom: {
        en: "Minccino",
        fr: "Chinchidou",
        es: "Minccino",
        it: "Minccino",
        de: "Picochilla",
        "pt-br": "Minccino",
        "zh-tw": "泡沫栗鼠",
        ko: "치라미",
        ja: "チラーミィ"
    },
    stage: "Stage1",
    description: {
        en: "The oil that seeps from its body is really smooth. For people troubled by bad skin, this oil is an effective treatment.",
        fr: "Le liquide que son corps sécrète est\nétrangement huileux. C’est un remède efficace\npour les personnes qui ont la peau sèche.",
        es: "La grasa que exuda por todo el cuerpo es muy\nlubrificante y altamente apreciada por las\npersonas con problemas de piel seca.",
        it: "Il grasso particolarmente oleoso prodotto dal\nsuo corpo è molto efficace contro le irritazioni\ncutanee.",
        de: "Aus seinem Körper tritt besonders schmieriges\nÖl aus, das für Menschen, die unter trockener\nHaut leiden, von großem Nutzen ist.",
        "pt-br": "O óleo que escorre de seu corpo é muito suave. Para pessoas com problemas de pele, este óleo é um tratamento eficaz.",
        "zh-tw": "從全身滲出的油非常滑。\n對於因為肌膚乾燥而\n煩惱的人也很有效果。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Gentle Slap",
                fr: "Gifle Douce",
                es: "Bofetada Gentil",
                it: "Schiaffetto",
                de: "Sanfter Hieb",
                "pt-br": "Tapinha",
                "zh-tw": "重摑"
            },
            damage: 60
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
