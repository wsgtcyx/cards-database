import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/098"
    },
    name: {
        en: "Gulpin",
        fr: "Gloupti",
        es: "Gulpin",
        it: "Gulpin",
        de: "Schluppuck",
        "pt-br": "Gulpin",
        "zh-tw": "溶食獸",
        ko: "꼴깍몬",
        ja: "ゴクリン"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [316],
    stage: "Basic",
    description: {
        en: "It has a small heart and brain. Its stomach comprises most of its body, with enzymes to dissolve anything.",
        fr: "Son corps est principalement constitué d’un estomac\ndont les sucs digestifs dissolvent tout.",
        es: "Sus sesos y corazón son diminutos; es casi todo\nestómago. Sus jugos gástricos disuelven lo que sea.",
        it: "Ha cuore e cervello mini: lo stomaco prende troppo\nspazio! Con i succhi gastrici scioglie qualunque cosa.",
        de: "Sein Körper besteht fast nur aus Magen. Herz und\nHirn sind winzig. Sein Magensaft verdaut alles."
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Sludge Bomb",
                fr: "Bombe Beurk",
                es: "Bomba Lodo",
                it: "Fangobomba",
                de: "Matschbombe",
                "pt-br": "Bomba de Lodo",
                "zh-tw": "污泥炸彈"
            },
            damage: 20
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
