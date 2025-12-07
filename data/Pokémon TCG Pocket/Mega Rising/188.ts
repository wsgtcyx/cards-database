import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Zigzagoon",
        "fr": "Zigzagoon",
        "es": "Zigzagoon",
        "it": "Zigzagoon",
        "de": "Zickzack",
        "pt-br": "Ziguezague",
        "zh-tw": "之字形"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "A Pokémon with abundant curiosity. It shows an\ninterest in everything, so it always zigzags.",
        "fr": "Un Pokémon doté d'une grande curiosité. Il montre un\nl'intérêt pour tout, donc ça zigzague toujours.",
        "es": "Un Pokémon con mucha curiosidad. Muestra un\ninterés en todo, por lo que siempre zigzaguea.",
        "it": "Un Pokémon dalla curiosità abbondante. Mostra un\ninteresse per tutto, quindi va sempre a zigzag.",
        "de": "Ein Pokémon mit großer Neugier. Es zeigt eine\nInteresse an allem, also geht es immer im Zickzack.",
        "pt-br": "Um Pokémon com muita curiosidade. Ele mostra um\ninteresse por tudo, então sempre ziguezagueia.",
        "zh-tw": "好奇心豐富的寶可夢。它顯示了一個\n對一切事物都感興趣，所以它總是曲折的。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
