import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Garbodor",
        "fr": "Miasmax",
        "es": "Garbodor",
        "it": "Garbodor",
        "de": "Deponitox",
        "pt-br": "Garbodor",
        "zh-tw": "灰塵山"
    },
    illustrator: "Aya Kusube",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Darkness"],
    evolveFrom: {
        en: "Trubbish",
        "fr": "Trubbish",
        "es": "basura",
        "it": "Sciocchezza",
        "de": "Trubbisch",
        "pt-br": "Trubo",
        "zh-tw": "垃圾"
    },
    description: {
        en: "This Pokémon eats trash, which turns into poison\ninside its body. The main component of the\npoison depends on what sort of trash was eaten.",
        "fr": "Ce Pokémon mange des déchets qui se transforment en poison\nà l'intérieur de son corps. La composante principale du\nle poison dépend du type de déchet mangé.",
        "es": "Este Pokémon come basura, que se convierte en veneno.\ndentro de su cuerpo. El componente principal del\nEl veneno depende del tipo de basura que se comió.",
        "it": "Questo Pokémon mangia la spazzatura, che si trasforma in veleno\nall'interno del suo corpo. Il componente principale del\nil veleno dipende da che tipo di spazzatura è stata mangiata.",
        "de": "Dieses Pokémon frisst Müll, der sich in Gift verwandelt\nin seinem Körper. Der Hauptbestandteil der\nGift hängt davon ab, welche Art von Müll gegessen wurde.",
        "pt-br": "Este Pokémon come lixo, que se transforma em veneno\ndentro de seu corpo. O principal componente do\no veneno depende do tipo de lixo que foi comido.",
        "zh-tw": "這個神奇寶貝吃垃圾會變成毒藥\n在它的身體裡面。主要組成部分\n有毒取決於吃的是哪種垃圾。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Acid Spray",
                "fr": "Pulvérisation acide",
                "es": "Aerosol ácido",
                "it": "Spray acido",
                "de": "Säurespray",
                "pt-br": "Spray ácido",
                "zh-tw": "酸噴霧"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Lanza una moneda. Si sale cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Lancia una moneta. Se esce testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Wirf eine Münze. Bei „Kopf“ wirf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda. Se sair cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則丟棄對手的活躍神奇寶貝中的隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
