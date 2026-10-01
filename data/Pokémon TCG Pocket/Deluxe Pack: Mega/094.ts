import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/094",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/094",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/094",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/094",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/094",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/094",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/094"
    },
    name: {
        en: "Helioptile",
        fr: "Galvaran",
        es: "Helioptile",
        it: "Helioptile",
        de: "Eguana",
        "pt-br": "Helioptile",
        "zh-tw": "傘電蜥",
        ja: "エリキテル",
        ko: "목도리키텔"
    },
    illustrator: "Taiga Kayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Lightning"
    ],
    dexId: [
        694
    ],
    stage: "Basic",
    description: {
        en: "The sun powers this Pokémon’s electricity generation. Interruption of that process stresses Helioptile to the point of weakness.",
        fr: "Il peut générer de l'électricité grâce au soleil. Si on le dérange en pleine production d'énergie, cela le stresse et l'affaiblit.",
        es: "Es capaz de generar electricidad a partir de la luz del sol. Si lo interrumpen en pleno proceso, se pone nervioso y pierde las fuerzas.",
        it: "Possiede un organo con cui genera energia elettrica fotovoltaica. Se viene disturbato mentre la produce, si stressa e si indebolisce.",
        de: "Es kann aus Sonnenlicht Elektrizität erzeugen. Unterbricht man es jedoch bei diesem Prozess, verliert es vor lauter Stress all seine Kraft.",
        "pt-br": "A eletricidade deste Pokémon é gerada através da luz solar. Se este processo for interrompido, Helioptile se estressará tanto que ficará enfraquecido.",
        "zh-tw": "擁有太陽能發電的結構。如果有人打擾牠發電，牠就會因心理壓力而衰弱。",
        ja: "The sun powers this Pokémon’s electricity generation. Interruption of that process stresses Helioptile to the point of weakness.",
        ko: "The sun powers this Pokémon’s electricity generation. Interruption of that process stresses Helioptile to the point of weakness."
    },
    attacks: [
        {
            cost: [
                "Lightning"
            ],
            name: {
                en: "Jumping Kick",
                fr: "Coup Sauté",
                es: "Patada Saltadora",
                it: "Calcio Aereo",
                de: "Sprungtritt",
                "pt-br": "Voadora",
                "zh-tw": "跳踢",
                ja: "Jumping Kick",
                ko: "Jumping Kick"
            },
            effect: {
                en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 10 danni a uno dei Pokémon del tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "對手的1隻寶可夢受到10點傷害。",
                ja: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                ko: "This attack does 10 damage to 1 of your opponent's Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
