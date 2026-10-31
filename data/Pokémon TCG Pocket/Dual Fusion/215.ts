import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/215",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/215",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/215",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/215",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/215",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/215",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/215",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/215"
    },
    name: {
        en: "Fuecoco ex",
        fr: "Chochodile-ex",
        es: "Fuecoco ex",
        "pt-br": "Fuecoco ex",
        "zh-tw": "呆火鱷ex",
        ja: "ホゲータex",
        ko: "뜨아거 ex",
        it: "Fuecoco-ex",
        de: "Krokel-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Crown",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x",
        "pikachu"
    ],
    hp: 130,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住",
                ja: "かみつく",
                ko: "Bite"
            },
            cost: [
                "Fire"
            ],
            damage: 30
        },
        {
            name: {
                en: "Feisty Flames",
                fr: "Flammes Furieuses",
                es: "Llamas Iracundas",
                it: "Fiammata Esuberante",
                de: "Freche Flammen",
                "pt-br": "Labareda Geniosa",
                "zh-tw": "氣鼓鼓火焰",
                ja: "げきおこファイヤー",
                ko: "Feisty Flames"
            },
            cost: [
                "Colorless",
                "Fire"
            ],
            damage: "50+",
            effect: {
                en: "If this Pokémon has damage on it, this attack does 70 more damage.",
                fr: "Si ce Pokémon a subi des dégâts, cette attaque inflige 70 dégâts de plus.",
                es: "Si este Pokémon ya tiene daño, este ataque hace 70 puntos de daño más.",
                it: "Se questo Pokémon è danneggiato, questo attacco infligge 70 danni in più.",
                de: "Wenn diesem Pokémon bereits Schaden zugefügt wurde, fügt diese Attacke 70 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon estiver danificado, este ataque causará 70 pontos de dano a mais.",
                "zh-tw": "若這隻寶可夢有受到傷害,則增加70點傷害。",
                ja: "このポケモンがダメージを受けているなら、70ダメージ追加。",
                ko: "If this Pokémon has damage on it, this attack does 70 more damage."
            }
        }
    ],
    abilities: []
};

export default card;
