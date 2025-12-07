import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Wartortle",
        "fr": "Tortue Wartorle",
        "es": "Tortuga de guerra",
        "it": "Wartortle",
        "de": "Warschildkröte",
        "pt-br": "Wartortle",
        "zh-tw": "疣龜"
    },
    illustrator: "Nelnal",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Squirtle",
        "fr": "Carapuce",
        "es": "squirtle",
        "it": "Squirtle",
        "de": "Eichhörnchen",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜"
    },
    description: {
        en: "It is recognized as a symbol of longevity. If its\nshell has algae on it, that Wartortle is very old.",
        "fr": "Il est reconnu comme un symbole de longévité. Si c'est\nla coquille contient des algues, ce Wartortle est très vieux.",
        "es": "Es reconocido como un símbolo de longevidad. si es\nEl caparazón tiene algas, ese Wartortle es muy viejo.",
        "it": "È riconosciuto come simbolo di longevità. Se è\nla conchiglia ha delle alghe sopra, quel Wartortle è molto antico.",
        "de": "Es gilt als Symbol für Langlebigkeit. Wenn es so ist\nAuf der Schale sind Algen, die Wartortle ist sehr alt.",
        "pt-br": "É reconhecido como um símbolo de longevidade. Se for\nconcha contém algas, que Wartortle é muito antigo.",
        "zh-tw": "它被認為是長壽的象徵。如果它的\n殼上有藻類，那疣龜很老了。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Wave Splash",
                "fr": "Éclaboussure de vague",
                "es": "Salpicadura de onda",
                "it": "Spruzzo dell'onda",
                "de": "Wellenspritzer",
                "pt-br": "Respingo de onda",
                "zh-tw": "波浪飛濺"
            },
            damage: 40,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
