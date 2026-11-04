import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/042/5e6f4a830800ea6d",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/042/5e6f4a830800ea6d",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/042/5e6f4a830800ea6d",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/042/5e6f4a830800ea6d",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/042/5e6f4a830800ea6d",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/042/5e6f4a830800ea6d",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/042/5e6f4a830800ea6d",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/042/5e6f4a830800ea6d",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/042/5e6f4a830800ea6d"
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
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [79],
    stage: "Basic",
    description: {
        en: "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
        fr: "Ramoloss semble toujours distrait, mais personne ne sait vraiment à quoi il pense. Il adore pêcher à l'aide de sa queue.",
        es: "Está siempre en su mundo, pero nadie sabe en qué\npiensa. Suele pescar con la cola.",
        it: "È sempre assorto, ma nessuno sa a cosa stia\npensando. Si serve della coda per pescare.",
        de: "Flegmon ist stets in Gedanken versunken, aber niemand weiß, worüber es nachdenkt. Seine Rute nutzt es geschickt zum Angeln.",
        "pt-br": "Está sempre distraidamente perdido em pensamentos, mas ninguém sabe o que ele está pensando. Tem muita habilidade em pescar com a cauda.",
        "zh-tw": "總是一副發呆的樣子，不知道在想些什麼。擅長用尾巴來釣食物。",
        ja: "いつも ボーッとしていて なにを 考えているか わからない。 尻尾で エサを 釣るのが 得意。",
        ko: "항상 멍하니 있어서\n무슨 생각을 하고 있는지 알 수 없다.\n꼬리로 먹이를 낚는 것이 특기다."
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
                "zh-tw": "頭錘",
                ja: "ずつき",
                ko: "박치기"
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
