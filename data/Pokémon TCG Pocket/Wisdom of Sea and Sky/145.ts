import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Teddiursa",
        "fr": "Teddiursa",
        "es": "Teddiursa",
        "it": "Teddiursa",
        "de": "Teddiursa",
        "pt-br": "Teddiursa",
        "zh-tw": "特迪烏薩"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Its paws are soaked in oodles of honey. When\nnervous, Teddiursa will lick its paws and soon\nhave a smile back on its face.",
        "fr": "Ses pattes sont trempées dans une gorgée de miel. Quand\nnerveux, Teddiursa va se lécher les pattes et bientôt\nretrouver le sourire.",
        "es": "Sus patas están empapadas en montones de miel. cuando\nnervioso, Teddiursa se lamerá las patas y pronto\ntener una sonrisa nuevamente en su rostro.",
        "it": "Le sue zampe sono inzuppate in una gran quantità di miele. Quando\nnervoso, Teddiursa si leccherà le zampe e presto\navere di nuovo il sorriso sulle labbra.",
        "de": "Seine Pfoten sind in Unmengen Honig getränkt. Wann\nnervös, Teddiursa wird sich bald die Pfoten lecken\nwieder ein Lächeln im Gesicht haben.",
        "pt-br": "Suas patas estão encharcadas de muito mel. Quando\nnervoso, Teddiursa lamberá as patas e logo\ntenha um sorriso de volta no rosto.",
        "zh-tw": "它的爪子浸滿了蜂蜜。當\n緊張時，泰迪烏薩會舔它的爪子，很快\n臉上重新露出笑容。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Honey Snack",
                "fr": "Collation au miel",
                "es": "Merienda de miel",
                "it": "Spuntino al miele",
                "de": "Honigsnack",
                "pt-br": "Lanche de mel",
                "zh-tw": "蜂蜜零食"
            },
            cost: ["Colorless"],
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                "fr": "Soignez 20 dégâts de ce Pokémon.",
                "es": "Cura 20 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 20 danni.",
                "de": "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
