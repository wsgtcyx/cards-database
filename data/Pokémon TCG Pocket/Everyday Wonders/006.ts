import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/006"
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
    illustrator: "HYOGONOSUKE",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
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
                en: "Double Spin",
                fr: "Double Tour",
                es: "Doble Giro",
                it: "Doppioturbo",
                de: "Doppeldreher",
                "pt-br": "Giro Duplo",
                "zh-tw": "雙重旋轉"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 20 daños por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
