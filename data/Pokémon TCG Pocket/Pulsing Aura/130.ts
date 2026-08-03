import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/130",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/130",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/130",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/130",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/130",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/130",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/130"
    },
    name: {
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
    illustrator: "Akira Komayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [206],
    stage: "Basic",
    description: {
        en: "If spotted, it escapes by burrowing with its tail. It can float just slightly using its wings.",
        fr: "S'il est repéré, il s'échappe en creusant avec sa queue. Il peut flotter légèrement grâce à ses ailes.",
        es: "Si se le ve, escapa excavando con la cola. Puede flotar ligeramente usando sus alas.",
        it: "Se avvistato scappa scavando con la coda. Può galleggiare leggermente usando le ali.",
        de: "Wenn es entdeckt wird, entkommt es, indem es sich mit seinem Schwanz eingräbt. Mit seinen Flügeln kann es leicht schweben.",
        "pt-br": "Se for avistado, ele escapa cavando com a cauda. Ele pode flutuar ligeiramente usando suas asas.",
        "zh-tw": "如果被發現，它會用尾巴挖洞逃脫。它可以用翅膀輕微漂浮。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Bop ’n’ Burrow",
                fr: "Pique et Plonge",
                es: "Zurra y Cavadura",
                it: "Pungi e Fuggi",
                de: "Pieks und weg",
                "pt-br": "Cutucar e Cavucar",
                "zh-tw": "撞了就躲"
            },
            effect: {
                en: "You may shuffle this Pokémon and all attached cards into your deck.",
                fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes attachées dans votre deck.",
                es: "Puedes barajar este Pokémon y todas las cartas adjuntas en tu mazo.",
                it: "Puoi mischiare questo Pokémon e tutte le carte a esso collegate nel tuo mazzo.",
                de: "Du darfst dieses Pokémon und alle daran angelegten Karten in dein Deck mischen.",
                "pt-br": "Você pode embaralhar este Pokémon e todas as cartas associadas em seu baralho.",
                "zh-tw": "你可以將這只寶可夢和所有附加的卡牌洗入你的牌庫。"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
