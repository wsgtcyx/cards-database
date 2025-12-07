import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Xatu",
        "fr": "Xatu",
        "es": "Xatu",
        "it": "Xatu",
        "de": "Xatu",
        "pt-br": "Xatu",
        "zh-tw": "天然鳥",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Natu",
        "fr": "Natu",
        "es": "natural",
        "it": "Natura",
        "de": "Natu",
        "pt-br": "Natu",
        "zh-tw": "納圖"
    },
    description: {
        en: "This odd Pokémon can see both the past and\nthe future. It eyes the sun's movement all day.",
        "fr": "Cet étrange Pokémon peut voir à la fois le passé et\nl'avenir. Il observe le mouvement du soleil toute la journée.",
        "es": "Este extraño Pokémon puede ver tanto el pasado como\nel futuro. Observa el movimiento del sol todo el día.",
        "it": "Questo strano Pokémon può vedere sia il passato che\nil futuro. Osserva il movimento del sole tutto il giorno.",
        "de": "Dieses seltsame Pokémon kann sowohl die Vergangenheit als auch sehen\ndie Zukunft. Es beobachtet den ganzen Tag die Bewegung der Sonne.",
        "pt-br": "Este estranho Pokémon pode ver o passado e\no futuro. Ele observa o movimento do sol o dia todo.",
        "zh-tw": "這個奇怪的神奇寶貝可以看到過去和\n未來。它整天注視著太陽的運動。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Zen Headbutt",
                "fr": "Coup de tête zen",
                "es": "Cabezazo zen",
                "it": "Testata Zen",
                "de": "Zen-Kopfstoß",
                "pt-br": "Cabeçada Zen",
                "zh-tw": "禪宗頭撞"
            },
            damage: 80,
            cost: ["Psychic", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
