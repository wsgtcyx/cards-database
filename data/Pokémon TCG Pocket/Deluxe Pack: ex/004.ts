import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Ivysaur",
        "fr": "Lierre",
        "es": "Ivysaur",
        "it": "Ivysaur",
        "de": "Efeusaurier",
        "pt-br": "Ivysauro",
        "zh-tw": "常春藤屬"
    },
    illustrator: "Kurata So",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Bulbasaur",
        "fr": "Bulbizarre",
        "es": "bulbasaur",
        "it": "Bulbasauro",
        "de": "Bisasam",
        "pt-br": "Bulbasauro",
        "zh-tw": "妙蛙種子"
    },
    description: {
        en: "When the bulb on its back grows large, it\nappears to lose the ability to stand on its\nhind legs.",
        "fr": "Lorsque le bulbe sur son dos grossit, il\nsemble perdre la capacité de se tenir debout\npattes postérieures.",
        "es": "Cuando el bulbo de su espalda crece,\nparece perder la capacidad de pararse sobre su\npatas traseras.",
        "it": "Quando il bulbo sul dorso diventa grande,\nsembra perdere la capacità di reggersi in piedi\nzampe posteriori.",
        "de": "Wenn die Knolle auf ihrem Rücken groß wird, wird sie\nscheint die Fähigkeit zu verlieren, darauf zu stehen\nHinterbeine.",
        "pt-br": "Quando o bulbo em suas costas cresce, ele\nparece perder a capacidade de se manter em pé\npatas traseiras.",
        "zh-tw": "當它背上的燈泡長大後，\n似乎失去了站立的能力\n後腿。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Razor Leaf",
                "fr": "Feuille de rasoir",
                "es": "Hoja de afeitar",
                "it": "Foglia di rasoio",
                "de": "Rasiermesserblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "剃刀葉"
            },
            damage: 60,
            cost: ["Grass", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
