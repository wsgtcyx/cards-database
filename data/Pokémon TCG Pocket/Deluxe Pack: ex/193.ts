import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Machamp ex",
        "fr": "Machamp ex",
        "es": "ex machamp",
        "it": "Machamp ex",
        "de": "Machamp ex",
        "pt-br": "Ex-Machamp",
        "zh-tw": "怪力 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
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
                "fr": "Méga coup de poing",
                "es": "Mega puñetazo",
                "it": "Megapugno",
                "de": "Mega-Schlag",
                "pt-br": "Mega Soco",
                "zh-tw": "超級沖床"
            },
            damage: 120,
            cost: ["Fighting", "Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 3
};
export default card;
