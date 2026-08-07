import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/076",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/076",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/076",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/076",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/076",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/076"
    },
    name: {
        en: "Starmie ex",
        fr: "Staross-ex",
        es: "Starmie ex",
        it: "Starmie-ex",
        de: "Starmie-ex",
        'pt-br': "Starmie ex",
        ko: "아쿠스타 ex",
        "zh-tw": "寶石海星ex",
    },
    illustrator: "PLANETA Igarashi",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    stage: "Stage1",
    evolveFrom: {
        en: "Staryu",
        "fr": "Staryu",
        "es": "Staryu",
        "it": "Staryu",
        "de": "Staryu",
        "pt-br": "Staryu",
        "zh-tw": "斯塔尤"
    },
    suffix: "EX",
    attacks: [{
            cost: ["Water", "Water"],
            name: {
                en: "Hydro Splash",
                fr: "Hydro-Éclaboussure",
                es: "Hidroestallido",
                it: "Idrosplash",
                de: "Hydroplatscher",
                'pt-br': "Hidroborrifada",
                ko: "하이드로 스플래시",
                "zh-tw": "水濺"
            },
            damage: "90"
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 0,
    rarity: "Four Diamond",
    boosters: ["charizard"]
};
export default card;
