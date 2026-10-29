import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/115",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/115",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/115",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/115",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/115",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/115",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/115"
    },
    name: {
        en: "Buneary",
        fr: "Laporeille",
        es: "Buneary",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳",
        ja: "ミミロル",
        ko: "이어롤",
        it: "Buneary",
        de: "Haspiror"
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 50,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
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
        en: "If both of Buneary’s ears are rolled up, something is wrong with its body or mind. It’s a sure sign the Pokémon is in need of care.",
        fr: "Quand ses deux oreilles sont repliées, c’est signe qu’il ne se sent pas bien physiquement ou mentalement et qu’il a besoin de soins.",
        es: "Cuando enrolla ambas orejas, es señal de que tiene algún tipo de malestar físico o emocional y necesita cuidados.",
        it: "Se arrotola entrambe le orecchie significa che è afflitto da qualche disturbo fisico o emotivo. È segno che bisogna prendersi cura di lui.",
        de: "Sind seine beiden Ohren aufgerollt, deutet das darauf hin, dass es ihm körperlich oder psychisch nicht gut geht und es Zuwendung braucht.",
        "pt-br": "Se as duas orelhas de Buneary estão enroladas, algo está errado com seu corpo ou mente. É um sinal claro de que o Pokémon precisa de cuidados.",
        "zh-tw": "將左右兩耳捲起來時， 就代表牠的身體或心情 狀況不佳，需要照顧。",
        ja: "If both of Buneary’s ears are rolled up, something is wrong with its body or mind. It’s a sure sign the Pokémon is in need of care.",
        ko: "If both of Buneary’s ears are rolled up, something is wrong with its body or mind. It’s a sure sign the Pokémon is in need of care."
    }
};

export default card;
