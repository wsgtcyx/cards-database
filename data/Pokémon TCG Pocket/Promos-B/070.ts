import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/070/bdff29944a2953a8",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/070/bdff29944a2953a8",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/070/bdff29944a2953a8",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/070/bdff29944a2953a8",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/070/bdff29944a2953a8",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/070/bdff29944a2953a8",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/070/bdff29944a2953a8",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/070/bdff29944a2953a8",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/070/bdff29944a2953a8"
    },
    name: {
        en: "Sableye",
        fr: "Ténéfix",
        es: "Sableye",
        it: "Sableye",
        de: "Zobiris",
        "pt-br": "Sableye",
        "zh-tw": "勾魂眼",
        ko: "깜까미",
        ja: "ヤミラミ"
    },
    illustrator: "Nagomi Nijo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [302],
    stage: "Basic",
    description: {
        en: "Materials from gems it has eaten float to the surface of its body and can form an infinite number of patterns among individuals.",
        fr: "Les éléments présents dans les gemmes qu’il\nmange remontent à la surface de son corps,\nformant des motifs d’une infinie variété.",
        es: "Algunos de los elementos de las gemas con las\nque se alimenta emergen en su piel creando\npatrones variopintos.",
        it: "Le sostanze contenute nelle gemme che\ningerisce emergono a livello epidermico e\nformano i motivi più disparati.",
        de: "Die Substanzen der Edelsteine, die es frisst,\nverfestigen sich an seiner Körperoberfläche,\nwobei unendlich viele Musterungen entstehen.",
        "pt-br": "Materiais de joias que este Pokémon come flutuam para a superfície do seu corpo e podem formar uma variedade infinita de padrões entre indivíduos diferentes.",
        "zh-tw": "吃下的寶石成分會在身體\n表面浮現出來。所形成的\n花紋有無限多種變化。",
        ja: "体の 表面に 食った 宝石の 成分が 浮きだす。 その パターンは 無限大だ。",
        ko: "신체의 표면에\n먹은 보석의 성분이 떠오른다.\n그 패턴은 무한대다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Jeweled Gift",
                fr: "Cadeau Joyau",
                es: "Regalo Precioso",
                it: "Gemmadono",
                de: "Juwelengeschenk",
                "pt-br": "Prenda Preciosa",
                "zh-tw": "寶石好禮",
                ja: "ジュエルギフト",
                ko: "주얼기프트"
            },
            effect: {
                en: "Take a random Energy from among {G}, {R}, {W}, {L}, {P}, {F}, {D}, and {M} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                fr: "Prenez une Énergie au hasard parmi les Énergies {G}, {R}, {W}, {L}, {P}, {F}, {D} et {M} de votre zone Énergie et attachez‐la à un de vos Pokémon de Banc.",
                es: "Une 1 Energía aleatoria de entre los tipos {G}, {R}, {W}, {L}, {P}, {F}, {D} y {M} de tu área de Energía a 1 de tus Pokémon en Banca.",
                it: "Prendi un’Energia di un tipo a caso fra {G}, {R}, {W}, {L}, {P}, {F}, {D} e {M} dalla tua Zona Energia e assegnala a uno dei tuoi Pokémon in panchina.",
                de: "Lege 1 zufällige {G}-, {R}-, {W}-, {L}-, {P}-, {F}-, {D}- oder {M}-Energie aus deinem Energiebereich an 1 Pokémon auf deiner Bank an.",
                "pt-br": "Pegue uma Energia aleatória dentre os tipos {G}, {R}, {W}, {L}, {P}, {F}, {D} e {M} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從自己的能量區的{G}、{R}、{W}、{L}、{P}、{F}、{D}、{M}能量之中隨機抽出1個能量,附於備戰寶可夢身上。",
                ja: "自分のエネルギーゾーンから{G}{R}{W}{L}{P}{F}{D}{M}エネルギーの中からランダムに1個出し、ベンチポケモンにつける。",
                ko: "자신의 에너지존에서 {G}{R}{W}{L}{P}{F}{D}{M}에너지 중에서 랜덤으로 1개 내보내 벤치 포켓몬에게 붙인다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
