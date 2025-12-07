import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Golurk",
        "fr": "Golurk",
        "es": "Golurk",
        "it": "Golurk",
        "de": "Golurk",
        "pt-br": "Golurk",
        "zh-tw": "泥偶巨人",
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    evolveFrom: {
        en: "Golett",
        "fr": "Golett",
        "es": "golet",
        "it": "Golett",
        "de": "Golett",
        "pt-br": "Golett",
        "zh-tw": "泥偶小人",
    },
    description: {
        en: "There's a theory that inside Golurk is a perpetual\nmotion machine that produces limitless energy,\nbut this belief hasn't been proven.",
        "fr": "Il y a une théorie selon laquelle à l'intérieur de Golurk se trouve un\nmachine à mouvement qui produit une énergie illimitée,\nmais cette croyance n'a pas été prouvée.",
        "es": "Existe la teoría de que dentro de Golurk hay un perpetuo\nmáquina de movimiento que produce energía ilimitada,\npero esta creencia no ha sido probada.",
        "it": "C'è una teoria secondo cui all'interno di Golurk è perpetuo\nmacchina di movimento che produce energia illimitata,\nma questa convinzione non è stata dimostrata.",
        "de": "Es gibt eine Theorie, dass sich in Golurk ein ewiges Wesen befindet\nBewegungsmaschine, die grenzenlose Energie produziert,\naber dieser Glaube wurde nicht bewiesen.",
        "pt-br": "Existe uma teoria de que dentro de Golurk existe um perpétuo\nmáquina de movimento que produz energia ilimitada,\nmas essa crença não foi comprovada.",
        "zh-tw": "有一種理論認為，古魯克體內有一個永恆的\n產生無限能量的運動機器，\n但這一信念尚未得到證實。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Heavy Rocket",
                "fr": "Fusée lourde",
                "es": "Cohete pesado",
                "it": "Razzo pesante",
                "de": "Schwere Rakete",
                "pt-br": "Foguete Pesado",
                "zh-tw": "重型火箭"
            },
            damage: 60,
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "Reveal the top 3 cards of your deck. This attack does 60 damage for each Pokémon with a Retreat Cost of 3 or more you find there. Shuffle the revealed cards back into your deck.",
                "fr": "Révélez les 3 premières cartes de votre deck. Cette attaque inflige 60 dégâts pour chaque Pokémon avec un coût de retraite de 3 ou plus que vous y trouvez. Mélangez les cartes révélées dans votre deck.",
                "es": "Revela las 3 primeras cartas de tu mazo. Este ataque hace 60 daños por cada Pokémon con un Coste de Retirada de 3 o más que encuentres allí. Baraja las cartas reveladas de nuevo en tu mazo.",
                "it": "Rivela le prime 3 carte del tuo mazzo. Questo attacco infligge 60 danni per ogni Pokémon con un costo di ritirata pari o superiore a 3 che trovi lì. Rimescola le carte rivelate nel tuo mazzo.",
                "de": "Decke die obersten 3 Karten deines Decks auf. Dieser Angriff verursacht 60 Schadenspunkte für jedes Pokémon mit Rückzugskosten von 3 oder mehr, das du dort findest. Mische die aufgedeckten Karten zurück in deinen Stapel.",
                "pt-br": "Revele as 3 primeiras cartas do seu baralho. Este ataque causa 60 de dano para cada Pokémon com um custo de recuo de 3 ou mais que você encontrar lá. Embaralhe as cartas reveladas de volta no seu baralho.",
                "zh-tw": "展示你牌組頂的 3 張牌。此攻擊對您在那裡發現的每隻撤退成本為 3 或以上的神奇寶貝造成 60 點傷害。將翻開的牌洗回你的牌庫中。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
