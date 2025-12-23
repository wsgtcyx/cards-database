import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Mienshao",
        "fr": "Shaofouine",
        "es": "Mienshao",
        "it": "Mienshao",
        "de": "Wie-Shu",
        "pt-br": "Mienshao",
        "zh-tw": "師父鼬"
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Mienfoo",
        "fr": "Kungfouine",
        "es": "Mienfoo",
        "it": "Mienfoo",
        "de": "Lin-Fu",
        "pt-br": "Mienfoo",
        "zh-tw": "功夫鼬"
    },
    description: {
        en: "Delivered at blinding speeds, kicks from this\nPokémon can shatter massive boulders into\ntiny pieces.",
        "fr": "Livré à des vitesses aveuglantes, ça donne un coup de pied\nLes Pokémon peuvent briser d'énormes rochers\nde minuscules morceaux.",
        "es": "Entregado a velocidades cegadoras, patadas desde este\nLos Pokémon pueden romper enormes rocas\npedazos diminutos.",
        "it": "Consegnato a velocità accecante, calcia da questo\nI Pokémon possono frantumare enormi massi\npiccoli pezzi.",
        "de": "Mit unglaublicher Geschwindigkeit ausgeführt, Kicks davon\nPokémon können riesige Felsbrocken zerschmettern\nwinzige Stücke.",
        "pt-br": "Entregue em velocidades ofuscantes, chutes disso\nPokémon podem quebrar pedras enormes em\npequenos pedaços.",
        "zh-tw": "以令人眼花繚亂的速度交付，由此而來\n神奇寶貝可以將巨大的巨石粉碎成\n小碎片。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Low Sweep",
                "fr": "Faible balayage",
                "es": "Barrido bajo",
                "it": "Spazzata bassa",
                "de": "Niedriger Sweep",
                "pt-br": "Varredura baixa",
                "zh-tw": "低掃頻"
            },
            damage: 50,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
