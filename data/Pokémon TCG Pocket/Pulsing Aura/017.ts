import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/017"
    },
    name: {
        en: "Leavanny",
        fr: "Manternel",
        es: "Leavanny",
        it: "Leavanny",
        de: "Matrifol",
        "pt-br": "Leavanny",
        "zh-tw": "保母蟲",
        ko: "모아머",
        ja: "ハハコモリ"
    },
    illustrator: "match",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    dexId: [542],
    evolveFrom: {
        en: "Swadloon",
        fr: "Couverdure",
        es: "Swadloon",
        it: "Swadloon",
        de: "Folikon",
        "pt-br": "Swadloon",
        "zh-tw": "寶包繭",
        ko: "두르쿤",
        ja: "クルマユ"
    },
    stage: "Stage2",
    description: {
        en: "This gentle Pokémon has strong protective instincts. The leaves on its arms are sharp enough to slice a thick tree in half with one stroke.",
        fr: "Ce doux Pokémon a un fort instinct de protection. Les feuilles de ses bras sont suffisamment tranchantes pour couper un arbre épais en deux d'un seul coup.",
        es: "Este gentil Pokémon tiene fuertes instintos protectores. Las hojas de sus brazos son lo suficientemente afiladas como para cortar un árbol grueso por la mitad de un solo golpe.",
        it: "Questo Pokémon gentile ha un forte istinto protettivo. Le foglie sulle sue braccia sono abbastanza affilate da tagliare a metà un grosso albero con un solo colpo.",
        de: "Dieses sanfte Pokémon hat starke Beschützerinstinkte. Die Blätter an seinen Armen sind scharf genug, um einen dicken Baum mit einem Schlag in zwei Hälften zu schneiden.",
        "pt-br": "Este gentil Pokémon tem fortes instintos de proteção. As folhas em seus braços são afiadas o suficiente para cortar uma árvore grossa ao meio com um só golpe.",
        "zh-tw": "性格溫和的寶可夢有著強烈的保護本能。它手臂上的葉子非常鋒利，一擊就能將一棵粗大的樹切成兩半。"
    },
    attacks: [
        {
            cost: ["Grass", "Grass", "Grass"],
            name: {
                en: "Razor Leaf",
                fr: "Tranch'Herbe",
                es: "Hoja Afilada",
                it: "Foglielama",
                de: "Rasierblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "飛葉快刀"
            },
            damage: 100
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
