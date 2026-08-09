import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/213",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/213",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/213",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/213",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/213",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/213",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/213"
    },
    name: {
        en: "Roggenrola",
        fr: "Nodulithe",
        es: "Roggenrola",
        it: "Roggenrola",
        de: "Kiesling",
        "pt-br": "Roggenrola",
        "zh-tw": "石丸子",
        ko: "단굴",
        ja: "ダンゴロ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [524],
    stage: "Basic",
    description: {
        en: "When it detects a noise, it starts to move. The energy core inside it makes this Pokémon slightly warm to the touch.",
        fr: "Il se déplace en réagissant aux sons environnants.\nSon noyau d’énergie rend son corps légèrement\nchaud au toucher.",
        es: "Se dirige hacia cualquier sonido que perciba.\nEs ligeramente cálido al tacto, debido al efecto\nde su núcleo energético.",
        it: "Si muove reagendo ai rumori. È tiepido al tatto\nper via del nucleo di energia al suo interno.",
        de: "Es bewegt sich stets auf Geräuschquellen zu.\nDank seines Energiekerns fühlt es sich immer\nleicht warm an, wenn man es berührt.",
        "pt-br": "Ao detectar um ruído, começa a se mover. O núcleo de energia dentro deste Pokémon faz com que ele seja morno ao toque.",
        "zh-tw": "會對聲音產生反應而動起來。\n在能量核心的影響下，\n牠摸起來暖暖的。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                en: "Mud-Slap",
                fr: "Coud'Boue",
                es: "Bofetón Lodo",
                it: "Fangosberla",
                de: "Lehmschelle",
                "pt-br": "Tapa de Lama",
                "zh-tw": "擲泥"
            },
            damage: 30
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
