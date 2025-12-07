import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Trevenant",
        "fr": "Trévenant",
        "es": "Trevenante",
        "it": "Trevenant",
        "de": "Trevenant",
        "pt-br": "Trevenante",
        "zh-tw": "朽木妖",
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    evolveFrom: {
        en: "Phantump",
        "fr": "Fantôme",
        "es": "Fantasma",
        "it": "Phantump",
        "de": "Phantump",
        "pt-br": "Fantasma",
        "zh-tw": "小木靈",
    },
    description: {
        en: "People fear it due to a belief that it devours any\nwho try to cut down trees in its forest, but to the\nPokémon it shares its woods with, it's kind.",
        "fr": "Les gens le craignent parce qu’ils croient qu’il dévore tout\nqui essaie d'abattre des arbres dans sa forêt, mais au\nPokémon avec qui il partage ses bois, il est gentil.",
        "es": "La gente le teme porque cree que devora cualquier\nque intentan talar árboles en su bosque, pero a la\nPokémon con el que comparte su bosque, es amable.",
        "it": "Le persone lo temono perché credono che divori qualsiasi cosa\nche cercano di abbattere gli alberi nella sua foresta, ma al\nPokémon con cui condivide i boschi, è gentile.",
        "de": "Die Menschen haben Angst davor, weil sie glauben, dass es jeden verschlingt\ndie versuchen, Bäume in ihrem Wald zu fällen, aber zum\nDas Pokémon, mit dem es seinen Wald teilt, ist nett.",
        "pt-br": "As pessoas o temem devido à crença de que devora qualquer\nque tentam derrubar árvores em sua floresta, mas para o\nPokémon com quem ele compartilha sua floresta é gentil.",
        "zh-tw": "人們害怕它，因為相信它會吞噬任何東西\n他們試圖砍伐森林中的樹木，但\n與它共享森林的神奇寶貝很友善。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Wrack Down",
                "fr": "Détruire",
                "es": "Destrozar",
                "it": "Distruggilo",
                "de": "Machen Sie Schluss",
                "pt-br": "Destruir",
                "zh-tw": "鎮壓"
            },
            damage: 70,
            cost: ["Psychic", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
