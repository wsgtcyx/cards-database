import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/061",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/061",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/061",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/061",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/061",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/061",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/061",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/061"
    },
    name: {
        en: "Wobbuffet",
        fr: "Qulbutoké",
        es: "Wobbuffet",
        "pt-br": "Wobbuffet",
        "zh-tw": "果然翁",
        ja: "ソーナンス",
        ko: "마자용",
        it: "Wobbuffet",
        de: "Woingenau"
    },
    illustrator: "match",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 90,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Headbutt Bounce",
                fr: "Culbute Surprise",
                es: "Bote Cabezazo",
                it: "Rimbalzo Bottintesta",
                de: "Abrupter Kopfstoß",
                "pt-br": "Cabeçada Ricochete",
                "zh-tw": "魯莽頭擊",
                ja: "とびだしヘッド",
                ko: "Headbutt Bounce"
            },
            cost: [
                "Psychic"
            ],
            damage: 30
        }
    ],
    abilities: [],
    description: {
        en: "It hates light and shock. If attacked, it inflates its body to pump up its counterstrike.",
        fr: "Il déteste la lumière et les chocs. S'il est attaqué, il se gonfle pour riposter violemment.",
        es: "Odia la luz y las sacudidas. Si le atacan, infla su cuerpo para contraatacar con más ímpetu.",
        it: "Odia la luce e gli shock. Se è attaccato, gonfia il corpo per preparare il contrattacco.",
        de: "Es hasst Licht und Schocks. Wird es angegriffen, pumpt es sich auf, um einen Gegenschlag vorzubereiten.",
        "pt-br": "Odeia luz e correntes elétricas. Quando é atacado, infla o corpo para intensificar seu contragolpe.",
        "zh-tw": "討厭光和衝擊。受到攻擊時身體會膨脹，反擊也會因此變強。",
        ja: "光や ショックを 嫌う。 攻撃されると 体が ふくらみ 反撃が 強力に なる。",
        ko: "It hates light and shock. If attacked, it inflates its body to pump up its counterstrike."
    }
};

export default card;
