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
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/079",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/079",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/079"
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
        de: "Indem es wieder und wieder Bäume rammt,\nerhält es einen zähen Körper und einen\nstahlharten Willen.",
        "pt-br": "Ele se torna cada vez mais duro ao bater sem parar em árvores grandes. Assim, ganha um corpo resistente e um espírito destemido.",
        "zh-tw": "會不斷撞擊大樹\n來鍛鍊強韌的身體\n和不氣餒的心。",
        ja: "大木に 何度も 体当たりして 強靭な 体と くじけない 心を 鍛え上げるのだ。",
        ko: "큰 나무에 몇 번이나 몸통박치기를 하며\n강인한 몸과 굴하지 않는 마음을 단련한다."
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
                "zh-tw": "增量拳",
                ja: "マグナムパンチ",
                ko: "매그넘펀치"
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
