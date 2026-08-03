import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/095",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/095"
    },
    name: {
        en: "Starmie ex",
        "fr": "Staross-ex",
        "es": "Starmie ex",
        "it": "Starmie-ex",
        "de": "Starmie-ex",
        "pt-br": "Starmie ex",
        "zh-tw": "寶石海星ex",
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
