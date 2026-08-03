import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/163",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/163",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/163",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/163",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/163",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/163"
    },
    name: {
        en: "Mismagius ex",
        "fr": "Magirêve-ex",
        "es": "Mismagius ex",
        "it": "Mismagius-ex",
        "de": "Traunmagil-ex",
        "pt-br": "Mismagius ex",
        "zh-tw": "夢妖魔ex",
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Psychic"],
    evolveFrom: {
        en: "Misdreavus",
        "fr": "Misdreavus",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Misdreavus",
        "pt-br": "Misdreavus",
        "zh-tw": "夢妖",
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Magical Delusion",
                "fr": "Illusion magique",
                "es": "Delirio mágico",
                "it": "Magica illusione",
                "de": "Magische Täuschung",
                "pt-br": "Ilusão Mágica",
                "zh-tw": "魔法錯覺"
            },
            damage: 70,
            cost: ["Psychic", "Psychic"],
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
    retreat: 1
};
export default card;
