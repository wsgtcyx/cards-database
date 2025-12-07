import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Drifloon",
        "fr": "Brise-glace",
        "es": "Driflón",
        "it": "Drifloon",
        "de": "Driftloon",
        "pt-br": "Drifloon",
        "zh-tw": "飛龍"
    },
    illustrator: "Asako Ito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "Because of the way it floats aimlessly, an old\nfolktale calls it a \"signpost for wandering spirits.\"",
        "fr": "À cause de sa façon de flotter sans but, un vieux\nle conte populaire l'appelle un \"panneau pour les esprits errants\".",
        "es": "Por la forma en que flota sin rumbo, un viejo\nEl cuento popular lo llama una \"señal para espíritus errantes\".",
        "it": "Per il modo in cui galleggia senza meta, è vecchio\nil racconto popolare lo definisce un \"segnale per gli spiriti erranti\".",
        "de": "Aufgrund der Art und Weise, wie es ziellos schwebt, ein altes\nDas Volksmärchen nennt es einen „Wegweiser für wandernde Geister“.",
        "pt-br": "Pela forma como flutua sem rumo, um velho\no conto popular chama isso de \"placa de sinalização para espíritos errantes\".",
        "zh-tw": "由於它漫無目的地漂浮的方式，一個古老的\n民間傳說稱其為“遊魂的路標”。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Wind Blast",
                "fr": "Explosion de vent",
                "es": "Explosión de viento",
                "it": "Scoppio di vento",
                "de": "Windstoß",
                "pt-br": "Explosão de Vento",
                "zh-tw": "風之衝擊"
            },
            cost: ["Psychic"],
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
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
