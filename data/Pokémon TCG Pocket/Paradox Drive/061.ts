import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/061",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/061",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/061",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/061",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/061",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/061"
    },
    name: {
        en: "Swablu",
        fr: "Tylton",
        es: "Swablu",
        it: "Swablu",
        de: "Wablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
        ko: "파비코",
        ja: "チルット"
    },
    illustrator: "Lee HyunJung",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    dexId: [333],
    stage: "Basic",
    description: {
        en: "It can’t relax if it or its surroundings are not clean. It wipes off dirt with its wings.",
        fr: "Il ne se sent à l’aise que dans un\nmilieu propre et repousse la\npoussière avec ses ailes.",
        es: "No puede relajarse si él o sus alrededores no están limpios. Limpia la suciedad con sus alas.",
        it: "Non può rilassarsi se lui o i suoi dintorni non sono puliti. Elimina lo sporco con le ali.",
        de: "Es kann sich nicht entspannen, wenn es oder seine Umgebung nicht sauber sind. Mit seinen Flügeln wischt es Schmutz weg.",
        "pt-br": "Ele não pode relaxar se ele ou seus arredores não estiverem limpos. Ele limpa a sujeira com suas asas.",
        "zh-tw": "如果它或它的周圍環境不乾淨，它就不能放鬆。它用翅膀擦去污垢。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Fury Attack",
                fr: "Furie",
                es: "Ataque Furia",
                it: "Furia",
                de: "Furienschlag",
                "pt-br": "Ataque de Fúria",
                "zh-tw": "亂擊"
            },
            effect: {
                en: "Flip 3 coins. This attack does 10 damage for each heads.",
                fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque tête.",
                es: "Lanza 3 monedas. Este ataque hace 10 daños por cada cabeza.",
                it: "Lancia 3 monete. Questo attacco infligge 10 danni per ogni testa.",
                de: "Wirf 3 Münzen. Dieser Angriff verursacht 10 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 10 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 10 點傷害。"
            },
            damage: "10x"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
