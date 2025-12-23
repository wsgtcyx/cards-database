import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Porygon",
        "fr": "Porygon",
        "es": "Porygon",
        "it": "Porygon",
        "de": "Porygon",
        "pt-br": "Porygon",
        "zh-tw": "多邊獸"
    },
    illustrator: "Hisao Nakamura",
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
                en: "Stiffen",
                "fr": "Raidir",
                "es": "Endurecer",
                "it": "Irrigidirsi",
                "de": "Versteifen",
                "pt-br": "Endurecer",
                "zh-tw": "變硬"
            },
            cost: ["Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -20 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -20 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −20 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -20 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-20。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
