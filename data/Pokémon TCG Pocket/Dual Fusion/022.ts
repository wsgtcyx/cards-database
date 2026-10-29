import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/022",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/022",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/022",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/022",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/022",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/022"
    },
    name: {
        en: "Scorbunny",
        fr: "Flambino",
        es: "Scorbunny",
        "pt-br": "Scorbunny",
        "zh-tw": "炎兔兒",
        ja: "ヒバニー",
        ko: "염버니",
        it: "Scorbunny",
        de: "Hopplo"
    },
    illustrator: "Kanami Ogata",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 50,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Rabbit Jumping",
                fr: "Bond de Lapin",
                es: "Brinconejo",
                it: "Saltelli da Coniglio",
                de: "Hasensprung",
                "pt-br": "Salto do Coelho",
                "zh-tw": "兔兒跳",
                ja: "Rabbit Jumping",
                ko: "Rabbit Jumping"
            },
            cost: [
                "Colorless"
            ],
            damage: "20x",
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。",
                ja: "Flip 2 coins. This attack does 20 damage for each heads.",
                ko: "Flip 2 coins. This attack does 20 damage for each heads."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Once its body has heated up, Scorbunny can use the full extent of its power. That’s why it does warm-up exercises.",
        fr: "Ce Pokémon peut déployer tout son potentiel une fois que sa température est élevée. C’est pourquoi il fait des exercices d’échauffement.",
        es: "Desata su verdadera fuerza cuando su cuerpo entra en calor. Por eso hace ejercicios de calentamiento.",
        it: "Quando la temperatura corporea sale, sprigiona tutta la sua potenza. Perciò fa sempre esercizi di riscaldamento.",
        de: "Erst wenn sein Körper ausreichend warm ist, kann es seine wahre Kraft entfesseln. Deshalb macht es Aufwärmübungen.",
        "pt-br": "Quando seu corpo se aquece, Scorbunny pode usar toda a capacidade do seu poder. É por isso que faz exercícios de aquecimento.",
        "zh-tw": "當全身的溫度提升後，就會發揮出真正的力量。因此會為此做熱身運動。",
        ja: "Once its body has heated up, Scorbunny can use the full extent of its power. That’s why it does warm-up exercises.",
        ko: "Once its body has heated up, Scorbunny can use the full extent of its power. That’s why it does warm-up exercises."
    }
};

export default card;
