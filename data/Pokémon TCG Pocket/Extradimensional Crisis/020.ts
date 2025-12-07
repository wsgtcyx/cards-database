import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Xurkitree",
        "fr": "Xurkitree",
        "es": "Xurkitree",
        "it": "Xurkitree",
        "de": "Xurkitree",
        "pt-br": "Xurkitree",
        "zh-tw": "旭基樹"
    },
    illustrator: "Satoshi Shirai",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    description: {
        en: "Although it's alien to this world and a danger here, it's apparently\na common organism in the world where it normally lives.",
        "fr": "Bien que ce soit étranger à ce monde et qu'il représente un danger ici, c'est apparemment\nun organisme commun dans le monde où il vit normalement.",
        "es": "Aunque es ajeno a este mundo y un peligro aquí, aparentemente es\nun organismo común en el mundo donde vive normalmente.",
        "it": "Sebbene sia estraneo a questo mondo e un pericolo qui, a quanto pare lo è\nun organismo comune nel mondo in cui vive normalmente.",
        "de": "Obwohl es dieser Welt fremd und hier eine Gefahr darstellt, ist es das offenbar\nein gewöhnlicher Organismus auf der Welt, wo er normalerweise lebt.",
        "pt-br": "Embora seja estranho a este mundo e seja um perigo aqui, aparentemente é\num organismo comum no mundo onde normalmente vive.",
        "zh-tw": "雖然它對這個世界來說是陌生的，並且是這裡的危險，但它顯然是\n其正常生活的世界中的常見有機體。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Electronica",
                "fr": "Électronique",
                "es": "electronica",
                "it": "Elettronica",
                "de": "Electronica",
                "pt-br": "Eletrônica",
                "zh-tw": "電子樂"
            },
            damage: 60,
            cost: ["Lightning", "Colorless", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
