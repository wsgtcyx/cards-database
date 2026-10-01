import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/319",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/319",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/319",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/319",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/319",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/319",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/319"
    },
    name: {
        en: "Roggenrola",
        fr: "Nodulithe",
        es: "Roggenrola",
        it: "Roggenrola",
        de: "Kiesling",
        "pt-br": "Roggenrola",
        "zh-tw": "石丸子",
        ja: "ダンゴロ",
        ko: "단굴"
    },
    illustrator: "Kanako Eo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Fighting"
    ],
    description: {
        en: "When it detects a noise, it starts to move.\nThe energy core inside it makes this Pokémon\nslightly warm to the touch.",
        fr: "Il se déplace en réagissant aux sons environnants. Son noyau d'énergie rend son corps légèrement chaud au toucher.",
        es: "Se dirige hacia cualquier sonido que perciba. Es ligeramente cálido al tacto, debido al efecto de su núcleo energético.",
        it: "Si muove reagendo ai rumori. È tiepido al tatto per via del nucleo di energia al suo interno.",
        de: "Es bewegt sich stets auf Geräuschquellen zu. Dank seines Energiekerns fühlt es sich immer leicht warm an, wenn man es berührt.",
        "pt-br": "Ao detectar um ruído, começa a se mover. O núcleo de energia dentro deste Pokémon faz com que ele seja morno ao toque.",
        "zh-tw": "會對聲音產生反應而動起來。在能量核心的影響下，牠摸起來暖暖的。",
        ja: "When it detects a noise, it starts to move.\nThe energy core inside it makes this Pokémon\nslightly warm to the touch.",
        ko: "When it detects a noise, it starts to move.\nThe energy core inside it makes this Pokémon\nslightly warm to the touch."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Mud-Slap",
                fr: "Coud'Boue",
                es: "Bofetón Lodo",
                it: "Fangosberla",
                de: "Lehmschelle",
                "pt-br": "Tapa de Lama",
                "zh-tw": "擲泥",
                ja: "Mud-Slap",
                ko: "Mud-Slap"
            },
            damage: 30,
            cost: [
                "Fighting",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
