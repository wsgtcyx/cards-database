import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/342",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/342",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/342",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/342",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/342",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/342",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/342"
    },
    name: {
        en: "Meltan",
        fr: "Meltan",
        es: "Meltan",
        it: "Meltan",
        de: "Meltan",
        "pt-br": "Meltan",
        "zh-tw": "美錄坦",
        ja: "メルタン",
        ko: "멜탄"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Metal"
    ],
    description: {
        en: "It dissolves and eats metal. Circulating liquid\nmetal within its body is how it generates energy.",
        fr: "Il se nourrit du métal qu'il fait fondre, et produit de l'énergie en faisant circuler du métal liquide dans son corps.",
        es: "Funde metales para ingerirlos. Una vez licuados, los hace circular por el interior de su cuerpo para generar energía.",
        it: "Fonde il metallo per cibarsene, e lo fa circolare nel suo corpo per produrre energia.",
        de: "Es schmilzt Metall ein und frisst es. In seinem Körper wandelt es das flüssig gewordene Metall in Energie um.",
        "pt-br": "Dissolve e come metal. Este Pokémon gera energia quando metal líquido corre pelo seu corpo.",
        "zh-tw": "會溶解金屬然後吃掉。透過讓液體金屬在體內循環來製造能量。",
        ja: "It dissolves and eats metal. Circulating liquid\nmetal within its body is how it generates energy.",
        ko: "It dissolves and eats metal. Circulating liquid\nmetal within its body is how it generates energy."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Beam",
                fr: "Rayon",
                es: "Transmisión",
                it: "Raggio",
                de: "Strahl",
                "pt-br": "Feixe",
                "zh-tw": "光束",
                ja: "Beam",
                ko: "Beam"
            },
            damage: 20,
            cost: [
                "Metal"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
