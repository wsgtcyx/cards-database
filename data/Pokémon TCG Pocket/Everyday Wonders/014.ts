import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/014",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/014",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/014",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/014",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/014",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/014"
    },
    name: {
        en: "Feebas",
        fr: "Barpau",
        es: "Feebas",
        it: "Feebas",
        de: "Barschwa",
        "pt-br": "Feebas",
        "zh-tw": "醜醜魚",
        ko: "빈티나",
        ja: "ヒンバス"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    dexId: [349],
    stage: "Basic",
    description: {
        en: "It is the shabbiest Pokémon of all. It forms schools and lives at the bottom of rivers that teem with plant life.",
        fr: "C'est le Pokémon le plus minable de tous. Il forme des bancs et vit au fond des rivières regorgeant de végétation.",
        es: "Es el Pokémon más cutre de todos. Forma escuelas y vive en el fondo de ríos repletos de vida vegetal.",
        it: "È il Pokémon più squallido di tutti. Forma banchi e vive sul fondo dei fiumi brulicanti di vita vegetale.",
        de: "Es ist das schäbigste Pokémon von allen. Es bildet Schulen und lebt am Grund von Flüssen, in denen es von Pflanzen nur so wimmelt.",
        "pt-br": "É o Pokémon mais pobre de todos. Forma cardumes e vive no fundo de rios repletos de plantas.",
        "zh-tw": "它是所有寶可夢中最破舊的。它在充滿植物生命的河流底部形成學校和生活。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Splash",
                fr: "Trempette",
                es: "Salpicadura",
                it: "Splash",
                de: "Platscher",
                "pt-br": "Borrifada",
                "zh-tw": "躍起"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
