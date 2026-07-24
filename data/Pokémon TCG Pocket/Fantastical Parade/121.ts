import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/121"
    },
    name: {
        en: "Bagon",
        "fr": "Bagon",
        "es": "bagón",
        "it": "Bagón",
        "de": "Bagon",
        "pt-br": "Bagão",
        "zh-tw": "巴貢"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Dragon"],
    description: {
        en: "Its belief that it will be able to fly one day is\napparently the influence of information carried\nin its genes.",
        "fr": "Sa conviction qu'il sera capable de voler un jour est\napparemment l'influence des informations véhiculées\ndans ses gènes.",
        "es": "Su creencia de que algún día podrá volar es\naparentemente la influencia de la información transportada\nen sus genes.",
        "it": "La sua convinzione che un giorno sarà in grado di volare lo è\napparentemente l'influenza delle informazioni trasportate\nnei suoi geni.",
        "de": "Sein Glaube, dass es eines Tages fliegen kann, ist\noffenbar der Einfluss der übermittelten Informationen\nin seinen Genen.",
        "pt-br": "Sua crença de que um dia poderá voar é\naparentemente a influência da informação transportada\nem seus genes.",
        "zh-tw": "它堅信自己有一天能夠飛翔，這是\n顯然是所攜帶信息的影響\n在它的基因中。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 1
};
export default card;
