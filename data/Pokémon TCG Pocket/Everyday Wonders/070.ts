import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/070",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/070"
    },
    name: {
        en: "Vulpix",
        fr: "Goupix",
        es: "Vulpix",
        it: "Vulpix",
        de: "Vulpix",
        "pt-br": "Vulpix",
        "zh-tw": "六尾",
        ko: "식스테일",
        ja: "ロコン"
    },
    illustrator: "Teeziro",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [37],
    stage: "Basic",
    description: {
        en: "As its body grows larger, its six warm tails become more beautiful, with a more luxurious coat of fur.",
        fr: "À mesure que son corps grandit, ses six queues chaudes deviennent plus belles, avec un pelage plus luxueux.",
        es: "A medida que su cuerpo crece, sus seis cálidas colas se vuelven más hermosas, con un pelaje más lujoso.",
        it: "Man mano che il suo corpo diventa più grande, le sue sei calde code diventano più belle, con una pelliccia più lussuosa.",
        de: "Je größer sein Körper wird, desto schöner werden seine sechs warmen Schwänze mit einem luxuriöseren Fell.",
        "pt-br": "À medida que seu corpo cresce, suas seis caudas quentes ficam mais bonitas, com uma pelagem mais luxuosa.",
        "zh-tw": "隨著它的身體越來越大，它的六條溫暖的尾巴也變得更加美麗，毛皮也更加奢華。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Hold Still",
                fr: "Restez immobile",
                es: "Quédate quieto",
                it: "Stai fermo",
                de: "Halten Sie still",
                "pt-br": "Fique quieto",
                "zh-tw": "紋絲不動"
            },
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                fr: "Soignez 20 dégâts de ce Pokémon.",
                es: "Cura 20 puntos de daño de este Pokémon.",
                it: "Cura questo Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 de dano deste Pokémon.",
                "zh-tw": "治療該寶可夢造成的 20 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
