import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/162",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/162",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/162",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/162",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/162",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/162",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/162"
    },
    name: {
        en: "Scorbunny",
        "fr": "Flambino",
        "es": "Scorbunny",
        "it": "Scorbunny",
        "de": "Hopplo",
        "pt-br": "Scorbunny",
        "zh-tw": "炎兔兒"
    },
    illustrator: "You Iribi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "Fire energy gathers in the pads of its feet,\nraising their temperature. Once hot, Scorbunny's\nfootpads can deal heavy damage to opponents.",
        "fr": "L'énergie du feu s'accumule dans les coussinets de ses pieds,\naugmenter leur température. Une fois chaud, Scorbunny's\nles repose-pieds peuvent infliger de lourds dégâts aux adversaires.",
        "es": "La energía del fuego se acumula en las almohadillas de sus pies,\nelevando su temperatura. Una vez caliente, Scorbunny's\nLos footpads pueden causar grandes daños a los oponentes.",
        "it": "L'energia del fuoco si raccoglie nelle zampe dei suoi piedi,\nalzando la loro temperatura. Una volta caldo, quello di Scorbunny\ni footpad possono infliggere gravi danni agli avversari.",
        "de": "Feuerenergie sammelt sich in den Fußballen seiner Füße,\nihre Temperatur erhöhen. Sobald es heiß ist, Scorbunny's\nFußpolster können Gegnern schweren Schaden zufügen.",
        "pt-br": "A energia do fogo se acumula nas almofadas dos pés,\naumentando sua temperatura. Uma vez quente, Scorbunny's\nfootpads podem causar grandes danos aos oponentes.",
        "zh-tw": "火氣聚集於腳掌，\n提高他們的體溫。一旦熱了，Scorbunny's\n腳墊可以對對手造成嚴重傷害。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flop",
                "fr": "Fiasco",
                "es": "Fracaso",
                "it": "Flop",
                "de": "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌"
            },
            damage: 20,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
