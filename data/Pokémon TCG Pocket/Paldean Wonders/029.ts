import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/029"
    },
    name: {
        en: "Cetoddle",
        fr: "Piétacé",
        es: "Cetoddle",
        it: "Cetoddle",
        de: "Flaniwal",
        "pt-br": "Cetoddle",
        "zh-tw": "走鯨",
        pt: "Cetoddle",
        'es-mx': "Cetoddle"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [974],
    description: {
        en: "It lives in frigid regions in pods of five or so individuals. It loves the minerals found in snow and ice.",
        "fr": "Il vit dans les régions glaciales en groupes d'environ cinq individus. Il aime les minéraux présents dans la neige et la glace.",
        "es": "Vive en regiones frías en grupos de aproximadamente cinco individuos. Le encantan los minerales que se encuentran en la nieve y el hielo.",
        "it": "Vive nelle regioni gelide in branchi di circa cinque individui. Ama i minerali presenti nella neve e nel ghiaccio.",
        "de": "Es lebt in kalten Regionen in Gruppen von etwa fünf Individuen. Es liebt die Mineralien, die in Schnee und Eis vorkommen.",
        "pt-br": "Vive em regiões frias em grupos de cinco ou mais indivíduos. Adora os minerais encontrados na neve e no gelo.",
        "zh-tw": "它生活在寒冷地區，每群大約有五隻。牠喜歡在雪和冰中發現的礦物質。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Icicle Missile",
                fr: "Missile Stalactite",
                es: "Misil Carámbano",
                it: "Missilghiaccio",
                de: "Eiszapfenrakete",
                "pt-br": "Míssil de gelo",
                "zh-tw": "冰柱飛彈",
                pt: "Míssil Gélido"
            },
            damage: 60,
            cost: ["Water", "Water", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
