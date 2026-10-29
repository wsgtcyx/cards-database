import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/096",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/096",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/096",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/096",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/096",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/096",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/096"
    },
    name: {
        en: "Meltan",
        fr: "Meltan",
        es: "Meltan",
        "pt-br": "Meltan",
        "zh-tw": "美錄坦",
        ja: "メルタン",
        ko: "멜탄",
        it: "Meltan",
        de: "Meltan"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Metal"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞",
                ja: "Ram",
                ko: "Ram"
            },
            cost: [
                "Colorless",
                "Metal"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy.",
        fr: "Il se nourrit du métal qu’il fait fondre, et produit de l’énergie en faisant circuler du métal liquide dans son corps.",
        es: "Funde metales para ingerirlos. Una vez licuados, los hace circular por el interior de su cuerpo para generar energía.",
        it: "Fonde il metallo per cibarsene, e lo fa circolare nel suo corpo per produrre energia.",
        de: "Es schmilzt Metall ein und frisst es. In seinem Körper wandelt es das flüssig gewordene Metall in Energie um.",
        "pt-br": "Dissolve e come metal. Este Pokémon gera energia quando metal líquido corre pelo seu corpo.",
        "zh-tw": "會溶解金屬後吃掉，讓液態金屬在體內循環來製造能量。",
        ja: "It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy.",
        ko: "It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy."
    }
};

export default card;
