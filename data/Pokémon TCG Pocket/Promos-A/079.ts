import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Dusk Mane Necrozma",
        es: "Necrozma Melena Crepuscular",
        "fr": "Crinière du crépuscule Necrozma",
        "it": "Necrozma Criniera Crepuscolare",
        "de": "Dämmerungsmähnen-Nekrozma",
        "pt-br": "Crepúsculo Juba Necrozma",
        "zh-tw": "奈克洛茲瑪（黃昏之鬃）",
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    description: {
        en: "This is its form while it is devouring the light of\nSolgaleo. It pounces on foes and then slashes\nthem with the claws on its four limbs and back.",
        es: "Forma que adopta tras alimentarse de la luz de Solgaleo.\nSe lanza sobre su oponente y lo desgarra sin piedad.",
        "fr": "C'est sa forme alors qu'il dévore la lumière de\nSolgaléo. Il se jette sur les ennemis puis les tranche\navec les griffes sur ses quatre membres et son dos.",
        "it": "Questa è la sua forma mentre divora la luce dell'\nSolgaleo. Si avventa sui nemici e poi colpisce\nloro con gli artigli sui quattro arti e sulla schiena.",
        "de": "Dies ist seine Form, während es das Licht verschlingt\nSolgaleo. Es stürzt sich auf Feinde und schlägt dann zu\nsie mit den Krallen an seinen vier Gliedmaßen und am Rücken.",
        "pt-br": "Esta é a sua forma enquanto devora a luz do\nSolgaleo. Ele ataca os inimigos e depois corta\neles com as garras em seus quatro membros e nas costas.",
        "zh-tw": "這是它吞噬光芒時的形態\n索爾迦雷歐。它會撲向敵人，然後進行砍擊\n它們的四肢和背部都有爪子。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Black Metal",
                es: "Black Metal",
                "fr": "Métal noir",
                "it": "Metallo nero",
                "de": "Black Metal",
                "pt-br": "Metal Negro",
                "zh-tw": "黑金屬"
            },
            damage: 100,
            cost: ["Metal", "Colorless", "Colorless"],
            effect: {
                en: "Discard a {M} Energy from this Pokémon.",
                es: "Descarta 1 Energía {M} de este Pokémon.",
                "fr": "Défaussez une {M} Énergie de ce Pokémon.",
                "it": "Scarta un'Energia {M} da questo Pokémon.",
                "de": "Wirf eine {M} Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {M} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 {M} 能量。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol9"]
};
export default card;
