import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Dragalge",
        "fr": "Dragalge",
        "es": "Dragalge",
        "it": "Dragalge",
        "de": "Dragalge",
        "pt-br": "Dragalge",
        "zh-tw": "德拉格"
    },
    illustrator: "5ban Graphics",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    evolveFrom: {
        en: "Skrelp",
        "fr": "Skrelp",
        "es": "Skrelp",
        "it": "Skrelp",
        "de": "Skrelp",
        "pt-br": "Skrelp",
        "zh-tw": "斯克雷爾普"
    },
    description: {
        en: "Using a liquid poison, Dragalge indiscriminately\nattacks anything that wanders into its territory.\nThis poison can corrode the undersides of boats.",
        "fr": "Utilisant un poison liquide, Dragalge indistinctement\nattaque tout ce qui erre sur son territoire.\nCe poison peut corroder le dessous des bateaux.",
        "es": "Usando un veneno líquido, Dragalge indiscriminadamente\nAtaca cualquier cosa que entre en su territorio.\nEste veneno puede corroer los bajos de los barcos.",
        "it": "Usando un veleno liquido, Dragalge indiscriminatamente\nattacca tutto ciò che si aggira nel suo territorio.\nQuesto veleno può corrodere la parte inferiore delle barche.",
        "de": "Mit einem flüssigen Gift greift Dragalge wahllos an\ngreift alles an, was in sein Revier gelangt.\nDieses Gift kann die Unterseite von Booten angreifen.",
        "pt-br": "Usando um veneno líquido, Dragalge indiscriminadamente\nataca qualquer coisa que entre em seu território.\nEste veneno pode corroer a parte inferior dos barcos.",
        "zh-tw": "使用液體毒藥，隨意拖拽\n攻擊任何進入其領地的東西。\n這種毒物會腐蝕船的底部。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sludge Bomb",
                "fr": "Bombe à boue",
                "es": "Bomba de lodo",
                "it": "Bomba di fango",
                "de": "Schlammbombe",
                "pt-br": "Bomba de lama",
                "zh-tw": "污泥炸彈"
            },
            damage: 70,
            cost: ["Darkness", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
