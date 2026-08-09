import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/172",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/172",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/172",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/172",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/172",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/172",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/172"
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
    illustrator: "Mékayu",
    rarity: "One Star",
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
        de: "Sein Körper besteht fast nur aus Magen. Herz und\nHirn sind winzig. Sein Magensaft verdaut alles.",
        "pt-br": "Seu coração e seu cérebro são muito pequenos. O estômago ocupa a maior parte do corpo e é cheio de enzimas capazes de dissolver qualquer coisa.",
        "zh-tw": "心臟和大腦都很小，\n身體的大部分是胃，\n會分泌出什麼都能溶解的胃液。"
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
