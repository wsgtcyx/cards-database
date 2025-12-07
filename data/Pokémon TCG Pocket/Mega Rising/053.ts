import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Lotad",
        "fr": "Lotad",
        "es": "lotead",
        "it": "Molto",
        "de": "Lotad",
        "pt-br": "Lotad",
        "zh-tw": "洛塔德"
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "Its leaf grew too large for it to live on land.\nThat is how it began to live floating in the water.",
        "fr": "Sa feuille est devenue trop grande pour qu'il puisse vivre sur terre.\nC’est ainsi qu’il a commencé à vivre en flottant dans l’eau.",
        "es": "Su hoja creció demasiado para poder vivir en la tierra.\nAsí empezó a vivir flotando en el agua.",
        "it": "Le sue foglie divennero troppo grandi perché potesse vivere sulla terra.\nFu così che cominciò a vivere galleggiando nell'acqua.",
        "de": "Sein Blatt wurde zu groß, um an Land zu leben.\nSo begann es im Wasser schwimmend zu leben.",
        "pt-br": "Sua folha cresceu demais para que pudesse viver na terra.\nFoi assim que começou a viver flutuando na água.",
        "zh-tw": "它的葉子太大了，無法在陸地上生活。\n就這樣它開始了漂浮在水中的生活。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
