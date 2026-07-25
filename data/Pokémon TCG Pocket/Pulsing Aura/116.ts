import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/116",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/116",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/116",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/116",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/116",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/116"
    },
    name: {
        en: "Registeel",
        fr: "Registeel",
        es: "Registeel",
        it: "Registeel",
        de: "Registeel",
        "pt-br": "Registeel",
        "zh-tw": "雷吉斯奇魯",
        ko: "레지스틸",
        ja: "レジスチル"
    },
    illustrator: "hatachu",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    dexId: [379],
    stage: "Basic",
    description: {
        en: "It’s rumored that this Pokémon was born deep underground in the planet’s mantle and that it emerged onto the surface 10,000 years ago.",
        fr: "Il paraît qu’il est né dans le manteau terrestre\net qu’il en a émergé il y a environ 10 000 ans.",
        es: "Dicen que se formó en el manto terrestre y\nascendió a la superficie hace aproximadamente\ndiez mil años.",
        it: "Si dice che sia nato nel mantello terrestre e\nche sia salito in superficie circa 10.000 anni fa.",
        de: "Gerüchten zufolge wurde dieses Pokémon tief\nim Mantel des Planeten geboren und kam vor\netwa 10 000 Jahren an die Oberfläche.",
        "pt-br": "Há rumores de que este Pokémon nasceu nas profundezas do manto do planeta e emergiu na superfície há 10.000 anos.",
        "zh-tw": "據說牠誕生於地底的\n地幔中，並且在大約\n１萬年前出現在地表。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless", "Colorless"],
            name: {
                en: "Protect Charge",
                fr: "Recharge Protectrice",
                es: "Carga Protectora",
                it: "Carica Protettiva",
                de: "Schützender Sturmangriff",
                "pt-br": "Carga Protetora",
                "zh-tw": "防護充能"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes -30 damage from attacks.",
                fr: "Lors du prochain tour de votre adversaire, ce Pokémon subit -30 dégâts des attaques.",
                es: "Durante el próximo turno de tu rival, este Pokémon recibe -30 de daño por ataques.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -30 danni dagli attacchi.",
                de: "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon -30 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -30 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只寶可夢受到的攻擊傷害為-30。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
