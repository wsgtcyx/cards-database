import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/025"
    },
    name: {
        en: "Raboot",
        "fr": "Raboot",
        "es": "raboot",
        "it": "Raboot",
        "de": "Raboot",
        "pt-br": "Raboot",
        "zh-tw": "拉布特"
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Scorbunny",
        "fr": "Scorlapin",
        "es": "Scorbunny",
        "it": "Scorbunny",
        "de": "Scorbunny",
        "pt-br": "Scorbunny",
        "zh-tw": "斯科兔"
    },
    description: {
        en: "While it prides itself on its varied kicking moves,\nit can also deliver powerful headbutts once its\nflames have heated up its forehead.",
        "fr": "Bien qu'il soit fier de ses mouvements de coups de pied variés,\nil peut également délivrer de puissants coups de tête une fois son\nles flammes lui ont chauffé le front.",
        "es": "Si bien se enorgullece de sus variados movimientos de patadas,\nTambién puede dar poderosos cabezazos una vez que está\nlas llamas han calentado su frente.",
        "it": "Sebbene sia orgoglioso delle sue varie mosse di calci,\npuò anche sferrare potenti testate una volta che lo ha colpito\nle fiamme gli hanno riscaldato la fronte.",
        "de": "Während es stolz auf seine abwechslungsreichen Trittbewegungen ist,\nEs kann auch kraftvolle Kopfstöße ausführen, sobald es soweit ist\nFlammen haben seine Stirn erhitzt.",
        "pt-br": "Embora se orgulhe de seus variados movimentos de chute,\nele também pode desferir cabeçadas poderosas quando estiver\nas chamas aqueceram sua testa.",
        "zh-tw": "雖然它以其多樣化的踢腿動作而自豪，\n一旦它被擊中，它還可以提供強有力的頭撞\n火焰已經加熱了它的額頭。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Kick",
                "fr": "Koud'Pied",
                "es": "Patada",
                "it": "Calcio",
                "de": "Tritt",
                "pt-br": "Chute",
                "zh-tw": "踢"
            },
            damage: 40,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
