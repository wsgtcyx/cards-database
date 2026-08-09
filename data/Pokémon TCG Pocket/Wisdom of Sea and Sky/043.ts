import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/043",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/043",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/043",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/043",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/043",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/043",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/043"
    },
    name: {
        en: "Kingdra ex",
        "fr": "Hyporoi-ex",
        "es": "Kingdra ex",
        "it": "Kingdra-ex",
        "de": "Seedraking-ex",
        "pt-br": "Kingdra ex",
        "zh-tw": "刺龍王ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: ["Water"],
    evolveFrom: {
        en: "Seadra",
        "fr": "Hypocéan",
        "es": "Seadra",
        "it": "Seadra",
        "de": "Seemon",
        "pt-br": "Seadra",
        "zh-tw": "海刺龍",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Stormy Prison",
                "fr": "Prison orageuse",
                "es": "prisión tormentosa",
                "it": "Prigione tempestosa",
                "de": "Stürmisches Gefängnis",
                "pt-br": "Prisão Tempestuosa",
                "zh-tw": "風雨飄搖的監獄"
            },
            damage: 90,
            cost: ["Water", "Water"],
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                "fr": "Lors du prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                "es": "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                "it": "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                "de": "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
