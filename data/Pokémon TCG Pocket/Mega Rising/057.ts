import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Wailord",
        "fr": "Wailord",
        "es": "señor de la guerra",
        "it": "Wailord",
        "de": "Wailord",
        "pt-br": "Wailord",
        "zh-tw": "吼鯨王",
    },
    illustrator: "KIYOTAKA OSHIYAMA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 200,
    types: ["Water"],
    evolveFrom: {
        en: "Wailmer",
        "fr": "Wailmer",
        "es": "wailmer",
        "it": "Wailmer",
        "de": "Wailmer",
        "pt-br": "Wailmer",
        "zh-tw": "吼吼鯨",
    },
    description: {
        en: "The biggest of all Pokémon. It can dive to a depth\nof almost 10,000 feet on only one breath.",
        "fr": "Le plus gros de tous les Pokémon. Il peut plonger en profondeur\nde près de 10 000 pieds en une seule respiration.",
        "es": "El más grande de todos los Pokémon. Puede sumergirse a una profundidad\nde casi 10.000 pies con una sola respiración.",
        "it": "Il più grande di tutti i Pokémon. Può immergersi in profondità\ndi quasi 10.000 piedi con un solo respiro.",
        "de": "Das größte aller Pokémon. Es kann bis in eine Tiefe tauchen\nvon fast 10.000 Fuß mit nur einem Atemzug.",
        "pt-br": "O maior de todos os Pokémon. Ele pode mergulhar a uma profundidade\nde quase 10.000 pés com apenas uma respiração.",
        "zh-tw": "所有神奇寶貝中最大的。它可以潛到很深的地方\n只需一口氣就可以飛近 10,000 英尺。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Whale Pump",
                "fr": "Pompe à baleines",
                "es": "Bomba de ballena",
                "it": "Pompa della balena",
                "de": "Walpumpe",
                "pt-br": "Bomba Baleia",
                "zh-tw": "鯨魚泵"
            },
            damage: 60,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack does 10 more damage for each {W} Energy attached to this Pokémon.",
                "fr": "Cette attaque inflige 10 dégâts supplémentaires pour chaque {W} Énergie attachée à ce Pokémon.",
                "es": "Este ataque hace 10 daños más por cada Energía {W} unida a este Pokémon.",
                "it": "Questo attacco infligge 10 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
                "de": "Dieser Angriff fügt 10 weitere Schadenspunkte für jede an dieses Pokémon angelegte {W}-Energie zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
                "zh-tw": "該寶可夢身上每附加一個 {W} 能量，該攻擊就會造成 10 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 4
};
export default card;
