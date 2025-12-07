import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Geodude",
        "fr": "Géodude",
        "es": "geodudo",
        "it": "Geodude",
        "de": "Geodude",
        "pt-br": "Geodude",
        "zh-tw": "小拳石",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "Geodude that have lived a long life have had all\ntheir edges smoothed out until they're totally\nround. They also have a calm, quiet disposition.",
        "fr": "Les géodudes qui ont vécu une longue vie ont tout eu\nleurs bords lissés jusqu'à ce qu'ils soient totalement\nrond. Ils ont également un caractère calme et tranquille.",
        "es": "Geodude que ha vivido una larga vida lo ha tenido todo.\nsus bordes se suavizaron hasta que estén totalmente\nredondo. También tienen una disposición tranquila y silenciosa.",
        "it": "I Geodude che hanno vissuto una lunga vita hanno avuto tutto\ni loro bordi sono levigati fino a quando non sono completamente\nrotondo. Hanno anche un carattere calmo e tranquillo.",
        "de": "Geodude, die ein langes Leben gelebt haben, haben alle gehabt\nIhre Ränder werden geglättet, bis sie völlig glatt sind\nrund. Sie haben auch ein ruhiges, ruhiges Gemüt.",
        "pt-br": "Geodude que viveu uma vida longa teve tudo\nsuas bordas suavizadas até ficarem totalmente\nredondo. Eles também têm uma disposição calma e tranquila.",
        "zh-tw": "長壽的晶石已經擁有了一切\n他們的邊緣被平滑，直到他們完全\n圓形。他們的性格也很沉穩、安靜。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
