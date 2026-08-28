import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/032",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/032",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/032",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/032",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/032",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/032",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/032"
    },
    name: {
        en: "Meowstic",
        fr: "Mistigrix",
        es: "Meowstic",
        it: "Meowstic",
        de: "Psiaugon",
        "pt-br": "Meowstic",
        "zh-tw": "超能妙喵",
        ko: "냐오닉스",
        ja: "ニャオニクス"
    },
    illustrator: "Taira Akitsu",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    dexId: [678],
    evolveFrom: {
        en: "Espurr",
        fr: "Psystigri",
        es: "Espurr",
        it: "Espurr",
        de: "Psiau",
        "pt-br": "Espurr",
        "zh-tw": "妙喵",
        ko: "냐스퍼",
        ja: "ニャスパー"
    },
    stage: "Stage1",
    description: {
        en: "When they sense danger, they exert their psychic power at its maximum output. They have no regard for their opponents.",
        fr: "Quand ce Pokémon se sent menacé, il déchaîne la totalité de ses pouvoirs psychiques sans aucune considération pour son adversaire.",
        es: "Cuando una hembra se siente amenazada, libera al máximo su poder psiquico, sin importarle las consecuencias.",
        it: "Quando avverte un pericolo, sprigiona il suo potere psichico alla massima potenza senza curarsi di chi ha davanti.",
        de: "Wenn es Gefahr wittert, setzt es die maximale Ladung seiner Psycho-Kräfte frei. Auf Gegner nimmt es keine Rücksicht.",
        "pt-br": "Quando pressente o perigo, libera seu poder psíquico ao máximo, sem nenhuma consideração por seus oponentes.",
        "zh-tw": "一旦感知到危險，就會釋放最高強度的精神力量，導致連自己都不會記得當時的事。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Super Psy Bolt",
                fr: "Super Psy",
                es: "Superrayo Psi",
                it: "Superpsico",
                de: "Super-Psischlag",
                "pt-br": "Super-raio Psíquico",
                "zh-tw": "超念力"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
