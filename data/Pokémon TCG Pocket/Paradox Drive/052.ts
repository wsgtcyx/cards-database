import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/052",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/052",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/052",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/052",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/052",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/052",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/052"
    },
    name: {
        en: "Altaria",
        fr: "Altaria",
        es: "Altaria",
        it: "Altaria",
        de: "Altaria",
        "pt-br": "Altaria",
        "zh-tw": "七夕青鳥",
        ko: "파비코리",
        ja: "チルタリス"
    },
    illustrator: "kurumitsu",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [334],
    evolveFrom: {
        en: "Swablu",
        fr: "Tylton",
        es: "Swablu",
        it: "Swablu",
        de: "Wablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
        ko: "파비코",
        ja: "チルット"
    },
    stage: "Stage1",
    description: {
        en: "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano.",
        fr: "Il vole librement en se cachant dans les nuages.\nSon chant est digne de celui de la plus douée des\nsopranos.",
        es: "En días soleados, le gusta mezclarse con las nubes\ny disfrutar de la libertad del cielo mientras trina con\nvoz de soprano.",
        it: "Nelle belle giornate, ama confondersi con le poche\nnuvole in cielo e cantare con una bellissima voce di\nsoprano.",
        de: "Bei gutem Wetter mischt es sich unter die Wolken\nund genießt die Freiheit. Es hat eine entzückende\nSopranstimme.",
        "pt-br": "Em dias ensolarados, ele voa livremente pelo céu e se mistura às nuvens. Canta em um lindo soprano.",
        "zh-tw": "陽光明媚的日子，它自由自在地飛過天空，融入雲彩之中。它以美麗的女高音歌唱。"
    },
    attacks: [
        {
            cost: ["Colorless"],
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
                fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                es: "Lanza una moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。如果正面朝上，則在對手的下一回合中，阻止對該寶可夢造成的所有攻擊傷害及其效果。"
            },
            damage: 50
        }
    ],
    retreat: 1
};

export default card;
