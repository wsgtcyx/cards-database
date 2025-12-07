import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Relicanth",
        "fr": "Relicanthe",
        "es": "relicanto",
        "it": "Relicanth",
        "de": "Relicanth",
        "pt-br": "Relicanto",
        "zh-tw": "遺角"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    description: {
        en: "Rock-hard scales and oil-filled swim bladders\nallow this Pokémon to survive the intense water\npressure of the deep sea.",
        "fr": "Des écailles dures comme la pierre et des vessies natatoires remplies d'huile\npermettre à ce Pokémon de survivre à l'eau intense\npression des profondeurs marines.",
        "es": "Escamas duras como piedras y vejigas natatorias llenas de aceite.\npermite que este Pokémon sobreviva al agua intensa\npresión de las profundidades del mar.",
        "it": "Scaglie dure come la roccia e vesciche natatorie piene di olio\npermetti a questo Pokémon di sopravvivere all'acqua intensa\npressione del mare profondo.",
        "de": "Steinharte Schuppen und ölgefüllte Schwimmblasen\nErlaube diesem Pokémon, das intensive Wasser zu überleben\nDruck der Tiefsee.",
        "pt-br": "Escamas duras e bexigas natatórias cheias de óleo\npermita que este Pokémon sobreviva à água intensa\npressão do mar profundo.",
        "zh-tw": "堅硬的鱗片和充滿油的魚鰾\n讓這只神奇寶貝在激烈的水中生存\n深海的壓力。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Take Down",
                "fr": "Démonter",
                "es": "Derribar",
                "it": "Prendere nota",
                "de": "Notieren",
                "pt-br": "Derrubar",
                "zh-tw": "記錄下來"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 10 dégâts.",
                "es": "Este Pokémon también se hace 10 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 10 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該神奇寶貝也會對其自身造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
