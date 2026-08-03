import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/021",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/021",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/021",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/021",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/021"
    },
    name: {
        en: "Pyroar",
        "fr": "Némélios",
        "es": "Pyroar",
        "it": "Pyroar",
        "de": "Pyroleo",
        "pt-br": "Pyroar",
        "zh-tw": "火炎獅"
    },
    illustrator: "Hasuno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fire"],
    evolveFrom: {
        en: "Litleo",
        "fr": "Litléo",
        "es": "pequeño",
        "it": "Litleo",
        "de": "Litleo",
        "pt-br": "Pequeno",
        "zh-tw": "利特萊奧"
    },
    description: {
        en: "The females of a pride work together to bring\ndown prey. It's thanks to them that their pride\ndoesn't starve.",
        "fr": "Les femelles d'une fierté travaillent ensemble pour rassembler\nvers le bas des proies. C'est grâce à eux que leur fierté\nne meurt pas de faim.",
        "es": "Las hembras de una manada trabajan juntas para traer\nabajo presa. Es gracias a ellos que su orgullo\nno pasa hambre.",
        "it": "Le femmine di un orgoglio lavorano insieme per portare\ngiù la preda. È grazie a loro che il loro orgoglio\nnon muore di fame.",
        "de": "Die Weibchen eines Rudels arbeiten bei der Zucht zusammen\nherunterliegende Beute. Ihnen ist es zu verdanken, dass sie stolz sind\nverhungert nicht.",
        "pt-br": "As fêmeas de um bando trabalham juntas para trazer\npresa. É graças a eles que seu orgulho\nnão passa fome.",
        "zh-tw": "獅群中的雌性共同努力，帶來\n下來的獵物。多虧了他們，他們的驕傲\n不會挨餓。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Heat Blast",
                "fr": "Coup de chaleur",
                "es": "Explosión de calor",
                "it": "Colpo di calore",
                "de": "Hitzestoß",
                "pt-br": "Explosão de calor",
                "zh-tw": "熱風"
            },
            damage: 70,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
