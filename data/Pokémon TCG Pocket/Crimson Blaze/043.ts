import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Mienfoo",
        "fr": "Kungfouine",
        "es": "Mienfoo",
        "it": "Mienfoo",
        "de": "Lin-Fu",
        "pt-br": "Mienfoo",
        "zh-tw": "功夫鼬"
    },
    illustrator: "yuu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Fighting"],
    description: {
        en: "Though small, Mienfoo's temperament is fierce.\nAny creature that approaches Mienfoo carelessly\nwill be greeted with a flurry of graceful attacks.",
        "fr": "Bien que petit, le tempérament de Mienfoo est féroce.\nToute créature qui s'approche négligemment de Mienfoo\nsera accueilli par une rafale d’attaques gracieuses.",
        "es": "Aunque pequeño, el temperamento de Mienfoo es feroz.\nCualquier criatura que se acerque a Mienfoo descuidadamente.\nserá recibido con una ráfaga de elegantes ataques.",
        "it": "Sebbene piccolo, il temperamento di Mienfoo è feroce.\nQualsiasi creatura che si avvicina a Mienfoo con noncuranza\nsarà accolto con una raffica di attacchi aggraziati.",
        "de": "Obwohl klein, ist Mienfoos Temperament wild.\nJedes Lebewesen, das sich Mienfoo unvorsichtig nähert\nwird mit einer Flut anmutiger Angriffe begrüßt.",
        "pt-br": "Embora pequeno, o temperamento de Mienfoo é feroz.\nQualquer criatura que se aproxime de Mienfoo descuidadamente\nserá recebido com uma enxurrada de ataques elegantes.",
        "zh-tw": "米恩富雖然個子小，但性情卻很兇猛。\n任何不小心接近 Mienfoo 的生物\n將會受到一連串優雅的攻擊。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Chop",
                "fr": "Hacher",
                "es": "Cortar",
                "it": "Taglio",
                "de": "Hacken",
                "pt-br": "Cortar",
                "zh-tw": "劈"
            },
            damage: 30,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
