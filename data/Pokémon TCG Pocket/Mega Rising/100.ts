import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Mismagius",
        "fr": "Mismage",
        "es": "mismagio",
        "it": "Mismagio",
        "de": "Mismagius",
        "pt-br": "Mismágio",
        "zh-tw": "夢妖魔",
    },
    illustrator: "NC Empire",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    evolveFrom: {
        en: "Misdreavus",
        "fr": "Misdreavus",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Misdreavus",
        "pt-br": "Misdreavus",
        "zh-tw": "誤判"
    },
    description: {
        en: "Its cries sound like incantations to torment the\nfoe. It appears where you least expect it.",
        "fr": "Ses cris sonnent comme des incantations pour tourmenter le\nennemi. Il apparaît là où on l'attend le moins.",
        "es": "Sus gritos suenan como encantamientos para atormentar al\nenemigo. Aparece donde menos te lo esperas.",
        "it": "Le sue grida sembrano incantesimi per tormentare i\nnemico. Appare dove meno te lo aspetti.",
        "de": "Seine Schreie klingen wie Beschwörungsformeln zur Qual\nFeind. Es erscheint dort, wo Sie es am wenigsten erwarten.",
        "pt-br": "Seus gritos soam como encantamentos para atormentar o\ninimigo. Aparece onde você menos espera.",
        "zh-tw": "它的叫聲聽起來就像是在折磨人的咒語\n敵人。它會出現在您最意想不到的地方。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Spooky Shot",
                "fr": "Tir effrayant",
                "es": "Tiro espeluznante",
                "it": "Colpo spettrale",
                "de": "Gruseliger Schuss",
                "pt-br": "Tiro assustador",
                "zh-tw": "幽靈射擊"
            },
            damage: 70,
            cost: ["Psychic", "Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
