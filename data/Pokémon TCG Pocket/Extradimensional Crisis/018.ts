import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Emolga",
        "fr": "Émolga",
        "es": "Emolga",
        "it": "Emolga",
        "de": "Emolga",
        "pt-br": "Emolga",
        "zh-tw": "埃莫爾加"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "As Emolga flutters through the air, it crackles\nwith electricity. This Pokémon is cute, but it can\ncause a lot of trouble.",
        "fr": "Alors qu'Emolga flotte dans les airs, elle crépite\navec l'électricité. Ce Pokémon est mignon, mais il peut\ncauser beaucoup de problèmes.",
        "es": "Mientras Emolga revolotea en el aire, crepita\ncon electricidad. Este Pokémon es lindo, pero puede\ncausar muchos problemas.",
        "it": "Mentre Emolga svolazza nell'aria, crepita\ncon l'elettricità. Questo Pokémon è carino, ma può farlo\ncausare molti problemi.",
        "de": "Während Emolga durch die Luft flattert, knistert es\nmit Strom. Dieses Pokémon ist süß, aber es kann\neine Menge Ärger bereiten.",
        "pt-br": "Enquanto Emolga flutua no ar, ela estala\ncom eletricidade. Este Pokémon é fofo, mas pode\ncausar muitos problemas.",
        "zh-tw": "當 Emolga 在空中飄動時，它會發出劈啪聲\n用電。這個神奇寶貝很可愛，但它可以\n造成很多麻煩。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Static Shock",
                "fr": "Choc statique",
                "es": "Choque estático",
                "it": "Shock statico",
                "de": "Statischer Schock",
                "pt-br": "Choque Estático",
                "zh-tw": "靜電衝擊"
            },
            damage: 30,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
