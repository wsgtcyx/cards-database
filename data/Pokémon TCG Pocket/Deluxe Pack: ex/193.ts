import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/193",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/193",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/193",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/193",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/193",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/193",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/193"
    },
    name: {
        en: "Machamp ex",
        "fr": "Mackogneur-ex",
        "es": "Machamp ex",
        "it": "Machamp-ex",
        "de": "Machomei-ex",
        "pt-br": "Machamp ex",
        "zh-tw": "怪力ex",
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
