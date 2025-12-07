import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Chatot",
        "fr": "Chatot",
        "es": "Chatot",
        "it": "Chatot",
        "de": "Chatot",
        "pt-br": "Chatot",
        "zh-tw": "聒噪鳥",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "It mimics the cries of other Pokémon to trick them\ninto thinking it's one of them. This way they won't\nattack it.",
        "fr": "Il imite les cris des autres Pokémon pour les tromper\nen pensant que c'est l'un d'entre eux. De cette façon, ils ne le feront pas\nl'attaquer.",
        "es": "Imita los gritos de otros Pokémon para engañarlos.\na pensar que es uno de ellos. De esta manera no lo harán\natacarlo.",
        "it": "Imita le grida degli altri Pokémon per ingannarli\nnel pensare che sia uno di loro. In questo modo non lo faranno\nattaccarlo.",
        "de": "Es ahmt die Schreie anderer Pokémon nach, um sie auszutricksen\nzu denken, dass es einer von ihnen ist. Auf diese Weise werden sie es nicht tun\ngreife es an.",
        "pt-br": "Ele imita os gritos de outros Pokémon para enganá-los\nem pensar que é um deles. Dessa forma eles não vão\natacá-lo.",
        "zh-tw": "它模仿其他神奇寶貝的叫聲來欺騙他們\n認為它是其中之一。這樣他們就不會\n攻擊它。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tone-Deaf",
                "fr": "Ton-Sourd",
                "es": "sordo",
                "it": "Stonato",
                "de": "Ton-taub",
                "pt-br": "Surdo",
                "zh-tw": "五音不全"
            },
            damage: 10,
            cost: ["Colorless"],
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
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
