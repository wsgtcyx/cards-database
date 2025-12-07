import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Rookidee",
        "fr": "Rookie",
        "es": "rookidee",
        "it": "Rookidee",
        "de": "Neuling",
        "pt-br": "Rookidee",
        "zh-tw": "稚山雀",
    },
    illustrator: "OKACHEKE",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "The females are fussier than the males. If another\ncreature dirties a female Rookidee's wings, it'll\npeck the offender relentlessly in a burning rage.",
        "fr": "Les femelles sont plus capricieuses que les mâles. Si un autre\ncréature salit les ailes d'une femelle Rookidee, ça va\npicorer le délinquant sans relâche dans une rage brûlante.",
        "es": "Las hembras son más quisquillosas que los machos. si otro\ncriatura ensucia las alas de una hembra Rookidee,\npicotear al delincuente implacablemente con furia ardiente.",
        "it": "Le femmine sono più esigenti dei maschi. Se un altro\ncreatura sporca le ali di una femmina Rookidee, lo farà\nbeccare incessantemente l'autore del reato con rabbia ardente.",
        "de": "Die Weibchen sind wählerischer als die Männchen. Wenn ein anderer\nWenn eine Kreatur die Flügel eines Rookidee-Weibchens beschmutzt, dann wird es das tun\npicke den Täter unerbittlich in brennender Wut.",
        "pt-br": "As fêmeas são mais agitadas que os machos. Se outro\ncriatura sujar as asas de uma fêmea de Rookidee, ela\nbicar o agressor implacavelmente com uma raiva ardente.",
        "zh-tw": "雌性比雄性更挑剔。如果另一個\n生物弄髒了雌性菜鳥的翅膀，它會\n憤怒中無情地啄擊罪犯。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flap",
                "fr": "Rabat",
                "es": "Solapa",
                "it": "Patta",
                "de": "Klappe",
                "pt-br": "Aba",
                "zh-tw": "皮瓣"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
