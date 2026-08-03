import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/036",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/036",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/036",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/036",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/036",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/036",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/036"
    },
    name: {
        en: "Paldean Tauros",
        fr: "Tauros de Paldea",
        es: "Tauros de Paldea",
        it: "Tauros di Paldea",
        de: "Paldea-Tauros",
        "pt-br": "Tauros de Paldea",
        "zh-tw": "帕底亞 肯泰羅",
        ko: "팔데아 켄타로스",
        ja: "パルデア ケンタロス"
    },
    illustrator: "Oswaldo KATO",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [128],
    stage: "Basic",
    description: {
        en: "It swims by jetting water from its horns. The most notable characteristic of the Aqua Breed is its high body fat, which allows it to float easily.",
        fr: "Il nage en projetant de l'eau de ses cornes. La caractéristique la plus remarquable de l’Aqua Breed est sa graisse corporelle élevée, qui lui permet de flotter facilement.",
        es: "Nada lanzando chorros de agua desde sus cuernos. La característica más notable de Aqua Breed es su alto contenido de grasa corporal, lo que le permite flotar con facilidad.",
        it: "Nuota lanciando acqua dalle corna. La caratteristica più notevole dell'Aqua Breed è il suo elevato grasso corporeo, che gli consente di galleggiare facilmente.",
        de: "Es schwimmt, indem es Wasser aus seinen Hörnern spritzt. Das bemerkenswerteste Merkmal der Aqua-Rasse ist ihr hoher Körperfettanteil, der ihr ein leichtes Schwimmen ermöglicht.",
        "pt-br": "Ele nada jorrando água de seus chifres. A característica mais notável da Raça Aqua é o alto teor de gordura corporal, o que lhe permite flutuar com facilidade.",
        "zh-tw": "它透過從角噴射水來游泳。水族品種最顯著的特徵是其高體脂，這使得它能夠輕鬆漂浮。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Smash Kick",
                fr: "Coud'Pattes",
                es: "Patada Destrucción",
                it: "Calcio Esplosivo",
                de: "Schmetterkick",
                "pt-br": "Chute Poderoso",
                "zh-tw": "踢飛"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
