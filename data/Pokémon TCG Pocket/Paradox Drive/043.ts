import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/043",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/043",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/043",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/043",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/043",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/043"
    },
    name: {
        en: "Kingambit",
        fr: "Scalpereur",
        es: "Kingambit",
        it: "Kingambit",
        de: "Gladimperio",
        "pt-br": "Kingambit",
        "zh-tw": "仆斬將軍",
        ko: "대도각참",
        ja: "ドドゲザン"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    dexId: [983],
    evolveFrom: {
        en: "Bisharp",
        fr: "Scalproie",
        es: "Bisharp",
        it: "Bisharp",
        de: "Caesurio",
        "pt-br": "Bisharp",
        "zh-tw": "劈斬司令",
        ko: "절각참",
        ja: "キリキザン"
    },
    stage: "Stage2",
    description: {
        en: "Only a Bisharp that stands above all others in its vast army can evolve into Kingambit.",
        fr: "Seul un Scalproie qui se démarque de tous les autres dans sa vaste armée peut évoluer vers Scalpereur.",
        es: "Sólo un Bisharp que sobresalga de todos los demás en su vasto ejército puede evolucionar a Kingambit.",
        it: "Solo uno Bisharp che si distingue da tutti gli altri nel suo vasto esercito può evolversi in Kingambit.",
        de: "Nur ein Caesurio, der in seiner riesigen Armee über allen anderen steht, kann sich zu Gladimperio entwickeln.",
        "pt-br": "Somente um Bisharp que está acima de todos os outros em seu vasto exército pode evoluir para Kingambit.",
        "zh-tw": "只有在龐大的軍隊中脫穎而出的劈斬司令才能進化成仆斬將軍。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Overlord’s Blade",
                fr: "Lame du suzerain",
                es: "Espada del Señor Supremo",
                it: "Lama del Signore Supremo",
                de: "Klinge des Overlords",
                "pt-br": "Lâmina do Overlord",
                "zh-tw": "大將利刃"
            },
            effect: {
                en: "This attack does 40 more damage for each time your Pokémon have been Knocked Out during this game.",
                fr: "Cette attaque inflige 40 dégâts supplémentaires à chaque fois que votre Pokémon est mis KO pendant cette partie.",
                es: "Este ataque hace 40 daños más por cada vez que tu Pokémon queda fuera de combate durante este juego.",
                it: "Questo attacco infligge 40 danni in più per ogni volta che i tuoi Pokémon vengono messi KO durante il gioco.",
                de: "Dieser Angriff verursacht 40 weitere Schadenspunkte für jedes Mal, wenn dein Pokémon in diesem Spiel kampfunfähig gemacht wird.",
                "pt-br": "Este ataque causa 40 danos a mais cada vez que seu Pokémon for nocauteado durante o jogo.",
                "zh-tw": "在這個遊戲中，每次你的寶可夢被擊倒，此攻擊都會造成 40 點額外傷害。"
            },
            damage: "60+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
