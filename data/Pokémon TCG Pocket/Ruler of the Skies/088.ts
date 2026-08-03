import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/088",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/088",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/088",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/088",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/088"
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
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。"
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
