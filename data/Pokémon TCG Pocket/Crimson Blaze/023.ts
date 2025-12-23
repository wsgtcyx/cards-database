import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Clawitzer",
        "fr": "Gamblast",
        "es": "Clawitzer",
        "it": "Clawitzer",
        "de": "Wummer",
        "pt-br": "Clawitzer",
        "zh-tw": "鋼炮臂蝦"
    },
    illustrator: "tetsuya koizumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    evolveFrom: {
        en: "Clauncher",
        "fr": "Flingouste",
        "es": "Clauncher",
        "it": "Clauncher",
        "de": "Scampisto",
        "pt-br": "Clauncher",
        "zh-tw": "鐵臂槍蝦"
    },
    description: {
        en: "The cannonballs of seawater that Clawitzer\nlaunches from its claw are powerful enough to\npunch through tanker hulls.",
        "fr": "Les boulets de canon d'eau de mer que Clawitzer\nles lancements depuis sa griffe sont suffisamment puissants pour\npercer les coques des pétroliers.",
        "es": "Las balas de agua de mar que Clawitzer\nLos lanzamientos de su garra son lo suficientemente poderosos como para\nperforar los cascos de los petroleros.",
        "it": "Le palle di cannone d'acqua di mare di quel Clawitzer\ni lanci dal suo artiglio sono abbastanza potenti da\nperforare gli scafi delle petroliere.",
        "de": "Die Kanonenkugeln aus Meerwasser, die Clawitzer\nAbschüsse aus seiner Klaue sind stark genug, um\nDurchschlagen von Tankerrümpfen.",
        "pt-br": "As balas de canhão de água do mar que Clawitzer\nos lançamentos de sua garra são poderosos o suficiente para\nperfurar cascos de petroleiros.",
        "zh-tw": "克勞維策的海水砲彈\n它的爪子發射的力量足以\n擊穿油輪船體。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Aqua Shower",
                "fr": "Douche aquatique",
                "es": "Ducha de agua",
                "it": "Doccia acquatica",
                "de": "Aqua-Dusche",
                "pt-br": "Chuveiro aquático",
                "zh-tw": "水之淋浴"
            },
            cost: ["Water"],
            effect: {
                en: "This attack does 20 damage to each of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的每隻神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
