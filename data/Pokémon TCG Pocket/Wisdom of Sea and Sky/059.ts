import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Suicune",
        "fr": "Suicune",
        "es": "Suicune",
        "it": "Suicune",
        "de": "Suicune",
        "pt-br": "Suicune",
        "zh-tw": "水君"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    description: {
        en: "It races around the world to purify fouled water.\nIt dashes away with the north wind.",
        "fr": "Il fait le tour du monde pour purifier les eaux usées.\nIl s'enfuit avec le vent du nord.",
        "es": "Corre alrededor del mundo para purificar el agua contaminada.\nSe aleja con el viento del norte.",
        "it": "Corre in giro per il mondo per purificare l'acqua contaminata.\nSi allontana con il vento del nord.",
        "de": "Es rast um die Welt, um verschmutztes Wasser zu reinigen.\nEs rennt mit dem Nordwind davon.",
        "pt-br": "Ele corre ao redor do mundo para purificar a água suja.\nEle foge com o vento norte.",
        "zh-tw": "它在世界各地競相淨化污水。\n隨北風而逝。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Cure Stream",
                "fr": "Flux de guérison",
                "es": "Corriente de curación",
                "it": "Flusso di cura",
                "de": "Cure-Stream",
                "pt-br": "Fluxo de cura",
                "zh-tw": "治愈流"
            },
            damage: 70,
            cost: ["Water", "Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
                "fr": "Lors du prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent -20 dégâts.",
                "es": "Durante el próximo turno de tu rival, los ataques utilizados por el Pokémon Defensor causan −20 de daño.",
                "it": "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -20 danni.",
                "de": "Während des nächsten Zuges deines Gegners verursachen Angriffe des verteidigenden Pokémon −20 Schadenspunkte.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados ​​pelo Pokémon Defensor causam -20 de dano.",
                "zh-tw": "在對手的下一個回合中，防御神奇寶貝使用的攻擊造成−20點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
