import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/028"
    },
    name: {
        en: "Houndoom",
        fr: "Démolosse",
        es: "Houndoom",
        it: "Houndoom",
        de: "Hundemon",
        "pt-br": "Houndoom",
        "zh-tw": "黑魯加",
        ko: "헬가",
        ja: "ヘルガー"
    },
    illustrator: "hncl",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    dexId: [229],
    evolveFrom: {
        en: "Houndour",
        fr: "Malosse",
        es: "Houndour",
        it: "Houndour",
        de: "Hunduster",
        "pt-br": "Houndour",
        "zh-tw": "戴魯比",
        ko: "델빌",
        ja: "デルビル"
    },
    stage: "Stage1",
    description: {
        en: "Upon hearing its eerie howls, other POKéMON get the shivers and head straight back to their nests."
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
            name: {
                en: "Crunch",
                fr: "Croquer",
                es: "Crujido",
                it: "Crunch",
                de: "Knirschen",
                "pt-br": "Trituração",
                "zh-tw": "咬碎"
            },
            effect: {
                en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
                fr: "Lancez une pièce de monnaie. Si c'est face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                es: "Lanza una moneda. Si sale cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Lancia una moneta. Se esce testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                de: "Wirf eine Münze. Bei „Kopf“ wirf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda. Se sair cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則丟棄對手的活躍寶可夢中的隨機能量。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
