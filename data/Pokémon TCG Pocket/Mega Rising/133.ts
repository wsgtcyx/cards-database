import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Archen",
        "fr": "Archéen",
        "es": "arco",
        "it": "Archen",
        "de": "Archen",
        "pt-br": "Archen",
        "zh-tw": "始祖小鳥",
    },
    illustrator: "0313",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Plume Fossil",
        "fr": "Fossile de panache",
        "es": "Fósil de penacho",
        "it": "Fossile di pennacchio",
        "de": "Federfossil",
        "pt-br": "Fóssil de Pluma",
        "zh-tw": "羽毛化石",
    },
    description: {
        en: "Archen is said to be the ancestor of bird\nPokémon. It lived in treetops, eating berries\nand bug Pokémon.",
        "fr": "Archen serait l'ancêtre de l'oiseau\nPokémon. Il vivait à la cime des arbres et mangeait des baies.\net des Pokémon bugs.",
        "es": "Se dice que Archen es el antepasado del pájaro.\nPokémon. Vivía en las copas de los árboles, comiendo bayas.\ny Pokémon insecto.",
        "it": "Si dice che Archen sia l'antenato dell'uccello\nPokemon. Viveva sulle cime degli alberi, mangiando bacche\ne Pokémon coleottero.",
        "de": "Archen soll der Vorfahre des Vogels sein\nPokémon. Es lebte in Baumwipfeln und ernährte sich von Beeren\nund Käfer-Pokémon.",
        "pt-br": "Diz-se que Archen é o ancestral do pássaro\nPokémon. Vivia nas copas das árvores, comendo frutas\ne insetos Pokémon.",
        "zh-tw": "據說Archen是鳥類的祖先\n神奇寶貝。它住在樹頂，吃漿果\n和蟲子神奇寶貝。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Rock Throw",
                "fr": "Lancer de pierre",
                "es": "Lanzamiento de piedras",
                "it": "Lancio di roccia",
                "de": "Steinwurf",
                "pt-br": "Lançamento de pedra",
                "zh-tw": "扔石頭"
            },
            damage: 40,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
