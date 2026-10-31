import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/307",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/307",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/307",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/307",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/307",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/307",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/307",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/307",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/307"
    },
    name: {
        en: "Geodude",
        "fr": "Racaillou",
        "es": "Geodude",
        "it": "Geodude",
        "de": "Kleinstein",
        "pt-br": "Geodude",
        "zh-tw": "小拳石",
        ja: "イシツブテ",
        ko: "꼬마돌",
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
        "zh-tw": "長壽的晶石已經擁有了一切\n他們的邊緣被平滑，直到他們完全\n圓形。他們的性格也很沉穩、安靜。",
        ja: "長く 生きた イシツブテは 角が とれて まんまる。 性格も とても 落ち着いていて 穏やか なのだ。",
        ko: "오래 산 꼬마돌은 모가 없이\n동그랗다. 성격도 매우\n차분하고 온화하다."
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
                "zh-tw": "處理",
                ja: "たいあたり",
                ko: "몸통박치기"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
