import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/046",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/046",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/046",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/046",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/046",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/046"
    },
    name: {
        en: "Fidough",
        fr: "Pâtachiot",
        es: "Fidough",
        it: "Fidough",
        de: "Hefel",
        "pt-br": "Fidough",
        "zh-tw": "狗仔包",
        pt: "Fidough"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [926],
    description: {
        en: "The yeast in Fidough's breath is useful for cooking, so this Pokémon has been protected by people since long ago.",
        "fr": "La levure contenue dans l'haleine de Pâtachiot est utile pour la cuisine, ce Pokémon est donc protégé par les humains depuis longtemps.",
        "es": "La levadura del aliento de Fidough es útil para cocinar, por lo que este Pokémon ha estado protegido por la gente desde hace mucho tiempo.",
        "it": "Il lievito nell'alito di Fidough è utile per cucinare, quindi questo Pokémon è stato protetto dagli esseri umani già da molto tempo.",
        "de": "Die Hefe im Atem von Hefel eignet sich zum Kochen, daher wurde dieses Pokémon schon vor langer Zeit von Menschen geschützt.",
        "pt-br": "O fermento no hálito de Fidough é útil para cozinhar, então este Pokémon é protegido pelas pessoas há muito tempo.",
        "zh-tw": "狗仔包呼吸中的酵母對於烹飪很有用，所以這隻寶可夢很早以前就受到了人們的保護。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Rear Kick",
                fr: "Ruade",
                es: "Patada Trasera",
                it: "Retrocalcio",
                de: "Rückwärtskick",
                "pt-br": "Chute traseiro",
                "zh-tw": "後踢",
                pt: "Chute Traseiro",
                'es-mx': "Patada Trasera"
            },
            damage: "20",
            cost: ["Psychic"],
        },
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
