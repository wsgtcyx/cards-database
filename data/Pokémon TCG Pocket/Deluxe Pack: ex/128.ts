import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Pikachu",
        "fr": "Pikachu",
        "es": "Pikachu",
        "it": "Pikachu",
        "de": "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘"
    },
    illustrator: "Mitsuhiro Arita",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "When it is angered, it immediately discharges the\nenergy stored in the pouches in its cheeks.",
        "fr": "Lorsqu'il est en colère, il décharge immédiatement le\nénergie stockée dans les poches de ses joues.",
        "es": "Cuando se enoja, inmediatamente descarga la\nenergía almacenada en las bolsas de sus mejillas.",
        "it": "Quando è arrabbiato, scarica immediatamente il\nenergia immagazzinata nelle sacche delle sue guance.",
        "de": "Wenn es verärgert ist, entlädt es sich sofort\nEnergie, die in den Beuteln in seinen Wangen gespeichert ist.",
        "pt-br": "Quando está irritado, ele imediatamente descarrega o\nenergia armazenada nas bolsas em suas bochechas.",
        "zh-tw": "當它被激怒時，它會立即釋放\n能量儲存在臉頰的眼袋裡。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Gnaw",
                "fr": "Ronger",
                "es": "Roer",
                "it": "Rosicchiare",
                "de": "Nagen",
                "pt-br": "Roer",
                "zh-tw": "啃"
            },
            damage: 20,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
