import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Porygon",
        "fr": "Porygon",
        "es": "Porygón",
        "it": "Porygon",
        "de": "Porygon",
        "pt-br": "Porígon",
        "zh-tw": "多邊獸",
    },
    illustrator: "ryoma uratsuka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "State-of-the-art technology was used to create\nPorygon. It was the first artificial Pokémon to be\ncreated via computer programming.",
        "fr": "Une technologie de pointe a été utilisée pour créer\nPorygon. C'était le premier Pokémon artificiel à être\ncréé via la programmation informatique.",
        "es": "Se utilizó tecnología de punta para crear\nPorygón. Fue el primer Pokémon artificial en ser\ncreado mediante programación informática.",
        "it": "Per creare è stata utilizzata la tecnologia più avanzata\nPorygon. È stato il primo Pokémon artificiale ad esserlo\ncreato tramite la programmazione del computer.",
        "de": "Bei der Erstellung kam modernste Technik zum Einsatz\nPorygon. Es war das erste künstliche Pokémon überhaupt\ndurch Computerprogrammierung erstellt.",
        "pt-br": "Tecnologia de ponta foi usada para criar\nPorígon. Foi o primeiro Pokémon artificial a ser\ncriado através de programação de computador.",
        "zh-tw": "採用最先進的技術來創造\n多邊形。這是第一個人造神奇寶貝\n通過計算機編程創建。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
