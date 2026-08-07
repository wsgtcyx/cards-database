import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/098",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/098",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/098",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/098",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/098",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/098",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/098"
    },
    name: {
        en: "Mamoswine",
        "fr": "Mammochon",
        "es": "Mamoswine",
        "it": "Mamoswine",
        "de": "Mamutel",
        "pt-br": "Mamoswine",
        "zh-tw": "象牙豬",
    },
    illustrator: "Uta",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    evolveFrom: {
        en: "Piloswine",
        "fr": "Vin de Pilos",
        "es": "Pilosvino",
        "it": "Piloswine",
        "de": "Piloswine",
        "pt-br": "Piloswine",
        "zh-tw": "長毛豬",
    },
    description: {
        en: "This Pokémon can be spotted in wall paintings\nfrom as far back as 10,000 years ago. For a\nwhile, it was thought to have gone extinct.",
        "fr": "Ce Pokémon peut être repéré sur les peintures murales\ndatant d'il y a 10 000 ans. Pour un\nalors que l'on pensait qu'il avait disparu.",
        "es": "Este Pokémon se puede ver en pinturas murales.\ndesde hace 10.000 años. por un\nmientras, se pensaba que se había extinguido.",
        "it": "Questo Pokémon può essere visto nei dipinti murali\nrisalenti a 10.000 anni fa. Per un\nmentre si pensava si fosse estinto.",
        "de": "Dieses Pokémon kann auf Wandgemälden entdeckt werden\nbereits vor 10.000 Jahren. Für einen\nWährenddessen galt es als ausgestorben.",
        "pt-br": "Este Pokémon pode ser visto em pinturas de parede\ndesde há 10.000 anos. Por um\nenquanto, pensava-se que estava extinto.",
        "zh-tw": "這種神奇寶貝可以在壁畫中看到\n追溯到一萬年前。對於一個\n同時，人們認為它已經滅絕了。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Earthquake",
                "fr": "Tremblement de terre",
                "es": "Terremoto",
                "it": "Terremoto",
                "de": "Erdbeben",
                "pt-br": "Terremoto",
                "zh-tw": "地震"
            },
            damage: 160,
            cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
            effect: {
                en: "This attack also does 20 damage to each of your Benched Pokémon.",
                "fr": "Cette attaque inflige également 20 dégâts à chacun de vos Pokémon de Banc.",
                "es": "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca.",
                "it": "Questo attacco infligge anche 20 danni a ciascuno dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt außerdem jedem Pokémon auf deiner Bank 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 de dano a cada um dos seus Pokémon no Banco.",
                "zh-tw": "這次攻擊還會對你的每隻後備神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["ho-oh"]
};
export default card;
