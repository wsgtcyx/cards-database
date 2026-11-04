import { Card } from "../../../interfaces";
import Set from "../Promos-C";

const card: Card = {
    set: Set,
    name: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ja: "ピカチュウ",
        ko: "피카츄"
    },
    illustrator: "Narumi Sato",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Lightning"
    ],
    description: {
        en: "When several of these Pokémon gather, their electricity can build and cause lightning storms.",
        fr: "Quand plusieurs de ces Pokémon se réunissent, ils provoquent de gigantesques orages.",
        es: "Cuando varios de estos Pokémon se juntan, su energía puede causar fuertes tormentas.",
        it: "Quando vari Pokémon di questa specie si radunano, la loro energia si accumula e genera fulmini.",
        de: "Wenn sich mehrere dieser Pokémon versammeln, kann ihre geballte Energie Blitzgewitter erzeugen.",
        "pt-br": "Quando vários destes Pokémon se juntam, a eletricidade deles pode se acumular e causar tempestades de raios.",
        "zh-tw": "據說同一處有好幾隻的時候，牠們就會聚集起強烈的電力，還可能造成閃電落於該處。",
        ja: "何匹かが 集まっていると そこに 猛烈な 電気が 溜まり 稲妻が 落ちることがあるという。",
        ko: "여러 마리가 모여 있으면 그 자리에 맹렬하게 전기가 모여서 벼락이 떨어질 때가 있다고 한다."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Thunder Jolt",
                fr: "Secousse Tonnerre",
                es: "Sacudida Atronadora",
                it: "Scoppiotuono",
                de: "Donnerrüttler",
                "pt-br": "Choque do Trovão",
                "zh-tw": "電流攻擊",
                ja: "でんげき",
                ko: "전격"
            },
            cost: [
                "Lightning"
            ],
            damage: 30,
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
                es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 10 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到10點傷害。",
                ja: "このポケモンにも10ダメージ。",
                ko: "이 포켓몬에게도 10데미지를 준다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-C/001/90c8dbe7325be5d0",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-C/001/90c8dbe7325be5d0",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-C/001/90c8dbe7325be5d0",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-C/001/90c8dbe7325be5d0",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-C/001/90c8dbe7325be5d0",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-C/001/90c8dbe7325be5d0",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-C/001/90c8dbe7325be5d0",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-C/001/90c8dbe7325be5d0",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-C/001/90c8dbe7325be5d0"
    }
};

export default card;
