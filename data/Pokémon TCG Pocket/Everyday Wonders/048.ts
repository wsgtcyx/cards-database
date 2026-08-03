import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/048",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/048",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/048",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/048",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/048",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/048"
    },
    name: {
        en: "Goomy",
        fr: "Mucuscule",
        es: "Goomy",
        it: "Goomy",
        de: "Viscora",
        "pt-br": "Goomy",
        "zh-tw": "黏黏寶",
        ko: "미끄메라",
        ja: "ヌメラ"
    },
    illustrator: "USGMEN",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Dragon"],
    dexId: [704],
    stage: "Basic",
    description: {
        en: "Goomy’s horns are excellent sensory organs that cover all five of Goomy’s senses. Goomy picks up on danger from the movement of the air.",
        fr: "Les cornes de Mucuscule sont d'excellents organes sensoriels qui couvrent les cinq sens de Mucuscule. Mucuscule détecte le danger lié au mouvement de l'air.",
        es: "Los cuernos de Goomy son excelentes órganos sensoriales que cubren los cinco sentidos de Goomy. Goomy detecta el peligro del movimiento del aire.",
        it: "Le corna di Goomy sono eccellenti organi sensoriali che coprono tutti e cinque i sensi di Goomy. Goomy rileva il pericolo derivante dal movimento dell'aria.",
        de: "Die Hörner von Viscora sind ausgezeichnete Sinnesorgane, die alle fünf Sinne von Viscora abdecken. Viscora erkennt Gefahren durch Luftbewegungen.",
        "pt-br": "Os chifres de Goomy são excelentes órgãos sensoriais que cobrem todos os cinco sentidos de Goomy. Goomy detecta o perigo do movimento do ar.",
        "zh-tw": "黏黏寶的角是優秀的感覺器官，涵蓋了黏黏寶的所有五種感官。 黏黏寶 從空氣的流動中察覺到危險。"
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
            damage: 20
        }
    ],
    retreat: 1
};

export default card;
