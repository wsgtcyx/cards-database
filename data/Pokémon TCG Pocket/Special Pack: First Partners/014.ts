import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/014",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/014",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/014",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/014",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/014",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/014",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/014",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/SP1/014"
    },
    name: {
        en: "Tepig",
        fr: "Gruikui",
        es: "Tepig",
        "pt-br": "Tepig",
        "zh-tw": "暖暖豬",
        ja: "ポカブ",
        ko: "뚜꾸리",
        it: "Tepig",
        de: "Floink"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Ember",
                fr: "Flammèche",
                es: "Ascuas",
                it: "Braciere",
                de: "Glut",
                "pt-br": "Brasa",
                "zh-tw": "火花",
                ja: "ひのこ",
                ko: "불꽃세례"
            },
            cost: [
                "Fire"
            ],
            damage: 30,
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta 1 Energía {R} de este Pokémon.",
                it: "Rimuovi un'Energia {R} da questo Pokémon.",
                de: "Lege 1 {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {R} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{R}能量丟棄。",
                ja: "このポケモンから{R}エネルギーを1個トラッシュ。",
                ko: "이 포켓몬에서 {R}에너지를 1개 트래쉬한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It blows fire through its nose. When it catches a cold, the fire becomes pitch-black smoke instead.",
        fr: "Il crache du feu par le groin. Mais quand il est enrhumé, seule une fumée noirâtre en sort.",
        es: "Lanza llamas por su hocico. Resfriado, echa humo negro en lugar de fuego.",
        it: "Sputa fuoco dalle narici. Quando ha il raffreddore, al posto del fuoco emette un fumo nerissimo.",
        de: "Es schleudert Flammen aus seinem Rüssel. Ist es erkältet, kommt statt Feuer aber nur pechschwarzer Rauch heraus.",
        "pt-br": "Ele expele fogo pelo nariz. Quando fica resfriado, o fogo se torna uma fumaça preta.",
        "zh-tw": "從鼻孔噴出火焰。感冒時噴出的就不是火焰，而是漆黑的煙。",
        ja: "鼻の 穴から 炎を 吹く。 カゼを ひくと 炎ではなく 真っ黒な 煙に なってしまう。",
        ko: "콧구멍에서 불꽃을 뿜어낸다.\n감기에 걸리면 불꽃 대신\n새까만 연기를 뿜어낸다."
    }
};

export default card;
