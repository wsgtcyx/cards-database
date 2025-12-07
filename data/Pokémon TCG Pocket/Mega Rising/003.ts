import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Wurmple",
        "fr": "Wurmple",
        "es": "Wurmple",
        "it": "Wurmple",
        "de": "Wurmple",
        "pt-br": "Wurmple",
        "zh-tw": "刺尾蟲",
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "It lives among the tall grass and in forests. It repels\nattacks by raising up the spikes on its rear.",
        "fr": "Il vit parmi les herbes hautes et dans les forêts. Il repousse\nattaque en soulevant les pointes sur son arrière.",
        "es": "Vive entre la hierba alta y en los bosques. repele\nataca levantando las púas en su parte trasera.",
        "it": "Vive tra l'erba alta e nelle foreste. Respinge\nattacca sollevando gli spuntoni sul retro.",
        "de": "Er lebt im hohen Gras und in Wäldern. Es stößt ab\nEr greift an, indem er die Stacheln an seinem Rücken anhebt.",
        "pt-br": "Vive entre a grama alta e nas florestas. Isso repele\nataca levantando os espinhos em sua parte traseira.",
        "zh-tw": "它生活在高高的草叢和森林中。它排斥\n通過抬起背部的尖刺進行攻擊。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
