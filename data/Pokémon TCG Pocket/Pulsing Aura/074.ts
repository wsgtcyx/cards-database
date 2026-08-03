import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/074",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/074",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/074",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/074",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/074",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/074",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/074"
    },
    name: {
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
    illustrator: "kawayoo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [207],
    stage: "Basic",
    description: {
        en: "It glides as if sliding. It startles foes by clamping on to their faces, then jabs with its poison stinger.",
        fr: "Il fend l’air et fond sur sa proie\npour s’agripper à son visage et\nla frapper avec son dard.",
        es: "Se desliza como si se deslizara. Asusta a los enemigos aferrándose a sus caras y luego los ataca con su aguijón venenoso.",
        it: "Scivola come se scivolasse. Spaventa i nemici aggrappandosi ai loro volti e poi li colpisce con il suo pungiglione velenoso.",
        de: "Es gleitet, als würde es gleiten. Es erschreckt Feinde, indem es sich an deren Gesichtern festklammert und dann mit seinem Giftstachel zusticht.",
        "pt-br": "Ele desliza como se estivesse deslizando. Ele assusta os inimigos apertando seus rostos e depois ataca com seu ferrão venenoso.",
        "zh-tw": "它像滑動一樣滑動。它會抓住敵人的臉來嚇唬他們，然後用毒刺刺傷他們。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Lunge",
                fr: "Furie-Bond",
                es: "Plancha",
                it: "Assalto",
                de: "Anfallen",
                "pt-br": "Estocada",
                "zh-tw": "猛撲"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
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
