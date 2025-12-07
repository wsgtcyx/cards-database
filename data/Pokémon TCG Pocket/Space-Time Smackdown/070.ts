import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Duskull",
        fr: "Skelénox",
        es: "Duskull",
        it: "Duskull",
        de: "Zwirrlicht",
        'pt-br': "Duskull",
        ko: "해골몽",
        "zh-tw": "夜骷顱",
    },
    illustrator: "ryoma uratsuka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "If it finds bad children who won't listen to their parents, it will spirit them away—or so it's said.",
        fr: "On dit que ce Pokémon emporte les\nenfants désobéissants à la nuit tombée.",
        es: "Corre el rumor de que, por las noches,\nse lleva a los niños que no son obedientes.",
        it: "Si racconta che questo Pokémon porti via nella\nnotte i bambini che sono stati disobbedienti.",
        de: "Man sagt, es suche sich unartige Kinder und\nverschleppe sie nachts an einen unbekannten Ort.",
        'pt-br': "Captura crianças malcriadas que não obedecem aos pais.\nOu pelo menos é o que dizem.",
        ko: "말을 잘 안 듣는 아이를\n발견하면 한밤중에 어딘가로\n데려간다고 전해진다.",
        "zh-tw": "如果它發現不聽父母的話的壞孩子，它就會把他們偷走——至少是這麼說的。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Will-O-Wisp",
                fr: "Feu Follet",
                es: "Fuego Fatuo",
                it: "Fuocofatuo",
                de: "Irrlicht",
                'pt-br': "Fogo Fátuo",
                ko: "도깨비불",
                "zh-tw": "鬼火"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["dialga"]
};
export default card;
