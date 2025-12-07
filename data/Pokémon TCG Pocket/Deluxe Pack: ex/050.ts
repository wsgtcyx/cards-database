import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Sprigatito",
        "fr": "Sprigatito",
        "es": "sprigatito",
        "it": "Sprigato",
        "de": "Sprigatito",
        "pt-br": "Sprigatito",
        "zh-tw": "斯普里加蒂托"
    },
    illustrator: "mashu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "Its fluffy fur is similar in composition to plants.\nThis Pokémon frequently washes its face to keep\nit from drying out.",
        "fr": "Sa fourrure duveteuse est de composition similaire à celle des plantes.\nCe Pokémon se lave fréquemment le visage pour garder\ndu dessèchement.",
        "es": "Su pelaje esponjoso tiene una composición similar a la de las plantas.\nEste Pokémon se lava la cara con frecuencia para mantenerse\nque se seque.",
        "it": "La sua soffice pelliccia è simile nella composizione alle piante.\nQuesto Pokémon si lava spesso la faccia per mantenersi\ndall'essiccarsi.",
        "de": "Sein flauschiges Fell ähnelt in seiner Zusammensetzung Pflanzen.\nDieses Pokémon wäscht häufig sein Gesicht, um es zu behalten\nes vor dem Austrocknen.",
        "pt-br": "Seu pelo fofo tem composição semelhante à das plantas.\nEste Pokémon lava frequentemente o rosto para manter\nevitar que seque.",
        "zh-tw": "它蓬鬆的皮毛與植物的成分相似。\n這只神奇寶貝經常洗臉以保持健康\n防止它變乾。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Cry for Help",
                "fr": "Appeler à l'aide",
                "es": "Llorar por ayuda",
                "it": "Gridare aiuto",
                "de": "Hilferuf",
                "pt-br": "Clame por ajuda",
                "zh-tw": "求救"
            },
            cost: ["Grass"],
            effect: {
                en: "Put 1 random {G} Pokémon from your deck into your hand.",
                "fr": "Mettez 1 Pokémon {G} aléatoire de votre deck dans votre main.",
                "es": "Pon 1 Pokémon {G} aleatorio de tu mazo en tu mano.",
                "it": "Metti nella tua mano 1 Pokémon {G} casuale dal tuo mazzo.",
                "de": "Nimm 1 zufälliges {G}-Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque 1 Pokémon {G} aleatório do seu baralho na sua mão.",
                "zh-tw": "從你的卡組中隨機將 1 只 {G} 神奇寶貝加入你的手牌。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
