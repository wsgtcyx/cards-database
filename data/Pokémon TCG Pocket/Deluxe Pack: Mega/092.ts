import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/092",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/092",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/092",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/092",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/092",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/092",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/092"
    },
    name: {
        en: "Mega Manectric ex",
        fr: "Méga-Élecsprint-ex",
        es: "Mega-Manectric ex",
        it: "Mega Manectric-ex",
        de: "Mega-Voltenso-ex",
        "pt-br": "Mega Manectric ex",
        "zh-tw": "超級雷電獸ex",
        ja: "メガライボルトex",
        ko: "메가썬더볼트 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: [
        "Lightning"
    ],
    dexId: [
        310
    ],
    evolveFrom: {
        en: "Electrike",
        fr: "Dynavolt",
        es: "Electrike",
        it: "Electrike",
        de: "Frizelbliz",
        "pt-br": "Electrike",
        "zh-tw": "落雷獸",
        ja: "Electrike",
        ko: "Electrike"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Lightning",
                "Lightning"
            ],
            name: {
                en: "Lightning Accelerator",
                fr: "Accélérateur d'Éclair",
                es: "Electroaceleración",
                it: "Elettroacceleratore",
                de: "Blitzbeschleuniger",
                "pt-br": "Acelerador de Relâmpago",
                "zh-tw": "閃電暴衝",
                ja: "Lightning Accelerator",
                ko: "Lightning Accelerator"
            },
            effect: {
                en: "This attack does 30 more damage for each point you have gotten.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque point que vous avez gagné.",
                es: "Este ataque hace 30 puntos de daño más por cada punto que hayas conseguido.",
                it: "Questo attacco infligge 30 danni in più per ogni punto che hai ottenuto.",
                de: "Diese Attacke fügt für jeden von dir erhaltenen Punkt 30 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada ponto que você recebeu.",
                "zh-tw": "增加自己已經獲得的分數×30點傷害。",
                ja: "This attack does 30 more damage for each point you have gotten.",
                ko: "This attack does 30 more damage for each point you have gotten."
            },
            damage: "80+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 0
};

export default card;
