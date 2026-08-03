import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/055",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/055",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/055",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/055",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/055",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/055"
    },
    name: {
        en: "Mankey",
        fr: "Férosinge",
        es: "Mankey",
        it: "Mankey",
        de: "Menki",
        "pt-br": "Mankey",
        "zh-tw": "猴怪",
        pt: "Mankey"
    },
    illustrator: "nagimiso",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [56],
    description: {
        en: "It is extremely quick to anger. It could be docile one moment, then thrashing away the next instant.",
        "fr": "Il est extrêmement prompt à se mettre en colère. Il pouvait être docile un instant, puis se débattre l'instant suivant.",
        "es": "Se enoja extremadamente rápido. Podría ser dócil en un momento y luego destrozarse al instante siguiente.",
        "it": "È estremamente veloce ad arrabbiarsi. Potrebbe essere docile un momento, per poi dimenarsi l'istante successivo.",
        "de": "Es ist extrem schnell wütend. Es könnte in einem Moment fügsam sein und im nächsten Moment um sich schlagen.",
        "pt-br": "É extremamente rápido ficar com raiva. Poderia ser dócil em um momento e se debater no instante seguinte.",
        "zh-tw": "它非常容易生氣。它可能在某一時刻還很溫順，但下一秒就會猛烈地攻擊。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Fury Swipes",
                fr: "Combo-Griffe",
                es: "Golpes Furia",
                it: "Sfuriate",
                de: "Kratzfurie",
                "pt-br": "Golpes de Fúria",
                "zh-tw": "狂怒橫掃",
                'es-mx': "Garras Furiosas",
                pt: "Golpes de Fúria"
            },
            damage: "10×",
            cost: ["Fighting"],
            effect: {
                en: "Flip 3 coins. This attack does 10 damage for each heads.",
                fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
                es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
                it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
                de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 10 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 10 點傷害。",
                pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
                'es-mx': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara."
            },
        },
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
