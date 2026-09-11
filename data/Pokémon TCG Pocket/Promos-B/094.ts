import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: { en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/094", fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/094", es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/094", it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/094", de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/094", "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/094", "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/094" },
    name: { en: "Meowstic", fr: "Mistigrix", es: "Meowstic", it: "Meowstic", de: "Psiaugon", "pt-br": "Meowstic", "zh-tw": "超能妙喵", ko: "냐오닉스", ja: "ニャオニクス" },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    dexId: [678],
    evolveFrom: { en: "Espurr", fr: "Psystigri", es: "Espurr", it: "Espurr", de: "Psiau", "pt-br": "Espurr", "zh-tw": "妙喵", ko: "냐스퍼", ja: "ニャスパー" },
    stage: "Stage1",
    description: {
        en: "The eyeball patterns on the interior of its ears emit psychic energy. It keeps the patterns tightly covered because that power is too immense.",
        fr: "Les motifs en forme d'yeux à l'intérieur de ses oreilles émettent une force psychique tellement puissante qu'il est contraint de les garder couverts.",
        es: "Las marcas en forma de ojos que tiene en las orejas emiten poderes psíquicos, pero su potencia es tan avasalladora que las mantiene tapadas.",
        it: "I motivi a forma di occhio all'interno delle orecchie sono la fonte del suo potere psichico. Li tiene coperti per controllarne l'immensa potenza.",
        de: "Über das Augenmuster auf der Innenseite seiner Ohren setzt es seine Psycho-Kräfte frei. Da diese aber viel zu stark sind, hält es das Muster bedeckt.",
        "pt-br": "O modelo dos globos oculares no interior das suas orelhas emite energia psíquica. O modelo é mantido coberto porque esse poder é grande demais.",
        "zh-tw": "由於耳朵內側的眼珠花紋釋放出的精神力量實在太過強烈，因此總是將耳朵摺住。"
    },
    attacks: [{ cost: ["Psychic", "Psychic"], name: { en: "Super Psy Bolt", fr: "Super Psy", es: "Superrayo Psi", it: "Superpsico", de: "Super-Psischlag", "pt-br": "Super-raio Psíquico", "zh-tw": "超念力" }, damage: 70 }],
    weaknesses: [{ type: "Darkness", value: "+20" }],
    retreat: 1,
    boosters: []
};

export default card;
