import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/238",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/238",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/238",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/238",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/238",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/238",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/238"
    },
    name: {
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
    illustrator: "Kanako Eo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Grass"
    ],
    evolveFrom: {
        en: "Bulbasaur",
        fr: "Bulbizarre",
        es: "Bulbasaur",
        it: "Bulbasaur",
        de: "Bisasam",
        "pt-br": "Bulbasaur",
        "zh-tw": "妙蛙種子",
        ja: "Bulbasaur",
        ko: "Bulbasaur"
    },
    description: {
        en: "The more sunlight Ivysaur bathes in, the more\nstrength wells up within it, allowing the bud\non its back to grow larger.",
        fr: "Plus il s'expose au soleil, plus il emmagasine d'énergie, ce qui permet au bourgeon sur son dos de se développer.",
        es: "La luz del sol lo fortalece y hace que le crezca el capullo que tiene en el lomo.",
        it: "Più si espone alla luce solare, più acquisisce energia facendo crescere il bocciolo che ha sul dorso.",
        de: "Die Sonne macht es stärker. Die Knospe auf seinem Rücken wächst unter dem Einfluss von Sonnenlicht.",
        "pt-br": "Quanto mais banho de sol Ivysaur toma, mais força brota em seu interior, fazendo com que o botão nas suas costas cresça.",
        "zh-tw": "沐浴在陽光下越久，身體內會湧出越多力量，背上的花苞也會漸漸成長。",
        ja: "The more sunlight Ivysaur bathes in, the more\nstrength wells up within it, allowing the bud\non its back to grow larger.",
        ko: "The more sunlight Ivysaur bathes in, the more\nstrength wells up within it, allowing the bud\non its back to grow larger."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Synthesis",
                fr: "Synthèse",
                es: "Síntesis",
                it: "Sintesi",
                de: "Synthese",
                "pt-br": "Síntese",
                "zh-tw": "光合作用",
                ja: "Synthesis",
                ko: "Synthesis"
            },
            cost: [
                "Grass"
            ],
            effect: {
                en: "Take 2 {G} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez 2 Énergies {G} de votre zone Énergie et attachez-les à ce Pokémon.",
                es: "Une 2 Energías {G} de tu área de Energía a este Pokémon.",
                it: "Prendi 2 Energie {G} dalla tua Zona Energia e assegnale a questo Pokémon.",
                de: "Lege 2 {G}-Energien aus deinem Energiebereich an dieses Pokémon an.",
                "pt-br": "Pegue 2 Energias {G} da sua Zona de Energia e ligue-as a este Pokémon.",
                "zh-tw": "從自己的能量區抽出2個{G}能量,附於這隻寶可夢身上。",
                ja: "Take 2 {G} Energy from your Energy Zone and attach it to this Pokémon.",
                ko: "Take 2 {G} Energy from your Energy Zone and attach it to this Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
