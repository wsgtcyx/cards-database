import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Lombre",
        "fr": "Lombre",
        "es": "Lombre",
        "it": "Lombre",
        "de": "Lombard",
        "pt-br": "Lombre",
        "zh-tw": "蓮帽小童",
    },
    illustrator: "miki kudo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Lotad",
        "fr": "Lotad",
        "es": "lotead",
        "it": "Molto",
        "de": "Lotad",
        "pt-br": "Lotad",
        "zh-tw": "洛塔德"
    },
    description: {
        en: "It lives at the water's edge where it is sunny.\nIt sleeps on a bed of water grass by day and\nbecomes active at night.",
        "fr": "Il vit au bord de l'eau où il fait beau.\nIl dort sur un lit d'herbe aquatique le jour et\ndevient actif la nuit.",
        "es": "Vive a la orilla del agua donde hace sol.\nDuerme sobre un lecho de hierba acuática durante el día y\nse vuelve activo por la noche.",
        "it": "Vive in riva al mare dove c'è il sole.\nDi giorno dorme su un letto d'erba acquatica e\ndiventa attivo di notte.",
        "de": "Es lebt am Wasser, wo es sonnig ist.\nTagsüber schläft es auf einem Bett aus Wassergras\nwird nachts aktiv.",
        "pt-br": "Vive à beira da água, onde faz sol.\nEle dorme em uma cama de grama aquática durante o dia e\ntorna-se ativo à noite.",
        "zh-tw": "它生活在陽光充足的水邊。\n白天它睡在水草床上，\n晚上變得活躍。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Gentle Slap",
                "fr": "Gifle douce",
                "es": "Bofetada suave",
                "it": "Schiaffo gentile",
                "de": "Sanfter Schlag",
                "pt-br": "Tapa suave",
                "zh-tw": "輕輕一巴掌"
            },
            damage: 40,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
