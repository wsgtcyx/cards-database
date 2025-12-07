import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Stufful",
        "fr": "Bourré",
        "es": "Relleno",
        "it": "Stupendo",
        "de": "Stoffig",
        "pt-br": "Recheado",
        "zh-tw": "童偶熊",
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "The way it protects itself by flailing its arms may\nbe an adorable sight, but stay well away. This is\nflailing that can snap thick tree trunks.",
        "fr": "La façon dont il se protège en agitant ses bras peut\nsoyez un spectacle adorable, mais restez à l'écart. C'est\ndes coups qui peuvent briser d'épais troncs d'arbres.",
        "es": "La forma en que se protege agitando los brazos puede\nSerá una vista adorable, pero mantente alejado. esto es\nagitaciones que pueden romper gruesos troncos de árboles.",
        "it": "Il modo in cui si protegge agitando le braccia può farlo\nsarà uno spettacolo adorabile, ma stai alla larga. Questo è\nagitazione che può spezzare spessi tronchi d'albero.",
        "de": "Die Art und Weise, wie es sich selbst schützt, indem es mit den Armen um sich schlägt, mag sein\nSeien Sie ein entzückender Anblick, aber bleiben Sie fern. Das ist\nDreschen, die dicke Baumstämme zerbrechen können.",
        "pt-br": "A maneira como ele se protege agitando os braços pode\nseja uma visão adorável, mas fique bem longe. Isto é\nagitando-se que pode quebrar troncos grossos de árvores.",
        "zh-tw": "它通過揮動手臂來保護自己的方式可能會\n這是一個可愛的景象，但要遠離。這是\n揮舞可以折斷粗大的樹幹。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Magnum Punch",
                "fr": "Coup de poing Magnum",
                "es": "Puñetazo magnum",
                "it": "Pugno Magnum",
                "de": "Magnum Punch",
                "pt-br": "Soco Magnum",
                "zh-tw": "萬能沖床"
            },
            damage: 40,
            cost: ["Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
