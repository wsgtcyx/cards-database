import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
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
        "zh-tw": "馬尚EX"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 180,
    types: ["Fighting"],
    evolveFrom: {
        en: "Machoke",
        "fr": "Machoke",
        "es": "Machoke",
        "it": "Machoke",
        "de": "Machoke",
        "pt-br": "Machoke",
        "zh-tw": "馬喬克"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
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
            damage: 120,
            cost: ["Fighting", "Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["solgaleo"]
};
export default card;
