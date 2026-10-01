import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/057",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/057"
    },
    name: {
        en: "Slowpoke",
        fr: "Ramoloss",
        es: "Slowpoke",
        it: "Slowpoke",
        de: "Flegmon",
        "pt-br": "Slowpoke",
        "zh-tw": "呆呆獸",
        ja: "ヤドン",
        ko: "야돈"
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Water"
    ],
    dexId: [
        79
    ],
    stage: "Basic",
    description: {
        en: "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
        fr: "Ramoloss semble toujours distrait, mais personne ne sait vraiment à quoi il pense. Il adore pêcher à l'aide de sa queue.",
        es: "Está siempre en su mundo, pero nadie sabe en qué piensa. Suele pescar con la cola.",
        it: "È sempre assorto, ma nessuno sa a cosa stia pensando. Si serve della coda per pescare.",
        de: "Flegmon ist stets in Gedanken versunken, aber niemand weiß, worüber es nachdenkt. Seine Rute nutzt es geschickt zum Angeln.",
        "pt-br": "Está sempre distraidamente perdido em pensamentos, mas ninguém sabe o que ele está pensando. Tem muita habilidade em pescar com a cauda.",
        "zh-tw": "總是一副在發呆的樣子，不知道在想些什麼。擅長用尾巴來釣食物。",
        ja: "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
        ko: "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail."
    },
    attacks: [
        {
            cost: [
                "Water",
                "Colorless"
            ],
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                "pt-br": "Cabeçada",
                "zh-tw": "頭錘",
                ja: "Headbutt",
                ko: "Headbutt"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
