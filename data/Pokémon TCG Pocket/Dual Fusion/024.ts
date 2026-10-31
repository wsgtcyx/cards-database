import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/024",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/024",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/024",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/024",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/024",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/024",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/024",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/024"
    },
    name: {
        en: "Cinderace",
        fr: "Pyrobut",
        es: "Cinderace",
        "pt-br": "Cinderace",
        "zh-tw": "閃焰王牌",
        ja: "エースバーン",
        ko: "에이스번",
        it: "Cinderace",
        de: "Liberlo"
    },
    illustrator: "Naoki Saito",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 140,
    types: [
        "Fire"
    ],
    stage: "Stage2",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Raboot",
        fr: "Lapyro",
        es: "Raboot",
        it: "Raboot",
        de: "Kickerlo",
        "pt-br": "Raboot",
        "zh-tw": "騰蹴小將",
        ja: "ラビフット",
        ko: "Raboot"
    },
    attacks: [
        {
            name: {
                en: "Spinning Kick",
                fr: "Coup Tournant",
                es: "Patada Giratoria",
                it: "Calcio Rotante",
                de: "Wirbelkick",
                "pt-br": "Chute Giratório",
                "zh-tw": "旋轉踢",
                ja: "スピニングキック",
                ko: "Spinning Kick"
            },
            cost: [
                "Fire",
                "Fire"
            ],
            damage: 100,
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
                es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 20 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到20點傷害。",
                ja: "このポケモンにも20ダメージ。",
                ko: "This Pokémon also does 20 damage to itself."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Although Cinderace loses its cool easily, it will battle flawlessly for a Trainer it trusts.",
        fr: "Il a tendance à s’emporter facilement, mais quand il accompagne une personne de confiance, il donne le meilleur de lui-même en combat.",
        es: "Es de temperamento irascible, pero da lo mejor de sí mismo en combate cuando cuenta con un Entrenador en el que confía.",
        it: "Gli basta un nonnulla per agitarsi, ma quando ha fiducia in chi lo allena ed è in sua compagnia, riesce a rimanere ben concentrato sulla lotta.",
        de: "Es hat ein hitziges Gemüt. Bringt es einem Trainer aber genügend Vertrauen entgegen, legt es eine fehlerfreie Kampfweise an den Tag.",
        "pt-br": "Embora Cinderace perca as estribeiras com facilidade, batalhará impecavelmente por um Treinador em quem confia.",
        "zh-tw": "雖然擁有容易得意忘形的性格，但只要有牠信任的訓練家在，就能展現出毫無破綻的戰鬥方式。",
        ja: "熱くなりやすい 性格だが 信頼する トレーナーが いると 隙のない 戦い方を みせる。",
        ko: "Although Cinderace loses its cool easily, it will battle flawlessly for a Trainer it trusts."
    }
};

export default card;
