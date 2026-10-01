import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/124",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/124",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/124",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/124",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/124",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/124",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/124"
    },
    name: {
        en: "Trapinch",
        fr: "Kraknoix",
        es: "Trapinch",
        it: "Trapinch",
        de: "Knacklion",
        "pt-br": "Trapinch",
        "zh-tw": "大顎蟻",
        ja: "ナックラー",
        ko: "톱치"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fighting"
    ],
    dexId: [
        328
    ],
    stage: "Basic",
    description: {
        en: "As it digs through the sand, its giant jaws crush any rocks that obstruct its path. It builds a funnel-shaped nest.",
        fr: "Il creuse des trous dans le sable et brise les rochers qui le gênent d'un coup de mâchoire. Son terrier ressemble à un entonnoir.",
        es: "Destroza con sus grandes mandíbulas las rocas que va encontrando a su paso mientras cava en la arena. Sus nidos tienen forma de embudo.",
        it: "Scava una tana a forma di imbuto nella sabbia frantumando le rocce che lo ostacolano con le sue possenti mascelle.",
        de: "Es gräbt im Sand und zermalmt dabei mit seinem großen Kiefer störende Felsen. Sein Bau hat die Form eines Trichters.",
        "pt-br": "Ao cavar na areia, suas gigantescas mandíbulas esmagam qualquer pedra que esteja obstruindo o caminho. Constrói ninhos em forma de funil.",
        "zh-tw": "一邊用大大的顎把礙事的岩石咬碎，一邊挖沙子。巢穴的形狀就像研磨缽一樣。",
        ja: "As it digs through the sand, its giant jaws crush any rocks that obstruct its path. It builds a funnel-shaped nest.",
        ko: "As it digs through the sand, its giant jaws crush any rocks that obstruct its path. It builds a funnel-shaped nest."
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
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
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
