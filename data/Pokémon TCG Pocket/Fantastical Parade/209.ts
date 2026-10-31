import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/209",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/209",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/209",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/209",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/209",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/209",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/209",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/209",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/209"
    },
    name: {
        en: "Seadra",
        "fr": "Hypocéan",
        "es": "Seadra",
        "it": "Seadra",
        "de": "Seemon",
        "pt-br": "Seadra",
        "zh-tw": "海刺龍",
        ja: "シードラ",
        ko: "시드라"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Horsea",
        "fr": "Hypotrempe",
        "es": "Horsea",
        "it": "Horsea",
        "de": "Seeper",
        "pt-br": "Horsea",
        "zh-tw": "墨海馬",
        ja: "タッツー",
        ko: "쏘드라"
    },
    description: {
        en: "It's the males that raise the offspring. While\nSeadra are raising young, the spines on their\nbacks secrete thicker and stronger poison.",
        "fr": "Ce sont les mâles qui élèvent la progéniture. Tandis que\nSeadra élève des petits, les épines sur leurs\nle dos sécrète un poison plus épais et plus fort.",
        "es": "Son los machos los que crían a la descendencia. mientras\nSeadra está criando crías, las espinas en sus\nLa espalda secreta un veneno más espeso y fuerte.",
        "it": "Sono i maschi che allevano la prole. Mentre\nI Seadra stanno crescendo piccoli, con le spine sulle loro\ni dorsi secernono un veleno più denso e più forte.",
        "de": "Es sind die Männchen, die den Nachwuchs großziehen. Während\nSeadra ziehen junge Tiere mit Stacheln auf\nRücken scheiden dickeres und stärkeres Gift aus.",
        "pt-br": "São os machos que criam a prole. Enquanto\nSeadra está criando jovens, os espinhos em seus\ncostas secretam um veneno mais espesso e mais forte.",
        "zh-tw": "養育後代的是雄性。同時\nSeadra 正在養育幼崽，它們身上的刺\n背部分泌出更濃烈的毒液。",
        ja: "オスが 子どもを 育てる。 子育て中は 背中の トゲの 毒素が 強く 濃くなるのだ。",
        ko: "수컷이 새끼를 기른다.\n새끼를 기르는 동안 등에 난\n가시의 독소는 강해지고 짙어진다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Razor Fin",
                "fr": "Aileron de rasoir",
                "es": "Aleta de afeitar",
                "it": "Pinna di rasoio",
                "de": "Rasiermesserflosse",
                "pt-br": "Barbatana Navalha",
                "zh-tw": "刀鰭",
                ja: "ひれカッター",
                ko: "지느러미 커터"
            },
            damage: 50,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
