import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/126"
    },
    name: {
        en: "Dipplin",
        fr: "Pomdramour",
        es: "Dipplin",
        it: "Dipplin",
        de: "Sirapfel",
        "pt-br": "Dipplin",
        "zh-tw": "裹蜜蟲",
        ko: "과미르",
        ja: "カミッチュ"
    },
    illustrator: "Tomomi Ozaki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Dragon"],
    dexId: [1011],
    evolveFrom: {
        en: "Applin",
        fr: "Verpom",
        es: "Applin",
        it: "Applin",
        de: "Knapfel",
        "pt-br": "Applin",
        "zh-tw": "啃果蟲",
        ko: "과사삭벌레",
        ja: "カジッチュ"
    },
    stage: "Stage1",
    description: {
        en: "The head sticking out belongs to the fore-wyrm, while the tail belongs to the core-wyrm. The two share one apple and help each other out."
    },
    attacks: [
        {
            cost: ["Grass", "Fire"],
            name: {
                en: "Double Hit",
                fr: "Coup Double",
                es: "Doble Golpe",
                it: "Doppiosmash",
                de: "Doppelschlag",
                "pt-br": "Golpe Duplo",
                "zh-tw": "二連擊"
            },
            effect: {
                en: "Flip 2 coins. This attack does 60 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 60 de daño por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 60 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 60 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 60 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 60 點傷害。"
            },
            damage: "60x"
        }
    ],
    retreat: 1
};

export default card;
