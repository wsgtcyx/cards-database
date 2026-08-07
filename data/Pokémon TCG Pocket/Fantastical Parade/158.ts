import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/158",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/158",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/158",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/158",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/158",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/158",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/158"
    },
    name: {
        en: "Vivillon",
        "fr": "Prismillon",
        "es": "Vivillon",
        "it": "Vivillon",
        "de": "Vivillon",
        "pt-br": "Vivillon",
        "zh-tw": "彩粉蝶"
    },
    illustrator: "mingo",
    rarity: "One Star",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    evolveFrom: {
        en: "Spewpa",
        "fr": "Spewpa",
        "es": "spewpa",
        "it": "Spewpa",
        "de": "Spewpa",
        "pt-br": "Spewpa",
        "zh-tw": "斯佩帕"
    },
    description: {
        en: "This Pokémon was born in a land where flowers\nbloom. It scatters colorful, toxic scales from its\nwings during battle.",
        "fr": "Ce Pokémon est né dans un pays où les fleurs\nfleurir. Il disperse des écailles colorées et toxiques de son\nailes pendant la bataille.",
        "es": "Este Pokémon nació en una tierra donde florecen\nflorecer. Esparce escamas coloridas y tóxicas de su\nalas durante la batalla.",
        "it": "Questo Pokémon è nato in una terra dove fioriscono\nfiorire. Sparge scaglie colorate e tossiche dalla sua\nali durante la battaglia.",
        "de": "Dieses Pokémon wurde in einem Land geboren, in dem es Blumen gibt\nblühen. Es streut bunte, giftige Schuppen von sich\nFlügel während des Kampfes.",
        "pt-br": "Este Pokémon nasceu em uma terra onde as flores\nflorescer. Ele espalha escamas coloridas e tóxicas de seus\nasas durante a batalha.",
        "zh-tw": "誕生在鮮花盛開的土地上的寶可夢\n綻放。它從身上散落出彩色的有毒鱗片\n戰鬥時的翅膀。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Vivid Powder",
                "fr": "Poudre vive",
                "es": "Polvo vivo",
                "it": "Polvere vivida",
                "de": "Lebendiges Pulver",
                "pt-br": "Pó Vívido",
                "zh-tw": "鮮豔粉"
            },
            damage: 60,
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned and Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné et Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado y Dormido.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato e addormentato.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt vergiftet und schläft.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado e Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在中毒並沉睡。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
