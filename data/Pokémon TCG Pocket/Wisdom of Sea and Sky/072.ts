import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Emolga",
        "fr": "Émolga",
        "es": "Emolga",
        "it": "Emolga",
        "de": "Emolga",
        "pt-br": "Emolga",
        "zh-tw": "電飛鼠",
    },
    illustrator: "Saya Tsuruta",
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
                en: "Raging Thunder",
                "fr": "Tonnerre déchaîné",
                "es": "Trueno furioso",
                "it": "Tuono furioso",
                "de": "Wütender Donner",
                "pt-br": "Trovão Furioso",
                "zh-tw": "憤怒的雷霆"
            },
            damage: 40,
            cost: ["Lightning"],
            effect: {
                en: "This attack also does 10 damage to 1 of your Benched Pokémon.",
                "fr": "Cette attaque inflige également 10 dégâts à 1 de vos Pokémon de Banc.",
                "es": "Este ataque también hace 10 puntos de daño a 1 de tus Pokémon en Banca.",
                "it": "Questo attacco infligge anche 10 danni a 1 dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt außerdem einem Pokémon auf deiner Bank 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 de dano a 1 dos seus Pokémon no Banco.",
                "zh-tw": "這次攻擊還會對你的 1 只後備神奇寶貝造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
