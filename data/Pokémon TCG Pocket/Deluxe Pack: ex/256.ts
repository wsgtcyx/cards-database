import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Excadrill",
        "fr": "Excadrille",
        "es": "excadril",
        "it": "Excadrill",
        "de": "Excadrill",
        "pt-br": "Excadrill",
        "zh-tw": "龍頭地鼠",
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    evolveFrom: {
        en: "Drilbur",
        "fr": "Foreur",
        "es": "taladro",
        "it": "Drilbur",
        "de": "Drilbur",
        "pt-br": "Drilbur",
        "zh-tw": "螺釘地鼠",
    },
    description: {
        en: "It's not uncommon for tunnels that appear to\nhave formed naturally to actually be a result\nof Excadrill's rampant digging.",
        "fr": "Il n'est pas rare que des tunnels semblent\nse sont formés naturellement pour être en fait le résultat\ndes fouilles effrénées d'Excadrill.",
        "es": "No es raro que los túneles parezcan\nse han formado naturalmente para ser en realidad un resultado\nde las excavaciones desenfrenadas de Excadrill.",
        "it": "Non è raro che i tunnel sembrino farlo\nsi sono formati naturalmente per essere effettivamente un risultato\ndegli scavi dilaganti di Excadrill.",
        "de": "Es ist nicht ungewöhnlich, dass Tunnel so aussehen\nhaben sich auf natürliche Weise gebildet, um tatsächlich ein Ergebnis zu sein\nvon Excadrills zügellosem Graben.",
        "pt-br": "Não é incomum que túneis que parecem\nse formaram naturalmente para realmente ser um resultado\nda escavação desenfreada de Excadrill.",
        "zh-tw": "隧道的情況並不少見\n自然形成的實際結果\n埃卡德里爾猖獗的挖掘活動"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 50,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
