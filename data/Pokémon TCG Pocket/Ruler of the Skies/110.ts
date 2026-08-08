import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/110",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/110",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/110",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/110",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/110",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/110",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/110"
    },
    name: {
        en: "Escavalier",
        fr: "Lançargot",
        es: "Escavalier",
        it: "Escavalier",
        de: "Cavalanzas",
        "pt-br": "Escavalier",
        "zh-tw": "騎士蝸牛",
        ko: "슈바르고",
        ja: "シュバルゴ"
    },
    illustrator: "Nurikabe",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Metal"],
    dexId: [589],
    evolveFrom: {
        en: "Karrablast",
        fr: "Carabing",
        es: "Karrablast",
        it: "Karrablast",
        de: "Laukaps",
        "pt-br": "Karrablast",
        "zh-tw": "蓋蓋蟲",
        ko: "딱정곤",
        ja: "カブルモ"
    },
    stage: "Stage1",
    description: {
        en: "These Pokémon evolve by wearing the shell covering of a Shelmet. The steel armor protects their whole body.",
        fr: "Un Pokémon qui a évolué en portant la carapace\nd’un Escargaume. Une armure de fer protège tout\nson corps.",
        es: "Pokémon que evolucionó poniéndose el caparazón de\nShelmet. Su armazón de acero le protege todo el cuerpo.",
        it: "Pokémon che si è evoluto appropriandosi della conchiglia\ndi Shelmet. Un’armatura d’acciaio protegge tutto il suo corpo.",
        de: "Es ist bei der Entwicklung in die Muschel eines Schnuthelm\ngeschlüpft. Die Eisenrüstung schützt seinen ganzen Körper.",
        "pt-br": "Estes Pokémon evoluem ao vestir a concha de um Shelmet. A armadura de aço protege seu corpo inteiro."
    },
    attacks: [
        {
            cost: ["Metal", "Metal"],
            name: {
                en: "Iron Lance",
                fr: "Lance de Fer",
                es: "Lanza de Hierro",
                "pt-br": "Lança de Ferro",
                "zh-tw": "鐵槍",
                "it": "Spunzone Ferreo",
                "de": "Eisenlanze"
            },
            damage: 70
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
