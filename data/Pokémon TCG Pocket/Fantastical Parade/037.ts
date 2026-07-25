import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/037",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/037",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/037",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/037"
    },
    name: {
        en: "Vanillite",
        "fr": "Vanillite",
        "es": "vainillita",
        "it": "Vanillite",
        "de": "Vanillit",
        "pt-br": "Vanilita",
        "zh-tw": "香蘭石"
    },
    illustrator: "Orca",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "Supposedly, this Pokémon was born from an\nicicle. It spews out freezing air at −58 degrees\nFahrenheit to make itself more comfortable.",
        "fr": "On suppose que ce Pokémon est né d'un\nglaçon. Il crache de l'air glacial à −58 degrés\nFahrenheit pour se sentir plus à l'aise.",
        "es": "Supuestamente, este Pokémon nació de un\ncarámbano. Expulsa aire helado a -58 grados\nFahrenheit para sentirse más cómodo.",
        "it": "Presumibilmente, questo Pokémon è nato da un\nghiacciolo. Emette aria gelida a -58 gradi\nFahrenheit per sentirsi più a proprio agio.",
        "de": "Angeblich wurde dieses Pokémon aus einem geboren\nEiszapfen. Es stößt eiskalte Luft mit einer Temperatur von −58 Grad aus\nFahrenheit, um es sich bequemer zu machen.",
        "pt-br": "Supostamente, este Pokémon nasceu de um\npingente de gelo. Ele expele ar gelado a -58 graus\nFahrenheit para ficar mais confortável.",
        "zh-tw": "據推測，這只神奇寶貝是從\n冰柱。它噴出-58度的冰冷空氣\n華氏度讓自己更舒服。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Chilly",
                "fr": "Froid",
                "es": "Frío",
                "it": "Freddo",
                "de": "Kühl",
                "pt-br": "Frio",
                "zh-tw": "寒冷"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
