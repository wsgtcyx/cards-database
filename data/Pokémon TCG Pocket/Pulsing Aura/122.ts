import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/122",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/122",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/122",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/122",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/122",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/122",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/122"
    },
    name: {
        en: "Meltan",
        fr: "Meltan",
        es: "Meltan",
        it: "Meltan",
        de: "Meltan",
        "pt-br": "Meltan",
        "zh-tw": "美錄坦",
        ko: "멜탄",
        ja: "メルタン"
    },
    illustrator: "Nobuhiro Imagawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [808],
    stage: "Basic",
    description: {
        en: "They live as a group, but when the time comes, one strong Meltan will absorb all the others and evolve.",
        fr: "Les Meltan vivent en groupe. Quand l’heure\nde l’évolution a sonné, le plus fort d’entre eux\nabsorbe ses camarades pour changer de forme.",
        es: "Viven en grupos, pero, llegado el momento,\nel ejemplar más fuerte absorbe a sus camaradas\ny evoluciona.",
        it: "Vive in gruppo, ma quando giunge il momento\nl’esemplare più forte ingloba i compagni\ne si evolve.",
        de: "Sie leben in Gruppen. Doch wenn die Zeit reif\nist, nimmt ein starkes Meltan seine Artgenossen\nin sich auf und entwickelt sich.",
        "pt-br": "Eles vivem como um grupo, mas quando chegar a hora, um Meltan forte absorverá todos os outros e evoluirá.",
        "zh-tw": "美錄坦們雖然聚在一起生活，\n但當時機到來，會由最強的那１隻\n吸收其他的夥伴來進化。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Stampede",
                fr: "Ruée",
                es: "Estampida",
                it: "Fuggi Fuggi",
                de: "Zertrampeln",
                "pt-br": "Estouro",
                "zh-tw": "踩"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
