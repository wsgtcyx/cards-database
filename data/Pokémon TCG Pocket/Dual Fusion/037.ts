import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/037",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/037",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/037",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/037",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/037",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/037",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/037"
    },
    name: {
        en: "Lapras",
        fr: "Lokhlass",
        es: "Lapras",
        "pt-br": "Lapras",
        "zh-tw": "拉普拉斯",
        ja: "ラプラス",
        ko: "라프라스",
        it: "Lapras",
        de: "Lapras"
    },
    illustrator: "LINNE",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 100,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 3,
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Ice Blade",
                fr: "Lame de Glace",
                es: "Hoja Hielo",
                it: "Ghiacciolama",
                de: "Eisklinge",
                "pt-br": "Lâmina de Gelo",
                "zh-tw": "冰之刃",
                ja: "こおりのやいば",
                ko: "Ice Blade"
            },
            cost: [
                "Water"
            ],
            effect: {
                en: "This attack does 20 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "對手的1隻寶可夢受到20點傷害。",
                ja: "相手のポケモン1匹に20ダメージ。",
                ko: "This attack does 20 damage to 1 of your opponent's Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It ferries people across the sea on its back. It may sing an enchanting cry if it is in a good mood.",
        fr: "Il traverse les mers en transportant les gens sur son dos. Il semblerait qu’il chante un air agréable quand il est de bonne humeur.",
        es: "Surca los mares transportando gente sobre el lomo. Al parecer, a veces entona un melodioso canto si está de buen humor.",
        it: "Trasporta la gente per il mare sul suo dorso. Se è di buon umore emette un verso dolce e melodioso.",
        de: "Es trägt Menschen auf seinem Rücken übers Meer. Wenn es gut gelaunt ist, stimmt es manchmal ein entzückendes Lied an.",
        "pt-br": "Cruza os mares transportando pessoas em suas costas. Pode entoar uma melodia encantadora quando está de bom humor.",
        "zh-tw": "會把人類載在背上渡過大海。當牠心情愉快的時候，還會用美妙的嗓音來唱歌。",
        ja: "人を 背中に乗せて 海を行く。 機嫌がいいと きれいな 鳴き声で 歌うことも あるらしい。",
        ko: "It ferries people across the sea on its back. It may sing an enchanting cry if it is in a good mood."
    }
};

export default card;
