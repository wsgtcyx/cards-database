import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Dragonair",
        es: "Dragonair",
        "fr": "Dragonair",
        "it": "Dragonair",
        "de": "Dragonair",
        "pt-br": "Dragonair",
        "zh-tw": "港龍航空"
    },
    illustrator: "Shinya Komatsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    evolveFrom: {
        en: "Dratini",
        es: "Dratini",
        "fr": "Dratini",
        "it": "Dratini",
        "de": "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "德拉蒂尼"
    },
    description: {
        en: "They say that if it emits an aura from its whole\nbody, the weather will begin to change instantly.",
        es: "Dicen que, cuando su cuerpo desprende un aura,\nel tiempo empieza a cambiar inmediatamente.",
        "fr": "On dit que s'il émet une aura de tout son\ncorps, le temps commencera à changer instantanément.",
        "it": "Dicono che se emette un'aura dal suo insieme\ncorpo, il tempo inizierà a cambiare immediatamente.",
        "de": "Man sagt, wenn es als Ganzes eine Aura ausstrahlt\nKörper, das Wetter wird sich sofort ändern.",
        "pt-br": "Dizem que se emitir uma aura de todo o seu corpo\ncorpo, o tempo começará a mudar instantaneamente.",
        "zh-tw": "他們說，如果它全身散發出一種光環\n身體，天氣就會瞬間開始變化。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Shed Skin",
                es: "Mudar",
                "fr": "Peau perdue",
                "it": "Cambiare pelle",
                "de": "Haut abwerfen",
                "pt-br": "Pele derramada",
                "zh-tw": "脫皮"
            },
            cost: ["Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                es: "Cura 30 puntos de daño a este Pokémon.",
                "fr": "Soignez 30 dégâts de ce Pokémon.",
                "it": "Cura questo Pokémon da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 30 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。"
            }
        }],
    retreat: 2,
    boosters: ["vol10"],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }]
};
export default card;
