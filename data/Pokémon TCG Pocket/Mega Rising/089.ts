import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Pachirisu",
        "fr": "Pachirisu",
        "es": "pachirisu",
        "it": "Pachirisu",
        "de": "Pachirisu",
        "pt-br": "Pachirisu",
        "zh-tw": "帕奇利茲"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "A pair may be seen rubbing their cheek pouches\ntogether in an effort to share stored electricity.",
        "fr": "On peut voir un couple se frotter les poches des joues\nensemble dans le but de partager l’électricité stockée.",
        "es": "Se puede ver a una pareja frotándose las mejillas.\njuntos en un esfuerzo por compartir la electricidad almacenada.",
        "it": "Si può vedere una coppia che si strofina le guance\ninsieme nel tentativo di condividere l’elettricità immagazzinata.",
        "de": "Man sieht ein Paar, das sich die Backentaschen reibt\nzusammen, um den gespeicherten Strom zu teilen.",
        "pt-br": "Um par pode ser visto esfregando as bolsas nas bochechas\njuntos em um esforço para compartilhar a eletricidade armazenada.",
        "zh-tw": "可以看到一對夫婦在摩擦頰囊\n共同努力共享儲存的電力。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Attack the Wound",
                "fr": "Attaquez la blessure",
                "es": "atacar la herida",
                "it": "Attacca la ferita",
                "de": "Greife die Wunde an",
                "pt-br": "Ataque a ferida",
                "zh-tw": "攻擊傷口"
            },
            damage: 30,
            cost: ["Lightning", "Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon has damage on it, this attack does 30 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire subit des dégâts, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival tiene daño, este ataque hace 30 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario ha dei danni su di sé, questo attacco infligge 30 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners Schaden hat, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente sofrer dano, este ataque causará 30 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢受到傷害，則這次攻擊造成的傷害增加 30 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
