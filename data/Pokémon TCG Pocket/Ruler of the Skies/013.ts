import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/013"
    },
    name: {
        en: "Shelmet",
        fr: "Escargaume",
        es: "Shelmet",
        it: "Shelmet",
        de: "Schnuthelm",
        "pt-br": "Shelmet",
        "zh-tw": "小嘴蝸",
        ko: "쪼마리",
        ja: "チョボマキ"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    dexId: [616],
    stage: "Basic",
    description: {
        en: "It has a strange physiology that responds to electricity. When together with Karrablast, Shelmet evolves for some reason.",
        fr: "Il a l’étrange faculté de réagir à l’énergie\nélectrique. On ne sait trop pourquoi, mais quand\nil se trouve aux côtés de Carabing, il évolue.",
        es: "Debido a su peculiar constitución, reacciona\nante la energía eléctrica. Por alguna misteriosa\nrazón, evoluciona en presencia de Karrablast.",
        it: "Il suo corpo reagisce misteriosamente all’energia\nelettrica. Pare che si evolva se si trova in\npresenza di Karrablast.",
        de: "Sein Körper reagiert unerklärlicherweise auf\nElektrizität. Es heißt, die Anwesenheit von\nLaukaps löse bei ihm die Entwicklung aus.",
        "zh-tw": "有著會對電能產生反應\n的奇異體質。不知為何，\n和蓋蓋蟲待在一起就會進化。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Seashell Attack"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
