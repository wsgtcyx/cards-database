import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/025",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/025",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/025",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/025",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/025",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/025",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/025"
    },
    name: {
        en: "Team Rocket's Slowpoke",
        fr: "Ramoloss de la Team Rocket",
        es: "Slowpoke del Team Rocket",
        it: "Slowpoke del Team Rocket",
        de: "Team Rockets Flegmon",
        "pt-br": "Slowpoke da Equipe Rocket",
        "zh-tw": "火箭隊的呆呆獸",
        ko: "로켓단의 야돈",
        ja: "ロケット団のヤドン"
    },
    illustrator: "MINAMINAMI Take",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    stage: "Basic",
    description: {
        en: "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
        fr: "Ramoloss semble toujours distrait, mais personne ne sait vraiment à quoi il pense. Il adore pêcher à l'aide de sa queue.",
        es: "Está siempre en su mundo, pero nadie sabe en qué piensa. Suele pescar con la cola.",
        it: "È sempre assorto, ma nessuno sa a cosa stia pensando. Si serve della coda per pescare.",
        de: "Flegmon ist stets in Gedanken versunken, aber niemand weiß, worüber es nachdenkt. Seine Rute nutzt es geschickt zum Angeln.",
        "pt-br": "Está sempre distraidamente perdido em pensamentos, mas ninguém sabe o que ele está pensando. Tem muita habilidade em pescar com a cauda.",
        "zh-tw": "總是一副在發呆的樣子，不知道在想些什麼。擅長用尾巴來釣食物。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Scavenge",
                fr: "Farfouille",
                es: "Buscabasura",
                it: "Rovistare",
                de: "Aasfresser",
                "pt-br": "Vasculhar",
                "zh-tw": "翻垃圾"
            },
            effect: {
                en: "Put a random Item card from your discard pile into your hand.",
                fr: "Ajoutez au hasard une carte Objet de votre pile de défausse à votre main.",
                es: "Pon carta de Objeto aleatoria de tu pila de descartes en tu mano.",
                it: "Prendi una carta Strumento a caso dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
                de: "Nimm 1 zufällige Itemkarte aus deinem Ablagestapel auf deine Hand.",
                "pt-br": "Coloque carta de Item aleatória da sua pilha de descarte na sua mão.",
                "zh-tw": "從自己的棄牌區隨機將張物品卡加入手牌。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
