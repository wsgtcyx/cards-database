import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Cascoon",
        "fr": "Cascoon",
        "es": "cascoon",
        "it": "Cascoon",
        "de": "Kaskon",
        "pt-br": "Cascão",
        "zh-tw": "卡斯科恩"
    },
    illustrator: "GOSSAN",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Wurmple",
        "fr": "Wurmple",
        "es": "Wurmple",
        "it": "Wurmple",
        "de": "Wurmple",
        "pt-br": "Wurmple",
        "zh-tw": "烏姆普爾"
    },
    description: {
        en: "It never forgets any attack it endured while in the\ncocoon. After evolution, it seeks payback.",
        "fr": "Il n'oublie jamais les attaques qu'il a subies au cours de son séjour dans le pays.\ncocon. Après évolution, il cherche à se venger.",
        "es": "Nunca olvida ningún ataque que haya sufrido mientras estaba en el\ncapullo. Después de la evolución, busca venganza.",
        "it": "Non dimentica mai nessun attacco subito mentre si trovava nel\nbozzolo. Dopo l'evoluzione, cerca la vendetta.",
        "de": "Es vergisst nie einen Angriff, den es während seiner Zeit erlitten hat\nKokon. Nach der Evolution strebt es nach Rache.",
        "pt-br": "Ele nunca esquece nenhum ataque que sofreu enquanto estava no\ncasulo. Após a evolução, busca vingança.",
        "zh-tw": "它永遠不會忘記在戰場上所遭受的任何攻擊\n繭。進化後，它尋求回報。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Harden",
                "fr": "Durcir",
                "es": "Endurecer",
                "it": "Indurire",
                "de": "Härten",
                "pt-br": "Endurecer",
                "zh-tw": "硬化"
            },
            cost: ["Grass"],
            effect: {
                en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 40 or less.",
                "fr": "Lors du prochain tour de votre adversaire, prévenez tous les dégâts infligés à ce Pokémon par des attaques si ces dégâts sont de 40 ou moins.",
                "es": "Durante el próximo turno de tu rival, evita todo el daño que los ataques le hagan a este Pokémon si ese daño es 40 o menos.",
                "it": "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi se quel danno è pari o inferiore a 40.",
                "de": "Verhindere im nächsten Zug deines Gegners jeglichen Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wenn dieser Schaden 40 oder weniger beträgt.",
                "pt-br": "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques se o dano for igual ou inferior a 40.",
                "zh-tw": "在對手的下一個回合中，如果該寶可夢的攻擊傷害在 40 或以下，則防止該寶可夢受到的所有傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
