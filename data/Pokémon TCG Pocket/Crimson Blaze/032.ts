import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Solosis",
        "fr": "Nucléos",
        "es": "Solosis",
        "it": "Solosis",
        "de": "Monozyto",
        "pt-br": "Solosis",
        "zh-tw": "單卵細胞球"
    },
    illustrator: "osare",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Psychic"],
    description: {
        en: "Many say that the special liquid covering this\nPokémon's body would allow it to survive in\nthe vacuum of space.",
        "fr": "Beaucoup disent que le liquide spécial qui recouvre ce\nLe corps du Pokémon lui permettrait de survivre\nle vide de l'espace.",
        "es": "Muchos dicen que el líquido especial que cubre este\nEl cuerpo de Pokémon le permitiría sobrevivir en\nel vacío del espacio.",
        "it": "Molti dicono che il liquido speciale lo ricopre\nIl corpo del Pokémon gli permetterebbe di sopravvivere\nil vuoto dello spazio.",
        "de": "Viele sagen, dass dies eine spezielle Flüssigkeit ist\nDer Körper des Pokémon würde es ihm ermöglichen, darin zu überleben\ndas Vakuum des Weltraums.",
        "pt-br": "Muitos dizem que o líquido especial que cobre este\nO corpo do Pokémon permitiria que ele sobrevivesse em\no vácuo do espaço.",
        "zh-tw": "許多人說覆蓋此的特殊液體\n神奇寶貝的身體可以讓它生存\n太空的真空。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rollout",
                "fr": "Dérouler",
                "es": "Lanzamiento",
                "it": "Lancio",
                "de": "Ausrollen",
                "pt-br": "Sair da cama",
                "zh-tw": "滾動"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
