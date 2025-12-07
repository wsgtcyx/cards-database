import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Naganadel",
        "fr": "Naganadel",
        "es": "Naganadel",
        "it": "Naganadel",
        "de": "Naganadel",
        "pt-br": "Naganadel",
        "zh-tw": "四顎針龍",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Poipole",
        "fr": "Poipole",
        "es": "poipole",
        "it": "Poipole",
        "de": "Poipole",
        "pt-br": "Poipole",
        "zh-tw": "波伊波萊"
    },
    description: {
        en: "It stores hundreds of liters of poisonous liquid\ninside its body. It is one of the organisms known\nas UBs.",
        "fr": "Il stocke des centaines de litres de liquide toxique\nà l'intérieur de son corps. C'est l'un des organismes connus\ncomme UB.",
        "es": "Almacena cientos de litros de líquido venenoso.\ndentro de su cuerpo. Es uno de los organismos conocidos.\ncomo UB.",
        "it": "Conserva centinaia di litri di liquido velenoso\nall'interno del suo corpo. È uno degli organismi conosciuti\ncome UB.",
        "de": "Es speichert Hunderte Liter giftige Flüssigkeit\nin seinem Körper. Es ist einer der bekannten Organismen\nals UBs.",
        "pt-br": "Armazena centenas de litros de líquido venenoso\ndentro de seu corpo. É um dos organismos conhecidos\ncomo UBs.",
        "zh-tw": "它儲存了數百升有毒液體\n在它的身體裡面。它是已知的生物之一\n作為 UB。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electro House",
                "fr": "Electro House",
                "es": "Casa Electro",
                "it": "Casa elettronica",
                "de": "Electro House",
                "pt-br": "Casa Eletro",
                "zh-tw": "電子屋"
            },
            damage: 40,
            cost: ["Darkness"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
