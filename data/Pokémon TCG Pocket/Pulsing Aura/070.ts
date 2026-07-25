import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/070",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/070",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/070",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/070",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/070",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/070"
    },
    name: {
        en: "Hattrem",
        fr: "Chapotus",
        es: "Hattrem",
        it: "Hattrem",
        de: "Brimano",
        "pt-br": "Hattrem",
        "zh-tw": "提布莉姆",
        ko: "손지브림",
        ja: "テブリム"
    },
    illustrator: "kirisAki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    dexId: [857],
    evolveFrom: {
        en: "Hatenna",
        fr: "Bibichut",
        es: "Hatenna",
        it: "Hatenna",
        de: "Brimova",
        "pt-br": "Hatenna",
        "zh-tw": "迷布莉姆",
        ko: "몸지브림",
        ja: "ミブリム"
    },
    stage: "Stage1",
    description: {
        en: "The moment this Pokémon finds someone who’s emitting strong emotions, it will pummel them senseless with its braids to silence them.",
        fr: "Dès que ce Pokémon trouve quelqu’un qui émet des émotions fortes, il le frappe insensé avec ses tresses pour le faire taire.",
        es: "En el momento en que este Pokémon encuentre a alguien que esté emitiendo emociones fuertes, lo golpeará hasta dejarlo sin sentido con sus trenzas para silenciarlo.",
        it: "Nel momento in cui questo Pokémon trova qualcuno che emette forti emozioni, lo prende a pugni fino a fargli perdere i sensi con le sue trecce per zittirlo.",
        de: "Sobald dieses Pokémon jemanden findet, der starke Gefühle ausstrahlt, wird es ihn mit seinen Zöpfen bewusstlos schlagen, um ihn zum Schweigen zu bringen.",
        "pt-br": "No momento em que este Pokémon encontrar alguém que esteja emitindo emoções fortes, ele irá esmurrá-lo com suas tranças para silenciá-lo.",
        "zh-tw": "當這隻寶可夢發現有強烈情緒的人時，它會用辮子將他們打昏，讓他們安靜下來。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Disarming Voice",
                fr: "Voix Enjôleuse",
                es: "Voz Cautivadora",
                it: "Incantavoce",
                de: "Säuselstimme",
                "pt-br": "Voz Desarmante",
                "zh-tw": "魅惑之聲"
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
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
