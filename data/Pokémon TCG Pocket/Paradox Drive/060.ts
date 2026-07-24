import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/060"
    },
    name: {
        en: "Dudunsparce",
        fr: "Deusolourdo",
        es: "Dudunsparce",
        it: "Dudunsparce",
        de: "Dummimisel",
        "pt-br": "Dudunsparce",
        "zh-tw": "土龍節節",
        ko: "노고고치",
        ja: "ノココッチ"
    },
    illustrator: "Ounishi",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    dexId: [982],
    evolveFrom: {
        en: "Dunsparce",
        fr: "Insolourdo",
        es: "Dunsparce",
        it: "Dunsparce",
        de: "Dummisel",
        "pt-br": "Dunsparce",
        "zh-tw": "土龍弟弟",
        ko: "노고치",
        ja: "ノコッチ"
    },
    stage: "Stage1",
    description: {
        en: "It drives enemies out of its nest by sucking in enough air to fill its long, narrow lungs, then releasing the air in an intense blast.",
        fr: "Il chasse les ennemis de son nid en aspirant suffisamment d'air pour remplir ses poumons longs et étroits, puis en libérant l'air dans une explosion intense.",
        es: "Expulsa a los enemigos de su nido aspirando suficiente aire para llenar sus largos y estrechos pulmones y luego liberando el aire en una intensa ráfaga.",
        it: "Scaccia i nemici dal nido aspirando abbastanza aria da riempire i suoi polmoni lunghi e stretti, per poi rilasciarla con un'intensa esplosione.",
        de: "Es vertreibt Feinde aus seinem Nest, indem es genug Luft ansaugt, um seine langen, schmalen Lungen zu füllen, und die Luft dann mit einem heftigen Schwall wieder abgibt.",
        "pt-br": "Ele expulsa os inimigos de seu ninho sugando ar suficiente para encher seus pulmões longos e estreitos e, em seguida, liberando o ar em uma explosão intensa.",
        "zh-tw": "它透過吸入足夠的空氣來填充其狹長的肺部，然後以強烈的衝擊力釋放空氣，從而將敵人趕出巢穴。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Sudden Drilling",
                fr: "Forage soudain",
                es: "Perforación repentina",
                it: "Perforazione improvvisa",
                de: "Plötzliches Bohren",
                "pt-br": "Perfuração Súbita",
                "zh-tw": "突來一鑽"
            },
            effect: {
                en: "If this Pokémon evolved from Dunsparce during this turn, discard 2 random Energy from your opponent's Active Pokémon.",
                fr: "Si ce Pokémon a évolué à partir de Insolourdo pendant ce tour, défaussez 2 Énergies aléatoires du Pokémon Actif de votre adversaire.",
                es: "Si este Pokémon evolucionó de Dunsparce durante este turno, descarta 2 Energías aleatorias del Pokémon Activo de tu rival.",
                it: "Se questo Pokémon si è evoluto da Dunsparce durante questo turno, scarta due Energie casuali dal Pokémon attivo del tuo avversario.",
                de: "Wenn sich dieses Pokémon in diesem Zug aus Dummisel entwickelt hat, wirf 2 zufällige Energien vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Se este Pokémon evoluiu de Dunsparce durante este turno, descarte 2 Energias aleatórias do Pokémon Ativo do seu oponente.",
                "zh-tw": "如果這隻寶可夢在這個回合中是從 土龍弟弟 進化而來的，則隨機捨棄對手的出戰寶可夢 2 點能量。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
