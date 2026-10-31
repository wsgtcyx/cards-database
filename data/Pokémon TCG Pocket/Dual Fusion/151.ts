import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/151",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/151",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/151",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/151",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/151",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/151",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/151",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/151",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/151"
    },
    name: {
        en: "Bidoof",
        fr: "Keunotor",
        es: "Bidoof",
        "pt-br": "Bidoof",
        "zh-tw": "大牙狸",
        ja: "ビッパ",
        ko: "비버니",
        it: "Bidoof",
        de: "Bidiza"
    },
    illustrator: "TOMATO MARKET",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 60,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Gnaw",
                fr: "Ronge",
                es: "Roer",
                it: "Rosicchiamento",
                de: "Nagen",
                "pt-br": "Roída",
                "zh-tw": "咬",
                ja: "かじる",
                ko: "갉기"
            },
            cost: [
                "Colorless"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "With nerves of steel, nothing can perturb it. It is more agile and active than it appears.",
        fr: "Rien ne peut perturber ses nerfs d’acier. Il est plus agile et énergique qu’il n’y paraît.",
        es: "Tiene nervios de acero y nada puede perturbarlo. Es más ágil y activo de lo que aparenta.",
        it: "Ha i nervi d’acciaio e niente può turbarlo. È più agile e attivo di quanto sembri.",
        de: "Es hat Nerven wie Drahtseile, nichts kann es erschüttern. Es ist agiler und aktiver, als es scheint.",
        "pt-br": "Com nervos de aço, nada pode perturbá-lo. É mais ágil e ativo do que parece.",
        "zh-tw": "遇到任何事都不慌不忙，神經很大條的傢伙。能做出與外表不相稱的靈敏動作。",
        ja: "なにごとにも 動じない 図太い 神経の 持ち主。 見かけの 割には 機敏に 活動する。",
        ko: "어떤 것에도 동요하지 않는\n대담한 신경의 소유자다.\n보기보다는 기민하게 활동한다."
    }
};

export default card;
