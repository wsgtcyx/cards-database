import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/139",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/139",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/139",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/139",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/139",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/139",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/139"
    },
    name: {
        en: "Unfezant",
        fr: "Déflaisan",
        es: "Unfezant",
        it: "Unfezant",
        de: "Fasasnob",
        "pt-br": "Unfezant",
        "zh-tw": "高傲雉雞",
        ko: "켄호로우",
        ja: "ケンホロウ"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Colorless"],
    dexId: [521],
    evolveFrom: {
        en: "Tranquill",
        fr: "Colombeau",
        es: "Tranquill",
        it: "Tranquill",
        de: "Navitaub",
        "pt-br": "Tranquill",
        "zh-tw": "咕咕鴿",
        ko: "유토브",
        ja: "ハトーボー"
    },
    stage: "Stage2",
    description: {
        en: "This Pokémon is intelligent and intensely proud. People will sit up and take notice if you become the Trainer of one.",
        fr: "Ce Pokémon est aussi intelligent qu’il est arrogant.\nLes Dresseurs de Déflaisan sont tenus en haute\nestime.",
        es: "Es un Pokémon muy inteligente y orgulloso.\nSe tiene en alta estima a aquellos que se\nconvierten en sus Entrenadores.",
        it: "È tanto intelligente quanto orgoglioso.\nDiventare Allenatori di questo Pokémon equivale\na guadagnarsi il rispetto e l’ammirazione di tutti.",
        de: "Es ist schlau, aber auch sehr stolz. Seine Trainer\ngenießen daher generell großen Respekt.",
        "zh-tw": "頭腦聰明，所以自尊心也強。\n如果能成為高傲雉雞的訓練家，\n所有人都會對你刮目相看。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Fly",
                fr: "Vol",
                es: "Vuelo",
                it: "Volo",
                de: "Fliegen",
                "pt-br": "Voar",
                "zh-tw": "飛翔"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
                es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este ataque não fará nada. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
                "zh-tw": "擲1次硬幣若為反面,則這個招式失敗。若為正面,則在下個對手的回合,這隻寶可夢不會受到招式的傷害與效果的影響。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
