import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/038",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/038"
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
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
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
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Tail Whap",
                fr: "Queue Battoir",
                es: "Coletón",
                it: "Codabotta",
                de: "Schweifvertrimmer",
                "pt-br": "Surra de Cauda",
                "zh-tw": "擺尾拍擊"
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
    retreat: 1
};

export default card;
