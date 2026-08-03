import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/058",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/058",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/058"
    },
    name: {
        en: "Paldean Tauros",
        fr: "Tauros de Paldea",
        es: "Tauros de Paldea",
        it: "Tauros di Paldea",
        de: "Paldea-Tauros",
        "pt-br": "Tauros",
        "zh-tw": "帕底亞 肯泰羅",
        pt: "Tauros de Paldea"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [128],
    description: {
        en: "This kind of Tauros, known as the Combat Breed, is distinguished by its thick, powerful muscles and its fierce disposition.",
        "fr": "Cette espèce de Tauros, connue sous le nom de Race de Combat, se distingue par ses muscles épais et puissants et son caractère féroce.",
        "es": "Este tipo de Tauros, conocido como Raza de Combate, se distingue por sus músculos gruesos y poderosos y su carácter feroz.",
        "it": "Questo tipo di Tauros, noto come Razza da Combattimento, si distingue per i suoi muscoli spessi e potenti e per il suo carattere feroce.",
        "de": "Diese Art von Tauros, bekannt als Kampfrasse, zeichnet sich durch ihre dicken, kräftigen Muskeln und ihr wildes Wesen aus.",
        "pt-br": "Este tipo de Tauros, conhecido como Raça Combatente, distingue-se pelos seus músculos grossos e poderosos e pela sua disposição feroz.",
        "zh-tw": "這種金牛座被稱為戰鬥品種，其特徵是肌肉粗壯有力，性情兇猛。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Rear Kick",
                fr: "Ruade",
                es: "Patada Trasera",
                it: "Retrocalcio",
                de: "Rückwärtskick",
                "pt-br": "Chute traseiro",
                "zh-tw": "後踢",
                pt: "Chute Traseiro",
                'es-mx': "Patada Trasera"
            },
            damage: "50",
            cost: ["Fighting", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
