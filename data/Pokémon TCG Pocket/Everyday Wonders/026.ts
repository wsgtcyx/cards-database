import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/026"
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
    illustrator: "USGMEN",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
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
            cost: ["Colorless"],
            name: {
                en: "Growl",
                fr: "Rugissement",
                es: "Gruñido",
                it: "Ruggito",
                de: "Heuler",
                "pt-br": "Rosnadura",
                "zh-tw": "叫聲"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon do -20 damage.",
                fr: "Lors du prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent -20 dégâts.",
                es: "Durante el próximo turno de tu rival, los ataques utilizados por el Pokémon Defensor causan -20 de daño.",
                it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -20 danni.",
                de: "Während des nächsten Zuges deines Gegners verursachen Angriffe des verteidigenden Pokémon -20 Schadenspunkte.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados ​​pelo Pokémon Defensor causam -20 de dano.",
                "zh-tw": "在對手的下一個回合中，防御寶可夢使用的攻擊造成-20點傷害。"
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
