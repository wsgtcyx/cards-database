import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Ursaring",
        "fr": "Ursaring",
        "es": "Ursaring",
        "it": "Ursaring",
        "de": "Ursaring",
        "pt-br": "Ursaring",
        "zh-tw": "圈圈熊",
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    evolveFrom: {
        en: "Teddiursa",
        "fr": "Teddiursa",
        "es": "Teddiursa",
        "it": "Teddiursa",
        "de": "Teddiursa",
        "pt-br": "Teddiursa",
        "zh-tw": "熊寶寶",
    },
    description: {
        en: "It usually wears a hardened expression, but when\nit's licking up honey—which it loves—the joy it\nfeels will cause it to break into a wide grin.",
        "fr": "Il a généralement une expression durcie, mais quand\nil lèche du miel - ce qu'il adore - la joie qu'il\nse sent le fera se transformer en un large sourire.",
        "es": "Suele tener una expresión endurecida, pero cuando\nestá lamiendo miel, que le encanta, la alegría que\nsiente hará que se rompa en una amplia sonrisa.",
        "it": "Di solito ha un'espressione indurita, ma quando\nè leccare il miele, che ama, la gioia\nsente lo farà scoppiare in un ampio sorriso.",
        "de": "Normalerweise trägt es einen verhärteten Gesichtsausdruck, aber wann\nEs ist das Lecken von Honig – was es liebt – die Freude daran\nfühlt, wird ein breites Grinsen auslösen.",
        "pt-br": "Geralmente usa uma expressão endurecida, mas quando\nestá lambendo mel - que adora - a alegria que\nsente fará com que ele abra um amplo sorriso.",
        "zh-tw": "平時表情都比較冷酷，但當\n它正在舔蜜——它所愛的——它的快樂\n感覺會讓它咧開嘴笑。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Swing Around",
                "fr": "Se balancer",
                "es": "Girar alrededor",
                "it": "Giratevi intorno",
                "de": "Schwingen Sie herum",
                "pt-br": "Balançar",
                "zh-tw": "左右搖擺"
            },
            damage: 60,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 20 more damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 20 daños más por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 20 danni in più per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 20 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa mais 20 danos para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。此攻擊對每個頭造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh"]
};
export default card;
