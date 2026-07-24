import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/005"
    },
    name: {
        en: "Pidgey",
        fr: "Roucool",
        es: "Pidgey",
        it: "Pidgey",
        de: "Taubsi",
        "pt-br": "Pidgey",
        "zh-tw": "波波",
        ko: "구구",
        ja: "ポッポ"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [16],
    stage: "Basic",
    description: {
        en: "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.",
        fr: "Ce Pokémon docile préfère éviter le combat.\nToutefois, il se montre très féroce quand on l’agresse.",
        es: "Es manso y prefiere evitar los problemas. Sin embargo,\nsi le molestan atacará ferozmente.",
        it: "È docile e preferisce evitare i conflitti. Ma se viene\ndisturbato, contrattacca ferocemente.",
        de: "Reizt man dieses an sich gutmütige Pokémon,\nwehrt es sich wütend.",
        "pt-br": "É dócil e prefere evitar conflitos. Se perturbado, porém, pode contra-atacar ferozmente.",
        "zh-tw": "它個性溫順，喜歡避免衝突。然而，如果受到干擾，它可能會猛烈反擊。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol1"]
};

export default card;
