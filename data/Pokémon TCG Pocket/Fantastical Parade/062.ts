import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/062",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/062",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/062",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/062",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/062",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/062",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/062"
    },
    name: {
        en: "Granbull",
        "fr": "Granbull",
        "es": "Granbull",
        "it": "Granbull",
        "de": "Granbull",
        "pt-br": "Granbull",
        "zh-tw": "布魯皇"
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    evolveFrom: {
        en: "Snubbull",
        "fr": "Snobbull",
        "es": "desaire",
        "it": "Snubbull",
        "de": "Snubbull",
        "pt-br": "Esnobado",
        "zh-tw": "斯納布爾"
    },
    description: {
        en: "It can make most any Pokémon run away\nby opening its big mouth to reveal its\nthick fangs.",
        "fr": "Cela peut faire fuir la plupart des Pokémon\nen ouvrant sa grande gueule pour révéler son\ncrocs épais.",
        "es": "Puede hacer que la mayoría de los Pokémon huyan.\nabriendo su gran boca para revelar su\ncolmillos gruesos.",
        "it": "Può far scappare la maggior parte dei Pokémon\naprendo la sua grande bocca per rivelare la sua\nzanne spesse.",
        "de": "Es kann fast jedes Pokémon dazu bringen, wegzulaufen\nindem er seinen großen Mund öffnet, um ihn zu enthüllen\ndicke Reißzähne.",
        "pt-br": "Pode fazer quase qualquer Pokémon fugir\nabrindo sua boca grande para revelar seu\npresas grossas.",
        "zh-tw": "它可以讓大多數神奇寶貝逃跑\n張開大嘴露出它的\n厚厚的獠牙。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Strength",
                "fr": "Force",
                "es": "Fortaleza",
                "it": "Forza",
                "de": "Stärke",
                "pt-br": "Força",
                "zh-tw": "力量"
            },
            damage: 90,
            cost: ["Psychic", "Psychic", "Psychic"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
