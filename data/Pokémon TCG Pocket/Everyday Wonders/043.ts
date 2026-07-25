import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/043",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/043",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/043",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/043",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/043",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/043"
    },
    name: {
        en: "Spiritomb",
        fr: "Spiritomb",
        es: "Spiritomb",
        it: "Spiritomb",
        de: "Kryppuk",
        "pt-br": "Spiritomb",
        "zh-tw": "花岩怪",
        ko: "화강돌",
        ja: "ミカルゲ"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    dexId: [442],
    stage: "Basic",
    description: {
        en: "It was formed by uniting 108 spirits. It has been bound to the Odd Keystone to keep it from doing any mischief.",
        fr: "Il a été formé en réunissant 108 esprits. Il a été lié à l'Odd Keystone pour l'empêcher de commettre des méfaits.",
        es: "Se formó uniendo 108 espíritus. Se ha atado a Odd Keystone para evitar que haga travesuras.",
        it: "Si è formato unendo 108 spiriti. È stato legato alla Strana Chiave di Pietra per impedirgli di fare qualsiasi male.",
        de: "Es entstand durch die Vereinigung von 108 Geistern. Es wurde an den Seltsamen Schlüsselstein gebunden, um zu verhindern, dass es Unheil anrichtet.",
        "pt-br": "Foi formado pela união de 108 espíritos. Ele foi vinculado à Pedra Angular Estranha para impedi-lo de causar qualquer dano.",
        "zh-tw": "它是由108個武魂聯合而成。它被綁定到了奇怪的鑰石上以防止它做任何惡作劇。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Dark Slumber",
                fr: "Sommeil Obscur",
                es: "Letargo Oscuro",
                it: "Sonno Oscuro",
                de: "Dunkler Schlummer",
                "pt-br": "Sono Sombrio",
                "zh-tw": "黑色微寐"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "El Pokémon Activo de tu rival ahora está Dormido.",
                it: "Il Pokémon attivo del tuo avversario è addormentato.",
                de: "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍寶可夢現在處於睡眠狀態。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
