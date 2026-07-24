import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/042",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/042"
    },
    name: {
        en: "Slowpoke",
        fr: "Ramoloss",
        es: "Slowpoke",
        it: "Slowpoke",
        de: "Flegmon",
        "pt-br": "Slowpoke",
        "zh-tw": "呆呆獸",
        ko: "야돈",
        ja: "ヤドン"
    },
    illustrator: "Yoshimi Miyoshi",
    rarity: "None",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [79],
    stage: "Basic",
    description: {
        en: "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
        fr: "Ramoloss semble toujours perdu dans ses pensées,\nmais personne ne sait vraiment à quoi il pense.\nIl adore pêcher en utilisant sa queue.",
        es: "Está siempre en su mundo, pero nadie sabe en qué\npiensa. Suele pescar con la cola.",
        it: "È sempre assorto, ma nessuno sa a cosa stia\npensando. Si serve della coda per pescare.",
        de: "Es ist stets in Gedanken versunken und niemand\nweiß, worüber es nachdenkt. Es kann mit seiner\nRute gut angeln.",
        "pt-br": "Está sempre vagamente perdido em pensamentos, mas ninguém sabe no que está pensando. É bom pescar com a cauda.",
        "zh-tw": "它总是茫然若失，却无人知道它在想什么。它擅長用尾巴釣魚。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                "pt-br": "Cabeçada",
                "zh-tw": "頭錘"
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
    retreat: 2,
    boosters: ["vol6"]
};

export default card;
