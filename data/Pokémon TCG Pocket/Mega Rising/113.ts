import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/113",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/113",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/113",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/113",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/113",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/113",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/113"
    },
    name: {
        en: "Gothorita",
        "fr": "Mesmérella",
        "es": "Gothorita",
        "it": "Gothorita",
        "de": "Hypnomorba",
        "pt-br": "Gothorita",
        "zh-tw": "哥德小童",
    },
    illustrator: "sowsow",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Gothita",
        "fr": "Scrutella",
        "es": "Gothita",
        "it": "Gothita",
        "de": "Mollimorba",
        "pt-br": "Gothita",
        "zh-tw": "哥德寶寶",
    },
    description: {
        en: "Using its psychic power, it arranges pebbles to\nform the shapes of constellations. Some people\nbelieve this Pokémon came from outer space.",
        "fr": "Utilisant son pouvoir psychique, il dispose des cailloux pour\nformer les formes des constellations. Certaines personnes\nJe crois que ce Pokémon vient de l'espace.",
        "es": "Utilizando su poder psíquico, dispone piedras para\nFormar las formas de las constelaciones. algunas personas\nCreo que este Pokémon vino del espacio exterior.",
        "it": "Usando il suo potere psichico, dispone i sassolini\nformano le forme delle costellazioni. Alcune persone\ncredono che questo Pokémon provenga dallo spazio.",
        "de": "Mit seiner psychischen Kraft ordnet es Kieselsteine an\nbilden die Formen von Sternbildern. Einige Leute\nIch glaube, dass dieses Pokémon aus dem Weltraum stammt.",
        "pt-br": "Usando seu poder psíquico, ele organiza pedras para\nformar as formas das constelações. Algumas pessoas\nacredito que este Pokémon veio do espaço sideral.",
        "zh-tw": "它利用其精神力量排列鵝卵石\n形成星座的形狀。有些人\n相信這只神奇寶貝來自外太空。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slap",
                "fr": "Gifler",
                "es": "Bofetada",
                "it": "Schiaffo",
                "de": "Schlagen",
                "pt-br": "Tapa",
                "zh-tw": "拍擊"
            },
            damage: 30,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
