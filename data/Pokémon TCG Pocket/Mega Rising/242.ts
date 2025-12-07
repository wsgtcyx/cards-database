import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Archeops",
        "fr": "Archéops",
        "es": "arqueops",
        "it": "Archeope",
        "de": "Archäops",
        "pt-br": "Arqueopo",
        "zh-tw": "始祖大鳥",
    },
    illustrator: "OKUBO",
    rarity: "One Star",
    category: "Pokemon",
    hp: 140,
    types: ["Fighting"],
    evolveFrom: {
        en: "Archen",
        "fr": "Archéen",
        "es": "arco",
        "it": "Archen",
        "de": "Archen",
        "pt-br": "Archen",
        "zh-tw": "阿爾欽"
    },
    description: {
        en: "Though capable of flight, Archeops was\napparently better at hunting on the ground.",
        "fr": "Bien que capable de voler, Archeops était\napparemment meilleur pour chasser au sol.",
        "es": "Aunque capaz de volar, Archeops era\naparentemente mejor cazando en el suelo.",
        "it": "Sebbene capace di volare, Archeops lo era\napparentemente più bravo a cacciare a terra.",
        "de": "Obwohl Archaeops flugfähig war, war er es\nOffensichtlich ist er besser darin, am Boden zu jagen.",
        "pt-br": "Embora capaz de voar, Arquéops era\naparentemente melhor em caçar no chão.",
        "zh-tw": "始祖鳥雖然能夠飛行，\n顯然更擅長在地面上狩獵。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Wild Spin",
                "fr": "Tour sauvage",
                "es": "Giro salvaje",
                "it": "Giro selvaggio",
                "de": "Wilder Spin",
                "pt-br": "Giro Selvagem",
                "zh-tw": "狂野旋轉"
            },
            cost: ["Fighting"],
            effect: {
                en: "This attack does 20 damage to each of your opponent's Pokémon. During your next turn, this Pokémon's Wild Spin attack does +20 damage to each of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. Lors de votre prochain tour, l'attaque Wild Spin de ce Pokémon inflige +20 dégâts à chacun des Pokémon de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. Durante tu próximo turno, el ataque Giro Salvaje de este Pokémon hace +20 de daño a cada uno de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Durante il tuo prossimo turno, l'attacco Wild Spin di questo Pokémon infligge +20 danni a ciascuno dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. Während deines nächsten Zuges fügt der Wild-Spin-Angriff dieses Pokémon jedem Pokémon deines Gegners +20 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente. Durante o seu próximo turno, o ataque Wild Spin deste Pokémon causará +20 de dano a cada um dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的每隻神奇寶貝造成 20 點傷害。在你的下一個回合中，這只神奇寶貝的狂野旋轉攻擊對對手的每隻神奇寶貝造成 +20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
