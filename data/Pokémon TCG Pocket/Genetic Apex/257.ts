import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Starmie ex",
        fr: "Staross-ex",
        es: "Starmie ex",
        it: "Starmie-ex",
        de: "Starmie-ex",
        'pt-br': "Starmie ex",
        ko: "아쿠스타 ex",
        "zh-tw": "海星超級"
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
    rarity: "Two Star",
    boosters: ["charizard"]
};
export default card;
