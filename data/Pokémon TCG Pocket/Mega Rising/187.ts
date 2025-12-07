import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Miltank",
        "fr": "Réservoir à lait",
        "es": "Miltank",
        "it": "Miltank",
        "de": "Miltank",
        "pt-br": "Miltank",
        "zh-tw": "米爾坦克"
    },
    illustrator: "saino misaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "This Pokémon needs to be milked every day,\nor else it will fall ill. The flavor of Miltank milk\nchanges with the seasons.",
        "fr": "Ce Pokémon a besoin d'être traite tous les jours,\nsinon il tombera malade. La saveur du lait Milkank\nchange avec les saisons.",
        "es": "Este Pokémon necesita ser ordeñado todos los días.\no caerá enfermo. El sabor de la leche Miltank\ncambia con las estaciones.",
        "it": "Questo Pokémon ha bisogno di essere munto ogni giorno,\naltrimenti si ammalerà. Il sapore del latte Miltank\ncambia con le stagioni.",
        "de": "Dieses Pokémon muss jeden Tag gemolken werden,\nsonst wird es krank. Der Geschmack von Miltank-Milch\nändert sich mit den Jahreszeiten.",
        "pt-br": "Este Pokémon precisa ser ordenhado todos os dias,\nou então ficará doente. O sabor do leite Miltank\nmuda com as estações.",
        "zh-tw": "這個神奇寶貝每天都需要擠奶，\n不然就會生病。 Miltank牛奶的味道\n隨著季節的變化。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Body Slam",
                "fr": "Claquement corporel",
                "es": "Golpe corporal",
                "it": "Colpo di corpo",
                "de": "Bodyslam",
                "pt-br": "Batida Corporal",
                "zh-tw": "身體猛擊"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
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
    retreat: 2
};
export default card;
