import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/241",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/241",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/241",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/241",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/241",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/241",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/241"
    },
    name: {
        en: "Butterfree",
        fr: "Papilusion",
        es: "Butterfree",
        it: "Butterfree",
        de: "Smettbo",
        "pt-br": "Butterfree",
        "zh-tw": "巴大蝶",
        ja: "バタフリー",
        ko: "버터플"
    },
    illustrator: "ryoma uratsuka",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: [
        "Grass"
    ],
    dexId: [
        12
    ],
    evolveFrom: {
        en: "Metapod",
        fr: "Chrysacier",
        es: "Metapod",
        it: "Metapod",
        de: "Safcon",
        "pt-br": "Metapod",
        "zh-tw": "鐵甲蛹",
        ja: "Metapod",
        ko: "Metapod"
    },
    stage: "Stage2",
    description: {
        en: "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest.",
        fr: "Il ramasse du nectar chaque jour et l'agglutine sur les poils de ses pattes pour le transporter jusqu'à son nid.",
        es: "Recoge néctar a diario y se lo adhiere al pelo de las patas para llevarlo a su nido.",
        it: "Raccoglie nettare tutti i giorni e lo spalma sulla peluria che ricopre le sue zampe per trasportarlo al nido.",
        de: "Es sammelt täglich Honig. Es reibt ihn in seine Beinhaare, um ihn in sein Nest zu transportieren.",
        "pt-br": "Coleta mel todos os dias. Para transportá-lo até o seu ninho, esfrega mel no pelo de suas pernas.",
        "zh-tw": "每天都忙著採集花蜜。習慣在腿部的細毛上塗滿花蜜，然後帶回巢穴裡。",
        ja: "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest.",
        ko: "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest."
    },
    attacks: [
        {
            cost: [
                "Grass"
            ],
            name: {
                en: "Sunny Wind",
                fr: "Vent Ensoleillé",
                es: "Viento Soleado",
                it: "Vento Solare",
                de: "Sonnige Brise",
                "pt-br": "Vento Ensolarado",
                "zh-tw": "太陽之風",
                ja: "Sunny Wind",
                ko: "Sunny Wind"
            },
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                fr: "Soignez 20 dégâts de ce Pokémon.",
                es: "Cura 20 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復20HP。",
                ja: "Heal 20 damage from this Pokémon.",
                ko: "Heal 20 damage from this Pokémon."
            },
            damage: 60
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
