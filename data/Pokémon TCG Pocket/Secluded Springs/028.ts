import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Eelektross",
        "fr": "Électross",
        "es": "Elektross",
        "it": "Elektross",
        "de": "Elektross",
        "pt-br": "Eletross",
        "zh-tw": "電鰻"
    },
    illustrator: "tetsuya koizumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Lightning"],
    evolveFrom: {
        en: "Eelektrik",
        "fr": "Électricité",
        "es": "eléctrico",
        "it": "Elektrik",
        "de": "Elektrik",
        "pt-br": "Elétrico",
        "zh-tw": "電氣技術"
    },
    description: {
        en: "They crawl out of the ocean using their arms.\nThey will attack prey on shore and immediately\ndrag it into the ocean.",
        "fr": "Ils rampent hors de l'océan en utilisant leurs bras.\nIls attaqueront leurs proies à terre et immédiatement\ntraînez-le dans l'océan.",
        "es": "Salen del océano arrastrándose usando sus brazos.\nAtacarán a sus presas en la orilla e inmediatamente\narrastrarlo al océano.",
        "it": "Strisciano fuori dall'oceano usando le braccia.\nAttaccheranno la preda a terra e immediatamente\ntrascinalo nell'oceano.",
        "de": "Sie kriechen mit ihren Armen aus dem Meer.\nSie greifen ihre Beute sofort an Land an\nZieh es ins Meer.",
        "pt-br": "Eles rastejam para fora do oceano usando os braços.\nEles atacarão as presas na costa e imediatamente\narraste-o para o oceano.",
        "zh-tw": "他們用手臂從海裡爬出來。\n他們會立即攻擊岸上的獵物\n將其拖入大海。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Wild Charge",
                "fr": "Charge sauvage",
                "es": "Carga salvaje",
                "it": "Carica selvaggia",
                "de": "Wilder Angriff",
                "pt-br": "Carga Selvagem",
                "zh-tw": "狂野衝鋒"
            },
            damage: 120,
            cost: ["Lightning", "Lightning", "Colorless"],
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 20 dégâts.",
                "es": "Este Pokémon también se hace 20 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 20 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
