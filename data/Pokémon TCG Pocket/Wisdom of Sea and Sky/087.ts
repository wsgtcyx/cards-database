import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Girafarig",
        "fr": "Girafarig",
        "es": "Girafarig",
        "it": "Girafarig",
        "de": "Girafarig",
        "pt-br": "Girafarig",
        "zh-tw": "麒麟奇",
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    description: {
        en: "Girafarig's tail has a small head. It instinctively\nbites at any foe that approaches the Pokémon\nfrom behind.",
        "fr": "La queue de Girafarig a une petite tête. C'est instinctivement\nmord tout ennemi qui s'approche du Pokémon\npar derrière.",
        "es": "La cola de Girafarig tiene una cabeza pequeña. Instintivamente\nmuerde a cualquier enemigo que se acerque al Pokémon\ndesde atrás.",
        "it": "La coda di Girafarig ha una testa piccola. È istintivo\nmorde qualsiasi nemico che si avvicina al Pokémon\nda dietro.",
        "de": "Girafarigs Schwanz hat einen kleinen Kopf. Es instinktiv\nbeißt jeden Gegner an, der sich dem Pokémon nähert\nvon hinten.",
        "pt-br": "A cauda do Girafarig tem uma cabeça pequena. Instintivamente\nmorde qualquer inimigo que se aproxime do Pokémon\npor trás.",
        "zh-tw": "吉拉法里格的尾巴有一個小頭。它本能地\n咬住任何接近神奇寶貝的敵人\n從後面。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Psybeam",
                "fr": "Rayon Psy",
                "es": "Psicorayo",
                "it": "Psicoraggio",
                "de": "Psybeam",
                "pt-br": "Raio Psíquico",
                "zh-tw": "心電束"
            },
            damage: 50,
            cost: ["Psychic", "Colorless", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
