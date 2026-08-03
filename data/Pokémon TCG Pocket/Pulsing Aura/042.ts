import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/042",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/042",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/042",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/042",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/042",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/042",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/042"
    },
    name: {
        en: "Clamperl",
        fr: "Coquiperl",
        es: "Clamperl",
        it: "Clamperl",
        de: "Perlu",
        "pt-br": "Clamperl",
        "zh-tw": "珍珠貝",
        ko: "진주몽",
        ja: "パールル"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [366],
    stage: "Basic",
    description: {
        en: "Clamperl’s pearls are exceedingly precious. They can be more than 10 times as costly as Shellder’s pearls.",
        fr: "La perle de Coquiperl est tellement précieuse\nqu’elle peut valoir plus de dix fois la valeur\nde celle de Kokiyas.",
        es: "La perla que contiene vale un potosí. De hecho,\nsu precio puede llegar a ser incluso más de diez\nveces superior al de la perla de Shellder.",
        it: "La perla di Clamperl è talmente preziosa da\nvalere fino a oltre dieci volte quella di Shellder.",
        de: "Seine Perle ist sehr kostbar. Es heißt, sie sei\nmindestens zehnmal so viel wert wie jene von\nMuschas.",
        "pt-br": "As pérolas de Clamperl são extremamente preciosas. Elas podem custar mais de 10 vezes mais que as pérolas de Shellder.",
        "zh-tw": "珍珠貝的珍珠非常貴重，\n據說價值是大舌貝\n所產珍珠的１０倍以上。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Sparkling Pearl",
                fr: "Perle Étincelante",
                es: "Perla Centelleante",
                it: "Perla Sfavillante",
                de: "Funkelperle",
                "pt-br": "Pérola Cintilante",
                "zh-tw": "珠珠生輝"
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
