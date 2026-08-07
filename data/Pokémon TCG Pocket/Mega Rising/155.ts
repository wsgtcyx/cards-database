import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/155",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/155",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/155",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/155",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/155",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/155",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/155"
    },
    name: {
        en: "Deino",
        "fr": "Solochi",
        "es": "Deino",
        "it": "Deino",
        "de": "Kapuno",
        "pt-br": "Deino",
        "zh-tw": "單首龍",
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It nests deep inside a cave. Food there is scarce,\nso Deino will sink its teeth into anything that\nmoves and attempt to eat it.",
        "fr": "Il niche au fond d’une grotte. La nourriture y est rare,\ndonc Deino mordra à pleines dents dans tout ce qui\nbouge et essaie de le manger.",
        "es": "Anida en lo profundo de una cueva. Allí la comida escasea,\npor lo que Deino hundirá sus dientes en cualquier cosa que\nse mueve e intenta comérselo.",
        "it": "Nidifica nel profondo di una grotta. Il cibo lì è scarso,\nquindi Deino affonderà i denti in qualsiasi cosa\nsi muove e tenta di mangiarlo.",
        "de": "Es nistet tief in einer Höhle. Das Essen dort ist knapp,\nalso wird sich Deino in alles hineinbeißen\nbewegt sich und versucht es zu essen.",
        "pt-br": "Nidifica nas profundezas de uma caverna. A comida lá é escassa,\nentão Deino vai cravar os dentes em qualquer coisa que\nse move e tenta comê-lo.",
        "zh-tw": "它在洞穴深處築巢。那裡食物匱乏，\n所以 Deino 會全力以赴做任何事\n移動並嘗試吃掉它。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
