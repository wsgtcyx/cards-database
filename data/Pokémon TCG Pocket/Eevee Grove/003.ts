import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Bounsweet",
        "fr": "Bonbon",
        "es": "dulce",
        "it": "Dolcezza",
        "de": "Bounsweet",
        "pt-br": "Doce",
        "zh-tw": "邦斯威特"
    },
    illustrator: "Yuka Morii",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "Its sweat is sweet, like syrup made from boiled-down\nfruit. Because of this, Bounsweet was highly valued in\nthe past, when sweeteners were scarce.",
        "fr": "Sa sueur est douce, comme un sirop fait à partir de\ndes fruits. Pour cette raison, Bounsweet était très apprécié dans\nle passé, lorsque les édulcorants étaient rares.",
        "es": "Su sudor es dulce, como un almíbar hecho con agua hervida.\nfruta. Debido a esto, Bounsweet fue muy valorado en\nel pasado, cuando los edulcorantes eran escasos.",
        "it": "Il suo sudore è dolce, come lo sciroppo fatto con la carne bollita\nfrutta. Per questo motivo Bounsweet è stato molto apprezzato\nal passato, quando i dolcificanti scarseggiavano.",
        "de": "Sein Schweiß ist süß, wie Sirup aus eingekochtem Wasser\nFrucht. Aus diesem Grund wurde Bounsweet sehr geschätzt\ndie Vergangenheit, als Süßstoffe knapp waren.",
        "pt-br": "Seu suor é doce, como xarope feito de fervido\nfruta. Por causa disso, Bounsweet foi altamente valorizado em\nno passado, quando os adoçantes eram escassos.",
        "zh-tw": "它的汗水是甜的，就像熬成的糖漿一樣\n水果。正因為如此，Bounsweet 受到了高度重視。\n過去，甜味劑稀缺。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flop",
                "fr": "Fiasco",
                "es": "Fracaso",
                "it": "Flop",
                "de": "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
