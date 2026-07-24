import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/007"
    },
    name: {
        en: "Sceptile",
        fr: "Jungko",
        es: "Sceptile",
        it: "Sceptile",
        de: "Gewaldro",
        "pt-br": "Sceptile",
        "zh-tw": "蜥蜴王",
        ko: "나무킹",
        ja: "ジュカイン"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    dexId: [254],
    evolveFrom: {
        en: "Grovyle",
        fr: "Massko",
        es: "Grovyle",
        it: "Grovyle",
        de: "Reptain",
        "pt-br": "Grovyle",
        "zh-tw": "森林蜥蜴",
        ko: "나무돌이",
        ja: "ジュプトル"
    },
    stage: "Stage2",
    description: {
        en: "It agilely flits through the jungle and uses the sharp-edged leaves on its arms to cut down its prey.",
        fr: "Il vole avec agilité dans la jungle et utilise les feuilles acérées de ses bras pour abattre ses proies.",
        es: "Revolotea ágilmente por la jungla y utiliza las hojas afiladas de sus brazos para cortar a sus presas.",
        it: "Vola agilmente attraverso la giungla e usa le foglie affilate delle sue braccia per abbattere la sua preda.",
        de: "Es huscht flink durch den Dschungel und nutzt die scharfkantigen Blätter an seinen Armen, um seine Beute zu erlegen.",
        "pt-br": "Ele voa agilmente pela selva e usa as folhas afiadas de seus braços para abater suas presas.",
        "zh-tw": "它敏捷地飛過叢林，利用手臂上鋒利的葉子砍倒獵物。"
    },
    attacks: [
        {
            cost: ["Grass", "Grass"],
            name: {
                en: "Leaf Blade",
                fr: "Lame Feuille",
                es: "Hoja Aguda",
                it: "Fendifoglia",
                de: "Laubklinge",
                "pt-br": "Lâmina de Folha",
                "zh-tw": "葉刃"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 50 more damage.",
                fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 50 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 50 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 50 點額外傷害。"
            },
            damage: "70+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
