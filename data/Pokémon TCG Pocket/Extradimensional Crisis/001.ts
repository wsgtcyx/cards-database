import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Petilil",
        "fr": "Pétilil",
        "es": "Petilil",
        "it": "Petilil",
        "de": "Petilil",
        "pt-br": "Petilil",
        "zh-tw": "百合根娃娃",
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "The leaves on its head grow right back even if\nthey fall out. These bitter leaves refresh those\nwho eat them.",
        "fr": "Les feuilles sur sa tête repoussent même si\nils tombent. Ces feuilles amères rafraîchissent ceux\nqui les mange.",
        "es": "Las hojas de su cabeza vuelven a crecer incluso si\nse caen. Estas hojas amargas refrescan aquellos\nquienes los comen.",
        "it": "Le foglie sulla sua testa ricrescono anche se\ncadono. Queste foglie amare li rinfrescano\nche li mangiano.",
        "de": "Die Blätter auf seinem Kopf wachsen gleich wieder nach, auch wenn\nsie fallen heraus. Diese bitteren Blätter erfrischen diese\nwer sie isst.",
        "pt-br": "As folhas em sua cabeça voltam a crescer, mesmo que\neles caem. Estas folhas amargas refrescam aqueles\nquem os come.",
        "zh-tw": "即使它頭上的葉子馬上又長出來\n他們會掉下來。這些苦澀的葉子使那些\n誰吃它們。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Seed Bomb",
                "fr": "Bombe à graines",
                "es": "Bomba de semillas",
                "it": "Bomba di semi",
                "de": "Samenbombe",
                "pt-br": "Bomba de sementes",
                "zh-tw": "種子炸彈"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
