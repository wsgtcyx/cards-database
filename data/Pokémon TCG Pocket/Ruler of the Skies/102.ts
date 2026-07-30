import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/102"
    },
    name: {
        en: "Mandibuzz",
        fr: "Vaututrice",
        es: "Mandibuzz",
        it: "Mandibuzz",
        de: "Grypheldis",
        "pt-br": "Mandibuzz",
        "zh-tw": "禿鷹娜",
        ko: "버랜지나",
        ja: "バルジーナ"
    },
    illustrator: "Narumi Sato",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    dexId: [630],
    evolveFrom: {
        en: "Vullaby",
        fr: "Vostourno",
        es: "Vullaby",
        it: "Vullaby",
        de: "Skallyk",
        "pt-br": "Vullaby",
        "zh-tw": "禿鷹丫頭",
        ko: "벌차이",
        ja: "バルチャイ"
    },
    stage: "Stage1",
    description: {
        en: "Watching from the sky, they attack weakened prey on the ground. They have a habit of decorating themselves with bones.",
        fr: "Observant du ciel, ils attaquent des proies affaiblies au sol. Ils ont l'habitude de se décorer d'os.",
        es: "Observando desde el cielo, atacan a sus presas debilitadas en el suelo. Tienen la costumbre de adornarse con huesos.",
        it: "Osservando dal cielo, attaccano le prede indebolite a terra. Hanno l'abitudine di decorarsi con le ossa.",
        de: "Vom Himmel aus beobachtend, greifen sie geschwächte Beute am Boden an. Sie haben die Angewohnheit, sich mit Knochen zu schmücken.",
        "pt-br": "Observando do céu, eles atacam presas enfraquecidas no chão. Eles têm o hábito de se enfeitarem com ossos.",
        "zh-tw": "它們從空中觀察，攻擊地面上虛弱的獵物。他們有用骨頭裝飾自己的習慣。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Bone Rush",
                fr: "Charge Os",
                es: "Ataque Óseo",
                it: "Ossoraffica",
                de: "Knochenhatz",
                "zh-tw": "骨棒亂打"
            },
            effect: {
                en: "Flip a coin until you get tails. This attack does 60 damage for each heads.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 60 dégâts pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 60 puntos de daño por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 60 danni ogni volta che esce testa.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue uma moeda até sair coroa. Este ataque causa 60 pontos de dano para cada cara.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 60 點傷害。"
            },
            damage: "60x"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
