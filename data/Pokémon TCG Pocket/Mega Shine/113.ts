import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/113",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/113",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/113",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/113",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/113",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/113"
    },
    name: {
        en: "Mega Manectric ex",
        fr: "Méga-Élecsprint-ex",
        es: "Mega-Manectric ex",
        it: "Mega Manectric-ex",
        de: "Mega-Voltenso-ex",
        "pt-br": "Mega Manectric ex",
        "zh-tw": "超級雷電獸ex",
        ko: "메가썬더볼트 ex",
        ja: "メガライボルトex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 180,
    types: ["Lightning"],
    dexId: [310],
    evolveFrom: {
        en: "Electrike",
        fr: "Dynavolt",
        es: "Electrike",
        it: "Electrike",
        de: "Frizelbliz",
        "pt-br": "Electrike",
        "zh-tw": "落雷獸",
        ko: "썬더라이",
        ja: "ラクライ"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Lightning Accelerator",
                fr: "Accélérateur d'Éclair",
                es: "Electroaceleración",
                it: "Elettroacceleratore",
                de: "Blitzbeschleuniger",
                "pt-br": "Acelerador de Relâmpago",
                "zh-tw": "閃電暴衝"
            },
            effect: {
                en: "This attack does 30 more damage for each point you have gotten.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque point obtenu.",
                es: "Este ataque hace 30 daños más por cada punto que hayas conseguido.",
                it: "Questo attacco infligge 30 danni in più per ogni punto ottenuto.",
                de: "Dieser Angriff verursacht 30 weitere Schadenspunkte für jeden Punkt, den Sie erhalten haben.",
                "pt-br": "Este ataque causa 30 de dano a mais para cada ponto obtido.",
                "zh-tw": "每獲得一點，此攻擊就會造成 30 點額外傷害。"
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
