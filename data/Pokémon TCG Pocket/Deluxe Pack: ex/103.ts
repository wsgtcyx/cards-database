import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Corphish",
        "fr": "Corphish",
        "es": "corphish",
        "it": "Corphish",
        "de": "Corphish",
        "pt-br": "Corpus",
        "zh-tw": "龍蝦小兵",
    },
    illustrator: "chibi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "No matter how dirty the water in the river, it will\nadapt and thrive. It has a strong will to survive.",
        "fr": "Peu importe à quel point l'eau de la rivière est sale, elle\ns'adapter et s'épanouir. Il a une forte volonté de survivre.",
        "es": "No importa cuán sucia esté el agua del río,\nadaptarse y prosperar. Tiene una fuerte voluntad de sobrevivir.",
        "it": "Non importa quanto sia sporca l'acqua del fiume, lo farà\nadattarsi e prosperare. Ha una forte volontà di sopravvivere.",
        "de": "Egal wie schmutzig das Wasser im Fluss ist, es wird es tun\nanpassen und gedeihen. Es hat einen starken Überlebenswillen.",
        "pt-br": "Não importa quão suja seja a água do rio, ela irá\nadaptar e prosperar. Tem uma forte vontade de sobreviver.",
        "zh-tw": "不管河裡的水有多髒，它都會\n適應並茁壯成長。它有強烈的求生意志。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Vise Grip",
                "fr": "Poignée d'étau",
                "es": "Agarre de tornillo de banco",
                "it": "Presa a morsa",
                "de": "Schraubstockgriff",
                "pt-br": "Torno Grip",
                "zh-tw": "虎鉗夾具"
            },
            damage: 30,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
