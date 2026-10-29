import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/050",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/050",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/050",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/050",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/050",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/050"
    },
    name: {
        en: "Pawmot",
        fr: "Pohmarmotte",
        es: "Pawmot",
        "pt-br": "Pawmot",
        "zh-tw": "巴布土撥",
        ja: "パーモット",
        ko: "빠르모트",
        it: "Pawmot",
        de: "Pamomamo"
    },
    illustrator: "Keisin",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Lightning"
    ],
    stage: "Stage2",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Pawmo",
        fr: "Pohmotte",
        es: "Pawmo",
        it: "Pawmo",
        de: "Pamamo",
        "pt-br": "Pawmo",
        "zh-tw": "布土撥",
        ja: "Pawmo",
        ko: "Pawmo"
    },
    attacks: [
        {
            name: {
                en: "Mach Bolt",
                fr: "Éclair Fulgurant",
                es: "Rayo Mach",
                it: "Fulmine Mach",
                de: "Flotter Sprung",
                "pt-br": "Raio Supersônico",
                "zh-tw": "音速伏特",
                ja: "Mach Bolt",
                ko: "Mach Bolt"
            },
            cost: [
                "Lightning"
            ],
            damage: 50
        }
    ],
    abilities: [
        {
            name: {
                en: "Electrocreation",
                fr: "Électrocréation",
                es: "Electrocreación",
                it: "Elettrogenerazione",
                de: "Stromerzeugung",
                "pt-br": "Eletrocriação",
                "zh-tw": "造電",
                ja: "Electrocreation",
                ko: "Electrocreation"
            },
            effect: {
                en: "Once during your turn, you may take a {L} Energy from your Energy Zone and attach it to the {L} Pokémon in the Active Spot.",
                fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {L} de votre zone Énergie et l'attacher au Pokémon {L} sur le Poste Actif.",
                es: "Una vez durante tu turno, puedes unir 1 Energía {L} de tu área de Energía al Pokémon {L} en el Puesto Activo.",
                it: "Una sola volta durante il tuo turno, puoi prendere un'Energia {L} dalla tua Zona Energia e assegnarla al Pokémon {L} in posizione attiva.",
                de: "Einmal während deines Zuges kannst du 1 {L}-Energie aus deinem Energiebereich an dein Aktives {L}-Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, você poderá pegar 1 Energia {L} da sua Zona de Energia e ligá-la ao Pokémon {L} no Campo Ativo.",
                "zh-tw": "在自己的回合時,可使用1次。從自己的能量區抽出1個{L}能量,附於戰鬥場的{L}寶可夢身上。",
                ja: "Once during your turn, you may take a {L} Energy from your Energy Zone and attach it to the {L} Pokémon in the Active Spot.",
                ko: "Once during your turn, you may take a {L} Energy from your Energy Zone and attach it to the {L} Pokémon in the Active Spot."
            },
            type: "Ability"
        }
    ],
    description: {
        en: "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements.",
        fr: "D'ordinaire, ce Pokémon est plutôt calme, mais lorsqu'il se bat, il élimine ses adversaires avec des mouvements rapides comme l'éclair.",
        es: "Este Pokémon es normalmente bastante calmado, pero, una vez en combate, derriba a sus rivales con movimientos de una velocidad vertiginosa.",
        it: "Di solito è piuttosto flemmatico, ma quando si trova a lottare atterra il nemico con movimenti fulminei.",
        de: "Dieses Pokémon ist für gewöhnlich sehr gelassen, doch sobald ein Kampf beginnt, streckt es den Gegner mit blitzschnellen Bewegungen zu Boden.",
        "pt-br": "Este Pokémon costuma demorar para reagir, mas quando entra na batalha, derrota seus oponentes com golpes na velocidade da luz.",
        "zh-tw": "雖然平時動作慢吞吞的，但在進入戰鬥時，會用迅雷不及掩耳的身手擊潰敵人。",
        ja: "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements.",
        ko: "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements."
    }
};

export default card;
