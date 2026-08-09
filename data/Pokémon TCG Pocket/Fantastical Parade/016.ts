import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/016",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/016",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/016"
    },
    name: {
        en: "Eldegoss",
        "fr": "Blancoton",
        "es": "Eldegoss",
        "it": "Eldegoss",
        "de": "Cottomi",
        "pt-br": "Eldegoss",
        "zh-tw": "白蓬蓬"
    },
    illustrator: "kodama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Gossifleur",
        "fr": "Tournicoton",
        "es": "Gossifleur",
        "it": "Gossifleur",
        "de": "Cottini",
        "pt-br": "Gossifleur",
        "zh-tw": "幼棉棉"
    },
    description: {
        en: "The cotton on the head of this Pokémon can be\nspun into a glossy, gorgeous yarn—a Galar\nregional specialty.",
        "fr": "Le coton sur la tête de ce Pokémon peut être\nfilé en un fil brillant et magnifique : un Galar\nspécialité régionale.",
        "es": "El algodón en la cabeza de este Pokémon puede ser\nhilado en un hilo brillante y hermoso: un Galar\nespecialidad regional.",
        "it": "Il cotone sulla testa di questo Pokémon può esserlo\nfilato in un filato lucido e meraviglioso: un Galar\nspecialità regionale.",
        "de": "Die Baumwolle auf dem Kopf dieses Pokémon kann sein\nzu einem glänzenden, wunderschönen Garn gesponnen – einem Galar\nregionale Spezialität.",
        "pt-br": "O algodão na cabeça deste Pokémon pode ser\nfiado em um fio brilhante e lindo - um Galar\nespecialidade regional.",
        "zh-tw": "這個神奇寶貝頭上的棉花可以\n紡成光滑華麗的紗線——伽勒爾\n區域特產。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Float Up",
                "fr": "Flottez vers le haut",
                "es": "flotar hacia arriba",
                "it": "Galleggia su",
                "de": "Schwebe nach oben",
                "pt-br": "Flutuar",
                "zh-tw": "浮起"
            },
            damage: 40,
            cost: ["Grass"],
            effect: {
                en: "You may shuffle this Pokémon and all attached cards into your deck.",
                "fr": "Vous pouvez mélanger ce Pokémon et toutes les cartes attachées dans votre deck.",
                "es": "Puedes barajar este Pokémon y todas las cartas adjuntas en tu mazo.",
                "it": "Puoi mischiare questo Pokémon e tutte le carte a esso collegate nel tuo mazzo.",
                "de": "Du darfst dieses Pokémon und alle daran angelegten Karten in dein Deck mischen.",
                "pt-br": "Você pode embaralhar este Pokémon e todas as cartas associadas em seu baralho.",
                "zh-tw": "你可以將這只神奇寶貝和所有附加的卡牌洗入你的牌庫。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
