import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Galvantula",
        "fr": "Galvantule",
        "es": "Galvántula",
        "it": "Galvantula",
        "de": "Galvantula",
        "pt-br": "Galvântula",
        "zh-tw": "電蜘蛛",
    },
    illustrator: "Yumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    evolveFrom: {
        en: "Joltik",
        "fr": "Joltik",
        "es": "Joltik",
        "it": "Joltik",
        "de": "Joltik",
        "pt-br": "Joltik",
        "zh-tw": "電電蟲",
    },
    description: {
        en: "It lays traps of electrified threads near the nests\nof bird Pokémon, aiming to snare chicks that are\nnot yet good at flying.",
        "fr": "Il pose des pièges de fils électrifiés à proximité des nids\nde Pokémon oiseaux, visant à piéger les poussins qui sont\npas encore doué pour voler.",
        "es": "Pone trampas de hilos electrificados cerca de los nidos.\nde Pokémon pájaro, con el objetivo de atrapar polluelos que son\nTodavía no soy bueno volando.",
        "it": "Piazza trappole di fili elettrizzati vicino ai nidi\ndi Pokémon uccello, con l'obiettivo di intrappolare i pulcini che lo sono\nnon ancora bravo a volare.",
        "de": "Es legt Fallen aus elektrifizierten Fäden in der Nähe der Nester\nvon Vogel-Pokémon, die darauf abzielen, Küken zu fangen\nnoch nicht gut im Fliegen.",
        "pt-br": "Coloca armadilhas de fios eletrificados perto dos ninhos\nde Pokémon pássaros, com o objetivo de capturar filhotes que estão\nainda não é bom em voar.",
        "zh-tw": "它在巢穴附近放置帶電線陷阱\n鳥類神奇寶貝，旨在誘捕小雞\n還不擅長飛行。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electro Ball",
                "fr": "Boule Électro",
                "es": "Electrobola",
                "it": "Palla elettrica",
                "de": "Elektroball",
                "pt-br": "Bola Eletro",
                "zh-tw": "電球"
            },
            damage: 50,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 0
};
export default card;
