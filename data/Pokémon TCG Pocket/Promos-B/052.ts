import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/052/9e37fdf44fd0674b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/052/9e37fdf44fd0674b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/052/9e37fdf44fd0674b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/052/9e37fdf44fd0674b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/052/9e37fdf44fd0674b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/052/9e37fdf44fd0674b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/052/9e37fdf44fd0674b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/052/9e37fdf44fd0674b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/052/9e37fdf44fd0674b"
    },
    name: {
        en: "Zygarde",
        fr: "Zygarde",
        es: "Zygarde",
        it: "Zygarde",
        de: "Zygarde",
        "pt-br": "Zygarde",
        "zh-tw": "基格爾德",
        ko: "지가르데",
        ja: "ジガルデ"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [718],
    stage: "Basic",
    description: {
        en: "Some say it can change to an even more powerful form when battling those who threaten the ecosystem.",
        fr: "Ce Pokémon serait capable de prendre\nune forme encore plus puissante quand il se bat\ncontre un ennemi qui menace l’écosystème.",
        es: "Según los rumores, puede adoptar una forma\naún más poderosa cuando se enfrenta a\nquienquiera que amenace el ecosistema.",
        it: "Si dice che possa assumere una forma ancora\npiù potente quando si trova di fronte un nemico\nche rappresenta una minaccia per l’ecosistema.",
        de: "Im Kampf gegen all jene, die das Ökosystem in\nGefahr bringen, nimmt es angeblich eine noch\nmächtigere Form an.",
        "pt-br": "Dizem que este Pokémon pode assumir uma forma ainda mais poderosa quando batalha contra aqueles que ameaçam a natureza.",
        "zh-tw": "據說當牠與威脅到\n生態系統的對手戰鬥時，\n會變化成更強大的樣子。",
        ja: "生態系を 脅かす ものと 戦うとき 更に 強力な 姿に 変化すると いわれる。",
        ko: "생태계를 위협하는 자와\n싸울 때 더욱 강력한 모습으로\n변화한다고 전해진다."
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Cell Storm",
                fr: "Tempête Cellulaire",
                es: "Tormenta Celular",
                it: "Tempesta Cellulare",
                de: "Zellsturm",
                "pt-br": "Célula de Tempestade",
                "zh-tw": "細胞風暴",
                ja: "セルストーム",
                ko: "셀스톰"
            },
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                fr: "Soignez 20 dégâts de ce Pokémon.",
                es: "Cura 20 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復20HP。",
                ja: "このポケモンのHPを20回復。",
                ko: "이 포켓몬의 HP를 20회복."
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol7"]
};

export default card;
