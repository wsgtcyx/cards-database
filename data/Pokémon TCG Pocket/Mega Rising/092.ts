import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Joltik",
        "fr": "Joltik",
        "es": "Joltik",
        "it": "Joltik",
        "de": "Joltik",
        "pt-br": "Joltik",
        "zh-tw": "電電蟲",
    },
    illustrator: "Ayaka Yoshida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Lightning"],
    description: {
        en: "Joltik can be found clinging to other Pokémon.\nIt's soaking up static electricity because it can't\nproduce a charge on its own.",
        "fr": "Joltik peut être trouvé accroché à d'autres Pokémon.\nIl absorbe l'électricité statique parce qu'il ne peut pas\nproduire une charge par lui-même.",
        "es": "Se puede encontrar a Joltik aferrándose a otros Pokémon.\nEstá absorbiendo electricidad estática porque no puede\nproducir una carga por sí solo.",
        "it": "Puoi trovare Joltik aggrappato ad altri Pokémon.\nAssorbe l'elettricità statica perché non può\nprodurre una carica da solo.",
        "de": "Joltik klammert sich an andere Pokémon.\nEs absorbiert statische Elektrizität, weil es das nicht kann\nselbst eine Ladung erzeugen.",
        "pt-br": "Joltik pode ser encontrado agarrado a outros Pokémon.\nEstá absorvendo eletricidade estática porque não consegue\nproduzir uma carga por conta própria.",
        "zh-tw": "喬提克被發現粘在其他神奇寶貝身上。\n它吸收靜電，因為它不能\n自身產生電荷。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Attach",
                "fr": "Attacher",
                "es": "Adjuntar",
                "it": "Allegare",
                "de": "Befestigen",
                "pt-br": "Anexar",
                "zh-tw": "附"
            },
            damage: 20,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 0
};
export default card;
