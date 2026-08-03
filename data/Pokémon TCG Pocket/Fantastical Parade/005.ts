import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/005",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/005",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/005",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/005",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/005"
    },
    name: {
        en: "Roserade",
        "fr": "Roserade",
        "es": "Roserade",
        "it": "Roserade",
        "de": "Roserade",
        "pt-br": "Roserade",
        "zh-tw": "羅絲雷朵"
    },
    illustrator: "chibi",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Roselia",
        "fr": "Rosélia",
        "es": "rosalia",
        "it": "Roselia",
        "de": "Roselia",
        "pt-br": "Rosélia",
        "zh-tw": "羅塞利亞"
    },
    description: {
        en: "The poison in its right hand is quick acting.\nThe poison in its left hand is slow acting.\nBoth are life threatening.",
        "fr": "Le poison dans sa main droite agit rapidement.\nLe poison dans sa main gauche agit lentement.\nLes deux mettent la vie en danger.",
        "es": "El veneno en su mano derecha actúa rápidamente.\nEl veneno en su mano izquierda actúa lentamente.\nAmbos ponen en peligro la vida.",
        "it": "Il veleno nella sua mano destra agisce rapidamente.\nIl veleno nella sua mano sinistra agisce lentamente.\nEntrambi sono in pericolo di vita.",
        "de": "Das Gift in seiner rechten Hand wirkt schnell.\nDas Gift in seiner linken Hand wirkt langsam.\nBeides ist lebensgefährlich.",
        "pt-br": "O veneno em sua mão direita atua rapidamente.\nO veneno em sua mão esquerda tem ação lenta.\nAmbos são fatais.",
        "zh-tw": "右手的毒藥起效很快。\n左手的毒藥起效緩慢。\n兩人都有生命危險。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Poison Ring",
                "fr": "Anneau empoisonné",
                "es": "Anillo venenoso",
                "it": "Anello del Veleno",
                "de": "Giftring",
                "pt-br": "Anel Venenoso",
                "zh-tw": "毒環"
            },
            damage: 50,
            cost: ["Grass", "Grass"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné. Lors du prochain tour de votre adversaire, ce Pokémon ne pourra pas battre en retraite.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado. Durante el próximo turno de tu oponente, ese Pokémon no puede retirarse.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich dieses Pokémon nicht zurückziehen.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, esse Pokémon não poderá recuar.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。在對手的下一個回合中，該寶可夢不能撤退。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
