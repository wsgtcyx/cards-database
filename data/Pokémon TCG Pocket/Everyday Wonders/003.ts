import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/003"
    },
    name: {
        en: "Butterfree",
        fr: "Papilusion",
        es: "Butterfree",
        it: "Butterfree",
        de: "Smettbo",
        "pt-br": "Butterfree",
        "zh-tw": "巴大蝶",
        ko: "버터플",
        ja: "バタフリー"
    },
    illustrator: "ryoma uratsuka",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    dexId: [12],
    evolveFrom: {
        en: "Metapod",
        fr: "Chrysacier",
        es: "Metapod",
        it: "Metapod",
        de: "Safcon",
        "pt-br": "Metapod",
        "zh-tw": "鐵甲蛹",
        ko: "단데기",
        ja: "トランセル"
    },
    stage: "Stage2",
    description: {
        en: "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest.",
        fr: "Il ramasse du nectar chaque jour et l’agglutine\nsur les poils de ses pattes pour le transporter\njusqu’à son nid.",
        es: "Recoge néctar a diario y se lo adhiere al pelo de\nlas patas para llevarlo a su nido.",
        it: "Raccoglie nettare tutti i giorni e lo spalma sulla\npeluria che ricopre le sue zampe per trasportarlo\nal nido.",
        de: "Es sammelt täglich Honig. Es reibt ihn in seine\nBeinhaare, um ihn in sein Nest zu transportieren.",
        "pt-br": "Coleta mel todos os dias. Ele esfrega mel nos pelos das pernas para carregá-lo de volta ao ninho.",
        "zh-tw": "每天都忙著採集花蜜。\n習慣在腿部的細毛上塗滿花蜜，\n然後帶回巢穴裡。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Sunny Wind",
                fr: "Vent ensoleillé",
                es: "viento soleado",
                it: "Vento soleggiato",
                de: "Sonniger Wind",
                "pt-br": "Vento ensolarado",
                "zh-tw": "太陽之風"
            },
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                fr: "Soignez 20 dégâts de ce Pokémon.",
                es: "Cura 20 puntos de daño de este Pokémon.",
                it: "Cura questo Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 de dano deste Pokémon.",
                "zh-tw": "治療該寶可夢造成的 20 點傷害。"
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
