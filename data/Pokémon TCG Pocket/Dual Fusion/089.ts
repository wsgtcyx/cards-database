import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/089",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/089",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/089",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/089",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/089",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/089",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/089"
    },
    name: {
        en: "Nickit",
        fr: "Goupilou",
        es: "Nickit",
        "pt-br": "Nickit",
        "zh-tw": "偷兒狐",
        ja: "クスネ",
        ko: "훔처우",
        it: "Nickit",
        de: "Kleptifux"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Darkness"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Rear Kick",
                fr: "Ruade",
                es: "Patada Trasera",
                it: "Retrocalcio",
                de: "Rückwärtskick",
                "pt-br": "Chute Traseiro",
                "zh-tw": "後踢",
                ja: "Rear Kick",
                ko: "Rear Kick"
            },
            cost: [
                "Darkness"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains.",
        fr: "Il vit en subtilisant la nourriture des autres Pokémon. Grâce à ses coussinets moelleux, il ne fait aucun bruit quand il marche.",
        es: "Se sustenta con el alimento que roba a otros Pokémon. Las almohadillas de sus patas son tan blandas que no hace ningún ruido al caminar.",
        it: "Vive rubando il cibo trovato dagli altri Pokémon. I morbidi cuscinetti plantari rendono i suoi passi silenziosi.",
        de: "Es stiehlt Futter, das andere Pokémon gefunden haben. Dank der samtweichen Ballen an seinen Pfoten ist sein Gang lautlos.",
        "pt-br": "Com a ajuda das almofadas macias sob seus pés, saqueia sorrateiramente os estoques de comida de outros Pokémon. Sobrevive destes ganhos ilícitos.",
        "zh-tw": "靠搶奪其他寶可夢找到的食物為生。腳上長著軟乎乎的肉球，走路時不會發出絲毫聲響。",
        ja: "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains.",
        ko: "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains."
    }
};

export default card;
