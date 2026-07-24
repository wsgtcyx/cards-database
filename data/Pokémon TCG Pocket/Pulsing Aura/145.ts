import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/145",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/145"
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
    illustrator: "Akira Komayama",
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
                en: "Pluck",
                fr: "Picore",
                es: "Picoteo",
                it: "Spennata",
                de: "Pflücker",
                "pt-br": "Colher",
                "zh-tw": "啄食"
            },
            effect: {
                en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
                fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
                es: "Antes de hacer daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
                it: "Prima di infliggere danni, scarta tutti gli Strumenti Pokémon dal Pokémon attivo del tuo avversario.",
                de: "Bevor du Schaden verursachst, wirf alle Pokémon-Werkzeuge vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
                "zh-tw": "在造成傷害之前，丟棄對手的活躍寶可夢中的所有寶可夢工具。"
            },
            damage: 10
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
