import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/058",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/058",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/058",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/058",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/058"
    },
    name: {
        en: "Lanturn",
        fr: "Lanturn",
        es: "Lanturn",
        it: "Lanturn",
        de: "Lanturn",
        "pt-br": "Lanturn",
        "zh-tw": "電燈怪",
        ko: "랜턴",
        ja: "ランターン"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Lightning"],
    dexId: [171],
    evolveFrom: {
        en: "Chinchou",
        fr: "Loupio",
        es: "Chinchou",
        it: "Chinchou",
        de: "Lampi",
        "pt-br": "Chinchou",
        "zh-tw": "燈籠魚",
        ko: "초라기",
        ja: "チョンチー"
    },
    stage: "Stage1",
    description: {
        en: "It blinds prey with an intense burst of light. With the prey incapacitated, the Pokémon swallows it in a single gulp.",
        fr: "Il aveugle sa proie avec une lumière intense, puis\nl’avale d’un seul trait une fois immobilisée.",
        es: "Ciega a su presa con una luz intensa y luego se la\ntraga de un solo bocado.",
        it: "Acceca la preda con un’intensa ondata di luce,\nimmobilizzandola, per poi ingoiarla in un sol boccone.",
        de: "Es blendet seine Beute mit einem starken Blitz und\nverschlingt die gelähmte Beute mit einem Schluck.",
        "pt-br": "Ele cega a presa com uma intensa explosão de luz. Com a presa incapacitada, o Pokémon a engole de um só gole.",
        "zh-tw": "它會發出強烈的光芒，使獵物失明。當獵物喪失行動能力時，寶可夢會一口氣將其吞下。",
        ja: "まぶしい 光を 放って 相手の 目を くらませ 動けない あいだに まるのみに してしまう。",
        ko: "눈부신 빛을 발산하여 상대의 눈을\n안 보이게 만들어 움직이지 못하는\n동안에 통째로 삼켜 버린다."
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Electric Ball",
                fr: "Boule de Foudre",
                es: "Bola Eléctrica",
                it: "Lamposfera",
                de: "Stromball",
                "pt-br": "Bola de Eletricidade",
                "zh-tw": "雷電球",
                ja: "ライトニングボール",
                ko: "라이트닝볼"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
