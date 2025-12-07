import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Octillery",
        "fr": "Octillerie",
        "es": "Octillería",
        "it": "Ottilleria",
        "de": "Oktillerie",
        "pt-br": "Octilharia",
        "zh-tw": "章魚桶",
    },
    illustrator: "REND",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    evolveFrom: {
        en: "Remoraid",
        "fr": "Remoraid",
        "es": "Remoraid",
        "it": "Remoraid",
        "de": "Remoraid",
        "pt-br": "Remoraid",
        "zh-tw": "雷莫拉伊德"
    },
    description: {
        en: "Its instinct is to bury itself in holes. It often steals\nthe nesting holes of others to sleep in them.",
        "fr": "Son instinct est de s'enfouir dans des trous. Il vole souvent\nles nids des autres pour y dormir.",
        "es": "Su instinto es enterrarse en agujeros. A menudo roba\nlos nidos de otros para dormir en ellos.",
        "it": "Il suo istinto è quello di seppellirsi nelle buche. Ruba spesso\ni nidi degli altri per dormirci dentro.",
        "de": "Sein Instinkt besteht darin, sich in Löchern zu vergraben. Es wird oft geklaut\ndie Nisthöhlen anderer, um darin zu schlafen.",
        "pt-br": "Seu instinto é enterrar-se em buracos. Muitas vezes rouba\nos ninhos de outros para dormir neles.",
        "zh-tw": "它的本能就是把自己埋進洞裡。經常偷東西\n別人的巢穴，讓他們睡在裡面。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Octazooka",
                "fr": "Octazooka",
                "es": "Octazooka",
                "it": "Ottazooka",
                "de": "Octazooka",
                "pt-br": "Octazooka",
                "zh-tw": "八祖岡"
            },
            damage: 50,
            cost: ["Water", "Water"],
            effect: {
                en: "If the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen. This effect lasts until the Defending Pokémon leaves the Active Spot, and it doesn't stack.",
                "fr": "Si le Pokémon défenseur tente d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, cette attaque n'a pas lieu. Cet effet dure jusqu'à ce que le Pokémon défenseur quitte le point actif, et il ne se cumule pas.",
                "es": "Si el Pokémon Defensor intenta usar un ataque, tu oponente lanza una moneda. Si sale cruz, ese ataque no ocurre. Este efecto dura hasta que el Pokémon Defensor abandona el Punto Activo y no se acumula.",
                "it": "Se il Pokémon difensore tenta di usare un attacco, il tuo avversario lancia una moneta. Se esce croce, l'attacco non avviene. Questo effetto dura finché il Pokémon difensore non lascia il punto attivo e non si accumula.",
                "de": "Wenn das verteidigende Pokémon versucht, einen Angriff auszuführen, wirft dein Gegner eine Münze. Bei „Zahl“ findet dieser Angriff nicht statt. Dieser Effekt hält an, bis das verteidigende Pokémon die aktive Position verlässt, und ist nicht stapelbar.",
                "pt-br": "Se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se der coroa, esse ataque não acontece. Este efeito dura até o Pokémon Defensor sair do Ponto Ativo e não se acumula.",
                "zh-tw": "如果防守的神奇寶貝嘗試使用攻擊，你的對手會擲硬幣。如果是反面，則不會發生該攻擊。該效果會持續到防御寶可夢離開活動區域為止，並且不會疊加。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
