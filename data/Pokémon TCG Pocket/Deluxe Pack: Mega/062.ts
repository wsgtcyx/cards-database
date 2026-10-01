import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/062",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/062",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/062",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/062",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/062",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/062",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/062"
    },
    name: {
        en: "Mudkip",
        fr: "Gobou",
        es: "Mudkip",
        it: "Mudkip",
        de: "Hydropi",
        "pt-br": "Mudkip",
        "zh-tw": "水躍魚",
        ja: "ミズゴロウ",
        ko: "물짱이"
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Water"
    ],
    description: {
        en: "When it uses its large tail fin, it picks up speed\nrapidly in the water. It is strong in spite of its\nsmall size.",
        fr: "Dans l'eau, les battements de sa grande nageoire caudale le font accélérer de manière fulgurante. Malgré sa petite taille, il est très costaud.",
        es: "Batir su gran aleta caudal en el agua le permite nadar muy rápido. A pesar de su reducido tamaño, tiene mucha fuerza.",
        it: "Può acquisire una straordinaria velocità agitando la grande pinna caudale nell'acqua. È minuto, ma forte.",
        de: "Wenn es seine große Schwanzflosse einsetzt, kann es im Wasser schnell beschleunigen. Es ist überraschend stark für seine geringe Größe.",
        "pt-br": "Ao utilizar sua grande barbatana, ganha velocidade rapidamente na água. É forte, apesar de seu pequeno porte.",
        "zh-tw": "如果用大大的尾鰭划水，速度就會快速提升。身體雖小卻很有力氣。",
        ja: "When it uses its large tail fin, it picks up speed\nrapidly in the water. It is strong in spite of its\nsmall size.",
        ko: "When it uses its large tail fin, it picks up speed\nrapidly in the water. It is strong in spite of its\nsmall size."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊",
                ja: "Tackle",
                ko: "Tackle"
            },
            damage: 20,
            cost: [
                "Water"
            ]
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
