import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/118",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/118",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/118",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/118",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/118",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/118"
    },
    name: {
        en: "Honedge",
        "fr": "Monorpale",
        "es": "Honedge",
        "it": "Honedge",
        "de": "Gramokles",
        "pt-br": "Honedge",
        "zh-tw": "獨劍鞘"
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
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
                en: "Cut Up",
                "fr": "Découper",
                "es": "Cortar",
                "it": "Tagliare",
                "de": "Zerschneiden",
                "pt-br": "Cortar",
                "zh-tw": "切碎"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
