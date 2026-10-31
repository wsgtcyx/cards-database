import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/025",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/025",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/025",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/025",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/025",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/025",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/025",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/025",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/SP1/025"
    },
    name: {
        en: "Sprigatito",
        fr: "Poussacha",
        es: "Sprigatito",
        "pt-br": "Sprigatito",
        "zh-tw": "新葉喵",
        ja: "ニャオハ",
        ko: "나오하",
        it: "Sprigatito",
        de: "Felori"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Leafage",
                fr: "Feuillage",
                es: "Follaje",
                it: "Fogliame",
                de: "Blattwerk",
                "pt-br": "Folhagem",
                "zh-tw": "樹葉",
                ja: "このは",
                ko: "나뭇잎"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out.",
        fr: "Ce Pokémon lave assidûment sa figure pour éviter que la composition de son pelage soyeux est proche de celle des plantes.",
        es: "Su pelo es suave y similar en composición a las plantas. Se lava la cara con diligencia para que no se le seque.",
        it: "Il suo pelo vellutato ha una composizione simile a quella delle piante. Si lava il muso di frequente per evitare che si inaridisca.",
        de: "Die Zusammensetzung seines weichen Fells ähnelt der von Pflanzen. Es reinigt penibel sein Gesicht, um zu verhindern, dass dieses austrocknet.",
        "pt-br": "A composição de seu pelo fofinho é similar à das plantas. Esse Pokémon lava o rosto frequentemente para evitar que fique ressecado.",
        "zh-tw": "蓬鬆的體毛在成分上近似於植物。會勤奮地洗臉，防止乾燥。",
        ja: "フワフワの 体毛は 植物に 近い 成分。 こまめに 顔を 洗って 乾燥を 防ぐ。",
        ko: "복슬복슬한 털은 식물에 가까운 성분으로\n이루어져 있다. 수시로 세수를 하면서\n건조해지는 것을 방지한다."
    }
};

export default card;
