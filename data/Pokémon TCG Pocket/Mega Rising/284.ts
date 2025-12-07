import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Blaziken ex",
        "fr": "Méga Blaziken ex",
        "es": "Mega Blaziken ex",
        "it": "Mega Blaziken ex",
        "de": "Mega Blaziken ex",
        "pt-br": "Ex de Mega Blaziken",
        "zh-tw": "超級火焰雞 ex",
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Three Star",
    category: "Pokemon",
    hp: 210,
    types: ["Fire"],
    evolveFrom: {
        en: "Combusken",
        "fr": "Combusken",
        "es": "Combusken",
        "it": "Combusken",
        "de": "Combusken",
        "pt-br": "Combusken",
        "zh-tw": "力壯雞",
    },
    description: {
        en: "When facing a tough foe, it looses flames from\nits wrists. Its powerful legs let it jump clear over\nbuildings.",
        "fr": "Face à un ennemi coriace, il perd des flammes\nses poignets. Ses pattes puissantes lui permettent de sauter au-dessus\nbâtiments.",
        "es": "Cuando se enfrenta a un enemigo duro, suelta llamas de\nsus muñecas. Sus poderosas patas le permiten saltar\nedificios.",
        "it": "Quando affronta un nemico duro, sprigiona fiamme\ni suoi polsi. Le sue zampe potenti gli permettono di saltare oltre\nedifici.",
        "de": "Wenn es einem harten Gegner gegenübersteht, löst es Flammen aus\nseine Handgelenke. Mit seinen kräftigen Beinen kann er problemlos hinüberspringen\nGebäude.",
        "pt-br": "Ao enfrentar um inimigo difícil, ele solta chamas\nseus pulsos. Suas pernas poderosas permitem que ele salte\nedifícios.",
        "zh-tw": "當面對強敵時，它會釋放火焰\n它的手腕。它有力的腿使它能夠跳過\n建築物。"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Mega Burning",
                "fr": "Méga brûlure",
                "es": "mega quema",
                "it": "Mega incendio",
                "de": "Mega-Brennen",
                "pt-br": "Mega Queima",
                "zh-tw": "超級燃燒"
            },
            damage: 120,
            cost: ["Fire", "Fire"],
            effect: {
                en: "Discard Fire{R} Energy from this Pokémon. Your opponent's Active Pokémon is now Burned.",
                "fr": "Défaussez l'Énergie Feu{R} de ce Pokémon. Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                "es": "Descarta Energía Fuego{R} de este Pokémon. El Pokémon Activo de tu rival ahora está Quemado.",
                "it": "Scarta Energia Fire{R} da questo Pokémon. Il Pokémon attivo del tuo avversario è ora bruciato.",
                "de": "Lege Feuer{R}-Energie von diesem Pokémon ab. Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "Descarte a Energia Fire{R} deste Pokémon. O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "丟棄該神奇寶貝的火{R}能量。你對手的活躍神奇寶貝現在被燒毀了。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
