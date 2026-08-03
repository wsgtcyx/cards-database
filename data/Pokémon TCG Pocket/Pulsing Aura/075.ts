import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/075",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/075",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/075"
    },
    name: {
        en: "Gliscor",
        fr: "Scorvol",
        es: "Gliscor",
        it: "Gliscor",
        de: "Skorgro",
        "pt-br": "Gliscor",
        "zh-tw": "天蠍王",
        ko: "글라이온",
        ja: "グライオン"
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    dexId: [472],
    evolveFrom: {
        en: "Gligar",
        fr: "Scorplane",
        es: "Gligar",
        it: "Gligar",
        de: "Skorgla",
        "pt-br": "Gligar",
        "zh-tw": "天蠍",
        ko: "글라이거",
        ja: "グライガー"
    },
    stage: "Stage1",
    description: {
        en: "It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!",
        fr: "Il guette sa proie, pendu à une branche la tête\nen bas, et s'en saisit à la première occasion.",
        es: "Espera a sus presas colgado de una rama bocabajo.\nCuando llega su oportunidad, se lanza en picado.",
        it: "Sta appeso ai rami con la testa in giù. Alla prima\noccasione, si butta a capofitto sulla preda.",
        de: "Es hängt kopfüber von einem Ast und beobachtet\nseine Beute. Bei Gelegenheit stürzt es sich auf sie.",
        "pt-br": "Observa as presas enquanto se pendura de cabeça\npara baixo nos galhos. Quando a chance surge, ele ataca!",
        "zh-tw": "它倒掛在樹枝上觀察獵物。當機會出現時，它就會猛撲過去！"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Pierce",
                fr: "Transpercement",
                es: "Perforar",
                it: "Perforare",
                de: "Durchbohren",
                "pt-br": "Perfurar",
                "zh-tw": "突刺"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
