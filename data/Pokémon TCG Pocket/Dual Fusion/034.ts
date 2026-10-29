import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/034",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/034",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/034",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/034",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/034",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/034"
    },
    name: {
        en: "Shellder",
        fr: "Kokiyas",
        es: "Shellder",
        "pt-br": "Shellder",
        "zh-tw": "大舌貝",
        ja: "シェルダー",
        ko: "셀러",
        it: "Shellder",
        de: "Muschas"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                es: "Pistola Agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                "pt-br": "Revólver d'Água",
                "zh-tw": "水槍",
                ja: "Water Gun",
                ko: "Water Gun"
            },
            cost: [
                "Colorless",
                "Water"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.",
        fr: "Une coquille plus dure que le diamant le protège. Il est toutefois étonnamment tendre à l’intérieur.",
        es: "Está metido en una concha más dura que el diamante, pero tiene un cuerpo muy blando.",
        it: "La conchiglia esterna è più dura del diamante. L’interno, invece, è sorprendentemente morbido.",
        de: "Seine Schale ist härter als Diamant. Im Inneren ist es jedoch überraschend weich.",
        "pt-br": "Este Pokémon é envolto em uma concha mais dura que diamante. O seu interior, porém, é surpreendentemente macio.",
        "zh-tw": "包覆著身體的硬殼比鑽石還要堅硬。不過殼裡面卻比想像中的還要柔軟。",
        ja: "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.",
        ko: "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender."
    }
};

export default card;
