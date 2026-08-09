import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/157",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/157",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/157",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/157",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/157",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/157",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/157"
    },
    name: {
        en: "Rhydon",
        fr: "Rhinoféros",
        es: "Rhydon",
        it: "Rhydon",
        de: "Rizeros",
        'pt-br': "Rhydon",
        ko: "코뿌리",
        "zh-tw": "鑽角犀獸",
    },
    illustrator: "Masakazu Fukuda",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    stage: "Stage1",
    evolveFrom: {
        en: "Rhyhorn",
        "fr": "Rhinocorne",
        "es": "Rhyhorn",
        "it": "Rhyhorn",
        "de": "Rihorn",
        "pt-br": "Rhyhorn",
        "zh-tw": "獨角犀牛"
    },
    attacks: [{
            cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
            name: {
                en: "Horn Drill",
                fr: "Empal'Korne",
                es: "Perforador",
                it: "Perforcorno",
                de: "Hornbohrer",
                'pt-br': "Chifre Broca",
                ko: "뿔드릴",
                "zh-tw": "喇叭鑽"
            },
            damage: "100"
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4,
    rarity: "Two Diamond",
    description: {
        en: "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
        fr: "L'évolution a permis à ce Pokémon de marcher\nsur ses pattes postérieures. Il peut faire des trous\ndans les rochers en utilisant sa corne.",
        es: "Cuando evoluciona, comienza a andar\ncon las patas traseras. Es capaz de\nhoradar rocas con el cuerno que tiene.",
        it: "Dopo l'evoluzione inizia a muoversi sulle zampe\nposteriori. Con il corno può perforare la roccia.",
        de: "Nach seiner Entwicklung geht es aufrecht auf\nseinen Hinterbeinen. Mit seinem Horn kann es\nLöcher in Felsen bohren.",
        'pt-br': "Após evoluir, começa a andar com\nsuas pernas traseiras. Consegue furar\nrochedos com seu chifre.",
        ko: "진화하여 뒷다리만으로\n서게 되었다. 뿔로 찌르면\n암석에도 구멍이 뚫리고 만다.",
        "zh-tw": "進化後，它開始用後腿行走。它可以用角在巨石上打孔。"
    },
    boosters: ["mewtwo"]
};
export default card;
