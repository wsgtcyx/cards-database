import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Blaziken",
        "fr": "Blaziken",
        "es": "Blaziken",
        "it": "Blaziken",
        "de": "Blaziken",
        "pt-br": "Blaziken",
        "zh-tw": "布拉齊肯"
    },
    illustrator: "GOSSAN",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    evolveFrom: {
        en: "Combusken",
        "fr": "Combusken",
        "es": "Combusken",
        "it": "Combusken",
        "de": "Combusken",
        "pt-br": "Combusken",
        "zh-tw": "康布肯"
    },
    description: {
        en: "When facing a tough foe, it looses flames from\nits wrists. Its powerful legs let it jump clear\nover buildings.",
        "fr": "Face à un ennemi coriace, il perd des flammes\nses poignets. Ses pattes puissantes lui permettent de sauter clairement\nsur les bâtiments.",
        "es": "Cuando se enfrenta a un enemigo duro, suelta llamas de\nsus muñecas. Sus poderosas patas le permiten saltar con claridad.\nsobre edificios.",
        "it": "Quando affronta un nemico duro, sprigiona fiamme\ni suoi polsi. Le sue zampe potenti gli permettono di saltare\nsopra gli edifici.",
        "de": "Wenn es einem harten Gegner gegenübersteht, löst es Flammen aus\nseine Handgelenke. Seine kräftigen Beine lassen ihn klar springen\nüber Gebäuden.",
        "pt-br": "Ao enfrentar um inimigo difícil, ele solta chamas\nseus pulsos. Suas pernas poderosas permitem que ele salte\nsobre edifícios.",
        "zh-tw": "當面對強敵時，它會釋放火焰\n它的手腕。它有力的腿讓它跳躍得更清楚\n建築物上方。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Blaze Kick",
                "fr": "Coup de pied fulgurant",
                "es": "Patada de fuego",
                "it": "Calcio fiammeggiante",
                "de": "Blaze-Kick",
                "pt-br": "Chute Flamejante",
                "zh-tw": "火焰踢"
            },
            damage: 100,
            cost: ["Fire", "Fire"],
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                "fr": "Défaussez une Énergie {R} de ce Pokémon.",
                "es": "Descarta una Energía {R} de este Pokémon.",
                "it": "Scarta un'Energia {R} da questo Pokémon.",
                "de": "Wirf eine {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {R} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
