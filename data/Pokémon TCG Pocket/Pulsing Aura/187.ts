import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/187",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/187",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/187",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/187",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/187",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/187",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/187"
    },
    name: {
        en: "Corviknight ex",
        fr: "Corvaillus-ex",
        es: "Corviknight ex",
        it: "Corviknight-ex",
        de: "Krarmor-ex",
        "pt-br": "Corviknight ex",
        "zh-tw": "鋼鎧鴉ex",
        ko: "아머까오 ex",
        ja: "アーマーガアex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 180,
    types: ["Metal"],
    dexId: [823],
    evolveFrom: {
        en: "Corvisquire",
        fr: "Bleuseille",
        es: "Corvisquire",
        it: "Corvisquire",
        de: "Kranoviz",
        "pt-br": "Corvisquire",
        "zh-tw": "藍鴉",
        ko: "파크로우",
        ja: "アオガラス"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Metal", "Metal", "Metal"],
            name: {
                en: "Air Crash",
                fr: "Crash Aérien",
                es: "Choque Aéreo",
                it: "Schianto Aereo",
                de: "Absturz",
                "pt-br": "Choque Aéreo",
                "zh-tw": "空氣粉碎"
            },
            effect: {
                en: "Discard a random Energy from your opponent's Active Pokémon.",
                fr: "Défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                es: "Descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                de: "Lege eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "丟棄對手的活躍寶可夢中的隨機能量。"
            },
            damage: 110
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
