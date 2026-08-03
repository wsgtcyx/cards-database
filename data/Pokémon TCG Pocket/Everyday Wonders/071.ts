import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/071",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/071",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/071",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/071",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/071",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/071",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/071"
    },
    name: {
        en: "Piplup",
        fr: "Tiplouf",
        es: "Piplup",
        it: "Piplup",
        de: "Plinfa",
        "pt-br": "Piplup",
        "zh-tw": "波加曼",
        ko: "팽도리",
        ja: "ポッチャマ"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [393],
    stage: "Basic",
    description: {
        en: "It doesn’t like to be taken care of. It’s difficult to bond with since it won’t listen to its Trainer.",
        fr: "Ce Pokémon est difficile à entraîner car il est très désobéissant\net déteste qu’on lui rende service.",
        es: "No le gusta que lo cuiden. Como no aprecia el apoyo de su\nEntrenador, le cuesta coger confianza con él.",
        it: "Molto orgoglioso. Difficile farci amicizia perché non ascolta mai\ni consigli dell’Allenatore.",
        de: "Einmischung kann es gar nicht leiden. Es ist bockig und fasst\nnur schwer Zutrauen zu seinem Trainer.",
        "pt-br": "Não gosta de ser cuidado. É difícil criar um vínculo, pois ele não escuta seu Treinador.",
        "zh-tw": "它不喜歡被照顧。它很難與它建立聯繫，因為它不聽訓練師的話。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Bubble Beam",
                fr: "Bulles d’O",
                es: "Rayo Burbuja",
                it: "Bollaraggio",
                de: "Blubbstrahl",
                "pt-br": "Feixe de bolha",
                "zh-tw": "泡沫光線"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的戰鬥寶可夢現在處於麻痺狀態。"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
