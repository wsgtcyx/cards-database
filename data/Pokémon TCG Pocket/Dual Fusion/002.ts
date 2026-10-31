import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/002",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/002",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/002",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/002",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/002"
    },
    name: {
        en: "Ivysaur",
        fr: "Herbizarre",
        es: "Ivysaur",
        "pt-br": "Ivysaur",
        "zh-tw": "妙蛙草",
        ja: "フシギソウ",
        ko: "이상해풀",
        it: "Ivysaur",
        de: "Bisaknosp"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 100,
    types: [
        "Grass"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Bulbasaur",
        fr: "Bulbizarre",
        es: "Bulbasaur",
        it: "Bulbasaur",
        de: "Bisasam",
        "pt-br": "Bulbasaur",
        "zh-tw": "妙蛙種子",
        ja: "フシギダネ",
        ko: "이상해씨"
    },
    attacks: [
        {
            name: {
                en: "Leaf Drain",
                fr: "Feuille Sangsue",
                es: "Hoja Drenante",
                it: "Assorbifoglia",
                de: "Blattsauger",
                "pt-br": "Dreno Folha",
                "zh-tw": "綠葉吸取",
                ja: "リーフドレイン",
                ko: "리프드레인"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Grass"
            ],
            damage: 50,
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
            }
        }
    ],
    abilities: [],
    description: {
        en: "The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.",
        fr: "Plus il s’expose au soleil, plus il emmagasine d’énergie, ce qui permet au bourgeon sur son dos de se développer.",
        es: "Cuanta más luz solar recibe, más aumenta su fuerza y más se desarrolla el capullo que tiene en el lomo.",
        it: "Più si espone alla luce solare, più acquisisce energie facendo crescere il bocciolo che ha sul dorso.",
        de: "Die Sonne macht es stärker. Die Knospe auf seinem Rücken wächst unter dem Einfluss von Sonnenlicht.",
        "pt-br": "Quanto mais banho de sol Ivysaur toma, mais força brota em seu interior, fazendo com que o botão nas suas costas cresça.",
        "zh-tw": "沐浴在陽光下越久，身體內會湧出越多力量，背上的花苞也會漸漸成長。",
        ja: "太陽の 光を 浴びるほど 体に 力が わいて 背中の つぼみが 育っていく。",
        ko: "햇빛을 받을수록\n몸에 힘이 솟아나\n등의 꽃봉오리가 자라난다."
    }
};

export default card;
