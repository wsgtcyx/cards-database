import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/133",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/133",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/133",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/133",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/133",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/133",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/133"
    },
    name: {
        en: "Ambipom",
        fr: "Capidextre",
        es: "Ambipom",
        it: "Ambipom",
        de: "Ambidiffel",
        "pt-br": "Ambipom",
        "zh-tw": "雙尾怪手",
        ko: "겟핸보숭",
        ja: "エテボース"
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [424],
    evolveFrom: {
        en: "Aipom",
        fr: "Capumain",
        es: "Aipom",
        it: "Aipom",
        de: "Griffel",
        "pt-br": "Aipom",
        "zh-tw": "長尾怪手",
        ko: "에이팜",
        ja: "エイパム"
    },
    stage: "Stage1",
    description: {
        en: "Split into two, the tails are so adept at handling and doing things, AMBIPOM rarely uses its hands.",
        "fr": "Ses queues jumelles sont si agiles et si efficaces que Capidextre ne se sert que très rarement de ses bras.",
        es: "Tiene dos colas muy útiles y hábiles para manejar cosas, así que rara vez utiliza las manos.",
        it: "Con le sue due agili code riesce a fare di tutto, perciò usa le mani solo raramente.",
        "de": "Sein Schweif hat sich in zwei gespalten. Es kann so geschickt mit diesen Schweifen umgehen, dass es seine Hände nur noch selten gebraucht.",
        "pt-br": "Divididas em duas, as caudas estão tão acostumadas a manipular e fazer coisas que Ambipom raramente usa as mãos.",
        "zh-tw": "分叉成2根的尾巴非常靈活，\n能夠完成各式各樣的事情，\n因此變得幾乎不使用雙手了。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Smack",
                fr: "Claque",
                es: "Palmetazo",
                it: "Schiaffo",
                de: "Klatscher",
                "pt-br": "Estalo",
                "zh-tw": "掌擊"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
