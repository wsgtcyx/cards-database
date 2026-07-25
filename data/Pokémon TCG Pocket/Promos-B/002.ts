import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/002",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/002"
    },
    name: {
        en: "Petilil",
        fr: "Chlorobule",
        es: "Petilil",
        it: "Petilil",
        de: "Lilminip",
        "pt-br": "Petilil",
        "zh-tw": "百合根娃娃",
        ko: "치릴리",
        ja: "チュリネ"
    },
    illustrator: "Yukiko Baba",
    rarity: "None",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    dexId: [548],
    stage: "Basic",
    description: {
        en: "If the leaves on its head are pruned with regularity, this Pokémon can be grown into a fine plump shape.",
        fr: "Si les feuilles sur sa tête sont taillées régulièrement, ce Pokémon peut prendre une forme fine et charnue.",
        es: "Si las hojas de su cabeza se podan con regularidad, este Pokémon puede desarrollar una forma fina y regordeta.",
        it: "Se le foglie sulla sua testa vengono potate regolarmente, questo Pokémon può crescere fino ad assumere una forma bella e paffuta.",
        de: "Wenn die Blätter auf seinem Kopf regelmäßig beschnitten werden, kann dieses Pokémon zu einer schönen, prallen Form heranwachsen.",
        "pt-br": "Se as folhas de sua cabeça forem podadas com regularidade, este Pokémon pode crescer e adquirir uma forma rechonchuda e fina.",
        "zh-tw": "如果定期修剪頭上的葉子，這隻寶可夢就能長成精緻豐滿的形狀。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Surprise Attack",
                fr: "Attaque Surprise",
                es: "Ataque Sorpresa",
                it: "Attacco a Sorpresa",
                de: "Überraschungsangriff",
                "pt-br": "Ataque Surpresa",
                "zh-tw": "偷襲"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol1"]
};

export default card;
