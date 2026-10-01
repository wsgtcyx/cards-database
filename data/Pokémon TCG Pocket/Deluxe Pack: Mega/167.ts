import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/167",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/167",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/167",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/167",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/167",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/167",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/167"
    },
    name: {
        en: "Corviknight ex",
        fr: "Corvaillus-ex",
        es: "Corviknight ex",
        it: "Corviknight-ex",
        de: "Krarmor-ex",
        "pt-br": "Corviknight ex",
        "zh-tw": "鋼鎧鴉ex",
        ja: "アーマーガアex",
        ko: "아머까오 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: [
        "Metal"
    ],
    dexId: [
        823
    ],
    evolveFrom: {
        en: "Corvisquire",
        fr: "Bleuseille",
        es: "Corvisquire",
        it: "Corvisquire",
        de: "Kranoviz",
        "pt-br": "Corvisquire",
        "zh-tw": "藍鴉",
        ja: "Corvisquire",
        ko: "Corvisquire"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: [
                "Metal",
                "Metal",
                "Metal"
            ],
            name: {
                en: "Air Crash",
                fr: "Crash Aérien",
                es: "Choque Aéreo",
                it: "Schianto Aereo",
                de: "Absturz",
                "pt-br": "Choque Aéreo",
                "zh-tw": "空氣粉碎",
                ja: "Air Crash",
                ko: "Air Crash"
            },
            effect: {
                en: "Discard a random Energy from your opponent's Active Pokémon.",
                fr: "Défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
                es: "Descarta Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Rimuovi un'Energia a caso dal Pokémon attivo del tuo avversario.",
                de: "Lege 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Descarte Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "將對手的戰鬥寶可夢身上的隨機個能量丟棄。",
                ja: "Discard a random Energy from your opponent's Active Pokémon.",
                ko: "Discard a random Energy from your opponent's Active Pokémon."
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
