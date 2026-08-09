import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/031",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/031",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/031"
    },
    name: {
        en: "Golduck",
        fr: "Akwakwak",
        es: "Golduck",
        it: "Golduck",
        de: "Entoron",
        "pt-br": "Golduck",
        "zh-tw": "哥達鴨",
        ko: "골덕",
        ja: "ゴルダック"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    dexId: [55],
    evolveFrom: {
        en: "Psyduck",
        fr: "Psykokwak",
        es: "Psyduck",
        it: "Psyduck",
        de: "Enton",
        "pt-br": "Psyduck",
        "zh-tw": "可達鴨",
        ko: "고라파덕",
        ja: "コダック"
    },
    stage: "Stage1",
    description: {
        en: "It swims grace­ fully along on the quiet, slow-moving rivers and lakes of which it is so fond.",
        fr: "Il nage avec une grande grâce dans les eaux des lacs ou des rivières calmes, qu'il apprécie tout particulièrement.",
        es: "Nada con elegancia por las tranquilas aguas de ríos y lagos, donde se siente como pez en el agua.",
        it: "Predilige i laghi e i corsi d'acqua dalla corrente placida. Quando nuota è molto aggraziato.",
        de: "Entoron mag stille, langsam fließende Flüsse und Seen. Es ist ein sehr anmutiger Schwimmer.",
        "pt-br": "Nada graciosamente por rios e lagos tranquilos e lentos, dos quais gosta muito.",
        "zh-tw": "喜歡水流平穩的\n河川和湖泊。\n泳姿相當地優雅。"
    },
    attacks: [
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                en: "Surf",
                fr: "Surf",
                es: "Surf",
                it: "Surf",
                de: "Surfer",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
