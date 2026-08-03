import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/060",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/060",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/060",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/060"
    },
    name: {
        en: "Helioptile",
        fr: "Galvaran",
        es: "Helioptile",
        it: "Helioptile",
        de: "Eguana",
        "pt-br": "Helioptile",
        "zh-tw": "傘電蜥",
        ko: "목도리키텔",
        ja: "エリキテル"
    },
    illustrator: "Taiga Kayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [694],
    stage: "Basic",
    description: {
        en: "The sun powers this Pokémon’s electricity generation. Interruption of that process stresses Helioptile to the point of weakness.",
        fr: "Il peut générer de l’électricité grâce au soleil.\nSi on le dérange en pleine production d’énergie,\ncela le stresse et l’affaiblit.",
        es: "Es capaz de generar electricidad a partir de la\nluz del sol. Si lo interrumpen en pleno proceso,\nse pone nervioso y pierde las fuerzas.",
        it: "Possiede un organo con cui genera energia\nelettrica fotovoltaica. Se viene disturbato mentre\nla produce, si stressa e si indebolisce.",
        de: "Es kann aus Sonnenlicht Elektrizität erzeugen.\nUnterbricht man es jedoch bei diesem Prozess,\nverliert es vor lauter Stress all seine Kraft.",
        "zh-tw": "擁有太陽能發電的結構。\n如果有人打擾牠發電，\n牠就會因心理壓力而衰弱。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Jumping Kick",
                fr: "Coup Sauté",
                es: "Patada Saltadora",
                it: "Calcio Aereo",
                de: "Sprungtritt",
                "pt-br": "Voadora",
                "zh-tw": "跳踢"
            },
            effect: {
                en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 10 danni a 1 dei Pokémon del tuo avversario.",
                de: "Dieser Angriff fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "對手的1隻寶可夢受到10點傷害。"
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
