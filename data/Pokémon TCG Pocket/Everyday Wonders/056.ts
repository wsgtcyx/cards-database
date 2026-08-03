import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/056",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/056",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/056",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/056",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/056",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/056"
    },
    name: {
        en: "Teddiursa",
        fr: "Teddiursa",
        es: "Teddiursa",
        it: "Teddiursa",
        de: "Teddiursa",
        "pt-br": "Teddiursa",
        "zh-tw": "熊寶寶",
        ko: "깜지곰",
        ja: "ヒメグマ"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [216],
    stage: "Basic",
    description: {
        en: "Its paws are soaked in oodles of honey. When nervous, Teddiursa will lick its paws and soon have a smile back on its face.",
        fr: "Ses pattes sont trempées dans une gorgée de miel. Lorsqu'il est nerveux, Teddiursa se lèchera les pattes et retrouvera bientôt le sourire.",
        es: "Sus patas están empapadas en montones de miel. Cuando está nervioso, Teddiursa se lame las patas y pronto recupera la sonrisa.",
        it: "Le sue zampe sono inzuppate in una gran quantità di miele. Quando è nervoso, Teddiursa si lecca le zampe e presto torna a sorridere.",
        de: "Seine Pfoten sind in Unmengen Honig getränkt. Wenn er nervös ist, leckt sich Teddiursa die Pfoten und hat bald wieder ein Lächeln im Gesicht.",
        "pt-br": "Suas patas estão encharcadas de muito mel. Quando nervoso, Teddiursa lamberá as patas e logo terá um sorriso no rosto.",
        "zh-tw": "它的爪子浸滿了蜂蜜。緊張時，熊寶寶 會舔爪子，很快臉上就會露出笑容。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Charm",
                fr: "Charme",
                es: "Encanto",
                it: "Fascino",
                de: "Charme",
                "pt-br": "Encantar",
                "zh-tw": "撒嬌"
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
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
