import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/080",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/080"
    },
    name: {
        en: "Oinkologne",
        fr: "Fragroin",
        es: "Oinkologne",
        it: "Oinkologne",
        de: "Fragrunz",
        "pt-br": "Oinkologne",
        "zh-tw": "飄香豚",
        pt: "Oinkologne",
        'es-mx': "Oinkologne"
    },
    illustrator: "Pani Kobayashi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    dexId: [916],
    evolveFrom: {
        en: "Lechonk",
        fr: "Gourmelet",
        es: "Lechonk",
        it: "Lechonk",
        de: "Ferkuli",
        "pt-br": "Lechonk",
        "zh-tw": "愛吃豚",
        pt: "Lechonk",
        'es-mx': "Lechonk"
    },
    description: {
        en: "It entrances female Pokémon with the sweet, alluring scent that wafts from all over its body.",
        "fr": "Il séduit les Pokémon femelles avec le parfum doux et séduisant qui se dégage de tout son corps.",
        "es": "Encanta a las Pokémon hembra con el dulce y seductor aroma que flota por todo su cuerpo.",
        "it": "Ammalia i Pokémon femmina con il profumo dolce e seducente che si diffonde da tutto il suo corpo.",
        "de": "Es bezaubert weibliche Pokémon mit dem süßen, verführerischen Duft, der von seinem ganzen Körper ausgeht.",
        "pt-br": "Ele encanta as Pokémon fêmeas com o aroma doce e sedutor que exala por todo o seu corpo.",
        "zh-tw": "全身散發出甜美誘人的香氣，令雌性寶可夢著迷。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Leg Stomp",
                "fr": "Piétinement de jambe",
                "es": "Pisotón en la pierna",
                "it": "Colpo di gamba",
                "de": "Beinstampfen",
                "pt-br": "Pisada nas pernas",
                "zh-tw": "跺腳"
            },
            damage: "100",
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
                "fr": "Lancez une pièce de monnaie. Si c'est pile, lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                "es": "Lanza una moneda. Si sale cruz, durante tu próximo turno, este Pokémon no podrá atacar.",
                "it": "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                "de": "Wirf eine Münze. Bei „Zahl“ kann dieses Pokémon in deinem nächsten Zug nicht angreifen.",
                "pt-br": "Jogue uma moeda. Se sair coroa, durante seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "拋一枚硬幣。如果是反面，則在你的下一個回合中，這隻寶可夢無法攻擊。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
