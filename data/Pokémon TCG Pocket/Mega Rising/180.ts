import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Pidgey",
        "fr": "Piggy",
        "es": "pidgey",
        "it": "Pidgey",
        "de": "Pidgey",
        "pt-br": "Pidgey",
        "zh-tw": "波波",
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "It is docile and prefers to avoid conflict.\nIf disturbed, however, it can ferociously strike back.",
        "fr": "Il est docile et préfère éviter les conflits.\nToutefois, s’il est dérangé, il peut riposter férocement.",
        "es": "Es dócil y prefiere evitar los conflictos.\nSin embargo, si se le molesta, puede devolver el golpe ferozmente.",
        "it": "È docile e preferisce evitare i conflitti.\nSe disturbato, tuttavia, può contrattaccare ferocemente.",
        "de": "Es ist fügsam und geht Konflikten lieber aus dem Weg.\nWenn es jedoch gestört wird, kann es heftig zurückschlagen.",
        "pt-br": "É dócil e prefere evitar conflitos.\nSe perturbado, porém, pode contra-atacar ferozmente.",
        "zh-tw": "它性格溫順，喜歡避免衝突。\n然而，如果受到干擾，它可能會猛烈反擊。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Peck",
                "fr": "Picorer",
                "es": "Picotear",
                "it": "Pecca",
                "de": "Picken",
                "pt-br": "Peck",
                "zh-tw": "啄"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
