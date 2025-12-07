import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Sunkern",
        "fr": "Englouti",
        "es": "hundido",
        "it": "Affondato",
        "de": "Sunkern",
        "pt-br": "Afundado",
        "zh-tw": "向日種子",
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Grass"],
    description: {
        en: "It suddenly falls out of the sky in the morning.\nKnowing it's weak, it simply feeds until it evolves.",
        "fr": "Il tombe soudainement du ciel le matin.\nSachant qu'il est faible, il se nourrit simplement jusqu'à ce qu'il évolue.",
        "es": "Cae repentinamente del cielo por la mañana.\nSabiendo que es débil, simplemente se alimenta hasta evolucionar.",
        "it": "Cade improvvisamente dal cielo al mattino.\nSapendo che è debole, si nutre semplicemente finché non si evolve.",
        "de": "Es fällt morgens plötzlich vom Himmel.\nDa es weiß, dass es schwach ist, ernährt es sich einfach, bis es sich entwickelt.",
        "pt-br": "De repente, cai do céu pela manhã.\nSabendo que está fraco, simplesmente se alimenta até evoluir.",
        "zh-tw": "早上它突然從天上掉下來。\n它知道自己很弱，只是簡單地進食，直到進化為止。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Blot",
                "fr": "Tache",
                "es": "Mancha",
                "it": "Macchia",
                "de": "Fleck",
                "pt-br": "Borrão",
                "zh-tw": "印跡"
            },
            damage: 20,
            cost: ["Grass"],
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                "fr": "Soignez 10 dégâts de ce Pokémon.",
                "es": "Cura 10 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 10 danni.",
                "de": "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
