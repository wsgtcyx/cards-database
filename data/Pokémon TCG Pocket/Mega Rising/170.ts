import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Honedge",
        "fr": "Honedge",
        "es": "afilar",
        "it": "Honedge",
        "de": "Honedge",
        "pt-br": "Honedge",
        "zh-tw": "霍內奇"
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    description: {
        en: "The blue eye on the sword's handguard is the\ntrue body of Honedge. With its old cloth, it\ndrains people's lives away.",
        "fr": "L'œil bleu sur le garde-main de l'épée est le\nvéritable corps de Honedge. Avec son vieux drap, il\ndraine la vie des gens.",
        "es": "El ojo azul en el guardamano de la espada es el\nverdadero cuerpo de Honedge. Con su tela vieja,\ndrena la vida de las personas.",
        "it": "L'occhio azzurro sul paramano della spada è il\nvero corpo di Honedge. Con la sua vecchia stoffa, esso\nprosciuga la vita delle persone.",
        "de": "Das blaue Auge am Handschutz des Schwertes ist das\nwahrer Körper von Honedge. Mit seinem alten Stoff, es\nraubt den Menschen das Leben.",
        "pt-br": "O olho azul no protetor de mão da espada é o\nverdadeiro corpo de Honedge. Com seu pano velho,\ndrena a vida das pessoas.",
        "zh-tw": "劍護手上的藍色眼睛是\n洪內奇的真身。用它的舊佈，\n耗盡人們的生命。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pierce",
                "fr": "Percer",
                "es": "Atravesar",
                "it": "Forare",
                "de": "Pierce",
                "pt-br": "Perfurar",
                "zh-tw": "刺穿"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
