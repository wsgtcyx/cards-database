import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/012",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/012"
    },
    name: {
        en: "Frosmoth",
        fr: "Beldeneige",
        es: "Frosmoth",
        it: "Frosmoth",
        de: "Mottineva",
        "pt-br": "Frosmoth",
        "zh-tw": "雪絨蛾",
        ko: "모스노우",
        ja: "モスノウ"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [873],
    evolveFrom: {
        en: "Snom",
        fr: "Frissonille",
        es: "Snom",
        it: "Snom",
        de: "Snomnom",
        "pt-br": "Snom",
        "zh-tw": "雪吞蟲",
        ko: "누니머기",
        ja: "ユキハミ"
    },
    stage: "Stage1",
    description: {
        en: "It causes blizzards as it flies around with its huge, chill-emanating wings. Clean meltwater is its favorite thing to drink.",
        fr: "Il provoque des blizzards lorsqu'il vole avec ses énormes ailes glaciales. L’eau de fonte propre est sa boisson préférée.",
        es: "Provoca tormentas de nieve mientras vuela con sus enormes alas que emanan frío. El agua limpia de deshielo es su bebida favorita.",
        it: "Provoca bufere di neve mentre vola in giro con le sue enormi ali che emanano gelo. L'acqua di disgelo pulita è la sua cosa preferita da bere.",
        de: "Es verursacht Schneestürme, wenn es mit seinen riesigen, Kälte ausstrahlenden Flügeln umherfliegt. Sauberes Schmelzwasser ist sein Lieblingsgetränk.",
        "pt-br": "Ele causa nevascas enquanto voa com suas enormes asas que emanam frio. Água derretida limpa é sua coisa favorita para beber.",
        "zh-tw": "當它用巨大的、散發著寒冷的翅膀飛來飛去時，會引起暴風雪。乾淨的融水是它最喜歡喝的東西。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Aurora Beam",
                fr: "Onde Boréale",
                es: "Rayo Aurora",
                it: "Raggiaurora",
                de: "Aurorastrahl",
                "pt-br": "Raio Aurora",
                "zh-tw": "極光束"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
