import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/205",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/205",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/205",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/205",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/205",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/205",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/205",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/205",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/205"
    },
    name: {
        en: "Braviary",
        "fr": "Gueriaigle",
        "es": "Braviary",
        "it": "Braviary",
        "de": "Washakwil",
        "pt-br": "Braviary",
        "zh-tw": "勇士雄鷹",
        ja: "ウォーグル",
        ko: "워글",
    },
    illustrator: "chibi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    evolveFrom: {
        en: "Rufflet",
        "fr": "Furaiglon",
        "es": "Rufflet",
        "it": "Rufflet",
        "de": "Geronimatz",
        "pt-br": "Rufflet",
        "zh-tw": "毛頭小鷹",
        ja: "ワシボン",
        ko: "수리둥보",
    },
    description: {
        en: "For the sake of its friends, this brave warrior of\nthe sky will not stop battling, even if injured.",
        "fr": "Pour le bien de ses amis, ce brave guerrier de\nle ciel n'arrêtera pas de se battre, même s'il est blessé.",
        "es": "Por el bien de sus amigos, este valiente guerrero de\nEl cielo no dejará de luchar, aunque esté herido.",
        "it": "Per il bene dei suoi amici, questo coraggioso guerriero\nil cielo non smetterà di lottare, anche se ferito.",
        "de": "Zum Wohle seiner Freunde, dieser tapfere Krieger\nDer Himmel wird nicht aufhören zu kämpfen, selbst wenn er verletzt ist.",
        "pt-br": "Pelo bem dos seus amigos, este bravo guerreiro de\no céu não vai parar de lutar, mesmo ferido.",
        "zh-tw": "為了朋友，這位勇敢的戰士\n天空不會停止戰鬥，哪怕受傷。",
        ja: "仲間の ためなら どれだけ 傷つこうとも 戦いを やめない 勇敢な 大空の 戦士。",
        ko: "동료를 위해서라면 아무리\n상처를 입더라도 싸움을 포기하지 않는\n드넓은 하늘의 용감한 전사."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減",
                ja: "きりさく",
                ko: "베어가르기"
            },
            damage: 80,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
