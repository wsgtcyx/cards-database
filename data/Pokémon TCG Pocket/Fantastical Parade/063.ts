import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/063"
    },
    name: {
        en: "Ralts",
        "fr": "Ralts",
        "es": "Ralts",
        "it": "Ralts",
        "de": "Ralts",
        "pt-br": "Ralts",
        "zh-tw": "拉爾茨"
    },
    illustrator: "mingo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "It is highly attuned to the emotions of people\nand Pokémon. It hides if it senses hostility.",
        "fr": "Il est très sensible aux émotions des gens\net Pokémon. Il se cache s'il ressent de l'hostilité.",
        "es": "Está muy en sintonía con las emociones de las personas.\ny Pokémon. Se esconde si siente hostilidad.",
        "it": "È molto in sintonia con le emozioni delle persone\ne Pokemon. Si nasconde se avverte ostilità.",
        "de": "Es ist stark auf die Emotionen der Menschen abgestimmt\nund Pokémon. Es versteckt sich, wenn es Feindseligkeit spürt.",
        "pt-br": "Está altamente sintonizado com as emoções das pessoas\ne Pokémon. Ele se esconde se sentir hostilidade.",
        "zh-tw": "它高度契合人們的情緒\n和神奇寶貝。如果它感受到敵意，它就會隱藏起來。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Confuse Ray",
                "fr": "Onde Folie",
                "es": "Rayo Confuso",
                "it": "Stordiraggio",
                "de": "Konfusstrahl",
                "pt-br": "Raio da Confusão",
                "zh-tw": "迷惑雷"
            },
            cost: ["Psychic"],
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
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
