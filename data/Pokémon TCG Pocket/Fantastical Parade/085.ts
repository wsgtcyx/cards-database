import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/085"
    },
    name: {
        en: "Roggenrola",
        "fr": "Roggenrola",
        "es": "Roggenrola",
        "it": "Roggenrola",
        "de": "Roggenrola",
        "pt-br": "Roggenrola",
        "zh-tw": "羅根羅拉"
    },
    illustrator: "Kanako Eo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "When it detects a noise, it starts to move.\nThe energy core inside it makes this Pokémon\nslightly warm to the touch.",
        "fr": "Lorsqu'il détecte un bruit, il se met à bouger.\nLe noyau énergétique qu'il contient rend ce Pokémon\nlégèrement chaud au toucher.",
        "es": "Cuando detecta un ruido, comienza a moverse.\nEl núcleo de energía en su interior hace que este Pokémon\nligeramente cálido al tacto.",
        "it": "Quando rileva un rumore, inizia a muoversi.\nIl nucleo energetico al suo interno crea questo Pokémon\nleggermente caldo al tatto.",
        "de": "Wenn es ein Geräusch erkennt, beginnt es sich zu bewegen.\nDer darin enthaltene Energiekern macht dieses Pokémon aus\nleicht warm im Griff.",
        "pt-br": "Ao detectar um ruído, ele começa a se mover.\nO núcleo de energia dentro dele faz deste Pokémon\nligeiramente quente ao toque.",
        "zh-tw": "當它檢測到噪音時，它就會開始移動。\n其內部的能量核心使這款神奇寶貝\n摸起來有點溫暖。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mud-Slap",
                "fr": "Gifle de boue",
                "es": "Bofetada de barro",
                "it": "Schiaffo di fango",
                "de": "Schlammklatsch",
                "pt-br": "Tapa de lama",
                "zh-tw": "拍泥"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
