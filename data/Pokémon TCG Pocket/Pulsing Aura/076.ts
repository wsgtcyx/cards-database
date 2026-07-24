import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/076"
    },
    name: {
        en: "Trapinch",
        fr: "Kraknoix",
        es: "Trapinch",
        it: "Trapinch",
        de: "Knacklion",
        "pt-br": "Trapinch",
        "zh-tw": "大顎蟻",
        ko: "톱치",
        ja: "ナックラー"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [328],
    stage: "Basic",
    description: {
        en: "As it digs through the sand, its giant jaws crush any rocks that obstruct its path. It builds a funnel-shaped nest.",
        fr: "Il creuse des trous dans le sable et brise les\nrochers qui le gênent d’un coup de mâchoire.\nSes terriers ressemblent à un entonnoir.",
        es: "Cava su nido de forma cóncava en la arena y, si\naparece una roca que le molesta, la destroza\ncon sus grandes mandíbulas.",
        it: "Scava una tana a forma di imbuto nella sabbia\nfrantumando le rocce che lo ostacolano\ncon le sue possenti mascelle.",
        de: "Es gräbt im Sand und zerquetscht dabei mit\nseinem gigantischen Kiefer störende Felsen.\nSein Bau hat die Form eines Trichters.",
        "pt-br": "À medida que escava na areia, suas mandíbulas gigantes esmagam todas as pedras que obstruem seu caminho. Constrói um ninho em forma de funil.",
        "zh-tw": "一邊用大大的顎把礙事的\n岩石咬碎，一邊挖沙子。\n巢穴的形狀就像研磨缽一樣。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Mud-Slap",
                fr: "Coud'Boue",
                es: "Bofetón Lodo",
                it: "Fangosberla",
                de: "Lehmschelle",
                "pt-br": "Tapa de Lama",
                "zh-tw": "擲泥"
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
