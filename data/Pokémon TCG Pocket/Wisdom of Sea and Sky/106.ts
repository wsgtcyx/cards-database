import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Barbaracle",
        "fr": "Barbaracle",
        "es": "barbarcle",
        "it": "Barbaracolo",
        "de": "Barbaracle",
        "pt-br": "Bárbara",
        "zh-tw": "龜足巨鎧",
    },
    illustrator: "Nurikabe",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    evolveFrom: {
        en: "Binacle",
        "fr": "Binacle",
        "es": "Binacle",
        "it": "Binacolo",
        "de": "Binakel",
        "pt-br": "Bináculo",
        "zh-tw": "雙子座"
    },
    description: {
        en: "Seven Binacle come together to form one\nBarbaracle. The Binacle that serves as the head\ngives orders to those serving as the limbs.",
        "fr": "Sept Binacle se réunissent pour n'en former qu'un\nBarbaracle. Le Binacle qui sert de tête\ndonne des ordres à ceux qui servent de membres.",
        "es": "Siete Binacle se unen para formar uno\nBárbaracle. El Binacle que sirve de cabecera.\nda órdenes a quienes sirven como miembros.",
        "it": "Sette Binacle si uniscono per formarne uno solo\nBarbaracolo. Il Binacolo che funge da testa\ndà ordini a coloro che fanno da membra.",
        "de": "Sieben Binakel vereinen sich zu einem\nBarbaracle. Das Binakel, das als Kopf dient\ngibt denen, die als Gliedmaßen dienen, Befehle.",
        "pt-br": "Sete Binacle se unem para formar um\nBárbara. O Bináculo que serve como cabeça\ndá ordens àqueles que servem como membros.",
        "zh-tw": "七個 Binacle 合而為一\n野蠻人。作為頭部的 Binacle\n對那些充當肢體的人發出命令。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Dynamic Chop",
                "fr": "Hachage dynamique",
                "es": "Picado dinámico",
                "it": "Taglio dinamico",
                "de": "Dynamisches Hacken",
                "pt-br": "Corte Dinâmico",
                "zh-tw": "動態斬波"
            },
            damage: 70,
            cost: ["Fighting", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
