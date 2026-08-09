import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3/233",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3/233",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3/233",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3/233",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3/233",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3/233",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3/233"
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
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    evolveFrom: {
        en: "Staryu",
        "fr": "Stari",
        "es": "Staryu",
        "it": "Staryu",
        "de": "Sterndu",
        "pt-br": "Staryu",
        "zh-tw": "海星星",
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
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
            damage: 90,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["solgaleo"]
};
export default card;
