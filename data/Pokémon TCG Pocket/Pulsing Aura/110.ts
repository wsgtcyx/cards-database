import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/110",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/110",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/110",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/110",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/110",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/110",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/110"
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
    illustrator: "kodama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
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
            cost: ["Darkness"],
            name: {
                en: "Blindside",
                fr: "Angle Mort",
                es: "Lado Ciego",
                it: "Spiazzare",
                de: "Aus heiterem Himmel",
                "pt-br": "Ponto Cego",
                "zh-tw": "暗中奇襲"
            },
            effect: {
                en: "This attack does 60 damage to 1 of your opponent's Pokémon that have damage on them.",
                fr: "Cette attaque inflige 60 dégâts à 1 des Pokémon de votre adversaire qui subissent des dégâts.",
                es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu oponente que tiene daño.",
                it: "Questo attacco infligge 60 danni a 1 dei Pokémon del tuo avversario che hanno danni su di sé.",
                de: "Dieser Angriff fügt 1 Pokémon deines Gegners, auf dem Schaden liegt, 60 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente que tenham dano.",
                "zh-tw": "這次攻擊對對手 1 隻受到傷害的寶可夢造成 60 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
