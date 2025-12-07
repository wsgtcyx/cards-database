import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Donphan ex",
        "fr": "Donphan ex",
        "es": "ex donphan",
        "it": "Donphan ex",
        "de": "Donphan ex",
        "pt-br": "Donphan ex",
        "zh-tw": "唐凡超級"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    evolveFrom: {
        en: "Phanpy",
        "fr": "Phanpy",
        "es": "fanpy",
        "it": "Fanpy",
        "de": "Phanpy",
        "pt-br": "Fanpy",
        "zh-tw": "潘皮"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Gigantic Press",
                "fr": "Presse gigantesque",
                "es": "Prensa gigantesca",
                "it": "Stampa gigantesca",
                "de": "Gigantische Presse",
                "pt-br": "Imprensa gigantesca",
                "zh-tw": "巨大的壓力機"
            },
            damage: 50,
            cost: ["Fighting"],
            effect: {
                en: "If this Pokémon has at least 2 extra {F} Energy attached, this attack does 60 more damage.",
                "fr": "Si ce Pokémon a au moins 2 Énergies {F} supplémentaires attachées, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene al menos 2 Energías {F} extra unidas, este ataque hace 60 puntos de daño más.",
                "it": "Se questo Pokémon ha almeno due Energie {F} extra assegnate, questo attacco infligge 60 danni in più.",
                "de": "Wenn an dieses Pokémon mindestens 2 zusätzliche {F}-Energien angelegt sind, fügt dieser Angriff 60 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 2 energias {F} extras anexadas, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝附加了至少 2 個額外的 {F} 能量，則此攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh"]
};
export default card;
