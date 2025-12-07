import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Mawile",
        "fr": "Mawile",
        "es": "mawile",
        "it": "Mawile",
        "de": "Mawile",
        "pt-br": "Mawile",
        "zh-tw": "馬維勒"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Metal"],
    description: {
        en: "It uses its docile-looking face to lull foes into\ncomplacency, then bites with its huge,\nrelentless jaws.",
        "fr": "Il utilise son visage docile pour endormir ses ennemis.\ncomplaisance, puis mord avec son énorme,\ndes mâchoires implacables.",
        "es": "Utiliza su rostro de aspecto dócil para adormecer a los enemigos.\ncomplacencia, luego muerde con su enorme,\nmandíbulas implacables.",
        "it": "Usa il suo volto dall'aspetto docile per ingannare i nemici\ncompiacimento, poi morde con il suo enorme,\nmascelle implacabili.",
        "de": "Es nutzt sein fügsam aussehendes Gesicht, um Feinde einzulullen\nSelbstgefälligkeit, dann beißt er mit seinem riesigen,\nunerbittliche Kiefer.",
        "pt-br": "Ele usa seu rosto de aparência dócil para acalmar os inimigos.\ncomplacência, então morde com seu enorme,\nmandíbulas implacáveis.",
        "zh-tw": "它用它溫順的面孔來誘騙敵人\n自滿，然後用它的巨大咬住，\n無情的下巴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Powerful Vise",
                "fr": "Étau puissant",
                "es": "Tornillo de banco potente",
                "it": "Morsa potente",
                "de": "Leistungsstarker Schraubstock",
                "pt-br": "Torno poderoso",
                "zh-tw": "強力虎鉗"
            },
            damage: 30,
            cost: ["Metal", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
