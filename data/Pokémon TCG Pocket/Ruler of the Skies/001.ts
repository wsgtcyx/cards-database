import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/001",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/001"
    },
    name: {
        en: "Wurmple",
        fr: "Chenipotte",
        es: "Wurmple",
        it: "Wurmple",
        de: "Waumpel",
        "pt-br": "Wurmple",
        "zh-tw": "刺尾蟲",
        ko: "개무소",
        ja: "ケムッソ"
    },
    illustrator: "ryoma uratsuka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [265],
    stage: "Basic",
    description: {
        en: "It lives among the tall grass and in forests. It repels attacks by raising up the spikes on its rear.",
        fr: "Il habite les forêts et les hautes herbes. Attaqué,\nil riposte avec les piquants de son postérieur.",
        es: "Vive en bosques y zonas de hierba alta. Si le atacan,\nse defiende con las púas venenosas de su cola.",
        it: "Vive nelle foreste e tra l’erba alta. Se è attaccato,\nusa gli aculei velenosi che ha sulla parte posteriore.",
        de: "Es haust in Wäldern und auf Wiesen. Bei Angriffen\nwehrt es sich mit den Giftstacheln auf seinem\nHinterteil."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Gnaw",
                fr: "Ronge",
                es: "Roer",
                it: "Rosicchiamento",
                de: "Nagen",
                "pt-br": "Roída",
                "zh-tw": "咬"
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
