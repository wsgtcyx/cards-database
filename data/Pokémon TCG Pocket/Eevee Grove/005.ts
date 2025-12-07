import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Tsareena",
        "fr": "Tsaréna",
        "es": "zareena",
        "it": "Zareena",
        "de": "Zarin",
        "pt-br": "Tsareena",
        "zh-tw": "甜冷美后",
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    evolveFrom: {
        en: "Steenee",
        "fr": "Steenee",
        "es": "Steenee",
        "it": "Steenee",
        "de": "Steenee",
        "pt-br": "Steenee",
        "zh-tw": "斯蒂尼"
    },
    description: {
        en: "This Pokémon is proud and aggressive. However, it is\nsaid that a Tsareena will instantly become calm if\nsomeone touches the crown on its calyx.",
        "fr": "Ce Pokémon est fier et agressif. Cependant, c'est\na dit qu'une Tsareena deviendra instantanément calme si\nquelqu'un touche la couronne sur son calice.",
        "es": "Este Pokémon es orgulloso y agresivo. Sin embargo, es\ndijo que una Tsareena se calmará instantáneamente si\nalguien toca la corona en su cáliz.",
        "it": "Questo Pokémon è orgoglioso e aggressivo. Tuttavia, lo è\nha detto che una Tsareena diventerà immediatamente calma se\nqualcuno tocca la corona del calice.",
        "de": "Dieses Pokémon ist stolz und aggressiv. Allerdings ist es so\nsagte, dass eine Tsareena sofort ruhig werden wird, wenn\njemand berührt die Krone an ihrem Kelch.",
        "pt-br": "Este Pokémon é orgulhoso e agressivo. No entanto, é\ndisse que uma Tsareena ficará instantaneamente calma se\nalguém toca a coroa do seu cálice.",
        "zh-tw": "這只神奇寶貝驕傲且具有攻擊性。然而，它是\n說如果 Tsareena 會立即變得平靜\n有人觸摸其花萼上的冠部。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Kick Down",
                "fr": "Abattre",
                "es": "Derribar algo",
                "it": "Calcia giù",
                "de": "Tritt runter",
                "pt-br": "Chutar para baixo",
                "zh-tw": "踢下"
            },
            damage: 50,
            cost: ["Grass"],
            effect: {
                en: "Your opponent reveals a random card from their hand and shuffles it into their deck.",
                "fr": "Votre adversaire révèle une carte aléatoire de sa main et la mélange dans son deck.",
                "es": "Tu oponente revela una carta aleatoria de su mano y la baraja en su mazo.",
                "it": "Il tuo avversario rivela una carta casuale dalla sua mano e la mescola nel suo mazzo.",
                "de": "Dein Gegner deckt eine zufällige Karte aus seiner Hand auf und mischt sie in sein Deck.",
                "pt-br": "Seu oponente revela uma carta aleatória de sua mão e a embaralha em seu baralho.",
                "zh-tw": "你的對手從手中隨機展示一張牌並將其洗入牌庫。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
