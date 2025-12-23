import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Magnezone",
        "fr": "Magnézone",
        "es": "Magnezone",
        "it": "Magnezone",
        "de": "Magnezone",
        "pt-br": "Magnezone",
        "zh-tw": "自爆磁怪"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Lightning"],
    evolveFrom: {
        en: "Magneton",
        "fr": "Magnéton",
        "es": "Magneton",
        "it": "Magneton",
        "de": "Magneton",
        "pt-br": "Magneton",
        "zh-tw": "三合一磁怪"
    },
    description: {
        en: "Exposure to a special magnetic field changed\nMagneton's molecular structure, turning it into\nMagnezone.",
        "fr": "L'exposition à un champ magnétique spécial a changé\nLa structure moléculaire du magnéton, le transformant en\nMagnézone.",
        "es": "La exposición a un campo magnético especial cambió\nLa estructura molecular del magnetón, convirtiéndolo en\nMagnezona.",
        "it": "L'esposizione a uno speciale campo magnetico è cambiata\nLa struttura molecolare di Magneton, trasformandolo in\nMagnezone.",
        "de": "Die Exposition gegenüber einem speziellen Magnetfeld veränderte sich\nDie molekulare Struktur des Magnetons, die es in umwandelt\nMagnezone.",
        "pt-br": "A exposição a um campo magnético especial mudou\nA estrutura molecular do Magneton, transformando-o em\nMagnezona.",
        "zh-tw": "暴露於特殊磁場改變\n磁子的分子結構，將其變成\n磁區。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Mirror Shot",
                "fr": "Tir miroir",
                "es": "Tiro de espejo",
                "it": "Colpo allo specchio",
                "de": "Spiegelschuss",
                "pt-br": "Tiro no espelho",
                "zh-tw": "鏡面拍攝"
            },
            damage: 90,
            cost: ["Lightning", "Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
                "fr": "Lors du prochain tour de votre adversaire, si le Pokémon Défenseur tente d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, cette attaque n'a pas lieu.",
                "es": "Durante el siguiente turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza una moneda. Si sale cruz, ese ataque no ocurre.",
                "it": "Durante il prossimo turno del tuo avversario, se il Pokémon difensore tenta di usare un attacco, il tuo avversario lancia una moneta. Se esce croce, l'attacco non avviene.",
                "de": "Wenn das verteidigende Pokémon im nächsten Zug deines Gegners versucht, einen Angriff auszuführen, wirft dein Gegner eine Münze. Bei „Zahl“ findet dieser Angriff nicht statt.",
                "pt-br": "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se der coroa, esse ataque não acontece.",
                "zh-tw": "在對手的下一個回合中，如果防御神奇寶貝嘗試使用攻擊，對手會擲硬幣。如果是反面，則不會發生該攻擊。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
