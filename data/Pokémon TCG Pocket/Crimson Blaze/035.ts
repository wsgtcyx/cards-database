import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Spritzee",
        "fr": "Fluvetine",
        "es": "Spritzee",
        "it": "Spritzee",
        "de": "Parfi",
        "pt-br": "Spritzee",
        "zh-tw": "粉香香"
    },
    illustrator: "Tika Matsuno",
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
                en: "Sweet Scent",
                "fr": "Parfum doux",
                "es": "Dulce aroma",
                "it": "Dolce profumo",
                "de": "Süßer Duft",
                "pt-br": "Aroma Doce",
                "zh-tw": "甜香"
            },
            cost: ["Psychic"],
            effect: {
                en: "Heal 20 damage from 1 of your Pokémon.",
                "fr": "Soignez 20 dégâts d'un de vos Pokémon.",
                "es": "Cura 20 daños de 1 de tus Pokémon.",
                "it": "Cura 20 danni da 1 dei tuoi Pokémon.",
                "de": "Heile 20 Schadenspunkte bei 1 deiner Pokémon.",
                "pt-br": "Cure 20 de dano de 1 dos seus Pokémon.",
                "zh-tw": "治療你的 1 只神奇寶貝造成的 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
