import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/008",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/008",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/008",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/008",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/008"
    },
    name: {
        en: "Dolliv",
        fr: "Olivado",
        es: "Dolliv",
        it: "Dolliv",
        de: "Olivinio",
        "pt-br": "Dolliv",
        "zh-tw": "奧利紐",
        pt: "Dolliv",
        'es-mx': "Dolliv"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [929],
    evolveFrom: {
        en: "Smoliv",
        fr: "Olivini",
        es: "Smoliv",
        it: "Smoliv",
        de: "Olini",
        "pt-br": "Smoliv",
        "zh-tw": "迷你芙",
        pt: "Smoliv",
        'es-mx': "Smoliv"
    },
    description: {
        en: "Dolliv shares its tasty, fresh-scented oil with others. This species has coexisted with humans since times long gone.",
        "fr": "Olivado partage son huile savoureuse et fraîche avec d’autres. Cette espèce coexiste avec les humains depuis des temps anciens.",
        "es": "Dolliv comparte su aceite sabroso y de fresco aroma con los demás. Esta especie ha coexistido con los humanos desde tiempos remotos.",
        "it": "Dolliv condivide con gli altri il suo olio gustoso e profumato. Questa specie convive con l'uomo da tempi ormai lontani.",
        "de": "Olivinio teilt sein leckeres, frisch duftendes Öl mit anderen. Diese Art lebt seit langem mit Menschen zusammen.",
        "pt-br": "Dolliv compartilha seu óleo saboroso e com aroma fresco com outras pessoas. Esta espécie coexiste com os humanos desde tempos idos.",
        "zh-tw": "奧利紐 與他人分享其美味、清新的油。這個物種自古以來就與人類共存。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Seed Bomb",
                fr: "Canon Graine",
                es: "Bomba Germen",
                it: "Semebomba",
                de: "Samenbomben",
                "pt-br": "Bomba de sementes",
                "zh-tw": "種子炸彈",
                'es-mx': "Bomba Semilla",
                pt: "Bomba de Sementes"
            },
            damage: "40",
            cost: ["Grass", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
