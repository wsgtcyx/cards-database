import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/018"
    },
    name: {
        en: "Piplup",
        fr: "Tiplouf",
        es: "Piplup",
        it: "Piplup",
        de: "Plinfa",
        "pt-br": "Piplup",
        "zh-tw": "波加曼",
        ko: "팽도리",
        ja: "ポッチャマ"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [393],
    stage: "Basic",
    description: {
        en: "It doesn’t like to be taken care of. It’s difficult to bond with since it won’t listen to its Trainer.",
        fr: "Ce Pokémon est difficile à entraîner car il est très désobéissant\net déteste qu’on lui rende service.",
        es: "No le gusta que lo cuiden. Como no aprecia el apoyo de su\nEntrenador, le cuesta coger confianza con él.",
        it: "Molto orgoglioso. Difficile farci amicizia perché non ascolta mai\ni consigli dell’Allenatore.",
        de: "Einmischung kann es gar nicht leiden. Es ist bockig und fasst\nnur schwer Zutrauen zu seinem Trainer.",
        "pt-br": "Não gosta de ser cuidado. É difícil criar um vínculo, pois ele não escuta seu Treinador.",
        "zh-tw": "它不喜歡被照顧。它很難與它建立聯繫，因為它不聽訓練師的話。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                es: "Pistola Agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                "pt-br": "Revólver d'Água",
                "zh-tw": "水槍"
            },
            damage: 20
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
