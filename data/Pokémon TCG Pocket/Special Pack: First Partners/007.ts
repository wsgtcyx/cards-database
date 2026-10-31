import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/007",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/007",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/007",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/007"
    },
    name: {
        en: "Treecko",
        fr: "Arcko",
        es: "Treecko",
        "pt-br": "Treecko",
        "zh-tw": "木守宮",
        ja: "キモリ",
        ko: "나무지기",
        it: "Treecko",
        de: "Geckarbor"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Pound",
                fr: "Écras'Face",
                es: "Destructor",
                it: "Botta",
                de: "Klaps",
                "pt-br": "Pancada",
                "zh-tw": "拍擊",
                ja: "はたく",
                ko: "Pound"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "Treecko has small hooks on the bottom of its feet that enable it to scale vertical walls. This Pokémon attacks by slamming foes with its thick tail.",
        fr: "Arcko est doté de petits crochets sous les pattes, ce qui lui permet de grimper aux murs. Ce Pokémon frappe en fouettant ses ennemis avec son épaisse queue.",
        es: "Treecko tiene unos ganchos pequeños en las plantas de los pies con los que puede escalar superficies verticales. Este Pokémon ataca dando un golpetazo con la cola.",
        it: "Treecko è dotato di piccoli uncini sulla pianta delle zampe che gli consentono di camminare su pareti verticali. Attacca frustando i suoi nemici con la coda grossa e forte.",
        de: "Mit den kleinen Haken unter seinen Füßen kann Treecko an Wänden hochklettern. Dieses Pokémon greift Feinde an, indem es mit seinem mächtigen Schweif zuschlägt.",
        "pt-br": "Treecko tem pequenos ganchos nas solas dos pés que permitem que escale paredes verticais. Este Pokémon ataca batendo em seus oponentes com sua cauda grossa.",
        "zh-tw": "牠腳底的小鉤子使其能在垂直的牆壁上攀爬，會用粗壯的尾巴摔打對手。",
        ja: "足の 裏の 小さな トゲを 引っ掛けて 垂直の カベを 登ることが できる。 太い 尻尾を たたきつけて 攻撃する。",
        ko: "Treecko has small hooks on the bottom of its feet that enable it to scale vertical walls. This Pokémon attacks by slamming foes with its thick tail."
    }
};

export default card;
