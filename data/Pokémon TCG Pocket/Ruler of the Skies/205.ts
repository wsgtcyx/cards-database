import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/205",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/205",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/205",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/205",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/205"
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
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
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
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊"
            },
            damage: 20
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
