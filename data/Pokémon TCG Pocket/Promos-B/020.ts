import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/020",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/020",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/020"
    },
    name: {
        en: "Charmeleon",
        fr: "Reptincel",
        es: "Charmeleon",
        it: "Charmeleon",
        de: "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍",
        ko: "리자드",
        ja: "リザード"
    },
    illustrator: "Shiburingaru",
    rarity: "None",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    dexId: [5],
    evolveFrom: {
        en: "Charmander",
        fr: "Salamèche",
        es: "Charmander",
        it: "Charmander",
        de: "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍",
        ko: "파이리",
        ja: "ヒトカゲ"
    },
    stage: "Stage1",
    description: {
        en: "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
        fr: "S’il s’excite pendant un combat, il crache\nde grandes flammes, brûlant tout ce qui\nse trouve aux alentours.",
        es: "Si se exalta en combate, expulsa intensas\nllamaradas que incineran todo a su alrededor.",
        it: "Se s’infervora nella lotta, sputa potenti fiamme\nche inceneriscono l’area circostante.",
        de: "Steigert es sich in einen Kampf hinein, spuckt es\nFlammen, die alles in seiner Umgebung\nniederbrennen.",
        "pt-br": "Se ficar agitado durante a batalha, ele solta chamas intensas, incinerando o ambiente ao seu redor.",
        "zh-tw": "如果牠在戰鬥中亢奮起來，\n就會噴出灼熱的火焰，\n把周圍的東西燒得一乾二淨。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Ignition",
                fr: "Allumage",
                es: "Encendido",
                it: "Accensione",
                de: "Zündung",
                "pt-br": "Ignição",
                "zh-tw": "點火"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may take a {R} Energy from your Energy Zone and attach it to your Active {R} Pokémon.",
                fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez prendre une Énergie {R} de votre Zone d'Énergie et l'attacher à votre Pokémon Actif {R}.",
                es: "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes tomar una Energía {R} de tu Zona de Energía y unirla a tu Pokémon {R} Activo.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi prendere un'Energia {R} dalla tua Zona Energetica e assegnarla al tuo Pokémon {R} attivo.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du eine {R}-Energie aus deiner Energiezone nehmen und sie an dein aktives {R}-Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá pegar uma Energia {R} da sua Zona de Energia e ligá-la aos seus Pokémon {R} Ativos.",
                "zh-tw": "在你的回合中，當你從手上使用這只寶可夢來進化你的一隻寶可夢時，你可以從你的能量區取出一個{R}能量並將其附加到你的活躍{R}寶可夢上。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Fire", "Fire", "Colorless"],
            name: {
                en: "Steady Firebreathing",
                fr: "Crachage de Feu Régulier",
                es: "Lanzallamas Continuo",
                it: "Soffiofuoco Mirato",
                de: "Stetiger Feuerhauch",
                "pt-br": "Hálito de Fogo Constante",
                "zh-tw": "吐火"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol3"]
};

export default card;
