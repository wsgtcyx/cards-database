import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Klink",
        "fr": "Klink",
        "es": "klink",
        "it": "Klink",
        "de": "Klink",
        "pt-br": "Klink",
        "zh-tw": "克林克"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    description: {
        en: "The two minigears that compose this Pokémon\nare closer than twins. They mesh well only with\neach other.",
        "fr": "Les deux minigears qui composent ce Pokémon\nsont plus proches que des jumeaux. Ils ne s'accordent bien qu'avec\nles uns les autres.",
        "es": "Los dos minigears que componen este Pokémon\nestán más cerca que los gemelos. Combinan bien sólo con\nunos a otros.",
        "it": "I due miniingranaggi che compongono questo Pokémon\nsono più vicini dei gemelli. Si adattano bene solo con\nl'un l'altro.",
        "de": "Die beiden Minigears, aus denen dieses Pokémon besteht\nsind näher als Zwillinge. Sie passen nur gut zusammen\neinander.",
        "pt-br": "Os dois minigears que compõem este Pokémon\nsão mais próximos que gêmeos. Eles combinam bem apenas com\num ao outro.",
        "zh-tw": "組成這只神奇寶貝的兩個迷你齒輪\n比雙胞胎還要親密。他們只與\n彼此。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Vise Grip",
                "fr": "Poignée d'étau",
                "es": "Agarre de tornillo de banco",
                "it": "Presa a morsa",
                "de": "Schraubstockgriff",
                "pt-br": "Torno Grip",
                "zh-tw": "虎鉗夾具"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
