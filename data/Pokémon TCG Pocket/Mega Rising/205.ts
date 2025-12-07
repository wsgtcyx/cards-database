import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Braviary",
        "fr": "Braviaire",
        "es": "braviario",
        "it": "Braviario",
        "de": "Braviery",
        "pt-br": "Braviário",
        "zh-tw": "勇敢者"
    },
    illustrator: "chibi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    evolveFrom: {
        en: "Rufflet",
        "fr": "Volant",
        "es": "Volante",
        "it": "Volant",
        "de": "Rüschen",
        "pt-br": "Babado",
        "zh-tw": "魯夫萊特"
    },
    description: {
        en: "For the sake of its friends, this brave warrior of\nthe sky will not stop battling, even if injured.",
        "fr": "Pour le bien de ses amis, ce brave guerrier de\nle ciel n'arrêtera pas de se battre, même s'il est blessé.",
        "es": "Por el bien de sus amigos, este valiente guerrero de\nEl cielo no dejará de luchar, aunque esté herido.",
        "it": "Per il bene dei suoi amici, questo coraggioso guerriero\nil cielo non smetterà di lottare, anche se ferito.",
        "de": "Zum Wohle seiner Freunde, dieser tapfere Krieger\nDer Himmel wird nicht aufhören zu kämpfen, selbst wenn er verletzt ist.",
        "pt-br": "Pelo bem dos seus amigos, este bravo guerreiro de\no céu não vai parar de lutar, mesmo ferido.",
        "zh-tw": "為了朋友，這位勇敢的戰士\n天空不會停止戰鬥，哪怕受傷。"
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
                "zh-tw": "削減"
            },
            damage: 80,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
