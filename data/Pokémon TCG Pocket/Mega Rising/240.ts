import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/240",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/240",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/240",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/240",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/240",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/240"
    },
    name: {
        en: "Makuhita",
        "fr": "Makuhita",
        "es": "makuhita",
        "it": "Makuhita",
        "de": "Makuhita",
        "pt-br": "Makuhita",
        "zh-tw": "幕下力士",
    },
    illustrator: "Koji Nakata",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "It toughens up by slamming into thick trees\nover and over. It gains a sturdy body and\ndauntless spirit.",
        "fr": "Il se durcit en s'écrasant contre des arbres épais\nencore et encore. Il acquiert un corps robuste et\nesprit intrépide.",
        "es": "Se endurece al chocar contra árboles gruesos.\nuna y otra vez. Gana un cuerpo robusto y\nespíritu intrépido.",
        "it": "Si irrigidisce sbattendo contro alberi spessi\nancora e ancora. Acquisisce un corpo robusto e\nspirito intrepido.",
        "de": "Es wird härter, wenn es gegen dicke Bäume prallt\nimmer und immer wieder. Es erhält einen robusten Körper und\nunerschrockener Geist.",
        "pt-br": "Ele se fortalece ao bater em árvores grossas\nrepetidamente. Ganha um corpo robusto e\nespírito destemido.",
        "zh-tw": "它通過撞擊茂密的樹木而變得堅強\n一遍又一遍。它獲得了強健的身體和\n大無畏的精神。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Lunge Out",
                "fr": "Foncez",
                "es": "estocada",
                "it": "Lanciati fuori",
                "de": "Ausholen",
                "pt-br": "Avançar",
                "zh-tw": "向前衝出"
            },
            damage: 50,
            cost: ["Fighting", "Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 3
};
export default card;
