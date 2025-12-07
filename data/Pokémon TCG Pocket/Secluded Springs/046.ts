import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Dwebble",
        "fr": "Bavarder",
        "es": "Dwebble",
        "it": "Dwebble",
        "de": "Dwebble",
        "pt-br": "Dwebble",
        "zh-tw": "德韋布爾"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "It makes a hole in a suitable rock. If that rock\nbreaks, the Pokémon remains agitated until it\nlocates a replacement.",
        "fr": "Il fait un trou dans une roche appropriée. Si ce rocher\nse brise, le Pokémon reste agité jusqu'à ce qu'il\ntrouve un remplaçant.",
        "es": "Hace un agujero en una roca adecuada. si esa roca\nse rompe, el Pokémon permanece agitado hasta que\nlocaliza un reemplazo.",
        "it": "Fa un buco in una roccia adatta. Se quella roccia\nsi rompe, il Pokémon rimane agitato finché non si rompe\nindividua un sostituto.",
        "de": "Es macht ein Loch in einen geeigneten Stein. Wenn dieser Stein\nbricht, bleibt das Pokémon aufgeregt, bis es\nfindet einen Ersatz.",
        "pt-br": "Faz um buraco numa rocha adequada. Se aquela pedra\nquebra, o Pokémon permanece agitado até\nlocaliza um substituto.",
        "zh-tw": "它在合適的岩石上打一個洞。如果那塊石頭\n打破後，神奇寶貝會一直焦躁不安，直到它\n找到替代品。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sand Spray",
                "fr": "Jet de sable",
                "es": "Aerosol de arena",
                "it": "Spruzzo di sabbia",
                "de": "Sandspray",
                "pt-br": "Spray de areia",
                "zh-tw": "噴砂"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
