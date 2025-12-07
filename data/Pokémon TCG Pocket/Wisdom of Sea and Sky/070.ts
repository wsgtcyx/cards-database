import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Elekid",
        "fr": "Elekid",
        "es": "Elekid",
        "it": "Elekid",
        "de": "Elekid",
        "pt-br": "Elekid",
        "zh-tw": "埃萊基德"
    },
    illustrator: "Miki Tanaka",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Lightning"],
    description: {
        en: "When a storm approaches, this Pokémon gets\nrestless. Once Elekid hears the sound of thunder,\nit gets full-on rowdy.",
        "fr": "Lorsqu'une tempête approche, ce Pokémon devient\nagité. Une fois qu'Elekid entend le bruit du tonnerre,\nça devient complètement tapageur.",
        "es": "Cuando se acerca una tormenta, este Pokémon obtiene\ninquieto. Una vez que Elekid escucha el sonido del trueno,\nse vuelve muy ruidoso.",
        "it": "Quando si avvicina una tempesta, questo Pokémon ottiene\nirrequieto. Una volta che Elekid sente il suono del tuono,\ndiventa completamente turbolento.",
        "de": "Wenn ein Sturm naht, bekommt dieses Pokémon\nunruhig. Sobald Elekid das Geräusch des Donners hört,\nes wird richtig krawallig.",
        "pt-br": "Quando uma tempestade se aproxima, este Pokémon fica\ninquieto. Assim que Elekid ouve o som do trovão,\nfica totalmente turbulento.",
        "zh-tw": "當暴風雨臨近時，這只神奇寶貝會得到\n焦躁不安。一旦埃萊克德聽到雷聲，\n它變得非常吵鬧。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Zappy Shot",
                "fr": "Tir Zappy",
                "es": "Tiro zappy",
                "it": "Tiro Zappy",
                "de": "Zappy Shot",
                "pt-br": "Tiro Zappy",
                "zh-tw": "活力射擊"
            },
            effect: {
                en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge 20 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手後備隊的 1 只寶可夢造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["lugia"]
};
export default card;
