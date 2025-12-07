import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Linoone",
        "fr": "Linéon",
        "es": "linoone",
        "it": "Linoone",
        "de": "Linoone",
        "pt-br": "Linoone",
        "zh-tw": "利努內"
    },
    illustrator: "match",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Zigzagoon",
        "fr": "Zigzagoon",
        "es": "Zigzagoon",
        "it": "Zigzagoon",
        "de": "Zickzack",
        "pt-br": "Ziguezague",
        "zh-tw": "之字形"
    },
    description: {
        en: "It uses its explosive speed and razor-sharp claws\nto bring down prey. Running along winding\npaths is not its strong suit.",
        "fr": "Il utilise sa vitesse explosive et ses griffes acérées comme des rasoirs\npour abattre une proie. Courir le long de l'enroulement\nles chemins ne sont pas son point fort.",
        "es": "Utiliza su velocidad explosiva y sus garras afiladas.\npara derribar presas. Corriendo sinuoso\ncaminos no es su fuerte.",
        "it": "Usa la sua velocità esplosiva e gli artigli affilati come rasoi\nper abbattere la preda. Correndo lungo un percorso tortuoso\ni percorsi non sono il suo punto forte.",
        "de": "Es nutzt seine explosive Geschwindigkeit und seine messerscharfen Krallen\nBeute erlegen. Kurvenreich entlanglaufen\nWege sind nicht seine Stärke.",
        "pt-br": "Ele usa sua velocidade explosiva e garras afiadas\npara derrubar a presa. Correndo ao longo do sinuoso\npaths não é seu forte.",
        "zh-tw": "它利用爆炸性的速度和鋒利的爪子\n打倒獵物。沿著蜿蜒的道路奔跑\n路徑不是它的強項。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Jet Headbutt",
                "fr": "Coup de tête de jet",
                "es": "Cabezazo Jet",
                "it": "Testata a getto",
                "de": "Jet-Kopfstoß",
                "pt-br": "Cabeçada de jato",
                "zh-tw": "噴射頭撞"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
