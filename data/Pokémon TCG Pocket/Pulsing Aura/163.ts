import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/163",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/163",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/163",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/163",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/163",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/163"
    },
    name: {
        en: "Zekrom",
        fr: "Zekrom",
        es: "Zekrom",
        it: "Zekrom",
        de: "Zekrom",
        "pt-br": "Zekrom",
        "zh-tw": "捷克羅姆",
        ko: "제크로무",
        ja: "ゼクロム"
    },
    illustrator: "kawayoo",
    rarity: "One Star",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    dexId: [644],
    stage: "Basic",
    description: {
        en: "Mythology tells us that if people lose the righteousness in their hearts, their kingdoms will be razed by Zekrom’s lightning.",
        fr: "Selon la légende, lorsque les gens perdent tout\nsens de ce qui est juste, Zekrom réduit le pays\nentier en cendres avec de terribles éclairs.",
        es: "Según las leyendas, la furia de sus rayos\nfulminará todo país cuyas gentes hayan perdido\nel sentido de la justicia.",
        it: "Secondo le leggende, può radere al suolo\nun intero paese con fulmini terribili se i suoi\nabitanti hanno perso il senso della giustizia.",
        de: "Viele Mythen besingen den Donner, mit dem es\ndie Welt vernichten wird, wenn die Menschen\nden Sinn für die Gerechtigkeit verlieren.",
        "pt-br": "A mitologia nos diz que se as pessoas perderem a justiça em seus corações, seus reinos serão arrasados ​​pelos raios de Zekrom.",
        "zh-tw": "在神話的敘述裡，如果人類\n失去了正義之心，牠就會用\n狂暴的雷電毀滅他們的王國。"
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning", "Lightning"],
            name: {
                en: "Bolt Strike",
                fr: "Charge Foudre",
                es: "Ataque Fulgor",
                it: "Lucesiluro",
                de: "Blitzschlag",
                "pt-br": "Ataque de Raios",
                "zh-tw": "雷擊"
            },
            effect: {
                en: "Flip a coin. If tails, this Pokémon also does 30 damage to itself.",
                fr: "Lancez une pièce de monnaie. Si c'est pile, ce Pokémon s'inflige également 30 dégâts.",
                es: "Lanza una moneda. Si sale cruz, este Pokémon también se hace 30 puntos de daño a sí mismo.",
                it: "Lancia una moneta. Se esce croce, questo Pokémon infligge 30 danni anche a se stesso.",
                de: "Wirf eine Münze. Bei „Zahl“ fügt sich dieses Pokémon außerdem selbst 30 Schadenspunkte zu.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este Pokémon também causa 30 de dano a si mesmo.",
                "zh-tw": "拋一枚硬幣。如果是反面，這只寶可夢也會對自己造成 30 點傷害。"
            },
            damage: 110
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
