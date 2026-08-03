import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/090",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/090",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/090",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/090",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/090",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/090"
    },
    name: {
        en: "Tyrantrum",
        "fr": "Tyrantre",
        "es": "tirano",
        "it": "Tiranno",
        "de": "Tyrantrum",
        "pt-br": "Tirano",
        "zh-tw": "暴君"
    },
    illustrator: "hatachu",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    evolveFrom: {
        en: "Tyrunt",
        "fr": "tyran",
        "es": "tirano",
        "it": "Tyrunt",
        "de": "Tyrunt",
        "pt-br": "Tirano",
        "zh-tw": "泰倫特"
    },
    description: {
        en: "A single bite of Tyrantrum's massive jaws will\ndemolish a car. This Pokémon was the king of the\nancient world.",
        "fr": "Une seule bouchée des énormes mâchoires de Tyrantrum\ndémolir une voiture. Ce Pokémon était le roi du\nmonde antique.",
        "es": "Un solo mordisco de las enormes mandíbulas de Tyrantrum\nderribar un coche. Este Pokémon era el rey de la\nmundo antiguo.",
        "it": "Un singolo morso delle enormi mascelle di Tyrantrum lo farà\ndemolire un'auto. Questo Pokémon era il re dei\nmondo antico.",
        "de": "Ein einziger Biss in Tyrantrums gewaltige Kiefer reicht aus\nein Auto demolieren. Dieses Pokémon war der König der\nAntike Welt.",
        "pt-br": "Uma única mordida nas enormes mandíbulas de Tyrantrum irá\ndemolir um carro. Este Pokémon era o rei do\nmundo antigo.",
        "zh-tw": "暴君巨大的下巴只要咬一口就會\n拆毀一輛車。這只神奇寶貝是世界之王\n古代世界。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Tyrannical Fang",
                "fr": "Croc tyrannique",
                "es": "Colmillo tiránico",
                "it": "Zanna tirannica",
                "de": "Tyrannischer Reißzahn",
                "pt-br": "Presa Tirânica",
                "zh-tw": "暴虐之牙"
            },
            damage: 100,
            cost: ["Fighting", "Fighting", "Fighting"],
            effect: {
                en: "If you have fewer Pokémon in play than your opponent, this attack does 80 more damage.",
                "fr": "Si vous avez moins de Pokémon en jeu que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
                "es": "Si tienes menos Pokémon en juego que tu oponente, este ataque hace 80 puntos de daño más.",
                "it": "Se hai meno Pokémon in gioco del tuo avversario, questo attacco infligge 80 danni in più.",
                "de": "Wenn du weniger Pokémon im Spiel hast als dein Gegner, fügt dieser Angriff 80 Schadenspunkte mehr zu.",
                "pt-br": "Se você tiver menos Pokémon em jogo que seu oponente, este ataque causará 80 de dano a mais.",
                "zh-tw": "如果你場上的神奇寶貝數量少於對手，則此攻擊造成的傷害增加 80 點。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
