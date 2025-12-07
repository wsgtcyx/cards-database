import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Aipom",
        "fr": "Aipom",
        "es": "Aipom",
        "it": "Aipom",
        "de": "Aipom",
        "pt-br": "Aipom",
        "zh-tw": "長尾怪手",
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "As it did more and more with its tail, its hands\nbecame clumsy. It makes its nest high in\nthe treetops.",
        "fr": "Comme il le faisait de plus en plus avec sa queue, ses mains\nest devenu maladroit. Il fait son nid en hauteur\nla cime des arbres.",
        "es": "Como lo hacía cada vez más con su cola, sus manos\nse volvió torpe. Hace su nido en lo alto\nlas copas de los árboles.",
        "it": "Come faceva sempre di più con la coda, con le mani\nè diventato goffo. Fa il suo nido in alto\nle cime degli alberi.",
        "de": "Wie es immer mehr mit seinem Schwanz und seinen Händen tat\nwurde ungeschickt. Es baut sein Nest hoch oben\ndie Baumwipfel.",
        "pt-br": "À medida que fazia mais e mais com a cauda, as mãos\nficou desajeitado. Faz seu ninho no alto\nas copas das árvores.",
        "zh-tw": "當它越來越多地用尾巴做事時，它的雙手\n變得笨拙。它把巢築在高處\n樹梢。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Double Hit",
                "fr": "Double coup",
                "es": "Doble golpe",
                "it": "Doppio colpo",
                "de": "Doppelter Treffer",
                "pt-br": "Golpe Duplo",
                "zh-tw": "雙重打擊"
            },
            damage: 20,
            cost: ["Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 20 daños por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
