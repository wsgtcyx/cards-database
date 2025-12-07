import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Starmie ex",
        "fr": "Starmie ex",
        "es": "ex starmie",
        "it": "Starmie ex",
        "de": "Starmie ex",
        "pt-br": "Ex-estrela",
        "zh-tw": "寶石海星 ex",
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    evolveFrom: {
        en: "Staryu",
        "fr": "Staryu",
        "es": "Staryu",
        "it": "Staryu",
        "de": "Staryu",
        "pt-br": "Staryu",
        "zh-tw": "海星星",
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Hydro Splash",
                "fr": "Hydro Splash",
                "es": "Salpicadura hidráulica",
                "it": "Idrospruzzo",
                "de": "Hydro Splash",
                "pt-br": "Hidro respingo",
                "zh-tw": "水濺"
            },
            damage: 90,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 0
};
export default card;
