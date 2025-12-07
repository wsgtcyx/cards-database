import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Ursaring",
        "fr": "Ursaring",
        "es": "Ursaring",
        "it": "Ursaring",
        "de": "Ursaring",
        "pt-br": "Ursaring",
        "zh-tw": "烏爾薩林"
    },
    illustrator: "Uta",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Colorless"],
    evolveFrom: {
        en: "Teddiursa",
        "fr": "Teddiursa",
        "es": "Teddiursa",
        "it": "Teddiursa",
        "de": "Teddiursa",
        "pt-br": "Teddiursa",
        "zh-tw": "特迪烏薩"
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
                en: "Claw Slash",
                "fr": "Coup de griffe",
                "es": "Tajo de garra",
                "it": "Colpo d'artiglio",
                "de": "Klauenhieb",
                "pt-br": "Corte de Garra",
                "zh-tw": "利爪斬"
            },
            damage: 110,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
