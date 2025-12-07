import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Latios",
        "fr": "Latios",
        "es": "Latios",
        "it": "Lazio",
        "de": "Latios",
        "pt-br": "Lácio",
        "zh-tw": "拉帝歐斯",
    },
    illustrator: "kodama",
    rarity: "One Star",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    description: {
        en: "It understands human speech and is highly\nintelligent. It is a tender Pokémon that\ndislikes fighting.",
        "fr": "Il comprend la parole humaine et est hautement\nintelligent. C'est un tendre Pokémon qui\nn'aime pas se battre.",
        "es": "Entiende el habla humana y es altamente\ninteligente. Es un Pokémon tierno que\nno le gusta pelear.",
        "it": "Capisce il linguaggio umano ed è altamente\nintelligente. È un Pokémon tenero quello\nnon ama combattere.",
        "de": "Es versteht die menschliche Sprache und ist sehr gut\nintelligent. Es ist ein zartes Pokémon\nkämpft nicht gern.",
        "pt-br": "Ele entende a fala humana e é altamente\ninteligente. É um Pokémon gentil que\nnão gosta de lutar.",
        "zh-tw": "它能理解人類的語言並且具有高度\n聰明。這是一隻溫柔的神奇寶貝\n不喜歡打鬥。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fantastical Floating",
                "fr": "Flottant fantastique",
                "es": "Flotante fantástico",
                "it": "Galleggiante fantastico",
                "de": "Fantastisches Schweben",
                "pt-br": "Flutuante Fantástico",
                "zh-tw": "夢幻漂浮"
            },
            effect: {
                en: "If you have Latias in play, this Pokémon has no Retreat Cost.",
                "fr": "Si vous avez Latias en jeu, ce Pokémon n'a pas de coût de retraite.",
                "es": "Si tienes a Latias en juego, este Pokémon no tiene Coste de Retirada.",
                "it": "Se hai Latias in gioco, questo Pokémon non ha costo di ritirata.",
                "de": "Wenn du Latias im Spiel hast, hat dieses Pokémon keine Rückzugskosten.",
                "pt-br": "Se você tiver Latias em jogo, este Pokémon não terá custo de Recuo.",
                "zh-tw": "如果你有拉帝亞斯在場，這只神奇寶貝沒有撤退成本。"
            }
        }],
    attacks: [{
            name: {
                en: "Luster Purge",
                "fr": "Purge d'éclat",
                "es": "Purga de brillo",
                "it": "Epurazione della lucentezza",
                "de": "Glanzreinigung",
                "pt-br": "Purga de brilho",
                "zh-tw": "光澤淨化"
            },
            damage: 120,
            cost: ["Psychic", "Psychic", "Psychic"],
            effect: {
                en: "Discard all Energy from this Pokémon.",
                "fr": "Défaussez toute l'énergie de ce Pokémon.",
                "es": "Descarta toda la Energía de este Pokémon.",
                "it": "Scarta tutte le Energie da questo Pokémon.",
                "de": "Lege die gesamte Energie dieses Pokémon ab.",
                "pt-br": "Descarte todas as Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的所有能量。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
