import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Diglett",
        "fr": "Diglett",
        "es": "diglett",
        "it": "Diglett",
        "de": "Diglett",
        "pt-br": "Diglett",
        "zh-tw": "迪格利特"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It lives about one yard underground, where it\nfeeds on plant roots. It sometimes appears\naboveground.",
        "fr": "Il vit à environ un mètre sous terre, où il\nse nourrit des racines des plantes. Il apparaît parfois\nhors sol.",
        "es": "Vive aproximadamente a un metro bajo tierra, donde\nse alimenta de raíces de plantas. A veces aparece\nsobre el suelo.",
        "it": "Vive a circa un metro sotto terra, dove...\nsi nutre delle radici delle piante. A volte appare\nfuori terra.",
        "de": "Es lebt etwa einen Meter unter der Erde, wo es ist\nernährt sich von Pflanzenwurzeln. Es erscheint manchmal\noberirdisch.",
        "pt-br": "Vive cerca de um metro abaixo do solo, onde\nalimenta-se de raízes de plantas. Às vezes aparece\nacima do solo.",
        "zh-tw": "它住在地下一碼左右，\n以植物根部為食。有時會出現\n地上。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
