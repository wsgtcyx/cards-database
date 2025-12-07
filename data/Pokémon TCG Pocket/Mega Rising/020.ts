import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Virizion",
        "fr": "Virition",
        "es": "Virizión",
        "it": "Virizione",
        "de": "Virizion",
        "pt-br": "Virizão",
        "zh-tw": "維里吉翁"
    },
    illustrator: "Takeshi Nakamura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    description: {
        en: "It darts around opponents with a flurry of quick\nmovements, slicing them up with its horns.",
        "fr": "Il fonce autour de ses adversaires avec une rafale de coups rapides.\nmouvements, les tranchant avec ses cornes.",
        "es": "Se lanza alrededor de los oponentes con una ráfaga de movimientos rápidos.\nmovimientos, cortándolos con sus cuernos.",
        "it": "Sfreccia intorno agli avversari con una raffica di rapidità\nmovimenti, affettandoli con le sue corna.",
        "de": "Es schießt schnell um Gegner herum\nBewegungen und schneidet sie mit seinen Hörnern auf.",
        "pt-br": "Ele dispara em torno dos oponentes com uma onda de movimentos rápidos\nmovimentos, cortando-os com seus chifres.",
        "zh-tw": "它以一陣快速的速度繞過對手\n動作，用角將它們切碎。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sacred Sword",
                "fr": "Épée sacrée",
                "es": "Espada Sagrada",
                "it": "Spada Sacra",
                "de": "Heiliges Schwert",
                "pt-br": "Espada Sagrada",
                "zh-tw": "聖劍"
            },
            damage: 110,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't use Sacred Sword.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne pourra pas utiliser l'Épée Sacrée.",
                "es": "Durante tu próximo turno, este Pokémon no puede usar Espada Sagrada.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può usare la Spada Sacra.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon Sacred Sword nicht verwenden.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá usar Sacred Sword.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝不能使用聖劍。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
