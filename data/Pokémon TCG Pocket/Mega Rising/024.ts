import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Trevenant",
        "fr": "Trévenant",
        "es": "Trevenante",
        "it": "Trevenant",
        "de": "Trevenant",
        "pt-br": "Trevenante",
        "zh-tw": "朽木妖",
    },
    illustrator: "Hiroyuki Yamamoto",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Grass"],
    evolveFrom: {
        en: "Phantump",
        "fr": "Fantôme",
        "es": "Fantasma",
        "it": "Phantump",
        "de": "Phantump",
        "pt-br": "Fantasma",
        "zh-tw": "凡頓"
    },
    description: {
        en: "Small roots that extend from the tips of this\nPokémon's feet can tie into the trees of the\nforest and give Trevenant control over them.",
        "fr": "Petites racines qui s'étendent depuis les extrémités de ce\nLes pieds des Pokémon peuvent s'attacher aux arbres du\nforêt et donnez à Trevenant le contrôle d'elles.",
        "es": "Pequeñas raíces que se extienden desde las puntas de este\nLos pies de Pokémon pueden atarse a los árboles del\nbosque y darle a Trevenant control sobre ellos.",
        "it": "Piccole radici che si estendono dalle punte di questo\nI piedi dei Pokémon possono legarsi agli alberi del\nforesta e dare a Trevenant il controllo su di loro.",
        "de": "Kleine Wurzeln, die von den Spitzen ausgehen\nDie Füße des Pokémon können an den Bäumen befestigt werden\nWald und geben Sie Trevenant die Kontrolle über sie.",
        "pt-br": "Pequenas raízes que se estendem das pontas deste\nOs pés dos Pokémon podem se amarrar nas árvores do\nfloresta e dê a Trevenant o controle sobre eles.",
        "zh-tw": "從這個尖端伸出的小根\n神奇寶貝的腳可以綁在樹上\n森林並給予特雷文特對它們的控制權。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Horn Leech",
                "fr": "Sangsue en corne",
                "es": "Sanguijuela de cuerno",
                "it": "Sanguisuga di corno",
                "de": "Hornblutegel",
                "pt-br": "Sanguessuga de Chifre",
                "zh-tw": "角水蛭"
            },
            damage: 60,
            cost: ["Grass", "Grass"],
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                "fr": "Soignez 20 dégâts de ce Pokémon.",
                "es": "Cura 20 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 20 danni.",
                "de": "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
