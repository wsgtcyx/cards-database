import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const englishEffect = "Flip 3 coins. This attack does 80 damage for each heads.";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/080",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/080",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/080",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/080",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/080",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/080",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/080"
    },
    name: {
        en: "Mega Houndoom ex", fr: "Méga-Démolosse-ex", es: "Mega-Houndoom ex", it: "Mega Houndoom-ex", de: "Mega-Hundemon-ex",
        "pt-br": "Mega Houndoom ex", "zh-tw": "超級黑魯加ex", ko: "메가헬가 ex", ja: "メガヘルガーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 190,
    types: ["Fire"],
    dexId: [229],
    evolveFrom: {
        en: "Houndour", fr: "Malosse", es: "Houndour", it: "Houndour", de: "Hunduster",
        "pt-br": "Houndour", "zh-tw": "戴魯比", ko: "델빌", ja: "デルビル"
    },
    stage: "Stage1",
    attacks: [{
        cost: ["Colorless", "Fire", "Fire"],
        name: {
            en: "Grimhound Flare", fr: "Feu du Molosse Infernal", es: "Llamarada del Cerbero", it: "Grimhound Flare", de: "Grimhound Flare",
            "pt-br": "Chama Malévola", "zh-tw": "地獄犬閃焰"
        },
        effect: {
            en: englishEffect,
            fr: "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
            es: "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
            it: englishEffect,
            de: englishEffect,
            "pt-br": "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara.",
            "zh-tw": "擲3次硬幣，造成正面出現的次數×80點傷害。"
        },
        damage: "80×"
    }],
    weaknesses: [{ type: "Water", value: "+20" }],
    retreat: 2,
    boosters: ["vol11"]
};

export default card;
