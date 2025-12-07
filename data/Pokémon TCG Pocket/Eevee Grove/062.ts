import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Minccino",
        "fr": "Minccino",
        "es": "Minccino",
        "it": "Minccino",
        "de": "Minccino",
        "pt-br": "Mincino",
        "zh-tw": "明奇諾"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "The way it brushes away grime with its tail\ncan be helpful when cleaning. But its focus on\nspotlessness can make cleaning more of a hassle.",
        "fr": "La façon dont il efface la crasse avec sa queue\npeut être utile lors du nettoyage. Mais il se concentre sur\nla propreté peut rendre le nettoyage encore plus compliqué.",
        "es": "La forma en que limpia la suciedad con su cola.\nPuede resultar útil a la hora de limpiar. Pero su enfoque en\nLa limpieza puede hacer que la limpieza sea más complicada.",
        "it": "Il modo in cui spazza via lo sporco con la coda\npuò essere utile durante la pulizia. Ma si concentra su\nla pulizia può rendere la pulizia più complicata.",
        "de": "Die Art, wie es mit seinem Schwanz Schmutz wegfegt\nkann beim Reinigen hilfreich sein. Aber sein Fokus liegt auf\nSauberkeit kann die Reinigung zu einem größeren Aufwand machen.",
        "pt-br": "A maneira como ele limpa a sujeira com o rabo\npode ser útil durante a limpeza. Mas seu foco em\na impecabilidade pode tornar a limpeza mais complicada.",
        "zh-tw": "它用尾巴掃去污垢的方式\n清潔時會有幫助。但其重點在於\n一塵不染會使清潔變得更加麻煩。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pound",
                "fr": "Livre",
                "es": "Libra",
                "it": "Libbra",
                "de": "Pfund",
                "pt-br": "Libra",
                "zh-tw": "磅"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
