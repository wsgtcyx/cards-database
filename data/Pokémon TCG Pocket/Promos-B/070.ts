import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/070",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/070",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/070",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/070",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/070",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/070"
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
    rarity: "None",
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
        "pt-br": "Os materiais das gemas que ele comeu flutuam na superfície de seu corpo e podem formar um número infinito de padrões entre os indivíduos.",
        "zh-tw": "吃下的寶石成分會在身體\n表面浮現出來。所形成的\n花紋有無限多種變化。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Jeweled Gift",
                fr: "Cadeau bijou",
                es: "Regalo con joyas",
                it: "Regalo gioiello",
                de: "Juwelenbesetztes Geschenk",
                "pt-br": "Presente com joias",
                "zh-tw": "寶石好禮"
            },
            effect: {
                en: "Take a random Energy from among {G}, {R}, {W}, {L}, {P}, {F}, {D}, and {M} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                fr: "Prenez une Énergie aléatoire parmi les Énergies {G}, {R}, {W}, {L}, {P}, {F}, {D} et {M} de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Banc.",
                es: "Toma una Energía aleatoria de entre Energías {G}, {R}, {W}, {L}, {P}, {F}, {D} y {M} de tu Zona de Energía y únela a 1 de tus Pokémon en Banca.",
                it: "Prendi un'Energia casuale tra {G}, {R}, {W}, {L}, {P}, {F}, {D} e {M} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon in panchina.",
                de: "Nimm eine zufällige Energie aus {G}, {R}, {W}, {L}, {P}, {F}, {D} und {M} Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Pegue uma energia aleatória entre {G}, {R}, {W}, {L}, {P}, {F}, {D} e {M} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從你的能量區的{G}、{R}、{W}、{L}、{P}、{F}、{D}和{M}能量隨機抽取一個能量，並將其附加到你的1隻後備寶可夢。"
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
