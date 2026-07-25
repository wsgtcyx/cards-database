import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/043",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/043",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/043",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/043",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/043",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/043"
    },
    name: {
        en: "Wattrel",
        fr: "Zapétrel",
        es: "Wattrel",
        it: "Wattrel",
        de: "Voltrel",
        "pt-br": "Wattrel",
        "zh-tw": "電海燕",
        pt: "Wattrel"
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [940],
    description: {
        en: "These Pokémon make their nests on coastal cliffs. The nests have a strange, crackling texture, and they're a popular delicacy.",
        "fr": "Ces Pokémon font leurs nids sur les falaises côtières. Les nids ont une texture étrange et crépitante et constituent un mets très apprécié.",
        "es": "Estos Pokémon hacen sus nidos en los acantilados costeros. Los nidos tienen una textura extraña y crujiente y son un manjar popular.",
        "it": "Questi Pokémon nidificano sulle scogliere costiere. I nidi hanno una consistenza strana e scoppiettante e sono una prelibatezza popolare.",
        "de": "Diese Pokémon bauen ihre Nester auf Küstenklippen. Die Nester haben eine seltsame, knisternde Konsistenz und sind eine beliebte Delikatesse.",
        "pt-br": "Esses Pokémon fazem seus ninhos nas falésias costeiras. Os ninhos têm uma textura estranha e crepitante e são uma iguaria popular.",
        "zh-tw": "這些寶可夢在海岸懸崖上築巢。燕窩有一種奇怪的、劈啪作響的質地，是一種很受歡迎的美味佳餚。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Flap",
                fr: "Battement",
                es: "Aleteo",
                it: "Alabattito",
                de: "Flattern",
                'pt-br': "Asa",
                "zh-tw": "皮瓣",
                ko: "홰치기"
            },
            damage: 20,
            cost: ["Lightning"],
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
