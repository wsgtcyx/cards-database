import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/012",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/012",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/012",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/012"
    },
    name: {
        en: "Breloom",
        "fr": "Chapignon",
        "es": "Breloom",
        "it": "Breloom",
        "de": "Kapilz",
        "pt-br": "Breloom",
        "zh-tw": "斗笠菇",
        ja: "キノガッサ",
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Shroomish",
        "fr": "Balignon",
        "es": "Shroomish",
        "it": "Shroomish",
        "de": "Knilz",
        "pt-br": "Shroomish",
        "zh-tw": "蘑蘑菇",
        ja: "キノココ",
    },
    description: {
        en: "The seeds on its tail are made of toxic spores.\nIt knocks out foes with quick, virtually invisible\npunches.",
        "fr": "Les graines sur sa queue sont constituées de spores toxiques.\nIl assomme les ennemis avec des attaques rapides et pratiquement invisibles.\ncoups de poing.",
        "es": "Las semillas de su cola están hechas de esporas tóxicas.\nNoquea a los enemigos con movimientos rápidos y prácticamente invisibles.\ngolpes.",
        "it": "I semi sulla sua coda sono fatti di spore tossiche.\nMette KO i nemici con rapidità, praticamente invisibile\npugni.",
        "de": "Die Samen an seinem Schwanz bestehen aus giftigen Sporen.\nEs schlägt Feinde schnell und praktisch unsichtbar nieder\nSchläge.",
        "pt-br": "As sementes em sua cauda são feitas de esporos tóxicos.\nEle nocauteia inimigos com golpes rápidos e virtualmente invisíveis\nsocos.",
        "zh-tw": "它尾巴上的種子是由有毒孢子製成的。\n它以幾乎隱形的速度擊倒敵人\n拳頭。",
        ja: "尻尾の タネは 毒の 胞子で できている。 動きが 見えないほど 素早い パンチで 敵を 倒す。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Seed Bomb",
                "fr": "Bombe à graines",
                "es": "Bomba de semillas",
                "it": "Bomba di semi",
                "de": "Samenbombe",
                "pt-br": "Bomba de sementes",
                "zh-tw": "種子炸彈",
                ja: "タネばくだん"
            },
            damage: 40,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
