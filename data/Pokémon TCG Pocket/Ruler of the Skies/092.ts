import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/092",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/092",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/092",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/092",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/092",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/092",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/092"
    },
    name: {
        en: "Muk",
        fr: "Grotadmorv",
        es: "Muk",
        it: "Muk",
        de: "Sleimok",
        "pt-br": "Muk",
        "zh-tw": "臭臭泥",
        ko: "질뻐기",
        ja: "ベトベトン"
    },
    illustrator: "moki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Darkness"],
    dexId: [89],
    evolveFrom: {
        en: "Grimer",
        fr: "Tadmorv",
        es: "Grimer",
        it: "Grimer",
        de: "Sleima",
        "pt-br": "Grimer",
        "zh-tw": "臭泥",
        ko: "알로라 질퍽이",
        ja: "アローラ ベトベター"
    },
    stage: "Stage1",
    description: {
        en: "It’s so stinky! Muk’s body contains toxic elements, and any plant will wilt when it passes by.",
        fr: "Il dégage une odeur pestilentielle. Son corps est si toxique que là où il passe, la végétation trépasse.",
        es: "Es pestilente y los componentes tóxicos de su cuerpo hacen que, a su paso, cualquier planta se marchite.",
        it: "Ha un odore estremamente sgradevole e il suo corpo è un concentrato di veleni. Non c'è pianta che rimanga in vita dopo il suo passaggio.",
        de: "Sein Gestank ist unerträglich. Das starke Gift, aus dem sein Körper besteht, macht jeder Pflanze in seinem Weg den Garaus.",
        "pt-br": "É fedorento demais! O corpo de Muk contém elementos tóxicos. Qualquer planta murchará quando ele passar por perto.",
        "zh-tw": "奇臭無比！\n身體帶有劇毒，牠所爬過\n之處，任何草木都會枯萎。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Ambush",
                fr: "Embuscade",
                es: "Emboscada",
                it: "Imboscata",
                de: "Hinterhalt",
                "pt-br": "Emboscada",
                "zh-tw": "伏擊"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。"
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
    retreat: 3
};

export default card;
