import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/008",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/008",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/008",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/008",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/008",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/008",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/008",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/008"
    },
    name: {
        en: "Slugma",
        "fr": "Limagma",
        "es": "Slugma",
        "it": "Slugma",
        "de": "Schneckmag",
        "pt-br": "Slugma",
        "zh-tw": "熔岩蟲",
        ja: "マグマッグ",
        ko: "마그마그",
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    description: {
        en: "A common sight in volcanic areas, it slowly slithers\naround in a constant search for warm places.",
        "fr": "Un spectacle courant dans les zones volcaniques, il glisse lentement\ndans une recherche constante d'endroits chauds.",
        "es": "Una vista común en áreas volcánicas, se desliza lentamente\nalrededor en una búsqueda constante de lugares cálidos.",
        "it": "Uno spettacolo comune nelle aree vulcaniche, scivola lentamente\nin giro alla costante ricerca di luoghi caldi.",
        "de": "Es ist ein häufiger Anblick in vulkanischen Gebieten und gleitet langsam dahin\nauf der ständigen Suche nach warmen Orten.",
        "pt-br": "Uma visão comum em áreas vulcânicas, desliza lentamente\nem busca constante de lugares quentes.",
        "zh-tw": "它在火山地區很常見，它緩慢地滑行\n不斷地尋找溫暖的地方。",
        ja: "火山地帯に 多く 発生。 暖かい ところを 探して のろのろ はいずり回っている。",
        ko: "화산 지대에 많이 나타난다.\n따뜻한 곳을 찾아서\n느릿느릿 기어 다니고 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Combustion",
                "fr": "Combustion",
                "es": "Combustión",
                "it": "Combustione",
                "de": "Verbrennung",
                "pt-br": "Combustão",
                "zh-tw": "燃燒",
                ja: "かえん",
                ko: "화염"
            },
            damage: 40,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
