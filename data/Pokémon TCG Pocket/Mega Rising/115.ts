import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Spritzee",
        "fr": "Spritzée",
        "es": "Spritzee",
        "it": "Spritz",
        "de": "Spritzee",
        "pt-br": "Spritzee",
        "zh-tw": "雪碧"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "The scent its body gives off enraptures those\nwho smell it. Noble ladies had no shortage of\nlove for Spritzee.",
        "fr": "Le parfum que dégage son corps ravit ceux\nqui le sent. Les dames nobles ne manquaient pas de\namour pour Spritzee.",
        "es": "El olor que desprende su cuerpo embelesa a quienes\nquien lo huele. A las damas nobles no les faltaba\namor por Spritzee.",
        "it": "Il profumo che emana il suo corpo li incanta\nche l'annusano. Le nobildonne non mancavano\namore per Spritzee.",
        "de": "Der Duft, den sein Körper verströmt, verzaubert diese\nwer es riecht. An edlen Damen mangelte es nicht\nLiebe für Spritzee.",
        "pt-br": "O perfume que seu corpo exala encanta aqueles\nquem sente o cheiro. Senhoras nobres não tinham falta de\namor por Spritzee.",
        "zh-tw": "它的身體散發出的香味讓那些人著迷\n誰聞到了。貴族小姐們都不缺\n對Spritzee的愛。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Fairy Wind",
                "fr": "Fée du vent",
                "es": "viento de hadas",
                "it": "Vento fatato",
                "de": "Feenwind",
                "pt-br": "Vento Fada",
                "zh-tw": "仙風"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
