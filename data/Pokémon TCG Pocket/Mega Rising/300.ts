import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Popplio",
        "fr": "Popplio",
        "es": "poplio",
        "it": "Popplio",
        "de": "Popplio",
        "pt-br": "Popplio",
        "zh-tw": "波普利奧"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "The balloons it inflates with its nose grow\nlarger and larger as it practices day by day.",
        "fr": "Les ballons qu'il gonfle avec son nez grandissent\nde plus en plus grand à mesure qu'il s'entraîne jour après jour.",
        "es": "Los globos que infla con su nariz crecen\nmás y más grande a medida que se practica día a día.",
        "it": "I palloncini che gonfia con il naso crescono\nsempre più grande man mano che si esercita giorno dopo giorno.",
        "de": "Die Ballons, die es mit seiner Nase aufbläst, wachsen\ngrößer und größer, je mehr es Tag für Tag praktiziert.",
        "pt-br": "Os balões que ele infla com o nariz crescem\ncada vez maior à medida que pratica dia após dia.",
        "zh-tw": "它用鼻子吹的氣球長大了\n隨著它日復一日的練習，它變得越來越大。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sing",
                "fr": "Chanter",
                "es": "Cantar",
                "it": "Cantare",
                "de": "Singen",
                "pt-br": "Cantar",
                "zh-tw": "唱歌"
            },
            cost: ["Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
