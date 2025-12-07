import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Krokorok",
        "fr": "Krokorok",
        "es": "krokorok",
        "it": "Krokorok",
        "de": "Krokorok",
        "pt-br": "Crokorok",
        "zh-tw": "混混鱷",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    evolveFrom: {
        en: "Sandile",
        "fr": "Sandile",
        "es": "sandil",
        "it": "Sandile",
        "de": "Sandile",
        "pt-br": "Sandália",
        "zh-tw": "黑眼鱷",
    },
    description: {
        en: "Protected by thin membranes, their eyes can see\neven in the dead of night. They live in groups of\na few individuals.",
        "fr": "Protégés par de fines membranes, leurs yeux peuvent voir\nmême en pleine nuit. Ils vivent en groupes de\nquelques individus.",
        "es": "Protegidos por finas membranas, sus ojos pueden ver.\nincluso en plena noche. Viven en grupos de\nalgunos individuos.",
        "it": "Protetti da sottili membrane, i loro occhi possono vedere\nanche nel cuore della notte. Vivono in gruppi di\nalcuni individui.",
        "de": "Geschützt durch dünne Membranen können ihre Augen sehen\nsogar mitten in der Nacht. Sie leben in Gruppen von\nein paar Einzelpersonen.",
        "pt-br": "Protegidos por membranas finas, seus olhos podem ver\nmesmo na calada da noite. Eles vivem em grupos de\nalguns indivíduos.",
        "zh-tw": "它們的眼睛受到薄膜的保護，可以看到東西\n即使是在夜深人靜的時候。他們成群結隊地生活\n幾個人。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Light Punch",
                "fr": "Coup de poing léger",
                "es": "Puñetazo ligero",
                "it": "Pugno leggero",
                "de": "Leichter Schlag",
                "pt-br": "Soco Leve",
                "zh-tw": "輕拳"
            },
            damage: 40,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
