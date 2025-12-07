import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Zweilous",
        "fr": "Zweilous",
        "es": "Zweilous",
        "it": "Zweilous",
        "de": "Zweilous",
        "pt-br": "Zweilous",
        "zh-tw": "雙頭龍",
    },
    illustrator: "kodama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    evolveFrom: {
        en: "Deino",
        "fr": "Déino",
        "es": "Deino",
        "it": "Deino",
        "de": "Deino",
        "pt-br": "Deino",
        "zh-tw": "單首龍",
    },
    description: {
        en: "The two heads have different likes and dislikes.\nBecause the heads fight with each other, Zweilous\ngets stronger without needing to rely on others.",
        "fr": "Les deux têtes ont des goûts et des dégoûts différents.\nParce que les têtes se battent, Zweilous\ndevient plus fort sans avoir besoin de compter sur les autres.",
        "es": "Las dos cabezas tienen gustos y aversiones diferentes.\nPorque las cabezas pelean entre sí, Zweilous\nse fortalece sin necesidad de depender de otros.",
        "it": "Le due teste hanno simpatie e antipatie diverse.\nPerché le teste combattono tra loro, Zweilous\ndiventa più forte senza bisogno di fare affidamento sugli altri.",
        "de": "Die beiden Köpfe haben unterschiedliche Vorlieben und Abneigungen.\nWeil die Köpfe miteinander kämpfen, Zweilous\nwird stärker, ohne dass man sich auf andere verlassen muss.",
        "pt-br": "As duas cabeças têm gostos e desgostos diferentes.\nPorque as cabeças brigam entre si, Zweilous\nfica mais forte sem precisar depender de outros.",
        "zh-tw": "兩個頭有不同的好惡。\n因為頭顱互相爭鬥，Zweilous\n不需要依靠別人就能變得更強大。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Darkness Fang",
                "fr": "Croc des Ténèbres",
                "es": "Colmillo de oscuridad",
                "it": "Zanna dell'Oscurità",
                "de": "Dunkelheitszahn",
                "pt-br": "Presa da Escuridão",
                "zh-tw": "黑暗之牙"
            },
            damage: 40,
            cost: ["Darkness", "Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
