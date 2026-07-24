import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/001"
    },
    name: {
        en: "Surskit",
        fr: "Arakdo",
        es: "Surskit",
        it: "Surskit",
        de: "Gehweiher",
        "pt-br": "Surskit",
        "zh-tw": "溜溜糖球",
        ko: "비구술",
        ja: "アメタマ"
    },
    illustrator: "Yoriyuki Ikegami",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [283],
    stage: "Basic",
    description: {
        en: "It secretes a thick, sweet-scented syrup from the tip of its head. It lives on weed-choked ponds.",
        fr: "Il sécrète un sirop épais et parfumé du bout de sa tête. Il vit dans les étangs obstrués par les mauvaises herbes.",
        es: "Segrega un jarabe espeso y de aroma dulce desde la punta de su cabeza. Vive en estanques llenos de maleza.",
        it: "Secerne uno sciroppo denso e profumato dalla punta della testa. Vive in stagni invasi dalle erbacce.",
        de: "Aus der Spitze seines Kopfes sondert es einen dicken, süß duftenden Sirup ab. Es lebt in Teichen, die von Unkraut überwuchert sind.",
        "pt-br": "Ele secreta um xarope espesso e de aroma adocicado na ponta da cabeça. Vive em lagos cheios de ervas daninhas.",
        "zh-tw": "它的頭尖會分泌出濃稠的、帶有甜味的糖漿。它生活在雜草叢生的池塘裡。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
