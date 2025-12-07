import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Yanmega ex",
        "fr": "Yanmega ex",
        "es": "Yanmega ex",
        "it": "Yanmega ex",
        "de": "Yanmega ex",
        "pt-br": "Yanmega ex",
        "zh-tw": "揚美加前"
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    evolveFrom: {
        en: "Yanma",
        "fr": "Yanma",
        "es": "Yanma",
        "it": "Yanma",
        "de": "Yanma",
        "pt-br": "Yanma",
        "zh-tw": "燕馬"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Air Slash",
                "fr": "Tranche aérienne",
                "es": "Corte aéreo",
                "it": "Taglio d'aria",
                "de": "Luftschnitt",
                "pt-br": "Corte de Ar",
                "zh-tw": "空氣斬"
            },
            damage: 120,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Discard a random Energy from this Pokémon.",
                "fr": "Défaussez une Énergie aléatoire de ce Pokémon.",
                "es": "Descarta una Energía aleatoria de este Pokémon.",
                "it": "Scarta un'Energia casuale da questo Pokémon.",
                "de": "Lege eine zufällige Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia aleatória deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
