import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/014"
    },
    name: {
        en: "Magikarp",
        fr: "Magicarpe",
        es: "Magikarp",
        it: "Magikarp",
        de: "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王",
        ko: "잉어킹",
        ja: "コイキング"
    },
    illustrator: "sui",
    rarity: "None",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    dexId: [129],
    stage: "Basic",
    description: {
        en: "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
        fr: "La puissance de cette créature a beaucoup régressé\nau fil des siècles.",
        es: "En un pasado lejano, era más fuerte de lo que hoy\nson sus débiles descendientes.",
        it: "Anticamente era molto più forte dell’odierno\ndiscendente, che è debolissimo.",
        de: "Die urzeitlichen Vorfahren dieses Pokémon waren\nsehr viel stärker als ihre heutigen Nachkommen.",
        "pt-br": "No passado distante, era um pouco mais forte do que os descendentes terrivelmente fracos que existem hoje.",
        "zh-tw": "在遙遠的過去，它比現在弱小的後裔要強一些。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Expert Splasher",
                fr: "Éclabousseur Expert",
                es: "As del Chapoteo",
                it: "Specialista di Splash",
                de: "Platschexperte",
                "pt-br": "Borrifador Experiente",
                "zh-tw": "跳躍高手"
            },
            effect: {
                en: "Flip 2 coins. If both of them are heads, this attack does 20 more damage.",
                fr: "Lancez 2 pièces. Si les deux sont face, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Lanza 2 monedas. Si ambos son cara, este ataque hace 20 puntos de daño más.",
                it: "Lancia 2 monete. Se entrambi escono testa, questo attacco infligge 20 danni in più.",
                de: "Wirf 2 Münzen. Wenn beide Köpfe sind, fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue 2 moedas. Se ambos derem cara, este ataque causa 20 de dano a mais.",
                "zh-tw": "翻轉 2 個硬幣。如果兩人都是正面，這次攻擊會造成額外 20 點傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol2"]
};

export default card;
