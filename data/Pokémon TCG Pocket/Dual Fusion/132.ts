import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/132",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/132",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/132",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/132",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/132",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/132",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/132",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/132",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/132"
    },
    name: {
        en: "Venusaur",
        fr: "Florizarre",
        es: "Venusaur",
        "pt-br": "Venusaur",
        "zh-tw": "妙蛙花",
        ja: "フシギバナ",
        ko: "이상해꽃",
        it: "Venusaur",
        de: "Bisaflor"
    },
    illustrator: "Yuriko Akase",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 150,
    types: [
        "Grass"
    ],
    stage: "Stage2",
    retreat: 3,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Ivysaur",
        fr: "Herbizarre",
        es: "Ivysaur",
        it: "Ivysaur",
        de: "Bisaknosp",
        "pt-br": "Ivysaur",
        "zh-tw": "妙蛙草",
        ja: "フシギソウ",
        ko: "이상해풀"
    },
    attacks: [
        {
            name: {
                en: "Solar Beam",
                fr: "Lance-Soleil",
                es: "Rayo Solar",
                it: "Solarraggio",
                de: "Solarstrahl",
                "pt-br": "Raio Solar",
                "zh-tw": "日光束",
                ja: "ソーラービーム",
                ko: "솔라빔"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Colorless",
                "Grass"
            ],
            damage: 90
        }
    ],
    abilities: [
        {
            name: {
                en: "Sunny Heal",
                fr: "Guérison Solaire",
                es: "Cura Soleada",
                it: "Solcura",
                de: "Sonnenheilung",
                "pt-br": "Cura Ensolarada",
                "zh-tw": "陽光治癒",
                ja: "サニーヒール",
                ko: "서니 힐"
            },
            effect: {
                en: "Once during your turn, you may heal 30 damage from your Active Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez soigner 30 dégâts de votre Pokémon Actif.",
                es: "Una vez durante tu turno, puedes curar 30 puntos de daño a tu Pokémon Activo.",
                it: "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon attivo da 30 danni.",
                de: "Einmal während deines Zuges kannst du 30 Schadenspunkte bei deinem Aktiven Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, você poderá curar 30 pontos de dano do seu Pokémon Ativo.",
                "zh-tw": "在自己的回合時,可使用1次。將自己的戰鬥寶可夢恢復30HP。",
                ja: "自分の番に1回使える。自分のバトルポケモンのHPを30回復。",
                ko: "자신의 차례에 1번 사용할 수 있다. 자신의 배틀 포켓몬의 HP를 30회복."
            },
            type: "Ability"
        }
    ],
    description: {
        en: "While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.",
        fr: "Ce Pokémon est capable de transformer la lumière du soleil en énergie. Il est donc encore plus fort en été.",
        es: "Puede convertir la luz del sol en energía. Por esa razón, es más poderoso en verano.",
        it: "Può convertire la luce solare in energia. Per questo è più forte in estate.",
        de: "Da es Sonnenlicht in Energie umwandelt, ist es im Sommer stärker.",
        "pt-br": "Enquanto toma um solzinho, consegue converter a luz em energia. Por isso, é mais poderoso durante o verão.",
        "zh-tw": "由於能將沐浴的陽光轉換成能量，夏天會變得更強。",
        ja: "浴びた 太陽の 光を エネルギーに 変換できるので 夏の ほうが 強くなる。",
        ko: "내리쪼이는 태양 빛을\n에너지로 변환할 수 있기 때문에\n여름에 더욱 강해진다."
    }
};

export default card;
