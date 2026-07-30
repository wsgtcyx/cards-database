import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/088"
    },
    name: {
        en: "Gurdurr",
        fr: "Ouvrifier",
        es: "Gurdurr",
        it: "Gurdurr",
        de: "Strepoli",
        "pt-br": "Gurdurr",
        "zh-tw": "鐵骨土人",
        ko: "토쇠골",
        ja: "ドテッコツ"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    dexId: [533],
    evolveFrom: {
        en: "Timburr",
        fr: "Charpenti",
        es: "Timburr",
        it: "Timburr",
        de: "Praktibalk",
        "pt-br": "Timburr",
        "zh-tw": "搬運小匠",
        ko: "으랏차",
        ja: "ドッコラー"
    },
    stage: "Stage1",
    description: {
        en: "This Pokémon is so muscular and strongly built that even a group of wrestlers could not make it budge an inch.",
        fr: "Même une armée de catcheurs se jetant sur son corps\nhyper musclé ne le ferait pas ciller.",
        es: "Sus músculos están tan desarrollados que no se inmuta\naunque lo ataquen varios luchadores.",
        it: "Il suo corpo muscolosissimo resisterebbe senza battere\nciglio all’assalto di un lottatore di wrestling.",
        de: "Selbst wenn es mit voller Wucht von einem Profi-Ringer\nangegriffen wird, lässt es dies dank seines Muskeltrainings kalt."
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                en: "Pummel",
                fr: "Martelage",
                es: "Aporrear",
                it: "Legnata",
                de: "Trommler",
                "pt-br": "Esmurrar",
                "zh-tw": "狂毆"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            },
            damage: "30+"
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
