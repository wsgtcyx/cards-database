import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Persian",
        "fr": "persan",
        "es": "persa",
        "it": "persiano",
        "de": "persisch",
        "pt-br": "persa",
        "zh-tw": "波斯語"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Meowth",
        "fr": "Miaouss",
        "es": "maullido",
        "it": "Miaoth",
        "de": "Miau",
        "pt-br": "Miau",
        "zh-tw": "喵喵"
    },
    description: {
        en: "Although its fur has many admirers, it is tough to\nraise as a pet because of its fickle meanness.",
        "fr": "Bien que sa fourrure ait de nombreux admirateurs, elle est difficile à\nélevé comme animal de compagnie en raison de sa méchanceté inconstante.",
        "es": "Aunque su pelaje tiene muchos admiradores, es difícil\ncriar como mascota debido a su voluble mezquindad.",
        "it": "Anche se la sua pelliccia ha molti ammiratori, è difficile farlo\nallevato come animale domestico a causa della sua volubile meschinità.",
        "de": "Obwohl sein Fell viele Bewunderer hat, ist es schwierig\nwegen seiner launischen Gemeinheit als Haustier aufziehen.",
        "pt-br": "Embora sua pelagem tenha muitos admiradores, é difícil\ncrie como animal de estimação por causa de sua maldade inconstante.",
        "zh-tw": "雖然它的皮毛有很多崇拜者，但很難\n由於其反复無常的卑鄙行為而被當作寵物飼養。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Shadow Claw",
                "fr": "Griffe d'Ombre",
                "es": "Garra de las Sombras",
                "it": "Artiglio dell'Ombra",
                "de": "Schattenklaue",
                "pt-br": "Garra Sombria",
                "zh-tw": "暗影爪"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, discard a random card from your opponent's hand.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, défaussez une carte aléatoire de la main de votre adversaire.",
                "es": "Lanza una moneda. Si sale cara, descarta una carta aleatoria de la mano de tu oponente.",
                "it": "Lancia una moneta. Se esce testa, scarta una carta a caso dalla mano del tuo avversario.",
                "de": "Wirf eine Münze. Bei „Kopf“ wirf eine zufällige Karte aus der Hand deines Gegners ab.",
                "pt-br": "Jogue uma moeda. Se sair cara, descarte uma carta aleatória da mão do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則隨機丟棄對手手中的一張牌。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
