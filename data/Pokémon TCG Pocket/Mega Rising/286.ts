import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Altaria ex",
        "fr": "Méga Altaria ex",
        "es": "Mega Altaria ex",
        "it": "Mega Altaria es",
        "de": "Mega Altaria ex",
        "pt-br": "Mega Altaria ex",
        "zh-tw": "超級七夕青鳥 ex",
    },
    illustrator: "Susumu Maeya",
    rarity: "Three Star",
    category: "Pokemon",
    hp: 190,
    types: ["Psychic"],
    evolveFrom: {
        en: "Swablu",
        "fr": "Swablu",
        "es": "swablu",
        "it": "Swablu",
        "de": "Schwablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
    },
    description: {
        en: "On sunny days, it flies freely through the sky and\nblends into the clouds. It sings in a beautiful\nsoprano.",
        "fr": "Les jours ensoleillés, il vole librement dans le ciel et\nse fond dans les nuages. Il chante d'une belle manière\nsoprano.",
        "es": "En los días soleados, vuela libremente por el cielo y\nse funde con las nubes. canta en una hermosa\nsoprano.",
        "it": "Nelle giornate soleggiate vola liberamente nel cielo e\nsi fonde con le nuvole. Canta in modo bellissimo\nsoprano.",
        "de": "An sonnigen Tagen fliegt es frei durch den Himmel und\nverschmilzt mit den Wolken. Es singt wunderschön\nSopran.",
        "pt-br": "Em dias ensolarados, ele voa livremente pelo céu e\nse mistura com as nuvens. Ele canta de uma forma linda\nsoprano.",
        "zh-tw": "陽光明媚的日子裡，它在天空中自由自在地飛翔，\n融入雲彩。它用優美的歌聲歌唱\n女高音。"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Mega Harmony",
                "fr": "Méga Harmonie",
                "es": "Mega armonía",
                "it": "Megaarmonia",
                "de": "Mega Harmonie",
                "pt-br": "Mega Harmonia",
                "zh-tw": "超級和諧"
            },
            damage: 40,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "This attack does 30 more damage for each of your Benched Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
                "es": "Este ataque hace 30 daños más por cada uno de tus Pokémon en Banca.",
                "it": "Questo attacco infligge 30 danni in più per ciascuno dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt jedem Pokémon auf deiner Bank 30 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 danos a mais para cada um dos seus Pokémon no Banco.",
                "zh-tw": "此攻擊對你的每隻後備神奇寶貝造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
