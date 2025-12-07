import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Celesteela",
        "fr": "Célesteela",
        "es": "Celesteela",
        "it": "Celesteela",
        "de": "Celesteela",
        "pt-br": "Celesteela",
        "zh-tw": "塞萊斯蒂拉"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    description: {
        en: "One of the dangerous UBs, high energy readings\ncan be detected coming from both of its\nhuge arms.",
        "fr": "L'un des UB dangereux, lectures à haute énergie\npeut être détecté provenant de ses deux\ndes bras énormes.",
        "es": "Uno de los UB peligrosos, lecturas de alta energía.\npuede detectarse procedente de ambos\nbrazos enormes.",
        "it": "Uno degli UB pericolosi, letture ad alta energia\npuò essere rilevato proveniente da entrambi\nbraccia enormi.",
        "de": "Einer der gefährlichen UBs, hohe Energiewerte\nkann von beiden erkannt werden\nriesige Arme.",
        "pt-br": "Um dos UBs perigosos, leituras de alta energia\npode ser detectado vindo de ambos os seus\nbraços enormes.",
        "zh-tw": "危險的 UB 之一，高能量讀數\n可以檢測到來自它的兩個\n巨大的手臂。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Ultra Thrusters",
                "fr": "Ultra-propulseurs",
                "es": "Ultrapropulsores",
                "it": "Ultra propulsori",
                "de": "Ultra-Triebwerke",
                "pt-br": "Ultrapropulsores",
                "zh-tw": "超級推進器"
            },
            effect: {
                en: "Once during your turn, you may switch your Active Ultra Beast with 1 of your Benched Ultra Beasts.",
                "fr": "Une fois pendant votre tour, vous pouvez échanger votre Ultra Beast Active avec 1 de vos Ultra Beasts de Banc.",
                "es": "Una vez durante tu turno, puedes cambiar tu Ultra Beast activo por 1 de tus Ultra Beast en banca.",
                "it": "Una sola volta durante il tuo turno, puoi scambiare la tua Ultracreatura attiva con 1 delle tue Ultracreature in panchina.",
                "de": "Einmal während deines Zuges darfst du dein aktives Ultrabestie gegen eines deiner Ultrabestien auf der Bank austauschen.",
                "pt-br": "Uma vez durante o seu turno, você pode trocar sua Ultra Besta Ativa por 1 de suas Ultra Bestas no Banco.",
                "zh-tw": "在你的回合中，你可以將你的活躍究極異獸與你的1只後備究極異獸交換。"
            }
        }],
    attacks: [{
            name: {
                en: "Moombahton",
                "fr": "Moombahton",
                "es": "Moombahton",
                "it": "Moombahton",
                "de": "Moombahton",
                "pt-br": "Moombahton",
                "zh-tw": "蒙巴頓"
            },
            damage: 100,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                "fr": "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                "es": "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                "it": "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 4
};
export default card;
