import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/003",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/003",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/003",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/003",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/003"
    },
    name: {
        en: "Volbeat",
        fr: "Muciole",
        es: "Volbeat",
        it: "Volbeat",
        de: "Volbeat",
        "pt-br": "Volbeat",
        "zh-tw": "電螢蟲",
        ko: "볼비트",
        ja: "バルビート"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [313],
    stage: "Basic",
    description: {
        en: "It flashes the light on its rear to communicate with other Volbeat. It loves the sweet aroma given off by Illumise.",
        fr: "Il fait clignoter la lumière à l'arrière pour communiquer avec les autres Muciole. Il adore le doux arôme dégagé par Lumivole.",
        es: "Enciende la luz en su parte trasera para comunicarse con otros Volbeat. Le encanta el dulce aroma que desprende Illumise.",
        it: "Fa lampeggiare la luce sul retro per comunicare con altri Volbeat. Ama il dolce aroma sprigionato da Illumise.",
        de: "Das Licht auf der Rückseite blinkt, um mit anderen Volbeat zu kommunizieren. Es liebt das süße Aroma, das Illumise verströmt.",
        "pt-br": "Ele pisca a luz na parte traseira para se comunicar com outro Volbeat. Adora o aroma doce exalado por Illumise.",
        "zh-tw": "它後面的燈會閃爍，以便與其他 電螢蟲 進行通訊。牠喜歡甜甜螢散發出的甜美香氣。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Confuse Ray",
                fr: "Onde Folie",
                es: "Rayo Confuso",
                it: "Stordiraggio",
                de: "Konfusstrahl",
                "pt-br": "Raio da Confusão",
                "zh-tw": "奇異之光"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Confus.",
                es: "El Pokémon Activo de tu rival ahora está Confundido.",
                it: "Il Pokémon attivo del tuo avversario è ora confuso.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的戰鬥寶可夢現在處於混亂狀態。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
