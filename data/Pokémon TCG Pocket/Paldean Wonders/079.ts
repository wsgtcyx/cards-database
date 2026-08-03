import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/079",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/079",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/079",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/079",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/079",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/079",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/079"
    },
    name: {
        en: "Lechonk",
        fr: "Gourmelet",
        es: "Lechonk",
        it: "Lechonk",
        de: "Ferkuli",
        "pt-br": "Lechonk",
        "zh-tw": "愛吃豚",
        pt: "Lechonk",
        'es-mx': "Lechonk"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [915],
    description: {
        en: "This Pokémon spurns all but the finest of foods. Its body gives off an herblike scent that bug Pokémon detest.",
        "fr": "Ce Pokémon rejette tous les aliments, sauf les meilleurs. Son corps dégage une odeur herbacée que les Pokémon insectes détestent.",
        "es": "Este Pokémon desprecia todos los alimentos excepto los más finos. Su cuerpo desprende un olor a hierba que los Pokémon insectos detestan.",
        "it": "Questo Pokémon disprezza tutto tranne il cibo più pregiato. Il suo corpo emana un profumo erbaceo che i Pokémon insetti detestano.",
        "de": "Dieses Pokémon verschmäht alles außer den besten Nahrungsmitteln. Sein Körper verströmt einen kräuterartigen Duft, den Käfer-Pokémon verabscheuen.",
        "pt-br": "Este Pokémon rejeita todos os alimentos, exceto os melhores. Seu corpo exala um cheiro de erva que os Pokémon insetos detestam.",
        "zh-tw": "這種寶可夢拒絕一切食物，除了最好的食物。它的身體散發出寶可夢討厭的草本氣味。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Tackle",
                fr: "Charge",
                "es": "Abordar",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 20,
            cost: ["Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
