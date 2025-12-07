import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Pangoro",
        "fr": "Pangoro",
        "es": "Pangoro",
        "it": "Pangoro",
        "de": "Pangoro",
        "pt-br": "Pangoro",
        "zh-tw": "流氓熊貓",
    },
    illustrator: "Uta",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    evolveFrom: {
        en: "Pancham",
        "fr": "Pancham",
        "es": "Pancham",
        "it": "Pancham",
        "de": "Pancham",
        "pt-br": "Pancham",
        "zh-tw": "潘查姆"
    },
    description: {
        en: "Using its leaf, Pangoro can predict the moves of\nits opponents. It strikes with punches that can\nturn a dump truck into scrap with just one hit.",
        "fr": "Grâce à sa feuille, Pangoro peut prédire les mouvements de\nses adversaires. Il frappe avec des coups qui peuvent\ntransformez un camion-benne en ferraille d'un seul coup.",
        "es": "Usando su hoja, Pangoro puede predecir los movimientos de\nsus oponentes. Golpea con puñetazos que pueden\nConvierte un camión volquete en chatarra con un solo golpe.",
        "it": "Usando la sua foglia, Pangoro può prevedere le mosse di\ni suoi avversari. Colpisce con pugni che possono\ntrasformare un autocarro con cassone ribaltabile in rottame con un solo colpo.",
        "de": "Mithilfe seines Blattes kann Pangoro die Bewegungen von vorhersagen\nseine Gegner. Es schlägt mit Schlägen zu, die es können\nVerwandle einen Muldenkipper mit nur einem Schlag in Schrott.",
        "pt-br": "Usando sua folha, Pangoro pode prever os movimentos de\nseus adversários. Ele ataca com socos que podem\ntransforme um caminhão basculante em sucata com apenas um golpe.",
        "zh-tw": "Pangoro 可以利用它的葉子來預測\n它的對手。它的拳頭可以擊打\n只需一擊，即可將一輛自卸卡車變成廢品。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Overdrive Smash",
                "fr": "Smash surmultiplié",
                "es": "Golpe sobremarcha",
                "it": "Scontro overdrive",
                "de": "Overdrive-Smash",
                "pt-br": "Overdrive quebra",
                "zh-tw": "超速粉碎"
            },
            damage: 30,
            cost: ["Darkness"],
            effect: {
                en: "During your next turn, this Pokémon's Overdrive Smash attack does +30 damage.",
                "fr": "Lors de votre prochain tour, l'attaque Overdrive Smash de ce Pokémon inflige +30 dégâts.",
                "es": "Durante tu próximo turno, el ataque Overdrive Smash de este Pokémon hace +30 de daño.",
                "it": "Durante il tuo prossimo turno, l'attacco Overdrive Smash di questo Pokémon infligge +30 danni.",
                "de": "Während deines nächsten Zuges verursacht der Overdrive-Smash-Angriff dieses Pokémon +30 Schaden.",
                "pt-br": "Durante o seu próximo turno, o ataque Overdrive Smash deste Pokémon causa +30 de dano.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝的超速粉碎攻擊造成+30點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
