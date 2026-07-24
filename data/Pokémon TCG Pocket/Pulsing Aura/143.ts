import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/143",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/143"
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
    illustrator: "Kouki Saitou",
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
            cost: ["Colorless"],
            name: {
                en: "Knock Away",
                fr: "Asticotage",
                es: "Derribar",
                it: "Scaraventa",
                de: "Zurückschlagen",
                "pt-br": "Jogar Longe",
                "zh-tw": "擊飛"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            },
            damage: "30+"
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
