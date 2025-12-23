import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Steelix",
        "fr": "Steelix",
        "es": "Steelix",
        "it": "Steelix",
        "de": "Stahlos",
        "pt-br": "Steelix",
        "zh-tw": "大鋼蛇"
    },
    illustrator: "NC Empire",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Metal"],
    evolveFrom: {
        en: "Onix",
        "fr": "Onix",
        "es": "Onix",
        "it": "Onix",
        "de": "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇"
    },
    description: {
        en: "It is thought its body transformed as a result of\niron accumulating internally from swallowing soil.",
        "fr": "On pense que son corps s'est transformé à la suite de\nle fer s’accumule en interne en avalant de la terre.",
        "es": "Se cree que su cuerpo se transformó como resultado de\nhierro que se acumula internamente al tragar tierra.",
        "it": "Si pensa che il suo corpo si sia trasformato a causa di\nferro che si accumula internamente ingerendo il terreno.",
        "de": "Es wird angenommen, dass sich sein Körper dadurch verändert hat\nEisen, das sich durch das Verschlucken von Erde im Inneren ansammelt.",
        "pt-br": "Pensa-se que seu corpo se transformou como resultado de\nferro se acumulando internamente ao engolir terra.",
        "zh-tw": "人們認為它的身體由於\n鐵因吞嚥土壤而在內部積聚。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Metal Defender",
                "fr": "Défenseur du métal",
                "es": "Defensor metálico",
                "it": "Difensore di metallo",
                "de": "Metallverteidiger",
                "pt-br": "Defensor Metálico",
                "zh-tw": "金屬後衛"
            },
            damage: 100,
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon has no Weakness.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon n'a aucune Faiblesse.",
                "es": "Durante el próximo turno de tu rival, este Pokémon no tiene Debilidad.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon non ha debolezze.",
                "de": "Während des nächsten Zuges deines Gegners hat dieses Pokémon keine Schwäche.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon não terá Fraqueza.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝沒有弱點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4
};
export default card;
