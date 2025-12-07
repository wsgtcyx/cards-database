import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Gothorita",
        "fr": "Gothorite",
        "es": "gothorita",
        "it": "Gothorita",
        "de": "Gothorita",
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
        "fr": "Gothita",
        "es": "gotita",
        "it": "Gothita",
        "de": "Gothita",
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
