import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/022",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/022",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/022",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/022",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/022",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/022"
    },
    name: {
        en: "Grookey",
        fr: "Ouistempo",
        es: "Grookey",
        "pt-br": "Grookey",
        "zh-tw": "敲音猴",
        ja: "サルノリ",
        ko: "흥나숭",
        it: "Grookey",
        de: "Chimpep"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Branch Poke",
                fr: "Tapotige",
                es: "Punzada Rama",
                it: "Ramostoccata",
                de: "Zweigstoß",
                "pt-br": "Cutucada com Galho",
                "zh-tw": "木枝突刺",
                ja: "Branch Poke",
                ko: "Branch Poke"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.",
        fr: "Le rythme qu'il crée en frappant avec son bâton très spécial génère des ondes sonores qui ont le pouvoir de revitaliser les plantes.",
        es: "Al marcar el ritmo con su baqueta especial, produce unas ondas sonoras capaces de devolver la vitalidad a la flora.",
        it: "Battendo il ritmo con la sua bacchetta speciale diffonde vibrazioni che hanno il potere di rinvigorire fiori e piante.",
        de: "Der Rhythmus, den es mit seinem besonderen Schlägel erzeugt, versendet Schallwellen, die Pflanzen neue Vitalität verleihen können.",
        "pt-br": "Quando usa o seu graveto especial para fazer uma batida, as ondas sonoras emitem uma energia que revitaliza plantas e flores ao redor.",
        "zh-tw": "當牠用特別的木棒敲奏時，能夠給予花草活力的力量就會變成音波擴散開來。",
        ja: "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.",
        ko: "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area."
    }
};

export default card;
