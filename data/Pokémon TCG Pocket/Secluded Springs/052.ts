import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Malamar",
        "fr": "Malamar",
        "es": "Malamar",
        "it": "Malamar",
        "de": "Malamar",
        "pt-br": "Malamar",
        "zh-tw": "烏賊王",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    evolveFrom: {
        en: "Inkay",
        "fr": "Inkay",
        "es": "tinta",
        "it": "Inkay",
        "de": "Inkay",
        "pt-br": "Inkay",
        "zh-tw": "印凱"
    },
    description: {
        en: "Gazing at its luminescent spots will quickly\ninduce a hypnotic state, putting the observer\nunder Malamar's control.",
        "fr": "Regarder ses taches luminescentes sera rapidement\ninduire un état hypnotique, mettant l'observateur\nsous le contrôle de Malamar.",
        "es": "Mirar sus puntos luminiscentes rápidamente\ninducir un estado hipnótico, poniendo al observador\nbajo el control de Malamar.",
        "it": "Osservare i suoi punti luminescenti sarà rapido\nindurre uno stato ipnotico, mettendo l'osservatore in uno stato di ipnosi\nsotto il controllo di Malamar.",
        "de": "Der Blick auf seine leuchtenden Punkte wird schnell sichtbar\neinen hypnotischen Zustand herbeiführen und den Beobachter versetzen\nunter Malamars Kontrolle.",
        "pt-br": "Olhar para seus pontos luminescentes irá rapidamente\ninduzir um estado hipnótico, colocando o observador\nsob o controle de Malamar.",
        "zh-tw": "凝視其發光點很快就會\n誘導催眠狀態，使觀察者\n在馬拉瑪的控制下。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Mental Surge",
                "fr": "Poussée mentale",
                "es": "Oleada mental",
                "it": "Impulso mentale",
                "de": "Mentaler Aufschwung",
                "pt-br": "Surto Mental",
                "zh-tw": "精神澎湃"
            },
            cost: ["Darkness"],
            effect: {
                en: "This attack does 20 damage to each of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的每隻神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
