import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Galvantula",
        "fr": "Galvantule",
        "es": "Galvántula",
        "it": "Galvantula",
        "de": "Galvantula",
        "pt-br": "Galvântula",
        "zh-tw": "電蜘蛛",
    },
    illustrator: "otumami",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    evolveFrom: {
        en: "Joltik",
        "fr": "Joltik",
        "es": "Joltik",
        "it": "Joltik",
        "de": "Joltik",
        "pt-br": "Joltik",
        "zh-tw": "電電蟲",
    },
    description: {
        en: "It launches electrified fur from its abdomen as its\nmeans of attack. Opponents hit by the fur could\nbe in for three full days and nights of paralysis.",
        "fr": "Il lance une fourrure électrifiée depuis son abdomen alors qu'il\nmoyens d'attaque. Les adversaires touchés par la fourrure pourraient\npasser trois jours et nuits complets de paralysie.",
        "es": "Lanza pelaje electrificado desde su abdomen mientras su\nmedios de ataque. Los oponentes golpeados por la piel podrían\nEstaré dentro de tres días y noches completos de parálisis.",
        "it": "Lancia la pelliccia elettrizzata dal suo addome\nmezzo di attacco. Gli avversari colpiti dalla pelliccia potrebbero\nessere dentro per tre giorni e notti interi di paralisi.",
        "de": "Es schleudert elektrifiziertes Fell aus seinem Hinterleib\nAngriffsmittel. Vom Fell getroffene Gegner könnten\ndrei volle Tage und Nächte lang gelähmt sein.",
        "pt-br": "Ele lança pelos eletrificados de seu abdômen enquanto\nmeio de ataque. Os oponentes atingidos pelo pelo poderiam\npassar três dias inteiros e três noites de paralisia.",
        "zh-tw": "它從腹部發射帶電的毛皮作為其\n攻擊手段。被毛皮擊中的對手可以\n整整癱瘓了三天三夜。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electric Shock",
                "fr": "Choc électrique",
                "es": "Descarga eléctrica",
                "it": "Scossa elettrica",
                "de": "Stromschlag",
                "pt-br": "Choque Elétrico",
                "zh-tw": "電擊"
            },
            damage: 70,
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "Discard all Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Défaussez toute l'Énergie attachée à ce Pokémon. Le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Descarta toda la Energía unida a este Pokémon. El Pokémon Activo de tu rival ahora está Paralizado.",
                "it": "Scarta tutte le Energie assegnate a questo Pokémon. Il Pokémon attivo del tuo avversario è ora paralizzato.",
                "de": "Lege alle an dieses Pokémon angelegten Energien ab. Das aktive Pokémon deines Gegners ist jetzt gelähmt.",
                "pt-br": "Descarte todas as Energias ligadas a este Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
                "zh-tw": "丟棄該神奇寶貝所附帶的所有能量。你對手的主動神奇寶貝現在陷入麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 0
};
export default card;
