import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
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
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
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
                en: "Jolt",
                "fr": "Secousse",
                "es": "Sacudida",
                "it": "Scossa",
                "de": "Ruck",
                "pt-br": "Sacudir",
                "zh-tw": "顛簸"
            },
            damage: 10,
            cost: ["Lightning"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
