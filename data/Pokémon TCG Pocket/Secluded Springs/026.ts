import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Tynamo",
        "fr": "Tynamo",
        "es": "tinamo",
        "it": "Dinamo",
        "de": "Tynamo",
        "pt-br": "Tínamo",
        "zh-tw": "麻麻小魚",
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Lightning"],
    description: {
        en: "While one alone doesn't have much power,\na chain of many Tynamo can be as powerful\nas lightning.",
        "fr": "Même si un seul n'a pas beaucoup de pouvoir,\nune chaîne de plusieurs Tynamo peut être aussi puissante\ncomme la foudre.",
        "es": "Si bien uno solo no tiene mucho poder,\nuna cadena de muchos Tynamo puede ser tan poderosa\ncomo un relámpago.",
        "it": "Anche se uno solo non ha molto potere,\nuna catena di molti Tynamo può essere altrettanto potente\ncome un fulmine.",
        "de": "Während einer allein nicht viel Macht hat,\nEine Kette aus vielen Tynamos kann ebenso mächtig sein\nals Blitz.",
        "pt-br": "Embora um sozinho não tenha muito poder,\numa cadeia de muitos Tynamo pode ser tão poderosa\ncomo um raio.",
        "zh-tw": "雖然一個人的力量並不大，\n許多 Tynamo 的鏈條也可以同樣強大\n如閃電。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tiny Bolt",
                "fr": "Petit boulon",
                "es": "Pequeño perno",
                "it": "Piccolo Bolt",
                "de": "Winziger Bolzen",
                "pt-br": "Parafuso minúsculo",
                "zh-tw": "小螺栓"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 0
};
export default card;
