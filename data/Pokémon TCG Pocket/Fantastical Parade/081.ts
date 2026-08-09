import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/081",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/081",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/081",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/081",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/081",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/081",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/081"
    },
    name: {
        en: "Machamp",
        "fr": "Mackogneur",
        "es": "Machamp",
        "it": "Machamp",
        "de": "Machomei",
        "pt-br": "Machamp",
        "zh-tw": "怪力"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    evolveFrom: {
        en: "Machoke",
        "fr": "Machopeur",
        "es": "Machoke",
        "it": "Machoke",
        "de": "Maschock",
        "pt-br": "Machoke",
        "zh-tw": "豪力"
    },
    description: {
        en: "With four arms that react more quickly than it\ncan think, it can execute many punches at once.",
        "fr": "Avec quatre bras qui réagissent plus vite qu'elle\npeut penser, il peut exécuter plusieurs coups à la fois.",
        "es": "Con cuatro brazos que reaccionan más rápido que él.\npuede pensar, puede ejecutar muchos golpes a la vez.",
        "it": "Con quattro braccia che reagiscono più velocemente di lui\npuò pensare, può eseguire molti pugni contemporaneamente.",
        "de": "Mit vier Armen, die schneller reagieren als er\ndenken kann, kann es viele Schläge auf einmal ausführen.",
        "pt-br": "Com quatro braços que reagem mais rapidamente do que\npode pensar, pode executar muitos socos ao mesmo tempo.",
        "zh-tw": "擁有比它反應更快的四隻手臂\n可以思考，它可以一次出很多拳。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Knocking Hammer",
                "fr": "Marteau à frapper",
                "es": "Martillo de golpe",
                "it": "Martello da battere",
                "de": "Klopfhammer",
                "pt-br": "Martelo Batendo",
                "zh-tw": "敲擊鎚"
            },
            damage: 80,
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "Discard the top card of your opponent's deck.",
                "fr": "Défaussez la carte du dessus du deck de votre adversaire.",
                "es": "Descarta la carta superior del mazo de tu oponente.",
                "it": "Scarta la prima carta del mazzo del tuo avversario.",
                "de": "Wirf die oberste Karte des Decks deines Gegners ab.",
                "pt-br": "Descarte a carta do topo do baralho do seu oponente.",
                "zh-tw": "丟棄對手牌組頂牌。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
