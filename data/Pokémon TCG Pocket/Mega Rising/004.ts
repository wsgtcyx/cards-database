import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Silcoon",
        "fr": "Silicone",
        "es": "Silcoon",
        "it": "Silcoon",
        "de": "Silcoon",
        "pt-br": "Silcon",
        "zh-tw": "矽科恩"
    },
    illustrator: "Kyoko Umemoto",
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
        en: "It drinks dew that collects on its silk and waits for\nevolution. Its hard cocoon repels attacks.",
        "fr": "Il boit la rosée qui s'accumule sur sa soie et attend\névolution. Son cocon dur repousse les attaques.",
        "es": "Bebe el rocío que se acumula en su seda y espera\nevolución. Su duro capullo repele los ataques.",
        "it": "Beve la rugiada che si raccoglie sulla sua seta e attende\nevoluzione. Il suo duro bozzolo respinge gli attacchi.",
        "de": "Es trinkt Tau, der sich auf seiner Seide sammelt und darauf wartet\nEntwicklung. Sein harter Kokon wehrt Angriffe ab.",
        "pt-br": "Bebe o orvalho que se acumula na sua seda e espera\nevolução. Seu casulo duro repele ataques.",
        "zh-tw": "它喝著絲上凝結的露水，等待著\n進化。它的硬繭可以抵禦攻擊。"
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
