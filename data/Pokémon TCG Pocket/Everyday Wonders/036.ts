import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/036",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/036",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/036",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/036",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/036",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/036",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/036"
    },
    name: {
        en: "Wooper",
        fr: "Axoloto",
        es: "Wooper",
        it: "Wooper",
        de: "Felino",
        "pt-br": "Wooper",
        "zh-tw": "烏波",
        ko: "우파",
        ja: "ウパー"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [194],
    stage: "Basic",
    description: {
        en: "When it walks around on land, it coats its body with a slimy, poisonous film.",
        fr: "Lorsqu’il se promène sur terre, il recouvre son corps d’une pellicule visqueuse et venimeuse.",
        es: "Cuando camina por la tierra, cubre su cuerpo con una película viscosa y venenosa.",
        it: "Quando cammina sulla terraferma, ricopre il suo corpo con una pellicola viscida e velenosa.",
        de: "Wenn es an Land herumläuft, überzieht es seinen Körper mit einem schleimigen, giftigen Film.",
        "pt-br": "Quando anda em terra, cobre seu corpo com uma película viscosa e venenosa.",
        "zh-tw": "當它在陸地上行走時，它的身體會覆蓋一層黏稠的有毒薄膜。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                en: "Mud Shot",
                fr: "Tir de Boue",
                es: "Disparo Lodo",
                it: "Colpodifango",
                de: "Lehmschuss",
                "pt-br": "Tiro de Lama",
                "zh-tw": "泥巴射擊"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
