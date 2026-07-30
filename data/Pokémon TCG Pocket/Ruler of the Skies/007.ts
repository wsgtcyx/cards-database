import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/007"
    },
    name: {
        en: "Cradily",
        fr: "Vacilys",
        es: "Cradily",
        it: "Cradily",
        de: "Wielie",
        "pt-br": "Cradily",
        "zh-tw": "搖籃百合",
        ko: "릴리요",
        ja: "ユレイドル"
    },
    illustrator: "Midori Harada",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Grass"],
    dexId: [346],
    evolveFrom: {
        en: "Lileep",
        fr: "Lilia",
        es: "Lileep",
        it: "Lileep",
        de: "Liliep",
        "pt-br": "Lileep",
        "zh-tw": "觸手百合",
        ko: "릴링",
        ja: "リリーラ"
    },
    stage: "Stage2",
    description: {
        en: "Once Cradily catches prey in its tentacles, it digests them whole and absorbs their nutrients.",
        fr: "Il attrape ses proies à l’aide de ses tentacules,\npuis les dissout immédiatement avec ses sucs\ndigestifs pour en absorber les nutriments.",
        es: "Atrapa a sus presas con los tentáculos y\nenseguida las disuelve con sus jugos gástricos\npara absorber los nutrientes.",
        it: "Cattura le prede con i tentacoli e le scioglie\ncon un fluido digestivo, assorbendone così\nle sostanze nutritive.",
        de: "Sobald es mit seinen Tentakeln Beute erfasst hat,\nlöst es diese mit seiner Verdauungsflüssigkeit auf\nund absorbiert ihre Nährstoffe.",
        "zh-tw": "用觸手捕捉到獵物時，\n會直接用消化液溶解\n獵物然後吸收養分。"
    },
    attacks: [
        {
            cost: ["Grass", "Grass"],
            name: {
                en: "Stick and Absorb"
            },
            effect: {
                en: "Heal 30 damage from this Pokémon. During your opponent's next turn, the Defending Pokémon can't retreat."
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
