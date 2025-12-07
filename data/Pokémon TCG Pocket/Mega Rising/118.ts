import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Slurpuff",
        "fr": "Slurpuff",
        "es": "sorbete",
        "it": "Slurpuff",
        "de": "Slurpuff",
        "pt-br": "Slurpuff",
        "zh-tw": "胖甜妮",
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    evolveFrom: {
        en: "Swirlix",
        "fr": "Tourbillon",
        "es": "remolino",
        "it": "Swirlix",
        "de": "Swirlix",
        "pt-br": "Redemoinho",
        "zh-tw": "漩渦"
    },
    description: {
        en: "Slurpuff's fur contains a lot of air, making it soft\nto the touch and lighter than it looks.",
        "fr": "La fourrure de Slurpuff contient beaucoup d'air, ce qui la rend douce\nau toucher et plus léger qu'il n'y paraît.",
        "es": "El pelaje de Slurpuff contiene mucho aire, lo que lo hace suave.\nAl tacto y más ligero de lo que parece.",
        "it": "La pelliccia di Slurpuff contiene molta aria, il che la rende morbida\nal tatto e più leggero di quanto sembri.",
        "de": "Das Fell von Slurpuff enthält viel Luft und ist dadurch weich\nfühlt sich angenehm an und ist leichter als es aussieht.",
        "pt-br": "O pelo do Slurpuff contém muito ar, o que o torna macio\nao toque e mais leve do que parece.",
        "zh-tw": "slurpuff的皮毛含有大量空氣，使其柔軟\n摸起來比看起來更輕。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Draining Kiss",
                "fr": "Baiser drainant",
                "es": "Beso drenante",
                "it": "Bacio drenante",
                "de": "Erschöpfender Kuss",
                "pt-br": "Drenando Beijo",
                "zh-tw": "排水之吻"
            },
            damage: 50,
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                "fr": "Soignez 30 dégâts de ce Pokémon.",
                "es": "Cura 30 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 30 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 3
};
export default card;
