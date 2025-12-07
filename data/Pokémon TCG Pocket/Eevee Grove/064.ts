import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Skwovet",
        "fr": "Skwovet",
        "es": "Skwovet",
        "it": "Skwovet",
        "de": "Skwovet",
        "pt-br": "Skwovet",
        "zh-tw": "斯克沃維特"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "It stores berries in its cheeks. When there are no\nberries to be found, Skwovet will stuff pebbles\ninto its cheeks to stave off its cravings.",
        "fr": "Il stocke des baies dans ses joues. Quand il n'y a pas\nbaies à trouver, Skwovet bourrera les cailloux\ndans ses joues pour conjurer ses envies.",
        "es": "Almacena bayas en sus mejillas. cuando no hay\nSe pueden encontrar bayas, Skwovet rellenará guijarros.\nen sus mejillas para evitar sus antojos.",
        "it": "Conserva le bacche nelle guance. Quando non ci sono\nbacche da trovare, Skwovet riempirà i ciottoli\nnelle sue guance per allontanare le sue voglie.",
        "de": "Es speichert Beeren in seinen Wangen. Wenn es keine gibt\nBeeren zu finden sind, wird Skwovet Kieselsteine stopfen\nin seine Wangen, um sein Verlangen zu stillen.",
        "pt-br": "Ele armazena frutas nas bochechas. Quando não há\nbagas a serem encontradas, Skwovet vai encher seixos\nem suas bochechas para afastar seus desejos.",
        "zh-tw": "它的臉頰裡儲存著漿果。當沒有\n尋找漿果，Skwovet 會填滿鵝卵石\n進入它的臉頰以避免它的渴望。"
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
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
