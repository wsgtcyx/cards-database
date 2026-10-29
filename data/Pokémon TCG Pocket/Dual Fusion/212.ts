import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/212",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/212",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/212",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/212",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/212",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/212",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/212"
    },
    name: {
        en: "Mega Audino ex",
        fr: "Méga-Nanméouïe-ex",
        es: "Mega-Audino ex",
        "pt-br": "Mega Audino ex",
        "zh-tw": "超級差不多娃娃ex",
        ja: "メガタブンネex",
        ko: "메가다부니 ex",
        it: "Mega Audino-ex",
        de: "Mega-Ohrdoch-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 180,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Heartfelt Shine",
                fr: "Brillance Sincère",
                es: "Esplendor Sincero",
                it: "Bagliore Premuroso",
                de: "Herzlicher Glanz",
                "pt-br": "Brilho Sincero",
                "zh-tw": "溫馨閃耀",
                ja: "Heartfelt Shine",
                ko: "Heartfelt Shine"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            damage: 90,
            effect: {
                en: "Heal 30 damage from each of your Pokémon.",
                fr: "Soignez 30 dégâts de chacun de vos Pokémon.",
                es: "Cura 30 puntos de daño a cada uno de tus Pokémon.",
                it: "Cura ciascuno dei tuoi Pokémon da 30 danni.",
                de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon.",
                "pt-br": "Cure 30 pontos de dano de cada um dos seus Pokémon.",
                "zh-tw": "將自己的所有寶可夢各恢復30HP。",
                ja: "Heal 30 damage from each of your Pokémon.",
                ko: "Heal 30 damage from each of your Pokémon."
            }
        }
    ],
    abilities: []
};

export default card;
