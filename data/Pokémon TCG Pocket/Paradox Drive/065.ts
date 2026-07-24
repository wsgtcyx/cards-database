import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/065",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/065"
    },
    name: {
        en: "Rookidee",
        fr: "Minisange",
        es: "Rookidee",
        it: "Rookidee",
        de: "Meikro",
        "pt-br": "Rookidee",
        "zh-tw": "稚山雀",
        ko: "파라꼬",
        ja: "ココガラ"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [821],
    stage: "Basic",
    description: {
        en: "The females are fussier than the males. If another creature dirties a female Rookidee’s wings, it’ll peck the offender relentlessly in a burning rage.",
        fr: "Les femelles sont plus capricieuses que les mâles. Si une autre créature salit les ailes d’une femelle Minisange, elle picorera sans relâche l’agresseur dans une rage brûlante.",
        es: "Las hembras son más quisquillosas que los machos. Si otra criatura ensucia las alas de una hembra Rookidee, picoteará al agresor implacablemente con una furia ardiente.",
        it: "Le femmine sono più esigenti dei maschi. Se un'altra creatura sporca le ali di una femmina Rookidee, beccherà incessantemente l'autore del reato con rabbia ardente.",
        de: "Die Weibchen sind wählerischer als die Männchen. Wenn eine andere Kreatur die Flügel eines weiblichen Meikro beschmutzt, wird sie den Täter in brennender Wut unerbittlich picken.",
        "pt-br": "As fêmeas são mais agitadas que os machos. Se outra criatura sujar as asas de uma fêmea Rookidee, ela bicará o agressor implacavelmente em uma fúria ardente.",
        "zh-tw": "雌性比雄性更挑剔。如果另一個生物弄髒了雌性 稚山雀 的翅膀，它會在憤怒中無情地啄擊罪犯。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Claw",
                fr: "Griffe",
                es: "Garra",
                it: "Artiglio",
                de: "Klaue",
                "pt-br": "Garra",
                "zh-tw": "鉤爪"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
