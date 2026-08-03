import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/081",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/081",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/081",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/081",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/081"
    },
    name: {
        en: "Anorith",
        fr: "Anorith",
        es: "Anorith",
        it: "Anorith",
        de: "Anorith",
        "pt-br": "Anorith",
        "zh-tw": "太古羽蟲",
        ko: "아노딥스",
        ja: "アノプス"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    dexId: [347],
    evolveFrom: {
        en: "Claw Fossil",
        fr: "Fossile Griffe",
        es: "Fósil Garra",
        it: "Fossilunghia",
        de: "Klauenfossil",
        "pt-br": "Fóssil Garra",
        "zh-tw": "爪子化石",
        ko: "발톱화석",
        ja: "ツメの化石"
    },
    stage: "Stage1",
    description: {
        en: "Anorith can swim swiftly by pulling its eight wings through the water like oars on a boat. This Pokémon is an ancestor of modern bug Pokémon.",
        fr: "Ce Pokémon peut nager très vite en agitant\nses huit ailes comme des rames de bateau.\nIl fait partie des ancêtres des Pokémon Insecte.",
        es: "Puede nadar rápidamente gracias a sus ocho\nalas que usa a modo de remo. Es uno de los\nantepasados de los Pokémon insecto.",
        it: "Nuota rapidamente utilizzando le sue otto ali\ncome fossero remi di una barca. È uno degli\nantenati dei Pokémon di tipo Coleottero.",
        de: "Anorith schwimmt sehr schnell, indem es seine\nacht Flügel wie die Ruder eines Bootes bewegt.\nEs ist einer der Vorfahren von Käfer-Pokémon.",
        "zh-tw": "會像船槳般划動８片\n翅膀在水中快速游動。\n是蟲寶可夢祖先的一種。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                "pt-br": "Talho",
                "zh-tw": "劈開"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
