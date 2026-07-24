import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/131",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/131"
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
    illustrator: "Sekio",
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
                en: "Dig Claws",
                fr: "Creusogriffes",
                es: "Hundir Garras",
                it: "Scavazanne",
                de: "Schaufelkrallen",
                "pt-br": "Fincar Garras",
                "zh-tw": "豎爪"
            },
            damage: 20
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
