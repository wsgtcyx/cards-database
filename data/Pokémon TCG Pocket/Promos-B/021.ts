import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/021",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/021",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/021",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/021",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/021",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/021"
    },
    name: {
        en: "Onix",
        fr: "Onix",
        es: "Onix",
        it: "Onix",
        de: "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇",
        ko: "롱스톤",
        ja: "イワーク"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "None",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [95],
    stage: "Basic",
    description: {
        en: "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.",
        fr: "Il creuse dans le sol à une vitesse de 80 km/h\nen contorsionnant son immense corps de pierre.",
        es: "Perfora el suelo a una velocidad de 80 km/h\ngirando y retorciendo su robusto y enorme\ncuerpo.",
        it: "Scava nel terreno a una velocità di 80 km/h\ncontorcendo e agitando il corpo grande\ne possente.",
        de: "Es bohrt sich mit 80 km/h durch das Erdreich,\nindem es seinen massiven, rauen Körper dreht\nund windet.",
        "pt-br": "Ele rapidamente perfura o solo a 80 km/h, contorcendo-se e torcendo seu corpo maciço e robusto.",
        "zh-tw": "彎曲扭動巨大結實的身體，\n以時速８０公里的\n猛烈勢頭挖掘前進。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Tail Smash",
                fr: "Éclate-Queue",
                es: "Coletazo",
                it: "Coda Esplosiva",
                de: "Schwanzschmetterer",
                "pt-br": "Pancada de Cauda",
                "zh-tw": "長尾擊碎"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol3"]
};

export default card;
