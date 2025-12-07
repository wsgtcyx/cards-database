import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Frillish",
        "fr": "Fantaisie",
        "es": "volantes",
        "it": "Frizzo",
        "de": "Rüschen",
        "pt-br": "Enfeitado",
        "zh-tw": "華麗的"
    },
    illustrator: "Apios",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "Legend has it that the residents of a sunken\nancient city changed into these Pokémon.",
        "fr": "La légende raconte que les habitants d'un\nla ville antique s'est transformée en ces Pokémon.",
        "es": "Cuenta la leyenda que los habitantes de un barco hundido\nLa antigua ciudad se transformó en estos Pokémon.",
        "it": "La leggenda narra che gli abitanti di un affondato\nl'antica città si è trasformata in questi Pokémon.",
        "de": "Der Legende nach sollen die Bewohner eines versunkenen\nDie antike Stadt hat sich in diese Pokémon verwandelt.",
        "pt-br": "Diz a lenda que os moradores de um local submerso\ncidade antiga se transformou nesses Pokémon.",
        "zh-tw": "傳說，沉沒的居民\n古城變成了這些神奇寶貝。"
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
