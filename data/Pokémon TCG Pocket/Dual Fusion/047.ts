import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/047",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/047",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/047",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/047",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/047",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/047",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/047"
    },
    name: {
        en: "Zeraora",
        fr: "Zeraora",
        es: "Zeraora",
        "pt-br": "Zeraora",
        "zh-tw": "捷拉奧拉",
        ja: "ゼラオラ",
        ko: "제라오라",
        it: "Zeraora",
        de: "Zeraora"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 90,
    types: [
        "Lightning"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Thunderbolt",
                fr: "Tonnerre",
                es: "Rayo",
                it: "Fulmine",
                de: "Donnerblitz",
                "pt-br": "Relâmpago",
                "zh-tw": "十萬伏特",
                ja: "Thunderbolt",
                ko: "Thunderbolt"
            },
            cost: [
                "Lightning",
                "Lightning"
            ],
            damage: 90,
            effect: {
                en: "Discard all Energy from this Pokémon.",
                fr: "Défaussez toutes les Énergies de ce Pokémon.",
                es: "Descarta todas las Energías de este Pokémon.",
                it: "Rimuovi tutte le Energie assegnate a questo Pokémon.",
                de: "Lege alle Energien von diesem Pokémon ab.",
                "pt-br": "Descarte todas as Energias deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的能量全部丟棄。",
                ja: "Discard all Energy from this Pokémon.",
                ko: "Discard all Energy from this Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It electrifies its claws and tears its opponents apart with them. Even if they dodge its attack, they’ll be electrocuted by the flying sparks.",
        fr: "Il déchiquette son adversaire avec ses griffes chargées d’électricité. Même si sa cible évite l’attaque, elle reçoit un coup de jus.",
        es: "Hace jirones al oponente con sus garras electrificadas. Aunque este esquive los golpes, acaba electrocutado por las descargas.",
        it: "Fa a pezzi l’avversario con le unghie cariche di elettricità. Anche se il nemico schiva il colpo, riceve comunque una scarica folgorante.",
        de: "Mit seinen elektrisierten Krallen reißt es Gegner in Stücke. Selbst wenn sie ausweichen, werden sie von elektrisch geladenen Funken getroffen.",
        "pt-br": "Eletrifica suas garras e despedaça seus oponentes. Mesmo que seus oponentes desviem, eles serão eletrocutados pelas centelhas no ar.",
        "zh-tw": "會讓雙手雙腳的爪子帶電，然後將對手撕裂。就算躲開，也會用飛散的電擊讓對手觸電。",
        ja: "It electrifies its claws and tears its opponents apart with them. Even if they dodge its attack, they’ll be electrocuted by the flying sparks.",
        ko: "It electrifies its claws and tears its opponents apart with them. Even if they dodge its attack, they’ll be electrocuted by the flying sparks."
    }
};

export default card;
