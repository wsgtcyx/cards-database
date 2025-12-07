import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Zebstrika",
        "fr": "Zebstrika",
        "es": "Zebstrika",
        "it": "Zebstrika",
        "de": "Zebstrika",
        "pt-br": "Zebstrika",
        "zh-tw": "澤布斯特里卡"
    },
    illustrator: "Hajime Kusajima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Blitzle",
        "fr": "Blitz",
        "es": "bombardeo",
        "it": "Blitz",
        "de": "Blitzle",
        "pt-br": "Blitz",
        "zh-tw": "閃電戰"
    },
    description: {
        en: "When this ill-tempered Pokémon runs wild, it\nshoots lightning from its mane in all directions.",
        "fr": "Lorsque ce Pokémon colérique se déchaîne, il\nlance des éclairs depuis sa crinière dans toutes les directions.",
        "es": "Cuando este Pokémon de mal genio se vuelve loco,\nLanza rayos desde su melena en todas direcciones.",
        "it": "Quando questo Pokémon irascibile si scatena, lo fa\nspara fulmini dalla criniera in tutte le direzioni.",
        "de": "Wenn dieses schlecht gelaunte Pokémon wild herumläuft, ist es\nschießt Blitze aus seiner Mähne in alle Richtungen.",
        "pt-br": "Quando este Pokémon mal-humorado corre solto, ele\ndispara raios de sua crina em todas as direções.",
        "zh-tw": "當這只脾氣暴躁的神奇寶貝瘋狂時，它\n從鬃毛中向四面八方射出閃電。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Head Bolt",
                "fr": "Boulon à tête",
                "es": "Perno de cabeza",
                "it": "Bullone di testa",
                "de": "Kopfschraube",
                "pt-br": "Parafuso de cabeça",
                "zh-tw": "頭部螺栓"
            },
            damage: 70,
            cost: ["Lightning", "Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
