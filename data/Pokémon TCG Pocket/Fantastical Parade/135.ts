import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/135",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/135",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/135",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/135",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/135"
    },
    name: {
        en: "Vigoroth",
        "fr": "Vigoroth",
        "es": "Vigorot",
        "it": "Vigoroth",
        "de": "Vigoroth",
        "pt-br": "Vigoroth",
        "zh-tw": "維戈羅斯"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Slakoth",
        "fr": "Slakoth",
        "es": "slakoth",
        "it": "Slakoth",
        "de": "Slakoth",
        "pt-br": "Slakoth",
        "zh-tw": "斯拉科斯"
    },
    description: {
        en: "It is always hungry because it won't stop\nrampaging. Even while it is eating, it can't\nkeep still.",
        "fr": "Il a toujours faim parce que ça ne s'arrête pas\ndéchaîné. Même pendant qu'il mange, il ne peut pas\nreste immobile.",
        "es": "Siempre tiene hambre porque no para.\narrasando. Incluso mientras come, no puede\nquédate quieto.",
        "it": "Ha sempre fame perché non si ferma\nfurioso. Anche mentre mangia, non può\nstai fermo.",
        "de": "Es ist immer hungrig, weil es nicht aufhören will\ntobend. Selbst während es frisst, kann es nicht\nbleib still.",
        "pt-br": "Está sempre com fome porque não para\nfurioso. Mesmo enquanto está comendo, ele não consegue\nfique quieto.",
        "zh-tw": "它總是很餓，因為它不會停止\n橫衝直撞。即使在吃東西的時候也不能\n保持靜止。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Best Punch",
                "fr": "Meilleur coup de poing",
                "es": "Mejor golpe",
                "it": "Miglior pugno",
                "de": "Bester Schlag",
                "pt-br": "Melhor soco",
                "zh-tw": "最佳拳擊"
            },
            damage: 90,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                "fr": "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                "es": "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                "it": "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
