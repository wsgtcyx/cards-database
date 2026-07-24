import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Lokix",
        fr: "Gambex",
        es: "Lokix",
        it: "Lokix",
        de: "Lextremo",
        "pt-br": "Lokix",
        "zh-tw": "烈腿蝗",
        pt: "Lokix",
        'es-mx': "Lokix"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    dexId: [920],
    evolveFrom: {
        en: "Nymble",
        fr: "Lilliterelle",
        es: "Nymble",
        it: "Nymble",
        de: "Micrick",
        "pt-br": "Nymble",
        "zh-tw": "豆蟋蟀",
        pt: "Nymble",
        'es-mx': "Nymble"
    },
    description: {
        en: "It uses its normally folded third set of legs when in Showdown Mode. This places a huge burden on its body, so it can't stay in this mode for long.",
        "fr": "Il utilise son troisième ensemble de pattes normalement pliées lorsqu'il est en mode Showdown. Cela impose un énorme fardeau à son corps, il ne peut donc pas rester longtemps dans ce mode.",
        "es": "Utiliza su tercer par de patas normalmente plegadas cuando está en modo enfrentamiento. Esto supone una enorme carga para su cuerpo, por lo que no puede permanecer en este modo por mucho tiempo.",
        "it": "Usa il terzo paio di gambe normalmente piegate quando è in modalità Resa dei conti. Ciò pone un carico enorme sul suo corpo, quindi non può rimanere in questa modalità a lungo.",
        "de": "Im Showdown-Modus verwendet es seinen normalerweise gefalteten dritten Satz Beine. Dies stellt eine enorme Belastung für seinen Körper dar, sodass er nicht lange in diesem Modus bleiben kann.",
        "pt-br": "Ele usa seu terceiro conjunto de pernas normalmente dobrado quando está no modo Showdown. Isso coloca um fardo enorme em seu corpo, por isso ele não consegue permanecer nesse modo por muito tempo.",
        "zh-tw": "在決戰模式下，它使用通常折疊的第三組腿。這給它的身體帶來了巨大的負擔，所以它不能長時間處於這種模式。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Rocket Jump",
                fr: "Saut Propulsé",
                es: "Salto Cohete",
                it: "Saltorazzo",
                de: "Raketensprung",
                "pt-br": "Salto de foguete",
                "zh-tw": "火箭跳躍",
                pt: "Pulo de Foguete"
            },
            damage: "80",
            cost: ["Darkness"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
                es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
                de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。",
                pt: "Jogue uma moeda. Se sair coroa, esse ataque não fará nada."
            },
        },
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
