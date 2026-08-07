import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/114",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/114",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/114",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/114",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/114",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/114",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/114"
    },
    name: {
        en: "Honchkrow",
        "fr": "Corboss",
        "es": "Honchkrow",
        "it": "Honchkrow",
        "de": "Kramshef",
        "pt-br": "Honchkrow",
        "zh-tw": "烏鴉頭頭",
    },
    illustrator: "Shiburingaru",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    evolveFrom: {
        en: "Murkrow",
        "fr": "Murkrow",
        "es": "Murkrow",
        "it": "Murkrow",
        "de": "Murkrow",
        "pt-br": "Murkrow",
        "zh-tw": "黑暗鴉",
    },
    description: {
        en: "It is merciless by nature. It is said that it never\nforgives the mistakes of its Murkrow followers.",
        "fr": "C'est impitoyable par nature. On dit que ce n'est jamais\npardonne les erreurs de ses adeptes de Murkrow.",
        "es": "Es despiadado por naturaleza. Se dice que nunca\nperdona los errores de sus seguidores de Murkrow.",
        "it": "È spietato per natura. Si dice che non accada mai\nperdona gli errori dei suoi seguaci Murkrow.",
        "de": "Es ist von Natur aus gnadenlos. Es wird gesagt, dass es nie so ist\nverzeiht die Fehler seiner Murkrow-Anhänger.",
        "pt-br": "É impiedoso por natureza. Diz-se que nunca\nperdoa os erros de seus seguidores de Murkrow.",
        "zh-tw": "它本質上是無情的。據說從來沒有\n原諒其暗鴉追隨者的錯誤。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Dark Cutter",
                "fr": "Coupeur sombre",
                "es": "Cortador oscuro",
                "it": "Taglierino Oscuro",
                "de": "Dunkler Schneider",
                "pt-br": "Cortador Sombrio",
                "zh-tw": "黑暗切割者"
            },
            damage: 60,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
