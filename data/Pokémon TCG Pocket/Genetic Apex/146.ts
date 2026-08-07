import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/146",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/146",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/146",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/146",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/146",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/146",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/146"
    },
    name: {
        en: "Machamp ex",
        fr: "Mackogneur-ex",
        es: "Machamp ex",
        it: "Machamp-ex",
        de: "Machomei-ex",
        'pt-br': "Machamp ex",
        ko: "괴력몬 ex",
        "zh-tw": "怪力ex",
    },
    illustrator: "PLANETA CG Works",
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
    rarity: "Four Diamond",
    boosters: ["charizard"]
};
export default card;
