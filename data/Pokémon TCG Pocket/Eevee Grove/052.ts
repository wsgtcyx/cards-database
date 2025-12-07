import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Dragonair",
        "fr": "Dragonair",
        "es": "Dragonair",
        "it": "Dragonair",
        "de": "Dragonair",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Dragon"],
    evolveFrom: {
        en: "Dratini",
        "fr": "Dratini",
        "es": "Dratini",
        "it": "Dratini",
        "de": "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "德拉蒂尼"
    },
    description: {
        en: "They say that if it emits an aura from its whole\nbody, the weather will begin to change instantly.",
        "fr": "On dit que s'il émet une aura de tout son\ncorps, le temps commencera à changer instantanément.",
        "es": "Dicen que si emite un aura por toda su\ncuerpo, el clima comenzará a cambiar instantáneamente.",
        "it": "Dicono che se emette un'aura dal suo insieme\ncorpo, il tempo inizierà a cambiare immediatamente.",
        "de": "Man sagt, wenn es als Ganzes eine Aura ausstrahlt\nKörper, das Wetter wird sich sofort ändern.",
        "pt-br": "Dizem que se emitir uma aura de todo o seu corpo\ncorpo, o tempo começará a mudar instantaneamente.",
        "zh-tw": "他們說，如果它全身散發出一種光環\n身體，天氣就會瞬間開始變化。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Waterfall",
                "fr": "Cascade",
                "es": "Cascada",
                "it": "Cascata",
                "de": "Wasserfall",
                "pt-br": "Cachoeira",
                "zh-tw": "瀑布"
            },
            damage: 60,
            cost: ["Water", "Lightning"]
        }],
    retreat: 1
};
export default card;
