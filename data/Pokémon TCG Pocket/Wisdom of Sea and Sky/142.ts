import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
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
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
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
                en: "Imitate",
                "fr": "Imiter",
                "es": "Imitar",
                "it": "Imitare",
                "de": "Imitieren",
                "pt-br": "Imitar",
                "zh-tw": "模擬"
            },
            cost: ["Colorless"],
            effect: {
                en: "Draw cards until you have the same number of cards in your hand as your opponent.",
                "fr": "Piochez des cartes jusqu'à ce que vous ayez le même nombre de cartes en main que votre adversaire.",
                "es": "Roba cartas hasta que tengas la misma cantidad de cartas en tu mano que tu oponente.",
                "it": "Pesca carte finché non hai lo stesso numero di carte in mano del tuo avversario.",
                "de": "Ziehe Karten, bis du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner.",
                "pt-br": "Compre cartas até ter o mesmo número de cartas na mão que seu oponente.",
                "zh-tw": "抽牌直到你的手牌數量與對手相同。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
