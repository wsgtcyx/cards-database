import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/026",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/026"
    },
    name: {
        en: "Mudkip",
        fr: "Gobou",
        es: "Mudkip",
        it: "Mudkip",
        de: "Hydropi",
        "pt-br": "Mudkip",
        "zh-tw": "水躍魚",
        ko: "물짱이",
        ja: "ミズゴロウ"
    },
    illustrator: "Shigenori Negishi",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [258],
    stage: "Basic",
    description: {
        en: "When it uses its large tail fin, it picks up speed rapidly in the water. It is strong in spite of its small size.",
        fr: "Lorsqu’il utilise sa grande nageoire caudale, il prend rapidement de la vitesse dans l’eau. Il est solide malgré sa petite taille.",
        es: "Cuando utiliza su gran aleta caudal, gana velocidad rápidamente en el agua. Es fuerte a pesar de su pequeño tamaño.",
        it: "Quando usa la sua grande pinna caudale, acquista rapidamente velocità nell'acqua. È forte nonostante le sue piccole dimensioni.",
        de: "Mit seiner großen Schwanzflosse nimmt er im Wasser schnell Fahrt auf. Trotz seiner geringen Größe ist es stark.",
        "pt-br": "Quando usa sua grande barbatana caudal, ganha velocidade rapidamente na água. É forte apesar do seu pequeno tamanho.",
        "zh-tw": "當它使用大尾鰭時，它會在水中迅速加快速度。儘管它的體積很小，但它很堅固。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Surprise Attack",
                fr: "Attaque Surprise",
                es: "Ataque Sorpresa",
                it: "Attacco a Sorpresa",
                de: "Überraschungsangriff",
                "pt-br": "Ataque Surpresa",
                "zh-tw": "偷襲"
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
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
