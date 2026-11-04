import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/100/e9eb0ca016f7f6e9",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/100/e9eb0ca016f7f6e9",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/100/e9eb0ca016f7f6e9",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/100/e9eb0ca016f7f6e9",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/100/e9eb0ca016f7f6e9",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/100/e9eb0ca016f7f6e9",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/100/e9eb0ca016f7f6e9",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/100/e9eb0ca016f7f6e9",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/100/e9eb0ca016f7f6e9"
    },
    name: {
        en: "Weavile",
        "fr": "Dimoret",
        "es": "Weavile",
        "it": "Weavile",
        "de": "Snibunna",
        "pt-br": "Weavile",
        "zh-tw": "瑪狃拉",
        ja: "マニューラ",
        ko: "포푸니라",
    },
    illustrator: "Satoshi Shirai",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    evolveFrom: {
        en: "Sneasel",
        "fr": "Farfuret",
        "es": "Sneasel",
        "it": "Sneasel",
        "de": "Sniebel",
        "pt-br": "Sneasel",
        "zh-tw": "狃拉",
        ja: "ニューラ",
        ko: "포푸니"
    },
    description: {
        en: "Evolution made it even more devious.\nIt communicates by clawing signs in boulders.",
        "fr": "L’évolution l’a rendu encore plus retors. Il communique en gravant des marques dans les pierres avec ses griffes.",
        "es": "Su carácter se volvió aún más vil con la evolución. Se comunica marcando rocas con sus garras.",
        "it": "L'evoluzione lo ha reso ancor più subdolo. Comunica incidendo segni sui massi con i suoi artigli.",
        "de": "Snibunna wurde durch seine Entwicklung noch verschlagener. Es kommuniziert durch in Felsen gekratzte Zeichen.",
        "pt-br": "A evolução o tornou ainda mais malandro. Ele se comunica ao riscar sinais nas rochas.",
        "zh-tw": "進化後變得更加狡猾。會用爪子在石頭上留下記號和夥伴交流。",
        ja: "進化して さらに ずる賢くなり ツメで 石に サインをつけて コミュニケーションを はかっている。",
        ko: "진화한 후 더욱 약삭빨라져\n발톱으로 돌에 사인을 새겨\n커뮤니케이션을 시도한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Tranche",
                "es": "Cuchillada",
                "it": "Lacerazione",
                "de": "Schlitzer",
                "pt-br": "Talho",
                "zh-tw": "劈開",
                ja: "きりさく",
                ko: "베어가르기"
            },
            damage: 50,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 0
};
export default card;
