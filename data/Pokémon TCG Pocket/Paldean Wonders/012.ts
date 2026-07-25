import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/012",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/012",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/012",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/012",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/012"
    },
    name: {
        en: "Capsakid",
        fr: "Pimito",
        es: "Capsakid",
        it: "Capsakid",
        de: "Chilingel",
        "pt-br": "Capsakid",
        "zh-tw": "熱辣娃",
        pt: "Capsakid"
    },
    illustrator: "GIDORA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [951],
    description: {
        en: "Traditional Paldean dishes can be extremely spicy because they include the shed front teeth of Capsakid among their ingredients.",
        "fr": "Les plats paldéens traditionnels peuvent être extrêmement épicés car ils incluent les dents de devant de Pimito parmi leurs ingrédients.",
        "es": "Los platos tradicionales paldeanos pueden resultar extremadamente picantes porque incluyen entre sus ingredientes los dientes frontales caídos de Capsakid.",
        "it": "I piatti tradizionali paldei possono essere estremamente piccanti perché includono tra i loro ingredienti i denti anteriori caduti di Capsakid.",
        "de": "Traditionelle paldäische Gerichte können extrem scharf sein, da sie unter anderem die abgeworfenen Vorderzähne von Chilingel enthalten.",
        "pt-br": "Os pratos tradicionais de Paldean podem ser extremamente picantes porque incluem os dentes da frente do Capsakid entre seus ingredientes.",
        "zh-tw": "傳統的帕爾迪安菜餚非常辣，因為它們的配料中含有 熱辣娃 脫落的門牙。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Playful Kick",
                fr: "Coup de Pied de Garnement",
                es: "Patada Juguetona",
                it: "Calcio Briccone",
                de: "Verspielter Kick",
                "pt-br": "Chute brincalhão",
                "zh-tw": "俏皮踢",
                'es-mx': "Patada Juguetona",
                pt: "Chute Brincalhão"
            },
            damage: 10,
            cost: ["Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
