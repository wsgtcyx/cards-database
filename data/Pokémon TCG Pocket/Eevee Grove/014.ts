import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Salandit",
        "fr": "Salandit",
        "es": "Salandit",
        "it": "Salandite",
        "de": "Salandit",
        "pt-br": "Salandite",
        "zh-tw": "夜盜火蜥",
    },
    illustrator: "tetsuya koizumi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "It taunts its prey and lures them into narrow,\nrocky areas where it then sprays them with toxic\ngas to make them dizzy and take them down.",
        "fr": "Il nargue ses proies et les attire dans des endroits étroits,\nzones rocheuses où il les asperge ensuite de produits toxiques\ndu gaz pour leur donner le vertige et les faire tomber.",
        "es": "Se burla de sus presas y las atrae hacia lugares estrechos y\nzonas rocosas donde luego las rocía con tóxicos\ngas para marearlos y derribarlos.",
        "it": "Si prende gioco delle sue prede e le attira in luoghi angusti,\nzone rocciose dove poi le spruzza con sostanze tossiche\ngas per farli girare la testa e portarli giù.",
        "de": "Es verspottet seine Beute und lockt sie in enge,\nfelsige Gebiete, wo es sie dann mit Gift besprüht\nGas, um ihnen schwindelig zu machen und sie niederzuschlagen.",
        "pt-br": "Ele provoca suas presas e as atrai para lugares estreitos,\náreas rochosas onde depois as pulveriza com substâncias tóxicas\ngás para deixá-los tontos e derrubá-los.",
        "zh-tw": "它嘲弄獵物並引誘它們進入狹窄的地方，\n然後向岩石區域噴灑有毒物質\n氣體使他們頭暈並把他們打倒。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ember",
                "fr": "Braise",
                "es": "Ascua",
                "it": "Brace",
                "de": "Glut",
                "pt-br": "Brasa",
                "zh-tw": "餘燼"
            },
            damage: 30,
            cost: ["Fire"],
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                "fr": "Défaussez une Énergie {R} de ce Pokémon.",
                "es": "Descarta una Energía {R} de este Pokémon.",
                "it": "Scarta un'Energia {R} da questo Pokémon.",
                "de": "Wirf eine {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {R} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
