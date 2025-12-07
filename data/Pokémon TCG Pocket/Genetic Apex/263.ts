import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Machamp ex",
        fr: "Mackogneur-ex",
        es: "Machamp ex",
        it: "Machamp-ex",
        de: "Machomei-ex",
        'pt-br': "Machamp ex",
        ko: "괴력몬 ex",
        "zh-tw": "怪力 ex",
    },
    illustrator: "PLANETA Igarashi",
    category: "Pokemon",
    hp: 180,
    types: ["Fighting"],
    stage: "Stage2",
    evolveFrom: {
        en: "Machoke",
        "fr": "Machoke",
        "es": "Machoke",
        "it": "Machoke",
        "de": "Machoke",
        "pt-br": "Machoke",
        "zh-tw": "馬喬克"
    },
    suffix: "EX",
    attacks: [{
            cost: ["Fighting", "Fighting", "Fighting"],
            name: {
                en: "Mega Punch",
                fr: "Ultimapoing",
                es: "Megapuño",
                it: "Megapugno",
                de: "Megahieb",
                'pt-br': "Megassoco",
                ko: "메가톤펀치",
                "zh-tw": "超級沖床"
            },
            damage: "120"
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 3,
    rarity: "Two Star",
    boosters: ["charizard"]
};
export default card;
