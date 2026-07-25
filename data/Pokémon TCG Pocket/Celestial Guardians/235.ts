import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3/235",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3/235",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3/235",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3/235",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3/235",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3/235"
    },
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
        "zh-tw": "豪力",
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
