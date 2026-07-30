import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/231"
    },
    name: {
        en: "Mega Kangaskhan ex",
        fr: "Méga-Kangourex-ex",
        es: "Mega-Kangaskhan ex",
        it: "Mega Kangaskhan-ex",
        de: "Mega-Kangama-ex",
        "pt-br": "Mega Kangaskhan ex",
        "zh-tw": "超級袋獸ex",
        ko: "메가캥카 ex",
        ja: "メガガルーラex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 180,
    types: ["Colorless"],
    dexId: [115],
    stage: "Basic",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Double-Punching Family",
                fr: "Famille à double poinçonnage",
                es: "Familia de doble punzonado",
                it: "Famiglia del doppio pugno",
                de: "Doppelt schlagende Familie",
                "pt-br": "Família de socos duplos",
                "zh-tw": "家族雙拳"
            },
            effect: {
                en: "This attack is used twice in a row. The second attack does 40 damage.(If the first attack Knocks Out your opponent's Active Pokémon, the second attack is used after your opponent chooses a new Active Pokémon.)"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
