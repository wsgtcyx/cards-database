import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/079",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/079",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/079",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/079",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/079",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/079",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/079"
    },
    name: {
        en: "Makuhita",
        fr: "Makuhita",
        es: "Makuhita",
        it: "Makuhita",
        de: "Makuhita",
        "pt-br": "Makuhita",
        "zh-tw": "幕下力士",
        ko: "마크탕",
        ja: "マクノシタ"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [296],
    stage: "Basic",
    description: {
        en: "It toughens up by slamming into thick trees over and over. It gains a sturdy body and dauntless spirit.",
        fr: "Il fonce sur des arbres larges pour fortifier son corps\nrobuste et son cœur vaillant.",
        es: "Endurece su cuerpo golpeando grandes árboles sin\nperder jamás el ánimo.",
        it: "Sbattendo a ripetizione contro enormi alberi, si\ncostruisce un corpo e uno spirito indistruttibili.",
        de: "Indem es wieder und wieder Bäume rammt,\nerhält es einen zähen Körper und einen\nstahlharten Willen."
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                en: "Magnum Punch",
                fr: "Poing Magnum",
                es: "Puño Mágnum",
                it: "Pugno Magnum",
                de: "Magnum Punch",
                "pt-br": "Soco Magnum",
                "zh-tw": "增量拳"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
