import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/019",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/019",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/019"
    },
    name: {
        en: "Lilligant",
        fr: "Fragilady",
        es: "Lilligant",
        it: "Lilligant",
        de: "Dressella",
        "pt-br": "Lilligant",
        "zh-tw": "裙兒小姐",
        ja: "ドレディア",
        ko: "드레디어"
    },
    illustrator: "Kanako Eo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Grass"
    ],
    evolveFrom: {
        en: "Petilil",
        fr: "Chlorobule",
        es: "Petilil",
        it: "Petilil",
        de: "Lilminip",
        "pt-br": "Petilil",
        "zh-tw": "百合根娃娃",
        ja: "Petilil",
        ko: "Petilil"
    },
    description: {
        en: "No matter how much time and money is spent\nraising it, its flowers are the most beautiful when\nthey bloom in the wild.",
        fr: "La main la plus verte au monde ne saurait faire éclore une fleur de Fragilady aussi belle que celles qui s'épanouissent à l'état sauvage.",
        es: "Por muchos esfuerzos o dinero que destine la gente para hacerla florecer, siempre es más bella la flor que brota en un ejemplar salvaje.",
        it: "Per quanto si possano impiegare tempo, denaro e fatica nella cura di questo Pokémon, il suo fiore sarà sempre più bello se sboccia in natura.",
        de: "Egal, wie viel Mühe und Geld investiert wird, sein Blumenschmuck ist wild gewachsen immer schöner als von Menschenhand gezüchtet.",
        "pt-br": "Não importa quanto tempo e dinheiro é gasto no seu crescimento, suas flores serão sempre mais bonitas quando florescem na selva.",
        "zh-tw": "無論花多少功夫和金錢，比起借助人工手段培育出的花，在野外綻放的花更美。",
        ja: "No matter how much time and money is spent\nraising it, its flowers are the most beautiful when\nthey bloom in the wild.",
        ko: "No matter how much time and money is spent\nraising it, its flowers are the most beautiful when\nthey bloom in the wild."
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Toughness Aroma",
                fr: "Arôme d'Endurance",
                es: "Aroma Vigorizante",
                it: "Aroma Tenace",
                de: "Aroma der Stärke",
                "pt-br": "Aroma da Determinação",
                "zh-tw": "堅韌芳香",
                ja: "Toughness Aroma",
                ko: "Toughness Aroma"
            },
            effect: {
                en: "Each of your {G} Pokémon gets +20 HP.",
                fr: "Chacun de vos Pokémon {G} reçoit + 20 PV.",
                es: "Cada uno de tus Pokémon {G} obtiene 20 PS más.",
                it: "Ognuno dei tuoi Pokémon {G} ha +20 PS.",
                de: "Jedes deiner {G}-Pokémon erhält +20 KP.",
                "pt-br": "Cada um dos seus Pokémon {G} recebe +20 PS.",
                "zh-tw": "只要這隻寶可夢在場上,自己的所有{G}寶可夢的最大HP+20。",
                ja: "Each of your {G} Pokémon gets +20 HP.",
                ko: "Each of your {G} Pokémon gets +20 HP."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Smack",
                fr: "Claque",
                es: "Palmetazo",
                it: "Schiaffo",
                de: "Klatscher",
                "pt-br": "Estalo",
                "zh-tw": "掌擊",
                ja: "Smack",
                ko: "Smack"
            },
            damage: 50,
            cost: [
                "Grass",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
