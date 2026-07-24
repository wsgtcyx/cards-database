import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/053",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/053"
    },
    name: {
        en: "Magneton",
        fr: "Magnéton",
        es: "Magneton",
        it: "Magneton",
        de: "Magneton",
        "pt-br": "Magneton",
        "zh-tw": "三合一磁怪",
        ko: "레어코일",
        ja: "レアコイル"
    },
    illustrator: "Saya Tsuruta",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    dexId: [82],
    evolveFrom: {
        en: "Magnemite",
        fr: "Magnéti",
        es: "Magnemite",
        it: "Magnemite",
        de: "Magnetilo",
        "pt-br": "Magnemite",
        "zh-tw": "小磁怪",
        ko: "코일",
        ja: "コイル"
    },
    stage: "Stage1",
    description: {
        en: "They’re formed by several Magnemite linked together. They frequently appear when sunspots flare up.",
        fr: "Ils sont formés de plusieurs Magnéti reliés entre eux. Ils apparaissent fréquemment lorsque les taches solaires éclatent.",
        es: "Están formados por varios Magnemite unidos entre sí. Con frecuencia aparecen cuando aparecen manchas solares.",
        it: "Sono formati da più Magnemite collegati tra loro. Appaiono frequentemente quando le macchie solari si manifestano.",
        de: "Sie werden durch mehrere miteinander verbundene Magnetilo gebildet. Sie treten häufig auf, wenn Sonnenflecken aufflammen.",
        "pt-br": "Eles são formados por vários Magnemite interligados. Eles freqüentemente aparecem quando as manchas solares aumentam.",
        "zh-tw": "它們是由多個 小磁怪 連接在一起形成的。它們經常在太陽黑子爆發時出現。"
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Magnetic Blast",
                fr: "Explosion Magnétique",
                es: "Explosión Magnética",
                it: "Magnetebomba",
                de: "Magnetstoß",
                "pt-br": "Explosão Magnética",
                "zh-tw": "磁力爆破"
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
    retreat: 2
};

export default card;
