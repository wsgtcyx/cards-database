import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Dartrix",
        "fr": "Dartrix",
        "es": "dartrix",
        "it": "Dartrix",
        "de": "Dartrix",
        "pt-br": "Dartrix",
        "zh-tw": "投羽梟",
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Rowlet",
        "fr": "Rowlet",
        "es": "Rowlet",
        "it": "Rowlet",
        "de": "Rowlet",
        "pt-br": "Rowlet",
        "zh-tw": "木木梟",
    },
    description: {
        en: "This narcissistic Pokémon is a clean freak. If you\ndon't groom it diligently, it may stop listening to you.",
        "fr": "Ce Pokémon narcissique est un monstre propre. Si vous\nne le soignez pas avec diligence, il pourrait cesser de vous écouter.",
        "es": "Este Pokémon narcisista es un fanático de la limpieza. si tu\nno lo arregles con diligencia, puede que deje de escucharte.",
        "it": "Questo Pokémon narcisistico è un maniaco della pulizia. Se tu\nnon pulirlo diligentemente, potrebbe smettere di ascoltarti.",
        "de": "Dieses narzisstische Pokémon ist ein Sauberkeitsfreak. Wenn Sie\nPflegen Sie es nicht fleißig, es könnte sein, dass es Ihnen nicht mehr zuhört.",
        "pt-br": "Este Pokémon narcisista é uma aberração limpa. Se você\nnão o prepare diligentemente, ele pode parar de ouvi-lo.",
        "zh-tw": "這只自戀的神奇寶貝是個乾淨的怪人。如果你\n不要勤奮地梳理它，它可能會不再聽你的。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Skill Dive",
                "fr": "Plongée de compétence",
                "es": "Buceo de habilidad",
                "it": "Immersione di abilità",
                "de": "Geschicklichkeitstauchen",
                "pt-br": "Mergulho de Habilidade",
                "zh-tw": "技能潛水"
            },
            cost: ["Grass"],
            effect: {
                en: "This attack does 20 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 20 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
