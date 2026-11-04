import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/099/014ef5d4ca888710",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/099/014ef5d4ca888710",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/099/014ef5d4ca888710",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/099/014ef5d4ca888710",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/099/014ef5d4ca888710",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/099/014ef5d4ca888710",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/099/014ef5d4ca888710",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/099/014ef5d4ca888710",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/099/014ef5d4ca888710"
    },
    name: {
        en: "Marill",
        "fr": "Marill",
        "es": "Marill",
        "it": "Marill",
        "de": "Marill",
        "pt-br": "Marill",
        "zh-tw": "瑪力露",
        ja: "マリル",
        ko: "마릴",
    },
    illustrator: "Shibuzoh.",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "The fur on its body naturally repels water. It can\nstay dry even when it plays in the water.",
        "fr": "Sa fourrure est imperméable, si bien qu'il reste sec même quand il joue dans l'eau.",
        "es": "Tiene un pelaje que repele el agua, por lo que está seco incluso después de bañarse.",
        "it": "La pelliccia è idrorepellente. Così, rimane asciutto anche giocando nell'acqua.",
        "de": "Sein Fell ist von Natur aus wasserabweisend. Es bleibt trocken, auch wenn es im Wasser spielt.",
        "pt-br": "A sua pelagem repele água naturalmente. Pode brincar na água por horas sem se molhar.",
        "zh-tw": "全身的體毛有著能將水彈開的特性，所以就算碰到水也不會弄濕。",
        ja: "全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。",
        ko: "전신의 털은\n물을 튕겨 내는 성질을 지녀\n물을 끼얹어도 말라 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Charge",
                "es": "Placaje",
                "it": "Azione",
                "de": "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊",
                ja: "たいあたり",
                ko: "몸통박치기"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
