import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/178",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/178",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/178",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/178",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/178",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/178"
    },
    name: {
        en: "Salamence",
        "fr": "Salamence",
        "es": "Salamence",
        "it": "Salamence",
        "de": "Salamence",
        "pt-br": "Salamência",
        "zh-tw": "薩拉曼斯"
    },
    illustrator: "Shiburingaru",
    rarity: "One Star",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    evolveFrom: {
        en: "Shelgon",
        "fr": "Shelgon",
        "es": "shelgon",
        "it": "Shelgon",
        "de": "Shelgon",
        "pt-br": "Shelgon",
        "zh-tw": "謝爾貢"
    },
    description: {
        en: "It becomes uncontrollable if it is enraged.\nIt destroys everything with shredding claws\nand fire.",
        "fr": "Il devient incontrôlable s'il est enragé.\nIl détruit tout avec ses griffes déchiqueteuses\net le feu.",
        "es": "Se vuelve incontrolable si se enfurece.\nDestroza todo con garras desmenuzadoras.\ny fuego.",
        "it": "Diventa incontrollabile se è infuriato.\nDistrugge tutto con artigli taglienti\ne fuoco.",
        "de": "Es wird unkontrollierbar, wenn es wütend ist.\nEs zerstört alles mit seinen Krallen\nund Feuer.",
        "pt-br": "Torna-se incontrolável se estiver enfurecido.\nEle destrói tudo com garras retalhadoras\ne fogo.",
        "zh-tw": "一旦被激怒，就會無法控制。\n它用撕碎的爪子摧毀一切\n和火。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Dragon Dive",
                "fr": "Plongée du Dragon",
                "es": "Buceo del dragón",
                "it": "Immersione del Drago",
                "de": "Drachentauchen",
                "pt-br": "Mergulho do Dragão",
                "zh-tw": "龍潛"
            },
            damage: 150,
            cost: ["Fire", "Water", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, this Pokémon also does 50 damage to itself.",
                "fr": "Lancez une pièce de monnaie. Si c'est pile, ce Pokémon s'inflige également 50 dégâts.",
                "es": "Lanza una moneda. Si sale cruz, este Pokémon también se hace 50 puntos de daño a sí mismo.",
                "it": "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 50 danni a se stesso.",
                "de": "Wirf eine Münze. Bei „Zahl“ fügt sich dieses Pokémon außerdem selbst 50 Schadenspunkte zu.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este Pokémon também causa 50 de dano a si mesmo.",
                "zh-tw": "拋一枚硬幣。如果是反面，這只神奇寶貝也會對自己造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 2
};
export default card;
