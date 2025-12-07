import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Sandile",
        "fr": "Sandile",
        "es": "sandil",
        "it": "Sandile",
        "de": "Sandile",
        "pt-br": "Sandália",
        "zh-tw": "黑眼鱷",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "They live hidden under hot desert sands in order\nto keep their body temperature from dropping.",
        "fr": "Ils vivent cachés sous les sables chauds du désert afin\npour empêcher leur température corporelle de baisser.",
        "es": "Viven escondidos bajo las cálidas arenas del desierto para poder\npara evitar que su temperatura corporal baje.",
        "it": "Vivono nascosti sotto le calde sabbie del deserto in ordine\nper evitare che la temperatura corporea scenda.",
        "de": "Sie leben der Reihe nach versteckt unter heißem Wüstensand\num zu verhindern, dass ihre Körpertemperatur sinkt.",
        "pt-br": "Eles vivem escondidos sob as areias quentes do deserto para\npara evitar que a temperatura corporal caia.",
        "zh-tw": "它們隱藏在炎熱的沙漠之下，秩序井然\n以防止他們的體溫下降。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Gnaw",
                "fr": "Ronger",
                "es": "Roer",
                "it": "Rosicchiare",
                "de": "Nagen",
                "pt-br": "Roer",
                "zh-tw": "啃"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
